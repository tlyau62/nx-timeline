<template>
  <NxTimelineProgress :progress="progress">
    <div class="nx-timeline-label" :style="position">
      {{ content }}
    </div>
  </NxTimelineProgress>
</template>

<script>
import NxTimelineProgress from "./NxTimelineProgress";

export default {
  components: {
    NxTimelineProgress,
  },
  props: {
    offsetX: {
      type: Number,
      default: 0,
    },
    offsetY: {
      type: Number,
      default: 0,
    },
    content: {
      type: String,
      default: "",
    },
    progress: {
      type: Number,
      default: 0,
    },
    placement: {
      type: String,
      default: "top",
    },
  },
  computed: {
    position() {
      const position = {};

      position.left = `${this.offsetX}px`;
      position[this.placement] = `${this.offsetY}px`;

      return {
        ...position,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.nx-timeline-label {
  width: 100px;
  transform: translate(-50%, 0);
  position: absolute;
}
</style>
