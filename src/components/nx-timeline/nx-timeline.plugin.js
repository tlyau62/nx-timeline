import NxTimeline from "./NxTimeline";
import NxTimelineLabel from "./NxTimelineLabel";
import NxTimelineProgress from "./NxTimelineProgress";

const NxTimelinePlugin = {
  install(Vue) {
    Vue.component("nx-timeline", NxTimeline);
    Vue.component("nx-timeline-label", NxTimelineLabel);
    Vue.component("nx-timeline-progress", NxTimelineProgress);
  },
};

export default NxTimelinePlugin;
