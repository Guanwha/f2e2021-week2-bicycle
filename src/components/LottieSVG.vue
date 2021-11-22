<template>
  <div ref="bodyAnimation"></div>
</template>

<script>
import lottie from 'lottie-web';

export default {
  name: 'LottieSVG',
  props: {
    animationData: Object,
  },
  mounted() {
    lottie.loadAnimation({
      container: this.$refs.bodyAnimation,  // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: this.animationData,
    });
  },
};
</script>

<style>

</style>
