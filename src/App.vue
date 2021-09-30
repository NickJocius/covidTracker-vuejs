<template>
  <main class="container-xl min-h-screen">
    <TopNav />
    <div class="min-h-full">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </main>
</template>

<script>
import TopNav from "./components/navigation/TopNav.vue";
export default {
  name: "App",
  components: { TopNav },
};
</script>

<style>
</style>
