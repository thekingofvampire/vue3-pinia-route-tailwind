<script setup lang="ts">
import { useRouter } from 'vue-router';
import TheWelcome from '../components/TheWelcome.vue';

const router = useRouter();
const routeGo = (index: number) => {
  router.push(!index ? 'about' : '/index');
};
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
     <div @click="routeGo(0)">去About</div>
     <div @click="routeGo(1)">去Index</div>
  </main>
</template>
