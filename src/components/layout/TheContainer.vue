<template>
  <!-- thùng chứa để bao quanh 2 components là sidebar và main -->
  <div class="container">
    <Sidebar/>
    <Main/>
  </div>
</template>


<script>
import Sidebar from "./sidebar/TheSidebar.vue"
import Main from "./TheMain.vue"
export default {
  name: "MainContainer",
  components: {
    Sidebar,
    Main
  }
}
</script>

<style >
  .container {
  display: flex;
  height: 100%;
}
</style>