<template>
  <v-layout full-height>
    <myToolbar />
    <v-main>
        <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import MyToolbar from "./components/MyToolbar.vue";

</script>

<style>
body, #app {
  height: 100vh;
}
</style>