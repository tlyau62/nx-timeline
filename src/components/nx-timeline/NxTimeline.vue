<template>
  <div class="nx-timeline">
    <div class="nx-timeline-bar"></div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.nx-timeline {
  display: flex;
  align-items: center;
  height: 500px;
  position: relative;
}

.nx-timeline-bar {
  height: 5px;
  width: 100%;
  background: lightgray;
}
</style>
