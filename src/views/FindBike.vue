<template>
  <div class="w-full h-full flex-css">
    <!-- header -->
    <div class="flex-rcc bg-main-500 relative">
      <!-- logo -->
      <img src="@/assets/kt/Logo.svg" alt="" class="hidden lg:block absolute-vcenter left-20 h-10 cursor-pointer" @click="goBack()">
      <!-- back button -->
      <div class="block lg:hidden h-16 lg:h-auto">
        <button type="button" class="absolute-vcenter left-4 w-12 h-12 flex-ccc" @click="goBack()">
          <img src="@/assets/kt/back.svg" alt="">
        </button>
      </div>
      <!-- toggle ui -->
      <div class="hidden lg:block">
        <div class="my-6 max-w-max flex-rcc">
          <ToggleRent class="rounded-full before:rounded-full" v-model="isRent"/>
        </div>
      </div>
    </div>
    <!-- map -->
    <div class="h-full">
    </div>
    <!-- footer toggle -->
    <div class="block lg:hidden">
      <div class="w-full flex-rcc">
        <ToggleRent class="w-full" v-model="isRent"/>
      </div>
    </div>
  </div>
</template>

<script>
import ToggleRent from '@/components/ToggleRent.vue';

export default {
  name: 'FindBike',
  components: {
    ToggleRent,
  },
  data() {
    return {
      isRent: true,
    };
  },
  methods: {
    /**
     * router
     */
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss">
</style>
