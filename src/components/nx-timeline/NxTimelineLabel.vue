<template>
  <div class="nx-timeline-label-wrapper" :style="position">
    <div class="nx-timeline-label" :style="direction">
      <div
        class="nx-timeline-label__content"
        v-bind="$attrs"
        v-on="$listeners"
        :style="contentPosition"
      >
        <slot>
          {{ content }}
        </slot>
      </div>
      <div class="nx-timeline-label__line" v-if="!hideLine" />
    </div>
  </div>
</template>

<script>
import NxTimelineProgress from "./NxTimelineProgress";

export default {
  components: {
    NxTimelineProgress,
  },
  props: {
    /**
     * Offset X
     */
    offsetX: {
      type: Number,
      default: 0,
    },

    /**
     * Offset Y
     */
    offsetY: {
      type: Number,
      default: 0,
    },

    /**
     * Plain text content
     */
    content: {
      type: String,
      default: "",
    },

    /**
     * Height of the label
     */
    height: {
      type: Number,
      default: 100,
    },

    /**
     * Width of the label
     */
    width: {
      type: Number,
      default: 100,
    },

    /**
     * Location of the label
     * avaliable: top-left, top-right, bottom-left, bottom-right
     */
    placement: {
      type: String,
      default: "top",
    },

    /**
     * Hide the label indicator line
     */
    hideLine: {
      type: Boolean,
    },
  },
  computed: {
    placementSplit() {
      const placement = this.placement.split("-");

      return {
        x: placement[1],
        y: placement[0],
      };
    },
    position() {
      const position = {};

      position.height = `${this.height}px`;
      position[this.placementSplit.y === "top" ? "bottom" : "top"] = `100%`;

      return {
        ...position,
      };
    },
    contentPosition() {
      const position = {};

      if (this.placementSplit.x) {
        position.position = "absolute";
        position[
          this.placementSplit.x === "left" ? "right" : "left"
        ] = `${this.offsetX}px`;
      } else {
        position.left = `${this.offsetX}px`;
      }

      position.width = `${this.width}px`;
      position[this.placementSplit.y] = `${this.offsetY}px`;

      return {
        ...position,
      };
    },
    direction() {
      return {
        "flex-direction":
          this.placementSplit.y === "bottom" ? "column-reverse" : "column",
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
    background: black;
    width: 1px;
    flex: 1;
  }

  &__content {
    text-align: center;
    position: relative;
  }
}
</style>
