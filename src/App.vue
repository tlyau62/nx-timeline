<template>
  <div id="app">
    <NxTimeline>
      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        content="test label"
        :progress="0"
        placement="top"
      />

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        content="test label 2"
        :progress="30"
        placement="top"
      />

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        content="test label 2"
        :progress="60"
        placement="bottom"
      />

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="20"
        content="test label 2"
        :progress="100"
        placement="top"
      />
    </NxTimeline>
  </div>
</template>

<script>
import NxTimeline from "./components/NxTimeline";
import NxTimelineLabel from "./components/NxTimelineLabel";

export default {
  components: {
    NxTimeline,
    NxTimelineLabel,
  },
};
</script>

<style lang="scss">
// #progress-bar-wrapper {
//   height: 100px;
//   background: lightgray;
//   position: relative;
//   display: flex;
//   align-items: center;
// }

// #progress-bar {
//   background: black;
//   height: 1px;
//   position: absolute;
//   width: 100%;
// }

// #progress-label {
//   position: relative;
//   height: 100%;
//   width: 1px;
// }

// .progress-label-content {
//   width: 200px;
//   transform: translate(-50%, 0);
//   text-align: center;
// }

// .progress-label-line {
//   height: 50%;
//   width: 1px;
//   background: red;
//   position: absolute;
//   top: 0;
// }

// .top-label {
//   top: 0;
//   position: absolute;
// }

// .top-line {
//   top: 0;
// }

// .bottom-label {
//   bottom: 0;
//   position: absolute;
// }

// .bottom-line {
//   top: 50%;
// }
</style>
