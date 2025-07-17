<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

</script>
<template>
  <div>this is indexView page</div>
  <div @click="router.push('/about')">去About</div>
</template>
