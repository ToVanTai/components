<template>
  <!-- hiển thị ô input tìm kiếm theo mã và tên nhân viên, và icon để thực hiện hành động tìm kiếm -->
  <div class="employespage__controller">
    <div class="employespage__controller__left">
      <div class="dropdown" v-show="employeeListChecked?.length">
        <div class="dropdown__btn btn">{{employeePage.controller.deleteList}} <i class="fas fa-sort-down"></i></div>
        <div class="dropdown__list">
          <div class="dropdown__item btn" @click="showNofifyDeleteListEmployee">{{employeePage.controller.delete}}</div>
        </div>  
      </div>
    </div>
    <div class="employespage__controller__right">
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
    <div class="employespage__controller__iconreload" @click="downloadEmployeeToExcel">
      <i class="far fa-file-excel"></i>
    </div>
    </div>
  </div>
  <!-- hiển thị các thông báo khi xóa ở đây -->
  <BaseNotify
    v-if="messages.length != 0"
    :isShow="messages.length != 0"
    :isQuestion="true"
    :messages="messages"
    :overlayClick="cancelDeleteList"
    :btnOKClick="handleDeleteListEmployee"
    :btnCloseClick="cancelDeleteList"
    :isPending="isPending"
  />
</template>

<script>
import { employeePage } from '@/resources';
import BaseNotify from "../../../../components/common/BaseNotify.vue";
import {employesUrl} from "@/config/index"
import {formatDate} from "@/utils/format"
export default {
  components:{BaseNotify},
  data() {
    return {
      employeePage,
      employeefilter: this.$route.query?.filter || this.$route.query?.employeeFilter || "" ,
      messages: [], //nếu có thì sẽ hiện notify,
      isPending: false,
    };
  },
  props: {
    initEmployesTable: {
      type: [Function, null],
      default: function () {},
    },
    employeeListChecked:{
      type:[Array, null],
      default: ()=>{return []}
    },
    employes:{
      type:[Object, null],
      default: ()=>{return null}
    }
  }
  ,
  methods: {
    /**
     * useTo: thay đổi url của trình duyệt và lấy ds employee từ server
     * updateBy:
     * author: tovantai
     * createdAt: 27/01/2023
     */
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
    },
    /**
     * useTo: Xử lý xóa ds nhân viên
     * updatedBy: tovantai_22/12/2022
     * author: tovantai
     * createAt: 22/12/2022
     */
    showNofifyDeleteListEmployee() {
      try {
        this.messages = [`${this.employeePage.controller.confirmDeleteListEmployee}`];
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo: Xử lý hủy xóa ds nhân viên
     * updatedBy: tovantai_22/12/2022
     * author: tovantai
     * createAt: 22/12/2022
     */
    cancelDeleteList() {
      this.messages = [];
    },
    /**
     * useTo: Xử lý xóa nhân viên
     * updatedBy: tovantai_22/12/2022
     * author: tovantai
     * createAt: 22/12/2022
     */
    async handleDeleteListEmployee() {
      try {
        this.isPending = true;
        let bodyData = {ids: this.employeeListChecked.join(",")};
        await new Promise((resolve, reject) => {
          fetch(`${employesUrl}`, {
            method: "DELETE",
            body: JSON.stringify(bodyData)
          }).then((res) => {
            this.isPending = false;
            if (res.status == 200) {
              resolve();
            } else {
              res.json().then(res=>{
                reject(res.UserMsg || res.userMsg)
              })
            }
          });
        })
          .then(() => {
            this.messages = [];
            this.initEmployesTable()
          })
          .catch((err) => {
            this.messages = [err];
          });
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo: tải file excel employees về client
     * updatedBy: tovantai_28/01/2022
     * author: tovantai
     * createAt: 28/01/2022
     */
    downloadEmployeeToExcel(){
      if(this.employes?.Data.length > 0){
        import("@/plugins/Export2Excel").then(excel=>{
          //data json
          let OBJ = this.employes.Data.map((item, index)=>{
            let genderName;
            if(Number(item.Gender + "") == 1)
              genderName = this.employeePage.employee.GenderMale
            else if(Number(item.Gender + "") == 0)
              genderName = this.employeePage.employee.GenderFemale
            else
              genderName = this.employeePage.employee.GenderOther

            return {
              Index: index+1,
              EmployeeCode: item.EmployeeCode,
              EmployeeName: item.EmployeeName,
              Gender: genderName,
              DateOfBirth: item?.DateOfBirth ? formatDate(item.DateOfBirth) : "",
              PositionName: item?.PositionName || "",
              DepartmentName : item?.DepartmentName  || "",
              BankAccountNumber: item?.BankAccountNumber || "",
              BankName: item?.BankName || ""
            }
          })
          //header in excel
          let Header = [this.employeePage.employee.Index,this.employeePage.employee.EmployeeCode, this.employeePage.employee.EmployeeName, this.employeePage.employee.Gender, this.employeePage.employee.DateOfBirth, this.employeePage.employee.PositionName, this.employeePage.employee.DepartmentName, this.employeePage.employee.BankAccountNumber, this.employeePage.employee.BankName]
          //field for map with datajson
          let Fields = ["Index", "EmployeeCode", "EmployeeName", "Gender", "DateOfBirth", "PositionName", "DepartmentName", "BankAccountNumber", "BankName"]
          //data mapped field and obj
          const DataMapped = this.FormatJson(Fields, OBJ);
          excel.export_json_to_excel({
            header: Header,
            data: DataMapped,
            sheetName: "Danh sach nhan vien",
            filename: "Danh_sach_nhan_vien",
            autoWidth : true,
            bookType : "xlsx",
          })
        })
      }
    },
    /**
     * useTo: format json
     * updatedBy: tovantai_28/01/2022
     * author: tovantai
     * createAt: 28/01/2022
     */
    FormatJson(fieldData, jsonData){
      return jsonData.map((v)=>fieldData.map((j)=>{
        return v[j]
      }))
    }
  }
};
</script>

<style>
.dropdown{
position: relative;

display: inline-block;
}
.dropdown__btn{
  border: 1px solid var(--color-text-black);
  border-radius: var(--border-radius-16) ;
  font-family: notosans semibold;
}
.dropdown__btn i{
  padding-left: var(--padding-8);
      display: flex;
    align-items: flex-start;
    height: 20px;
}
.dropdown__list{
  display: none;
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
  transform: translate(0px, 100%);
  width: 120px;
}
.dropdown:hover .dropdown__list{
  display: block;
}
.dropdown__item{
  border: 1px solid var(--color-border);
  border-radius: 0px;
  cursor: pointer;
  background: var(--color-bg-white);
  justify-content: flex-start;
}
.employespage__controller {
  padding-bottom: var(--padding-18);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.employespage__controller__right, .employespage__controller__left{
  flex-basis: 40%;
  flex-grow: 0;
  flex-shrink: 0;
}
.employespage__controller__right{
  display:  flex;
  align-items: center;
  justify-content: flex-end;
  flex-basis: 60%;
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
