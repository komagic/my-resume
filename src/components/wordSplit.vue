<template>
  <div id="spt"
       v-if="show"
       data-splitting>
    {{value}}
  </div>
</template>

<script>
/* eslint-disable */
import Splitting from 'splitting'
export default {
  props: ['value'],
  data () {
    return {
      show: true
    }
  },
  watch: {
    value (newValue, oldValue) {
      if (newValue !== oldValue) {

        this.show = false;
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  },
  mounted () {
Splitting();
  },

  updated() {
    console.log('updated')
    Splitting();
  },
}
</script>

<style>
#spt {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
.splitting {
  display: flex;
}
.splitting .char {
  display: inline-block;
  color: rgba(255, 255, 255, 0.9);
  font-size: 36px;
  line-height: 60px;
  animation: jumped 4s linear infinite;
  animation-delay: calc(0.8s + (var(--char-index) + 1) * 0.4s);
  animation-timing-function: ease-in-out;
  transform-origin: 50% 100%;
}

@keyframes jumped {
  5% {
    transform: scale(1.2, 0.8);
  }
  12%,
  13% {
    transform: translateY(-0.8em) scale(1, 1.001);
  }
  17% {
    transform: translateY(0) scale(1, 0.999);
  }
  22% {
    transform: translateY(0) scale(1.2, 0.9);
  }
  23% {
    transform: translateY(-1px) scale(1.1, 1);
  }
  25% {
    transform: translateY(0) scale(1, 1);
  }
}
</style>
