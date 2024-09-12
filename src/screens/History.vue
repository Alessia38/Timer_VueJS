<template>
  <v-container fluid class="d-flex fill-height bg-deep-purple lighten-1">
    <div class="history">
      <h2>Historique des temps enregistrés</h2>
      <v-list dense>
        <v-list-item v-for="(entry, index) in history" :key="index">
          <v-list-item-content>
            <v-list-item-title>Temps: {{ entry.time }} s</v-list-item-title>
            <v-list-item-subtitle>Hauteur: {{ entry.m }} m / {{ entry.ft }} ft</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const history = ref([]);

onMounted(() => {
  history.value = JSON.parse(localStorage.getItem('history') || '[]');
});
</script>

<style scoped>
.history {
  margin: auto;
  text-align: center;
  color: white;
}
</style>
