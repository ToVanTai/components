<template>
  <div class="main">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./header/TheHeader.vue"
export default {
  name : "MainLayout", 
  components: {
    Header
  }
}
</script>

<style >
  .main {
    flex-grow: 1;
    height: 100vh;
    background-color: var(--color-bg-grey-four);
    overflow-x: hidden;
  }

</style>