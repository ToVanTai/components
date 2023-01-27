<template>
  <TheTitle :btnCreatenewEmployeeClick="showFormCreatenewEmployee" />
  <div class="employespage">
    <!-- tìm kiếm theo tên, mã, số điện thoại -->
    <EmployesController :initEmployesTable="initEmployesTable" />
    <EmployesTable
      :employeeList="employes?.Data"
      :isPending="isPendingEmployes"
      :showEmployeeFormInfor="showEmployeeFormInfor"
      :resetTable="initEmployesTable"
      :showFormDuplicateEmployee="showFormDuplicateEmployee"
      :employeeListChecked="employeeListChecked"
    />
    <EmployesPagination
      :employes="employes"
      :initEmployesTable="initEmployesTable"
    />
  </div>
  <!-- hiển thị employesForm ở chỗ này -->
  <EmployesForm
    v-if="isShowForm"
    :isShowInfo="isShowInfo"
    :closeForm="closeForm"
    :employeeShow="employeeShow"
    :resetTable="initEmployesTable"
    :isShowForm="isShowForm"
  />
  <!-- hiển thị thông báo ở chỗ này -->
  <BaseNotify
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
import BaseNotify from "../../components/common/BaseNotify.vue";
import { employesUrl } from "../../config/index";
export default {
  name: "EmployesPage",
  components: {
    EmployesController,
    EmployesPagination,
    EmployesTable,
    TheTitle,
    EmployesForm,
    BaseNotify,
  },
  data() {
    return {
      isShowForm: false, //trạng thái đóng, mở form, duplicate
      isShowInfo: false, //trạng thái thêm mới || thông tin nhân viên
      employeeShow: null, //mã id nhân viên đang show
      employes: {}, //danh sách nhân viên
      isPendingEmployes: false, //trạng thái pending khi lấy danh sách nhân viên
      //hiển thị notify lỗi
      messages: [], //nếu có thì sẽ hiện notify
      //danh sách các employee muấn xóa
      employeeListChecked: [],
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
     * useTo: hiển thị form nhân bản nhân viên
     * updatedAt:
     * author: tovantai
     * createdAt: 25/01/2022
     */
    showFormDuplicateEmployee(id) {
      try {
        this.isShowForm = id;
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
        this.employeeShow = employee.EmployeeId;
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
     * useTo: lấy danh sách nhân viên theo filter
     * updateBy: tovantai_26/01/2022
     * author: tovantai
     * createdAt: 22/12/2022
     */
    async getEmployeeList() {
      let employeeQuery = {
        pageSize: this.$route.query.pageSize || 5,
        pageNumber: this.$route.query.pageNumber || 1,
        employeeFilter: this.$route.query.employeeFilter || "",
        filter: this.$route.query.filter || "",
      };
      let queryString = "";
      for (var item in employeeQuery) {
        if (queryString == "") {
          queryString = `${item}=${employeeQuery[item]}`;
        } else {
          queryString += `&${item}=${employeeQuery[item]}`;
        }
      }
      await new Promise((resolve, reject) => {
        fetch(`${employesUrl}/filter?${queryString}`).then((res) => {
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
     * useTo: lấy danh sách nhân viên theo filter
     * updateBy: tovantai_21/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    async initEmployesTable() {
      try {
        this.isPendingEmployes = true;
        this.employes = {};
        await this.getEmployeeList();
        this.isPendingEmployes = false;
      } catch (err) {
        this.messages = [err];
      }
    },
  },
  watch: {
    employes() {
      this.employeeListChecked = [];
    },
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