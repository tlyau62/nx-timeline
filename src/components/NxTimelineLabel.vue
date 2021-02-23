<template>
  <NxTimelineProgress :progress="progress">
    <div class="nx-timeline-label-wrapper" :style="position">
      <div class="nx-timeline-label" :style="direction">
        <div class="nx-timeline-label__content" :style="contentPosition">
          {{ content }}
        </div>
        <div class="nx-timeline-label__line" />
      </div>
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
    height: {
      type: Number,
      default: 100,
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

      position.height = `${this.height}px`;
      position[this.placement === "top" ? "bottom" : "top"] = `100%`;

      return {
        ...position,
      };
    },
    contentPosition() {
      const position = {};

      position.left = `${this.offsetX}px`;
      position[this.placement] = `${this.offsetY}px`;

      return {
        ...position,
      };
    },
    direction() {
      return {
        "flex-direction":
          this.placement === "bottom" ? "column-reverse" : "column",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.nx-timeline-label-wrapper {
  width: 100%;
  position: absolute;
}

.nx-timeline-label {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;

  &__line {
    background: blue;
    width: 5px;
    flex: 1;
  }

  &__content {
    text-align: center;
    width: 200px;
    position: relative;
  }
}
</style>
