<template>
  <div :class="{
    employespage__table: true,
    pending: isPending
  }">
    <table class="table">
      <thead>
        <tr>
          <th class="checkbox"><input type="checkbox" /></th>
          <th>{{ employeePage.employee.EmployeeCode }}</th>
          <th>{{ employeePage.employee.EmployeeName }}</th>
          <th>{{ employeePage.employee.Gender }}</th>
          <th class="date">{{ employeePage.employee.DateOfBirth }}</th>
          <th>
            <div class="tooltip tooltip__bottom">
              {{ employeePage.employee.IdentityNumber.Title }}
              <div class="tooltip__messenger">{{ employeePage.employee.IdentityNumber.Subtitle }}</div>
            </div>
          </th>
          <th>{{ employeePage.employee.PositionName }}</th>
          <th>{{ employeePage.employee.DepartmentName }}</th>
          <th>{{ employeePage.employee.BankAccountNumber }}</th>
          <th>{{ employeePage.employee.BankName }}</th>
          <th>
            <div class="tooltip tooltip__bottom">
              {{ employeePage.employee.BankBranchName.Title }}
              <div class="tooltip__messenger">
                {{ employeePage.employee.BankBranchName.Subtitle }}
              </div>
            </div>
          </th>
          <th class="more">{{ employeePage.employee.Functions }}</th>
        </tr>
      </thead>
      <tbody id="employestable">
        <!-- danh sách employes sẽ hiển thị tại đây -->
        <EmployesTableItem v-for="employee in employeeList" :key="employee" :employee="employee" :showEmployeeFormInfor="showEmployeeFormInfor" :showFormDuplicateEmployee="showFormDuplicateEmployee" :resetTable="resetTable"></EmployesTableItem>
      </tbody>
    </table>
  </div>
  
</template>

<script>
import { employeePage } from "@/resources";
import EmployesTableItem from "./EmployesTableItem.vue"
export default {
  components: {EmployesTableItem},
  data(){return {
    employeePage
  }},
  props:{
    employeeList: {
      type: Array,
      default: function(){}
    },
    isPending: {
      type: Boolean,
      default: false
    },
    showEmployeeFormInfor:{
      type: [Function, null],
      default: function(){}
    },
    resetTable:{
      type: [Function, null],
      default: null
    },
    showFormDuplicateEmployee:{
      type: [Function, null],
      default: function(){}
    }
  },
  mounted(){
    
  },
  methods: {
    
  }
};
</script>

<style scoped>
.employespage__table {
  height: calc(100vh - (40px + 92px + 18px + 50px + 18px + 18px + 24px));
  position: relative;
  /* overflow: hidden; */
}

.employespage__table.pending::before {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: url("../../../../assets/loading.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50px 50px;
  animation: pendingRotate 2s linear 0s infinite reverse;
}
.employespage__table.pending::after {
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

.employespage__table table {
  display: block;
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>