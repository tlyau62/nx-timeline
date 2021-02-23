<template>
  <div id="app">
    <NxTimeline>
      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        content="test label 1"
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
        :offset-x="50"
        :offset-y="50"
        content="test label 2.1"
        :progress="40"
        placement="top"
      />

      <NxTimelineLabel
        :offset-x="-50"
        :offset-y="30"
        content="test label 2.2"
        :progress="50"
        placement="bottom"
      />

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        content="test label 3"
        :progress="60"
        placement="bottom"
      />

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        content="test label 4"
        :progress="100"
        placement="top"
      />
    </NxTimeline>

    <NxTimeline id="my-progress">
      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        :progress="0"
        placement="top"
        :height="30"
        hide-line
      >
        <i class="fas fa-file-download"></i>
      </NxTimelineLabel>

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        :progress="0"
        placement="bottom"
        :height="30"
        hide-line
      >
        <i class="fas fa-file-upload"></i>
      </NxTimelineLabel>

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        :progress="20"
        placement="top"
        :height="30"
        hide-line
      >
        <i class="fas fa-file-download"></i>
      </NxTimelineLabel>

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        :progress="25"
        placement="top"
        :height="30"
        hide-line
      >
        <i class="fas fa-file-download"></i>
      </NxTimelineLabel>

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        :progress="30"
        placement="bottom"
        :height="30"
        hide-line
      >
        <i class="fas fa-file-upload"></i>
      </NxTimelineLabel>

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        :progress="50"
        placement="top"
        :height="75"
        :width="180"
      >
        Today : 2020-10-12
      </NxTimelineLabel>

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        :progress="(45 / 60) * 100"
        placement="bottom-left"
        :height="75"
        :width="180"
      >
        Day 45 : 2020-11-21
      </NxTimelineLabel>

      <NxTimelineLabel
        :offset-x="0"
        :offset-y="0"
        :progress="100"
        placement="bottom-left"
        :height="75"
        :width="180"
      >
        Day 60 : 2020-12-03
      </NxTimelineLabel>
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
#app {
  margin: 5rem;
}
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
