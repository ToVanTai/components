<template>
  <tr @dblclick="(event) => showEmployeeDetail(event, employee)">
    <td class="checkbox"><input type="checkbox" /></td>
    <td>{{ employee.EmployeeCode }}</td>
    <td>{{ employee.EmployeeName }}</td>
    <td>
      {{
        employee.Gender + "" === "0"
          ? "Nữ"
          : employee.Gender === 1
          ? "Nam"
          : "Khác"
      }}
    </td>
    <td class="date">
      {{ employee.DateOfBirth && formatDate(employee.DateOfBirth) }}
    </td>
    <td>{{ employee.IdentityNumber }}</td>
    <td>{{ employee.PositionName }}</td>
    <td>{{ employee.DepartmentName }}</td>
    <td>{{ employee.BankAccountNumber }}</td>
    <td>{{ employee.BankName }}</td>
    <td>{{ employee.BankBranchName }}</td>
    <td class="more">
      <div class="employespage__table__action__dropdown">
        Sửa
        <div class="employespage__table__action__dropdown--toggle">
          <i class="fas fa-sort-down"></i>
        </div>
        <div class="employespage__table__action__dropdown--list">
          <div class="employespage__table__action__dropdown--item">
            Nhân bản
          </div>
          <div
            class="employespage__table__action__dropdown--item delete"
            @click="showNofifyDeleteEmployee"
          >
            Xóa
          </div>
          <div class="employespage__table__action__dropdown--item">
            Ngừng sử dụng
          </div>
        </div>
      </div>
    </td>
  </tr>
  <Notify
    v-if="messages.length != 0"
    :isShow="messages.length != 0"
    :isQuestion="true"
    :messages="messages"
    :overlayClick="cancelDelete"
    :btnOKClick="handleDeleteEmployee"
    :btnCloseClick="cancelDelete"
    :isPending="isPending"
  />
</template>

<script>
import { formatDate } from "../../../../utils/format";
import { employesUrl } from "../../../../config/index";
import Notify from "../../../../components/common/Notify.vue";
export default {
  components: { Notify },
  data() {
    return {
      messages: [], //nếu có thì sẽ hiện notify,
      isPending: false,
    };
  },
  props: {
    employee: {
      EmployeeId: null,
      EmployeeCode: null,
      FirstName: null,
      LastName: null,
      EmployeeName: null,
      Gender: null,
      DateOfBirth: null,
      PhoneNumber: null,
      Email: null,
      Address: null,
      IdentityNumber: null,
      IdentityDate: null,
      IdentityPlace: null,
      JoinDate: null,
      MartialStatus: null,
      EducationalBackground: null,
      QualificationId: null,
      DepartmentId: null,
      PositionId: null,
      WorkStatus: null,
      PersonalTaxCode: null,
      Salary: null,
      TelephoneNumber: null,
      BankAccountNumber: null,
      BankName: null,
      BankBranchName: null,
      BankProvinceName: null,
      EmployeePosition: null,
      PositionCode: null,
      PositionName: null,
      DepartmentCode: null,
      DepartmentName: null,
      QualificationName: null,
      GenderName: null,
      EducationalBackgroundName: null,
      MartialStatusName: null,
      CreatedDate: null,
      CreatedBy: null,
      ModifiedDate: null,
      ModifiedBy: null,
    },
    showEmployeeFormInfor: {
      type: [Function, null],
      default: function () {},
    },
    resetTable:{
      type: [Function, null],
      default: null
    }
  },
  methods: {
    /**
     * useTo: hiển thị dữ liệu ngày tháng đúng định dạng
     * updatedBy: tovantai_22/12/2022
     * author: tovantai
     * createAt: 22/12/2022
     */
    formatDate,
    /**
     * useTo: lấy nhân viên muấn hiển thị ra form
     * updatedBy: tovantai_22/12/2022
     * author: tovantai
     * createAt: 22/12/2022
     */
    showEmployeeDetail(event, employee) {
      try {
        if (
          !event.target.closest(".checkbox") &&
          !event.target.closest(".more")
        ) {
          this.showEmployeeFormInfor(employee);
        }
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo: Xử lý xóa nhân viên
     * updatedBy: tovantai_22/12/2022
     * author: tovantai
     * createAt: 22/12/2022
     */
    showNofifyDeleteEmployee() {
      try {
        this.messages = [`Bạn có thực sự muấn xóa Nhân viên <${this.employee.EmployeeCode}> không? `];
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo: Xử lý hủy xóa nhân viên
     * updatedBy: tovantai_22/12/2022
     * author: tovantai
     * createAt: 22/12/2022
     */
    cancelDelete() {
      this.messages = [];
    },
    async handleDeleteEmployee() {
      try {
        this.isPending = true;
        await new Promise((resolve, reject) => {
          fetch(`${employesUrl}/${this.employee.EmployeeId}`, {
            method: "DELETE",
          }).then((res) => {
            this.isPending = false;
            if (res.status == 200) {
              resolve();
            } else {
              reject(res.json());
            }
          });
        })
          .then(() => {
            this.messages = [];
            this.resetTable();
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.employespage__table .employespage__table__action__dropdown {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-blue);
  font-size: var(--size-text-md);
  cursor: pointer;
}
.employespage__table .employespage__table__action__dropdown--toggle {
  padding: var(--padding-8) var(--padding-10);
  margin-left: var(--margin-8);
  border: 1px solid transparent;
}
.employespage__table .employespage__table__action__dropdown--list {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  border: 1px solid var(--color-border);
  background-color: var(--color-bg-white);
  display: none;
  z-index: 1;
}
.employespage__table .employespage__table__action__dropdown--item {
  padding: 12px;
  text-align: left;
  font-size: var(--size-text-sm);
  color: var(--color-text-grey);
  white-space: nowrap;
}
.employespage__table
  .employespage__table__action__dropdown:hover
  .employespage__table__action__dropdown--toggle {
  border-color: var(--color-text-blue);
}
.employespage__table
  .employespage__table__action__dropdown:hover
  .employespage__table__action__dropdown--list {
  display: block;
}
.employespage__table .employespage__table__action__dropdown--item:hover {
  background-color: var(--color-bg-grey-four);
  color: var(--color-bg-green);
}
</style>