import Axios from 'axios';
import { log, logCatch } from '@/utils/message';
import { axiosThen } from '@/utils/net';
import * as types from './types';
import getTDXHeader from '@/utils/tdx';
// const jsonV1 = require('@/utils/data_v1.json');
// const jsonV2 = require('@/utils/data_v2.json');

/** *** Store current user information  */
export default {
  strict: true,        // option 嚴格模式
  namespaced: true,    // option
  state: {
    // bike_stations_v1: jsonV1,
    // bike_stations_v2: jsonV2,
    bike_stations_tmp: {},      // get station info firstly, waiting for availability data
    bike_stations_v1: {},
    bike_stations_v2: {},
  },
  actions: {
    getBikeStations(context, payload) {
      return new Promise((resolve, reject) => {
        const tdxHeader = getTDXHeader();
        const config = {
          method: 'get',
          url: 'https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?$format=JSON&',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: tdxHeader.Authorization,
            'X-Date': tdxHeader['X-Date'],
          },
        };

        if (payload.search) {
          config.url += `$filter=contains(Name,'${payload.search}')&`;
        }
        else if (payload.latlong && payload.latlong[0] && payload.latlong[1] && payload.dist) {
          config.url += `$spatialFilter=nearby(${payload.latlong[0]}, ${payload.latlong[1]}, ${payload.dist})&`;
        }
        else {
          reject();
          return;
        }

        context.dispatch('startLoading', '取得站點列表中...', { root: true });
        Axios(config).then((response) => {
          console.log('/v2/Bike/Station/NearBy', response);
          axiosThen(response, () => {
            // success
            log('取得站點列表成功');
            context.commit(types.bike.SET_BIKE_STATIONS, response.data);
            context.dispatch('getBikeAvailabilities', payload).then(() => {}).catch((msg) => log(msg, true, false, false, true));
            resolve();
          }, () => {
            // failure
            log(`取得站點列表失敗: ${response.data.message}`, true, false, false, true);
            reject();
          }, () => {
            // no response
            log('取得站點列表失敗: 未收到伺服器回應。', true, false, false, true);
            reject();
          });
        }).catch((error) => {
          logCatch('取得站點列表失敗: ', error);
          reject();
        }).finally(() => {
          context.dispatch('endLoading', null, { root: true });
        });
      });
    },
    getBikeAvailabilities(context, payload) {
      return new Promise((resolve, reject) => {
        const tdxHeader = getTDXHeader();
        const config = {
          method: 'get',
          url: 'https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/NearBy?$format=JSON&',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: tdxHeader.Authorization,
            'X-Date': tdxHeader['X-Date'],
          },
        };

        if (payload.search) {
          config.url += `$filter=contains(Name,'${payload.search}')&`;
        }
        else if (payload.latlong && payload.latlong[0] && payload.latlong[1] && payload.dist) {
          config.url += `$spatialFilter=nearby(${payload.latlong[0]}, ${payload.latlong[1]}, ${payload.dist})&`;
        }
        else {
          reject();
          return;
        }

        context.dispatch('startLoading', '取得站點車位資訊中...', { root: true });
        Axios(config).then((response) => {
          console.log('/v2/Bike/Availability/NearBy', response);
          axiosThen(response, () => {
            // success
            log('取得站點車位資訊成功');
            context.commit(types.bike.SET_BIKE_STATIONS_AVAILABILITY, response.data);
            resolve();
          }, () => {
            // failure
            log(`取得站點車位資訊失敗: ${response.data.message}`, true, false, false, true);
            reject();
          }, () => {
            // no response
            log('取得站點車位資訊失敗: 未收到伺服器回應。', true, false, false, true);
            reject();
          });
        }).catch((error) => {
          logCatch('取得站點車位資訊失敗: ', error);
          reject();
        }).finally(() => {
          context.dispatch('endLoading', null, { root: true });
        });
      });
    },
  },
  mutations: {
    [types.bike.SET_BIKE_STATIONS](state, stations) {
      state.bike_stations_tmp = {};
      stations.forEach((station) => {
        state.bike_stations_tmp[station.StationUID] = { ...station };
      });
    },
    [types.bike.SET_BIKE_STATIONS_AVAILABILITY](state, availabilities) {
      state.bike_stations_v1 = {};
      state.bike_stations_v2 = {};
      availabilities.forEach((availability) => {
        if (availability.ServiceType === 1) {
          if (state.bike_stations_v1[availability.StationUID]) {
            // v1 has station info, so just update availability
            state.bike_stations_v1[availability.StationUID].availability = { ...availability };
          }
          else if (state.bike_stations_tmp[availability.StationUID]) {
            // v1 hasn't station info, so get its info from tmp & update availability
            state.bike_stations_v1[availability.StationUID] = { ...state.bike_stations_tmp[availability.StationUID] };
            state.bike_stations_v1[availability.StationUID].availability = { ...availability };
          }
        }
        else if (availability.ServiceType === 2) {
          if (state.bike_stations_v2[availability.StationUID]) {
            // v2 has station info, so just update availability
            state.bike_stations_v2[availability.StationUID].availability = { ...availability };
          }
          else if (state.bike_stations_tmp[availability.StationUID]) {
            // v2 hasn't station info, so get its info from tmp & update availability
            state.bike_stations_v2[availability.StationUID] = { ...state.bike_stations_tmp[availability.StationUID] };
            state.bike_stations_v2[availability.StationUID].availability = { ...availability };
          }
        }
      });
    },
  },
  getters: {
    bikeStationsTmp(state) { return state.bike_stations_tmp; },
    bikeStationsV1(state) { return state.bike_stations_v1; },
    bikeStationsV2(state) { return state.bike_stations_v2; },
  },
};
