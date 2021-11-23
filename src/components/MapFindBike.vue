<template>
  <div class="w-full h-full relative">
    <!-- button go to me -->
    <button type="button" class="z-top absolute bottom-4 right-4 shadow" @click="getUserLocation">
      <img src="@/assets/kt/GPS-2.svg" alt="">
    </button>
    <!-- display: zoom -->
    <div class="z-top absolute top-2.5 left-12 bg-white font-bold px-2 py-1 rounded border-2">{{ zoom }}</div>
    <!-- button: search here -->
    <button type="button" class="z-top absolute-hcenter top-2.5 btn-second px-4 py-2 rounded shadow" @click="searchHere">
      搜尋此處站點
    </button>
    <!-- map -->
    <l-map ref="map" :zoom="zoom" :center="center" @update:zoom="zoomUpdated" @update:center="centerUpdated">
      <!-- map tiles -->
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

      <!-- user location -->
      <l-marker :lat-lng="userLocation" v-if="userLocation">
        <l-icon :icon-anchor="userMarkerIcon.iconAnchor">
          <img src="@/assets/kt/location.svg" alt="" class="bg-main-500 rounded-full">
          <!-- <LottieSVG class="h-16" :animation-data="userMarkerJson"></LottieSVG> -->
        </l-icon>
        <l-popup :options="{offset: [0, -userMarkerIcon.iconSize[1]]}" content="You're here"></l-popup>
      </l-marker>

      <!-- bike station markers -->
      <template v-if="bikeStations">
        <template v-for="station in bikeStations">
          <l-marker :key='station.StationUID'
                    :lat-lng="[station.StationPosition.PositionLat, station.StationPosition.PositionLon]">
            <l-icon :icon-anchor="stationMarkerIcon.iconAnchor">
              <div class="absolute top-0 left-0 font-bold flex-ccc" :class="[(showRent)? 'text-second-900' : 'text-main-500' ]" :style="styleStationMarkerText">{{ displayAvailableNum(station) }}</div>
              <img v-if="showRent" src="@/assets/kt/icon_gps_rent.svg" alt="">
              <img v-if="!showRent" src="@/assets/kt/icon_gps_return.svg" alt="">
              <!-- <LottieSVG class="h-16" :animation-data="userMarkerJson"></LottieSVG> -->
            </l-icon>
            <l-popup :options="{offset: [0, -stationMarkerIcon.iconSize[1]]}" :content="popupContent(station)"></l-popup>
          </l-marker>
        </template>
      </template>
    </l-map>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import LottieSVG from '@/components/LottieSVG.vue';
import userMarkerJson from '@/assets/kt/youbike.json';
import { log } from '@/utils/message';

const zoomDistMapping = {
  1: 1000,
  2: 1000,
  3: 1000,
  4: 1000,
  5: 1000,
  6: 1000,
  7: 1000,
  8: 1000,
  9: 1000,
  10: 1000,
  11: 1000,
  12: 1000,
  13: 1000,
  14: 1000,
  15: 1000,
  16: 1000,
  // 12: 12800,
  // 13: 12800,
  // 14: 6400,
  // 15: 3200,
  // 16: 1600,
  17: 800,
  18: 400,
  19: 200,
  20: 100,
};

export default {
  name: 'MapFindBike',
  components: {
    // LottieSVG,
  },
  props: {
    lat: {
      type: Number,
      default: 25.0413064,
    },
    long: {
      typs: Number,
      default: 121.5143706,
    },
    showRent: Boolean,
  },
  data() {
    return {
      // map
      map: null,
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 15,
      center: [this.lat, this.long],          // map center

      // user gps
      userLocation: null,                     // user location
      userMarker: null,                       // user location marker
      userMarkerJson,
      userMarkerIcon: {
        iconUrl: '@/assets/kt/location.svg',
        iconSize: [24, 24],
        iconAnchor: [12, 24],
      },

      // other markers
      source: 1,
      stationMarkerIcon: {
        iconUrl: '@/assets/kt/icon_gps_rent.svg',
        iconSize: [36, 50],
        iconAnchor: [18, 50],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.map = this.$refs.map.mapObject;
      this.getUserLocation();
    });
  },
  methods: {
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          // success
          // update user location
          this.userLocation = [position.coords.latitude, position.coords.longitude];

          // update map center
          this.map.flyTo(this.userLocation);

          // search neighbor bike stations
          this.getBikeStations({
            latlong: this.userLocation,
            dist: zoomDistMapping[this.zoom],
          }).then(() => {}).catch(() => {});
        }, () => {
          // error
          console.log('gps get failed');
        }, {
          // options
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 30000,
        });
      }
      else {
        alert('Geolocation is not supported by this browser.');
      }
    },
    searchHere() {
      // search neighbor bike stations
      this.getBikeStations({
        latlong: this.center,
        dist: zoomDistMapping[this.zoom],
      }).then(() => {}).catch((msg) => { log(msg, true, false, false, true); });
    },
    zoomUpdated(zoom) {
      this.zoom = zoom;
    },
    centerUpdated(center) {
      this.center = [center.lat, center.lng];
    },

    /**
     * ui display
     */
    displayAvailableNum(station) {
      if (station && station.availability) {
        return (this.showRent) ? station.availability.AvailableRentBikes : station.availability.AvailableReturnBikes;
      }
      return 'n/a';
    },
    popupContent(station) {
      if (station) {
        if (station.availability) {
          return `
            <div class="font-bold">${station.StationName.Zh_tw}</div>
            <div>${station.StationAddress.Zh_tw}</div>
            <hr class="my-2"/>
            <div>可藉車輛 <span class="font-bold italic">${station.availability.AvailableRentBikes}</span></div>
            <div>可停空位 <span class="font-bold italic">${station.availability.AvailableReturnBikes}</span></div>
          `;
        }
        return `
          <div class="font-bold">${station.StationName.Zh_tw}</div>
          <div>${station.StationAddress.Zh_tw}</div>
        `;
      }
      return '站點資訊不足';
    },

    ...mapActions('bike', ['getBikeStations']),
  },
  computed: {
    /**
     * class & style
     */
    styleStationMarkerText() { return `width: ${this.stationMarkerIcon.iconSize[0]}px; height: ${this.stationMarkerIcon.iconSize[0]}px`; },
    bikeStations() {
      return (this.source === 1) ? this.bikeStationsV1 : this.bikeStationsV2;
    },

    ...mapGetters('bike', ['bikeStationsTmp', 'bikeStationsV1', 'bikeStationsV2']),
  },
};
</script>

<style lang="scss">
</style>
