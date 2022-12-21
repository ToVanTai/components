<template>
  <TheTitle :btnCreatenewEmployeeClick="showFormInfo"/>
  <div class="employespage">
    <!-- tìm kiếm theo tên, mã, số điện thoại -->
    <EmployesController />
    <EmployesTable />
    <EmployesPagination />
  </div>
  <!-- hiển thị employesForm ở chỗ này -->
  <EmployesForm
    v-if="isShowForm"
    :isShowInfo="isShowInfo"
    :closeForm="closeForm"/>
</template>

<script>
import EmployesForm from './components/employesForm/EmployesForm.vue';
import EmployesController from "./components/employesController/EmployesController.vue";
import EmployesPagination from "./components/employesPagination/EmployesPagination.vue";
import EmployesTable from "./components/employesTable/EmployesTable.vue";
import TheTitle from "../../components/layout/title/TheTitle.vue";
// import {reactive} from "vue";
// import {employesUrl} from "../../config/index"
// import {httpGetAsync} from "../../utils/request"
export default {
  name: "EmployesPage",
  components: {
    EmployesController,
    EmployesPagination,
    EmployesTable,
    TheTitle,
    EmployesForm
  },
  
  data() {
    return {
      isShowForm: false, //đóng, mở form
      isShowInfo: false, //trạng thái thêm mới || thông tin nhân viên
    }
  },
  methods: {
    /**
     * useTo: hiển thị form thêm mới nhân viên
     * updatedAt: tovantai_21/12/2022
     * author: tovantai
     * createdAt: 20/12/2022
     */
    showFormInfo() {
      this.isShowForm = true
      this.isShowInfo = false
    },
    /**
     * useTo: đóng form 
     * updatedAt: tovantai_21/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    closeForm() {
      this.isShowForm = false
      this.isShowInfo = false
    }
  }
};
</script>

<style >
.employespage {
  background-color: var(--color-bg-white);
  padding: var(--padding-18);
  margin: 0px var(--margin-18) var(--margin-18) 0px;
}

/* start css employes table */
.employespage .employespage__table {
  height: calc(100vh - (40px + 92px + 18px + 50px + 18px + 18px + 24px));
  position: relative;
  /* overflow: hidden; */
}
</style>