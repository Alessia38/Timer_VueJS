<template>
    
    <v-app-bar dark color="deep-purple" clipped-left app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title @click="goHome" class="white--text pointer">Chronomètre</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
        <myContentDrawer />
        </v-navigation-drawer>
</template>

<script lang="ts" setup>
import myContentDrawer from "./Drawer.vue" // <== Ajouter l’import
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const drawer = ref(false)
const $router = useRouter()

function goHome() {
    $router.replace('/')
}
</script>

<style scoped>
.pointer {
    cursor: pointer;
}
</style>