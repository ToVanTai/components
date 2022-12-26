<template>
  <TheTitle :btnCreatenewEmployeeClick="showFormCreatenewEmployee" />
  <div class="employespage">
    <!-- tìm kiếm theo tên, mã, số điện thoại -->
    <EmployesController :btnReloadClick="initEmployesTable" />
    <EmployesTable
      :employeeList="employes?.Data"
      :isPending="isPendingEmployes"
      :showEmployeeFormInfor="showEmployeeFormInfor"
      :resetTable="initEmployesTable"
    />
    <EmployesPagination />
  </div>
  <!-- hiển thị employesForm ở chỗ này -->
  <EmployesForm
    v-if="isShowForm"
    :isShowInfo="isShowInfo"
    :closeForm="closeForm"
    :employeeShow="employeeShow"
    :resetTable="initEmployesTable"
  />
  <!-- hiển thị thông báo ở chỗ này -->
  <Notify
    v-if="messages.length != 0"
    :isShow="messages.length != 0"
    :messages="messages"
    :overlayClick="closeNotify"
    :btnOKClick="closeNotify"
    :btnCloseClick="closeNotify"
    :isPending="false"
  />
</template>

<script>
import EmployesForm from "./components/employesForm/EmployesForm.vue";
import EmployesController from "./components/employesController/EmployesController.vue";
import EmployesPagination from "./components/employesPagination/EmployesPagination.vue";
import EmployesTable from "./components/employesTable/EmployesTable.vue";
import TheTitle from "../../components/layout/title/TheTitle.vue";
import Notify from "../../components/common/Notify.vue";
import { employesUrl } from "../../config/index";
export default {
  name: "EmployesPage",
  components: {
    EmployesController,
    EmployesPagination,
    EmployesTable,
    TheTitle,
    EmployesForm,
    Notify,
  },
  data() {
    return {
      isShowForm: false, //đóng, mở form
      isShowInfo: false, //trạng thái thêm mới || thông tin nhân viên
      employeeShow: null, //nhân viên đang show
      employes: {},
      isPendingEmployes: false,
      //hiển thị notify lỗi
      messages: [], //nếu có thì sẽ hiện notify
    };
  },
  mounted() {
    try {
      this.initEmployesTable();
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    /**
     * useTo: hiển thị form thêm mới nhân viên
     * updatedAt: tovantai_21/12/2022
     * author: tovantai
     * createdAt: 20/12/2022
     */
    showFormCreatenewEmployee() {
      try {
        this.isShowForm = true;
        this.isShowInfo = false;
        this.employeeShow = null;
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo: hiển thị form chi tiết nhân viên
     * updatedAt: tovantai_22/12/2022
     * author: tovantai
     * createdAt: 22/12/2022
     */
    showEmployeeFormInfor(employee) {
      try {
        this.isShowForm = true;
        this.isShowInfo = true;
        this.employeeShow = employee;
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo: đóng form
     * updatedAt: tovantai_21/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    closeForm() {
      try {
        this.isShowForm = false;
        this.isShowInfo = false;
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo: lấy danh sách nhân viên
     * updateBy: tovantai_22/12/2022
     * author: tovantai
     * createdAt: 22/12/2022
     */
    async getEmployeeList() {
      await new Promise((resolve, reject) => {
        fetch(`${employesUrl}/filter?pageSize=20&pageNumber=1`).then((res) => {
          if (res.status == 200) {
            resolve(res.json());
          } else {
            reject("Không lấy được danh sách employee");
          }
        });
      })
        .then((res) => (this.employes = res))
        .catch((err) => {
          this.messages = [err];
        });
    },
    /**
     * useTo: đóng thông báo
     * updateBy: tovantai_12/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    closeNotify() {
      try {
        this.messages = []; //đóng form
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo: lấy danh sách nhân viên
     * updateBy: tovantai_21/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    async initEmployesTable() {
      try {
        this.isPendingEmployes = true;
        await this.getEmployeeList();
        this.isPendingEmployes = false;
      } catch (err) {
        this.messages = [err];
      }
    },
  },
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