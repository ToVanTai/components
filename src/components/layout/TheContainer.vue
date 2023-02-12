<template>
  <!-- thùng chứa để bao quanh 2 components là sidebar và main -->
  <div :class="{
    'container': true,
    'pending': isPending
  }">
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
  },
  props: {
    isPending: false
  }
}
</script>

<style >
  .container {
  display: flex;
  height: 100%;
}
.container.pending{
  position: relative;
  overflow: hidden;
}
.container.pending::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: url("../../assets/loading.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50px 50px;
  animation: pendingRotate 2s linear 0s infinite reverse;
  cursor: not-allowed;
}
.container.pending::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
  cursor: not-allowed;
}
@keyframes pendingRotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

</style>