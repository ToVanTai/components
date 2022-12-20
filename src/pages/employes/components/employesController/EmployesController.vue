<template>
  <!-- hiển thị ô input tìm kiếm theo mã và tên nhân viên, và icon để thực hiện hành động tìm kiếm -->
  <div class="employespage__controller">
    <div
      class="input__controller input__iconend"
      id="employespage__controller__search">
      <input
        class="italic input__primary"
        type="text"
        placeholder="Tìm theo mã, tên nhân viên"
        name="txtEmployeeFilter" />
      <div class="input__icon--end"><i class="fas fa-search"></i></div>
      <!-- <div class="input__error_messenger">da co loi</div> -->
    </div>
    <div class="employespage__controller__iconreload">
      <i class="fas fa-redo"></i>
    </div>
  </div>
  
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  components: {
    
  }
};
</script>

<style>
.employespage__controller {
  padding-bottom: var(--padding-18);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.employespage__controller__iconreload {
  height: var(--input-height);
  width: var(--input-height);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: var(--margin-8);
  cursor: pointer;
  border: 1px solid transparent;
}
.employespage__controller__iconreload:hover {
  border-color: var(--color-text-blue);
}
.employespage__controller__iconreload i {
  color: var(--color-text-grey-second);
  font-size: var(--size-text-lg);
}
</style>
