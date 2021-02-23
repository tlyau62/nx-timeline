<template>
  <div id="app">
    <NxTimeline>
      <NxTimelineProgress :progress="0">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          content="test label 1"
          placement="top"
        />
      </NxTimelineProgress>

      <NxTimelineProgress :progress="20">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          content="test label 2"
          placement="top"
        />
      </NxTimelineProgress>

      <NxTimelineProgress :progress="25">
        <NxTimelineLabel
          :offset-x="50"
          :offset-y="50"
          content="test label 2.1"
          placement="top"
        />
      </NxTimelineProgress>

      <NxTimelineProgress :progress="50">
        <NxTimelineLabel
          :offset-x="-50"
          :offset-y="30"
          content="test label 2.2"
          placement="bottom"
        />
      </NxTimelineProgress>

      <NxTimelineProgress :progress="60">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          content="test label 3"
          placement="bottom"
        />
      </NxTimelineProgress>

      <NxTimelineProgress :progress="100">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          content="test label 4"
          placement="top"
        />
      </NxTimelineProgress>
    </NxTimeline>

    <NxTimeline id="my-progress">
      <NxTimelineProgress :progress="0">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          placement="top"
          :height="30"
          hide-line
        >
          <i class="fas fa-file-download"></i>
        </NxTimelineLabel>
      </NxTimelineProgress>

      <NxTimelineProgress :progress="0">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          placement="bottom"
          :height="30"
          hide-line
        >
          <i class="fas fa-file-upload"></i>
        </NxTimelineLabel>
      </NxTimelineProgress>

      <NxTimelineProgress :progress="20">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          placement="top"
          :height="30"
          hide-line
        >
          <i class="fas fa-file-download"></i>
        </NxTimelineLabel>
      </NxTimelineProgress>

      <NxTimelineProgress :progress="25">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          placement="top"
          :height="30"
          hide-line
        >
          <i class="fas fa-file-download"></i>
        </NxTimelineLabel>
      </NxTimelineProgress>

      <NxTimelineProgress :progress="30">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          placement="bottom"
          :height="30"
          hide-line
        >
          <i class="fas fa-file-upload"></i>
        </NxTimelineLabel>
      </NxTimelineProgress>

      <NxTimelineProgress :progress="50">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          placement="top"
          :height="75"
          :width="180"
        >
          Today : 2020-10-12
        </NxTimelineLabel>
      </NxTimelineProgress>

      <NxTimelineProgress :progress="(45 / 60) * 100">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          placement="bottom-left"
          :height="75"
          :width="180"
        >
          Day 45 : 2020-11-21
        </NxTimelineLabel>
      </NxTimelineProgress>

      <NxTimelineProgress :progress="100">
        <NxTimelineLabel
          :offset-x="0"
          :offset-y="0"
          placement="bottom-left"
          :height="75"
          :width="180"
        >
          Day 60 : 2020-12-03
        </NxTimelineLabel>
      </NxTimelineProgress>
    </NxTimeline>
  </div>
</template>

<script>
import NxTimeline from "./components/NxTimeline";
import NxTimelineLabel from "./components/NxTimelineLabel";
import NxTimelineProgress from "./components/NxTimelineProgress";

export default {
  components: {
    NxTimeline,
    NxTimelineLabel,
    NxTimelineProgress,
  },
};
</script>

<style lang="scss">
#app {
  margin: 5rem;
}
</style>
