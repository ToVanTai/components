<template>
  <div
    :class="{
      popup: true,
      show: isShow,
      pending: isPending,
    }"
    @click.self="overlayClick"
  >
    <slot></slot> 
  </div>
</template>

<script>
export default {
  name: "MyPopup",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    isPending: {
      type: Boolean,
      default: false
    },
    overlayClick: {
      type: [Function, null],
      default: function () {},
    }
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  inset: 0;
  z-index: 999;
  background-color: rgb(0, 0, 0, 40%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--padding-28) 0px;
  cursor: pointer;
  transform: translateY(-100%);
}
.popup.show {
  transition: transform var(--time-transition) ease;
  transform: translateY(0);
}
.popup.pending::before {
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
}
.popup.pending::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
  z-index: 1;
  cursor: default;
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