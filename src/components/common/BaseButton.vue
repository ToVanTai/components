<template>
  <button
    :class="{
      btn: true,
      disable: isDisable,
      'btn-primary': isPrimary,
      'btn-danger': isDanger,
    }"
    @click.prevent="btnClick"
    @dblclick.prevent="btnDbclick"
    ref="btnRef"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    isFocus: {
      type: Boolean,
      default: false,
    },
    isDanger: {
      type: Boolean,
      default: false,
    },
    isPrimary: {
      type: Boolean,
      default: false,
    },
    isDisable: {
      type: Boolean,
      default: false,
    },
    btnClick: {
      type: [Function, null],
      default: function () {},
    },
    btnDbclick: {
      type: [Function, null],
      default: function () {},
    },
  },
  mounted(){
    if(this.isFocus){
      this.$refs.btnRef.focus();
    }
  },
  updated(){
    if(this.isFocus){
      this.$refs.btnRef.focus();
    }
  }
};
</script>

<style>
/**Start css cho nút phụ */
.btn {
  outline: none;
  border: 1px solid var(--color-border-btn);
  position: relative;
  border-radius: var(--border-radius);
  height: var(--button-height-small);
  min-width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0px var(--padding-16);
  font-size: var(--size-text-sm);
  font-family: notosans semibold;
  background-color: var(--color-bg-white);
  color: var(--color-text-black);
  text-decoration: none;
}
.btn:hover {
  background-color: var(--color-text-white-second);
}
.btn:active,
.btn:focus {
  background-color: var(--color-bg-grey-four);
}
/**End css Dành cho nút phụ */

/**Start css trạng thái disable */
.btn.disable {
  cursor: not-allowed !important;
  opacity: 0.56 !important;
}
/**End css trạng thái disable */

/* Start css cho nút chính */
.btn.btn-primary {
  border-color: var(--color-bg-green);
  background: var(--color-bg-green);
  color: var(--color-text-white);
}
.btn.btn-primary:hover {
  background-color: var(--color-bg-green-hover);
  border-color: var(--color-bg-green-hover);
}
.btn.btn-primary:active,
.btn.btn-primary:focus {
  background-color: var(--color-bg-green-press);
}
/* End css cho nút chính */

/* Start css cho nút nguy hiểm */
.btn.btn-danger {
  border-color: var(--color-border-red);
  background: var(--color-border-red);
  color: var(--color-text-white);
}
.btn.btn-danger:hover {
  background-color: var(--color-border-red-hover);
  border-color: var(--color-border-red-hover);
}
.btn.btn-danger:active,
.btn.btn-danger:focus {
  background-color: var(--color-border-red-active);
  border-color: var(--color-border-red-active);
}
/* End css cho nút nguy hiểm */
</style>