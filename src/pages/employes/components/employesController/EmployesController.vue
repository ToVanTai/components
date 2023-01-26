<template>
  <!-- hiển thị ô input tìm kiếm theo mã và tên nhân viên, và icon để thực hiện hành động tìm kiếm -->
  <div class="employespage__controller">
    <div
      class="input__controller input__iconend"
      id="employespage__controller__search">
      <input
        class="italic input__primary"
        type="text"
        v-model="employeefilter"
        :placeholder="employeePage.controller.inputPlaceholder"
        name="txtEmployeeFilter" />
      <div class="input__icon--end" @click="btnSearchClick"><i class="fas fa-search"></i></div>
      <!-- <div class="input__error_messenger">da co loi</div> -->
    </div>
    <div class="employespage__controller__iconreload" @click="initEmployesTable">
      <i class="fas fa-redo"></i>
    </div>
  </div>
  
</template>

<script>
import { employeePage } from '@/resources';

export default {
  data() {
    return {
      employeePage,
      employeefilter: this.$route.query?.filter || this.$route.query?.employeeFilter || "" 
    };
  },
  props: {
    initEmployesTable: {
      type: [Function, null],
      default: function () {},
    }
  }
  ,
  methods: {
    btnSearchClick(){
      let employeeQuery = {
        pageSize: this.$route.query.pageSize || 5,
        pageNumber: this.$route.query.pageNumber || 1 ,
        employeeFilter: this.$route.query.employeeFilter || "",
        filter: this.$route.query.filter || "",
      }
      employeeQuery.filter = this.employeefilter
      employeeQuery.employeeFilter = this.employeefilter
      employeeQuery.pageNumber = 1
      this.$router.push({query:{
        ...employeeQuery
      }})
      setTimeout(() => {
        this.initEmployesTable()
      }, 100);
    }
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
