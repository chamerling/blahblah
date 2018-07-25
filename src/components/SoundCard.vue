<template>
  <v-fade-transition>
    <v-card class="ma-3">
      <audio controls="controls" :src="track.audioUrl">
        Votre navigateur ne supporte pas l'élément <code>audio</code>.
      </audio>
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
  }
};
</script>
