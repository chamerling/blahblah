<template>
  <v-container fluid>
    <v-layout row wrap justify-center align-center>
      <v-flex xs12 sm12 md6>
        <SoundCard v-for="track in tracks" :track="track" :key="track.audioUrl"/>
      </v-flex>
      <Recorder/>
    </v-layout>
  </v-container>
</template>

<script>
import Recorder from "@/components/Recorder.vue";
import SoundCard from "@/components/SoundCard.vue";

export default {
  name: "home",
  computed: {
    tracks: function() {
      return this.$store.state.tracks;
    }
  },
  components: {
    Recorder,
    SoundCard
  }
};
</script>

<style>
.home {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
