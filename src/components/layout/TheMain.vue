<template>
  <!-- thùng chứa để bao quanh header và phần hiển thị router -->
  <div class="main">
    <Header/>
    <!-- các page sẽ hiển thị tại đây. xem trong file route/index.js để hiểu -->
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