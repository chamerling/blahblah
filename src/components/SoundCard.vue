<template>
  <v-fade-transition>
    <v-card class="ma-3">
      <vuetify-audio :file="track.audioUrl" control-color="blue"></vuetify-audio>
      <v-card-actions>
        <v-btn flat>Share</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="remove">
          <v-icon>clear</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-fade-transition>
</template>

<script>
import VuetifyAudio from 'vuetify-audio';
export default {

  name: "SoundCard",
  props: ["track"],
  methods: {
    play: function() {
      this.track.play();
    },
    remove: function() {
      this.$store.dispatch("removeTrack", this.track);
    }
  },
  components: {
    'vuetify-audio': VuetifyAudio
  }
};
</script>
