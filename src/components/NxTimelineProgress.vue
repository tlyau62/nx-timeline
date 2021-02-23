<template>
  <div class="nx-timeline-progress" :style="position">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    position() {
      return {
        left: this.progress + "%",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.nx-timeline-progress {
  position: absolute;
  width: 5px;
  height: 5px;
  background: black;
}
</style>
