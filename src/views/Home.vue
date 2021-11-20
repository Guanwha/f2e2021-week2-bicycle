<template>
  <div class="w-full h-full flex-ccc bg-main-500">
    <div class="lex-csbc">
      <div class="flex-ctl">
        <img src="@/assets/kt/logo_bike.svg" alt="">
        <img src="@/assets/kt/Logo.svg" alt="" class="w-60">
        <div class="text-sm font-bold letter-space-title">微笑單車．暢遊城市</div>
      </div>
      <div class="mt-28 w-full flex-cbc gap-2">
        <button type="button" class="w-full btn-main border-main p-2" @click="gotoFindBike">尋找 Youbike</button>
        <button type="button" class="w-full btn-main border-main p-2">查詢自行車道</button>
        <button type="button" class="w-full btn-main border-main p-2">附近景點、美食</button>
      </div>
    </div>
    <div class="absolute bottom-5 left-5 sm:left-auto sm:right-10 max-w-max text-sm text-second-900">
      <div class="flex-ccl sm:flex-rcc">
        <span>Where’s YouBike © </span>
        <span>Code: Crane  /  Design: KT</span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    gotoFindBike() {
      this.$router.push({ name: 'findBike' });
    },
  },
};
</script>
