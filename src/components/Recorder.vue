<template>
  <div class="recorder">
    <v-btn
      fab
      dark
      fixed
      bottom
      right
      color="pink"
      @click="capture"
      :disabled="isRecording"
    >
      <v-icon dark>mic</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { record } from "@/services/audio";
import { sleep } from "@/services/utils";

export default {
  name: "Recorder",
  data() {
    return {
      isRecording: false
    };
  },
  destroyed() {
    // TODO: clean the streams
    //const tracks = this.mediaStream.getTracks()
    //tracks.map(track => track.stop())
  },
  methods: {
    capture: function() {
      (async () => {
        const recorder = await record();
        recorder.start();
        this.isRecording = true;
        await sleep(3000);
        const audioTrack = await recorder.stop();
        this.isRecording = false;

        this.$store.dispatch("addTrack", audioTrack);
      })();
    }
  }
};
</script>

<style lang="scss" scoped>
.recorder {
  // don't know why it sucks without it
  .v-icon {
    height: auto;
  }
}
</style>
