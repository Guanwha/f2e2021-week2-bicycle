<template>
  <div class="w-full h-full relative">
    <button type="button" class="z-top absolute bottom-4 right-4 shadow" @click="getUserLocation">
      <img src="@/assets/kt/GPS-2.svg" alt="">
    </button>
    <l-map ref="map" :zoom="zoom" :center="center" @update:center="centerUpdated">
      <!-- map tiles -->
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>

      <!-- user location -->
      <l-marker :lat-lng="userLocation" v-if="userLocation">
        <l-icon :icon-anchor="userMarkerIcon.iconAnchor">
          <img src="@/assets/kt/location.svg" alt="" class="bg-main-500 rounded-full">
          <!-- <LottieSVG class="h-16" :animation-data="userMarkerJson"></LottieSVG> -->
        </l-icon>
        <l-popup :options="{offset: [0, -userMarkerIcon.iconSize[1]]}" content="You\'re here"></l-popup>
      </l-marker>

      <!-- bike station markers -->
    </l-map>
  </div>
</template>

<script>
import LottieSVG from '@/components/LottieSVG.vue';
import userMarkerJson from '@/assets/kt/youbike.json';

export default {
  name: 'MapFindBike',
  components: {
    LottieSVG,
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
      test: true,
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
          // this.getBikeStations().then(()=>{}).catch(()=>{});
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
    // updateMapCenter(latlong) {
    //   if (latlong && latlong[0] && latlong[1]) {
    //     this.center = latlong;
    //   }
    // },
    centerUpdated(center) {
      console.log('centerUpdated');
      this.center = center;
    },
  },
  computed: {
    classMarker() { return ''; },
  },
};
</script>

<style lang="scss">
</style>
