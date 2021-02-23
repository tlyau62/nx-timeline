<template>
  <div class="nx-timeline-progress" :style="position">
    <div class="position-relative">
      <slot></slot>
    </div>
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
  width: 1px;
  height: 100%;
  background: black;
}
</style>
