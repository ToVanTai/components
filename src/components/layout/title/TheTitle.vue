<template>
  <div class="title">
    <div class="title__text">Nhân viên</div>
    <button class="btn btn-primary" id="btn__createnew__employee" @click="btnCreatenewEmployeeClick">
      thêm mới nhân viên
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnCreatenewEmployeeClick: {
      type: [Function, null],
      default: null
    }
  }
}
</script>

<style >
.title {
  padding: var(--padding-24);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title__text {
  font-family: notosans bold;
  color: var(--color-text-black);
  font-size: var(--size-text-lg);
}
</style>