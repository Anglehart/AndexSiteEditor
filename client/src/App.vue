<template>
  <MainPage msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from '@/view/MainPage/MainPage.vue';

export default defineComponent({
  name: 'App',
  components: {
    MainPage,
  }
});
</script>
