<template>
  <BasePopup :isShow="true" :isPending="isPending" :overlayClick="closeForm">
    <form class="employeeForm">
      <!-- start btn close -->
      <div class="employeeForm__close" @click="closeForm">
        <i class="fas fa-times"></i>
      </div>
      <!-- end btn close -->

      <!-- start heading -->
      <div class="employeeForm__heading">
        <div v-if="isShowInfo" class="employeeForm__heading--titleshow">
          {{ resources.employee.Info }}
        </div>
        <div v-else class="employeeForm__heading--titlecreatenew">
          {{ resources.employee.Create }}
        </div>
        <div class="input__controller group" style="padding-left: 12px">
          <input
            type="checkbox"
            name="iscustomer"
            id="checkbox__iscustomer"
            value="true"
          />
          <label for="checkbox__iscustomer">{{
            resources.employee.IsCustomer
          }}</label>
          <input
            type="checkbox"
            name="issupplier"
            id="checkbox__issupplier"
            value="false"
          />
          <label for="checkbox__issupplier">{{
            resources.employee.IsManufacture
          }}</label>
        </div>
      </div>
      <!-- end heading -->
      <!-- start body -->
      <div class="employeeform__body">
        <div class="row p-12">
          <div class="col col-6">
            <!-- idemployee, name -->
            <div class="row">
              <div class="col col-4">
                <label class="input__label required" for="txtEmployeeCode">{{
                  resources.employee.EmployeeCode
                }}</label>
                <div class="input__controller" ref="employeeCodeElm">
                  <input
                    type="text"
                    class="input__primary"
                    id="txtEmployeeCode"
                    v-model="employeeCode"
                  />
                  <div class="input__error_messenger"></div>
                </div>
              </div>
              <div class="col col-8" style="padding-left: 8px">
                <label class="input__label required" for="txtEmployeeName">{{
                  resources.employee.EmployeeName
                }}</label>
                <div class="input__controller" ref="employeeNameElm">
                  <input
                    type="text"
                    class="input__primary"
                    id="txtEmployeeName"
                    v-model="employeeName"
                  />
                  <div class="input__error_messenger"></div>
                </div>
              </div>
            </div>
            <!-- đơn vị -->
            <div class="row">
              <div class="col col-12">
                <label class="input__label required" for="txtDepartmentId">{{
                  resources.employee.DepartmentName
                }}</label>
                <div class="input__controller" ref="departmentIdElm">
                  <select
                    class="input__primary"
                    id="txtDepartmentId"
                    v-model="departmentId"
                  >
                    <option
                      v-for="department in departments"
                      :value="department.DepartmentId"
                      :key="department.DepartmentId"
                    >
                      {{ department.DepartmentName }}
                    </option>
                  </select>
                  <div class="input__error_messenger"></div>
                </div>
              </div>
            </div>
            <!-- chức danh -->
            <div class="row">
              <div class="col col-12">
                <label class="input__label" for="txtPositionName">{{
                  resources.employee.PositionName
                }}</label>
                <div class="input__controller">
                  <input
                    type="text"
                    v-model="positionName"
                    class="input__primary"
                    id="txtPositionName"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col col-6">
            <!-- birthday, gender, -->
            <div class="row">
              <div class="col col-4">
                <label class="input__label" for="txtDateOfBirth">{{
                  resources.employee.DateOfBirth
                }}</label>
                <div class="input__controller" ref="dateOfBirthElm">
                  <input
                    type="date"
                    class="input__primary"
                    id="txtDateOfBirth"
                    v-model="dateOfBirth"
                  />
                  <div class="input__error_messenger"></div>
                </div>
              </div>
              <div class="col col-8" style="padding-left: 8px">
                <div class="input__label">{{ resources.employee.Gender }}</div>
                <div
                  class="input__controller group"
                  style="height: 32px"
                  id="txtGender"
                >
                  <input
                    type="radio"
                    v-model="gender"
                    value="1"
                    id="gender__male"
                  />
                  <label for="gender__male">{{
                    resources.employee.GenderMale
                  }}</label>
                  <input
                    type="radio"
                    v-model="gender"
                    value="0"
                    id="gender__female"
                  />
                  <label for="gender__female">{{
                    resources.employee.GenderFemale
                  }}</label>
                  <input
                    type="radio"
                    v-model="gender"
                    value="-1"
                    id="gender__other"
                  />
                  <label for="gender__other">{{
                    resources.employee.GenderOther
                  }}</label>
                </div>
              </div>
            </div>
            <!-- indentitycard, ngay cap -->
            <div class="row">
              <div class="col col-8" style="padding-right: 8px">
                <label class="input__label" for="txtIdentityNumber">
                  <div class="tooltip">
                    {{ resources.employee.IdentityNumber.Title }}
                    <div class="tooltip__messenger">
                      {{ resources.employee.IdentityNumber.Subtitle }}
                    </div>
                  </div>
                </label>
                <div class="input__controller">
                  <input
                    type="text"
                    class="input__primary"
                    v-model="identityNumber"
                    id="txtIdentityNumber"
                  />
                </div>
              </div>
              <div class="col col-4">
                <label class="input__label" for="txtIdentityDate">{{
                  resources.employee.IdentityDate
                }}</label>
                <div class="input__controller" ref="identityDateElm">
                  <input
                    type="date"
                    v-model="identityDate"
                    class="input__primary"
                    id="txtIdentityDate"
                  />
                  <div class="input__error_messenger"></div>
                </div>
              </div>
            </div>
            <!-- nơi cấp -->
            <div class="row">
              <div class="col col-12">
                <label class="input__label" for="txtIdentityPlace">{{
                  resources.employee.IdentityPlace
                }}</label>
                <div class="input__controller">
                  <input
                    type="text"
                    v-model="identityPlace"
                    class="input__primary"
                    id="txtIdentityPlace"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <!-- address -->
        <div class="row" style="margin-top: 18px">
          <label class="input__label" for="txtAddress">{{
            resources.employee.Address
          }}</label>
          <div class="input__controller">
            <input
              type="text"
              v-model="address"
              id="txtAddress"
              class="input__primary"
            />
          </div>
        </div>
        <!-- phone, điện thoại cố định, email -->
        <div class="row">
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label required" for="txtPhoneNumber">
              <div class="tooltip">
                {{ resources.employee.PhoneNumber.Title }}
                <div class="tooltip__messenger">
                  {{ resources.employee.PhoneNumber.Subtitle }}
                </div>
              </div>
            </label>
            <div class="input__controller" ref="phoneNumberElm">
              <input
                type="tel"
                v-model="phoneNumber"
                id="txtPhoneNumber"
                class="input__primary"
              />
              <div class="input__error_messenger"></div>
            </div>
          </div>
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label" for="txtTelephoneNumber">
              <div class="tooltip">
                {{ resources.employee.TelephoneNumber.Title }}
                <div class="tooltip__messenger">
                  {{ resources.employee.TelephoneNumber.Subtitle }}
                </div>
              </div>
            </label>
            <div class="input__controller">
              <input
                type="tel"
                v-model="telephoneNumber"
                class="input__primary"
                id="txtTelephoneNumber"
              />
            </div>
          </div>
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label" for="txtEmail">{{
              resources.employee.Email
            }}</label>
            <div class="input__controller" ref="emailElm">
              <input
                type="email"
                v-model="email"
                class="input__primary"
                id="txtEmail"
              />
              <div class="input__error_messenger"></div>
            </div>
          </div>
        </div>
        <!-- accountbank, bankname -->
        <div class="row">
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label" for="txtBankAccountNumber">{{
              resources.employee.BankAccountNumber
            }}</label>
            <div class="input__controller">
              <input
                type="text"
                v-model="bankAccountNumber"
                class="input__primary"
                id="txtBankAccountNumber"
              />
            </div>
          </div>
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label" for="txtBankName">{{
              resources.employee.BankName
            }}</label>
            <div class="input__controller">
              <input
                type="text"
                v-model="bankName"
                class="input__primary"
                id="txtBankName"
              />
            </div>
          </div>
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label" for="txtBankBranchName"
              ><div class="tooltip">
                {{ resources.employee.BankBranchName.Title }}
                <div class="tooltip__messenger">
                  {{ resources.employee.BankBranchName.Subtitle }}
                </div>
              </div></label
            >
            <div class="input__controller">
              <input
                type="text"
                v-model="bankBranchName"
                class="input__primary"
                id="txtBankBranchName"
              />
              <div class="input__error_messenger"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- end body -->
      <!-- start footer -->
      <div class="employeeform__footer">
        <div class="employeeform__footer__right">
          <!-- btn for close and createnew -->
          <BaseButton
            :isPrimary="true"
            v-if="!isShowInfo"
            :btnClick="handleSubmitCreatenew"
          >
            {{ resources.employee.ActionKeepAndContinue }}
          </BaseButton>
          <!-- btn for close and update -->
          <BaseButton
            :isPrimary="true"
            v-if="isShowInfo"
            :btnClick="handleSubmitUpdateEmployee"
            >{{ resources.employee.ActionUpdate }}</BaseButton
          >
          <!-- btn for createnew -->
          <BaseButton
            v-if="!isShowInfo"
            :btnClick="handleSubmitCreatenewAndClose"
          >
            {{ resources.employee.ActionKeep }}
          </BaseButton>
        </div>
        <div class="employeeform__footer__left">
          <!-- btn for đóng form -->
          <BaseButton :btnClick="closeForm">{{
            resources.employee.ActionCancel
          }}</BaseButton>
        </div>
      </div>
      <!-- end footer -->
    </form>
  </BasePopup>
  <BaseNotify
    :isShow="messages.length != 0"
    :messages="messages"
    :overlayClick="closeNotify"
    :btnOKClick="closeNotify"
    :btnCloseClick="closeNotify"
    :isPending="false"
  />
</template>

<script>
import BasePopup from "../../../../components/common/BasePopup.vue";
import BaseButton from "../../../../components/common/BaseButton.vue";
import BaseNotify from "../../../../components/common/BaseNotify.vue";
import { departmentsUrl, employesUrl } from "../../../../config/index";
import { employeePage } from "@/resources";
import { IsValidEmail, formatDateV2 } from "@/utils/format";
export default {
  components: {
    BasePopup,
    BaseNotify,
    BaseButton,
  },
  data() {
    return {
      //resources
      resources: employeePage,
      //trạng thái pending
      isPending: false,
      departments: "",

      //model cho input
      employeeCode: "", //required
      departmentId: "", //required
      employeeName: "", //required
      positionName: "",
      dateOfBirth: "",
      gender: "",
      identityNumber: "",
      identityDate: "",
      identityPlace: "",
      address: "",
      phoneNumber: "",
      telephoneNumber: "",
      email: "",
      bankAccountNumber: "",
      bankName: "",
      bankBranchName: "",

      joinDate: "",
      workStatus: "",
      salary: "",
      bankAccountName: "",
      createdBy: "",
      createdDate: "",
      updatedBy: "",
      updatedDate: "",
      positionId: "",
      //hiển thị notify lỗi
      messages: [], //nếu có thì sẽ hiện notify
      inputErr: null, // true nếu submit form bị lỗi do server, hoặc input đầu tiên đang bị lỗi
      //khi đóng thông báo lỗi thì mới focus vào inputErr
    };
  },
  props: {
    isShowForm:{
      type:[Boolean, String],
      default: false
    },
    isShowInfo: {
      type: Boolean,
      default: false,
    },
    closeForm: {
      //xử lý khi click vào overlay||nút đóng, nút hủy
      type: [Function, null],
      default: null,
    },
    employeeShow: {
      type: [String, null],
      default: null,
    },
    resetTable: {
      type: [Function, null],
      default: null,
    },
  },
  mounted() {
    if (this.isShowInfo) {
      //ở trạng thái hiển thị thông tin nhân viên...
      this.initFromInfoEmployee();
      
    } else {
      this.initFromCreatenewEmployee();
      if(this.isShowForm !== true){
        this.initFormDuplicateEmployee()
      }else{
        this.initFromCreatenewEmployee()
      }
    }
  },
  updated() {
    // console.log(this.departmentId);
  },
  methods: {
    /**
     * useTo: lấy mã nhân viên mới nhất
     * updateBy: tovantai_21/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    async getNewEmployeeCode() {
      await new Promise((resolve, reject) => {
        fetch(`${employesUrl}/NewEmployeeCode`).then((res) => {
          if (res.status == 200) {
            resolve(res.text());
          } else {
            res.json().then(res=>{
              reject(res.UserMsg || res.userMsg);
            })
          }
        });
      })
        .then((res) => (this.employeeCode = res))
        .catch((err) => {
          this.messages.push(err);
          this.inputErr = "employeeCodeElm";
        });
    },
    /**
     * useTo: lấy thông tin chi tiết nhân viên
     * updateBy: tovantai_22/01/2023
     * author: tovantai
     * createdAt: 22/01/2023
     */
    async getEmployeeInfo() {
      await new Promise((resolve, reject) => {
        fetch(`${employesUrl}/${this.employeeShow || this.isShowForm}`).then((res) => {
          if (res.status == 200) {
            resolve(res.json());
          } else {
            res.json().then(res=>{
              reject(res.UserMsg || res.userMsg);
            })
          }
        });
      })
        .then((res) => {
          this.employeeCode = res.EmployeeCode;
          this.departmentId = res.DepartmentId;
          this.employeeName = res.EmployeeName;
          this.positionName = res.PositionName;
          this.dateOfBirth = res.DateOfBirth && formatDateV2(res.DateOfBirth);
          this.gender = res.Gender;
          this.identityNumber = res.IndentityNumber;
          this.identityDate = res.IndentityDate && formatDateV2(res.IndentityDate);
          this.identityPlace = res.IndentityPlace;
          this.address = res.Address;
          this.phoneNumber = res.PhoneNumber;
          this.telephoneNumber = res.TelephoneNumber;
          this.email = res.Email;
          this.bankAccountNumber = res.BankAccountNumber;
          this.bankName = res.BankName;
          this.bankBranchName = res.BankBranchName;

          this.joinDate = res.JoinDate
          this.workStatus = res.WorkStatus
          this.salary = res.Salary
          this.bankAccountName = res.BankAccountName
          this.createdBy = res.CreatedBy
          this.createdDate = res.CreatedDate
          this.updatedBy = res.UpdatedBy
          this.updatedDate = res.UpdatedDate
          this.positionId = res.PositionId
        })
        .catch((err) => {
          this.messages.push(err);
          this.inputErr = "employeeCodeElm";
        });
    },
    /**
     * useTo: lấy danh sách phòng ban
     * updateBy: tovantai_12/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    async getDepartments() {
      await new Promise((resolve, reject) => {
        fetch(`${departmentsUrl}`).then((res) => {
          if (res.status == 200) {
            resolve(res.json());
          } else {
            res.json().then(res=>{
              reject(res.UserMsg || res.userMsg);
            })
          }
        });
      })
        .then((res) => {
          this.departments = res;
        })
        .catch((err) => {
          this.messages.push(err);
          this.inputErr = "departmentIdElm";
        });
    },
    /**
     * useTo: lấy danh sách phòng ban, mã nhân viên mới, focus input tên nhân viên
     * updateBy: tovantai_12/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    async initFromCreatenewEmployee() {
      try {
        this.isPending = true;
        await Promise.all([this.getNewEmployeeCode(), this.getDepartments()]);
        this.isPending = false;
        if (this.messages.length == 0 && this.inputErr == null) {
          this.$refs.employeeCodeElm.firstChild.focus();
        }
      } catch (err) {
        this.isPending = false;
        this.messages.push(err);
      }
    },
    /**
     * useTo: mã nhân viên mới, lấy danh sách phòng ban, focus input tên nhân viên
     * updateBy: tovantai_12/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    async initFormDuplicateEmployee() {
      try {
        this.isPending = true;
        await this.getEmployeeInfo();
        await Promise.all([this.getNewEmployeeCode(), this.getDepartments()]);
        this.isPending = false;
        if (this.messages.length == 0 && this.inputErr == null) {
          this.$refs.employeeCodeElm.firstChild.focus();
        }
      } catch (err) {
        this.isPending = false;
        this.messages.push(err);
      }
    },
    /**
     * useTo: lấy danh sách phòng ban, rồi hiển thị thông tin nhân viên ra form
     * updateBy: tovantai_12/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    async initFromInfoEmployee() {
      try {
        this.isPending = true;
        await this.getDepartments();
        await this.getEmployeeInfo();
        this.isPending = false;
        // this.employeeCode = this.employeeShow.EmployeeCode;
        // this.departmentId = this.employeeShow.DepartmentId;
        // this.employeeName = this.employeeShow.EmployeeName;
        // this.positionName = this.employeeShow.PositionName;
        // this.dateOfBirth = this.employeeShow.DateOfBirth;
        // this.gender = this.employeeShow.Gender;
        // this.identityNumber = this.employeeShow.IdentityNumber;
        // this.identityDate = this.employeeShow.IdentityDate;
        // this.identityPlace = this.employeeShow.IdentityPlace;
        // this.address = this.employeeShow.Address;
        // this.phoneNumber = this.employeeShow.PhoneNumber;
        // this.telephoneNumber = this.employeeShow.TelephoneNumber;
        // this.email = this.employeeShow.Email;
        // this.bankAccountNumber = this.employeeShow.BankAccountNumber;
        // this.bankName = this.employeeShow.BankName;
        // this.bankBranchName = this.employeeShow.BankBranchName;
        this.$refs.employeeCodeElm.firstChild.focus();
      } catch (err) {
        this.isPending = false;
        this.messages.push(err);
      }
    },
    /**
     * useTo: đóng thông báo
     * updateBy: tovantai_12/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    closeNotify() {
      this.messages = []; //đóng form
      //nếu submit form bị lỗi thì đóng luân form
      if (this.inputErr === true) {
        console.log("Đóng luân form do submit form bị lỗi do server");
      } else if (this.inputErr !== null) {
        //focus vào input đầu tiên bị lỗi

        setTimeout(() => {
          this.$refs[this.inputErr].firstChild.focus();
        }, 100);
      }
    },
    /**
     * useTo: lấy form nhân viên đẩy lên sever
     * updateBy: tovantai_12/12/2022
     * author: tovantai
     * createdAt: 21/12/2022
     */
    getEmployeeFormData() {
      var employeeData = {
        employeeCode: this.employeeCode?.trim(),//
        departmentId: this.departmentId?.trim(),//
        employeeName: this.employeeName?.trim(),//
        positionName: this.positionName?.trim(),
        dateOfBirth: this.dateOfBirth || null,
        gender: this.gender || 0,
        IndentityNumber: this.identityNumber || "",
        IndentityDate: this.identityDate || null,
        IndentityPlace: this.identityPlace || "",
        address: this.address || "",
        phoneNumber: this.phoneNumber?.trim(),//
        telephoneNumber: this.telephoneNumber || "",
        email: this.email?.trim(),
        bankAccountNumber: this.bankAccountNumber || "",
        bankName: this.bankName || "",
        bankBranchName: this.BankBranchName || "",
        joinDate: this.joinDate || null,
        workStatus: this.workStatus || 0,
        salary: this.salary || 0,
        bankAccountName: this.bankAccountName || "", 
        createdBy: this.createdBy || "",
        createdDate: this.createdDate || null,
        updatedBy: this.updatedBy || "",
        updatedDate: this.updatedDate || null,
        positionId: this.positionId || "7c4f14d8-66fb-14ae-198f-6354f958f4c0"
      };
      return employeeData;
    },
    /**
     * useTo: xử lý submit form để thêm mới và 0 đóng form
     * updateBy: tovantai_22/12/2022
     * author: tovantai
     * createdAt: 22/12/2022
     */
    async handleSubmitCreatenew() {
      try {
        if (this.isShowInfo === false) {
          //nếu không có lỗi gì thì gọi api thêm mới nv
          if (this.isErrForm() == false) {
            //goị api đẩy dữ liệu lên sever
            this.isPending = true;
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            let dataNewEmployee = this.getEmployeeFormData();
            fetch(`${employesUrl}`, {
              method: "POST",
              body: JSON.stringify(dataNewEmployee),
              headers,
            }).then((res) => {
              if (res.status == 201) {
                this.isPending = false;
                this.clearForm();
                this.initFromCreatenewEmployee();
                this.resetTable();
              } else {
                this.isPending = false;
                res.json().then(res=>{
                  this.inputErr = "employeeCodeElm";
                  this.messages.push(res.UserMsg || res.userMsg);
                })
              }
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo: xử lý submit form để thêm mới và đóng form
     * updateBy: tovantai_22/12/2022
     * author: tovantai
     * createdAt: 22/12/2022
     */
    async handleSubmitCreatenewAndClose() {
      try {
        if (this.isShowInfo === false) {
          //nếu không có lỗi gì thì gọi api thêm mới nv
          if (this.isErrForm() == false) {
            //goị api đẩy dữ liệu lên sever
            this.isPending = true;
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            let dataNewEmployee = this.getEmployeeFormData();
            fetch(`${employesUrl}`, {
              method: "POST",
              body: JSON.stringify(dataNewEmployee),
              headers,
            }).then((res) => {
              if (res.status == 201) {
                this.closeForm();
                this.resetTable();
              } else {
                this.isPending = false;
                res.json().then(res=>{
                  this.inputErr = "employeeCodeElm";
                  this.messages.push(res.UserMsg || res.userMsg);
                })
              }
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo: xử lý submit form để cập nhật thông tin nhân viên
     * updateBy: tovantai_22/12/2022
     * author: tovantai
     * createdAt: 22/12/2022
     */
    async handleSubmitUpdateEmployee() {
      try {
        if (this.isShowInfo === true) {
          //nếu không có lỗi gì thì gọi api thêm mới nv
          if (this.isErrForm() == false) {
            //goị api đẩy dữ liệu lên sever
            this.isPending = true;
            var headers = new Headers();
            headers.append("Content-Type", "application/json");
            let dataNewEmployee = this.getEmployeeFormData();
            fetch(`${employesUrl}/${this.employeeShow}`, {
              method: "PUT",
              body: JSON.stringify(dataNewEmployee),
              headers,
            }).then((res) => {
              if (res.status == 200) {
                this.isPending = false;
                this.closeForm();
                this.resetTable();
              } else {
                this.isPending = false;
                res.json().then(res=>{
                  this.inputErr = true;
                  this.messages.push(res.UserMsg || res.userMsg);
                })
              }
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * useTo:
     * updateBy: tovantai_22/12/2022
     * author: tovantai
     * createdAt: 22/12/2022
     */
    isErrForm() {
      let inputErrResult = false;
      let messagesResult = [];
      this.$refs.departmentIdElm.classList.remove("err");
      this.$refs.employeeNameElm.classList.remove("err");
      this.$refs.employeeCodeElm.classList.remove("err");
      this.$refs.dateOfBirthElm.classList.remove("err");
      this.$refs.identityDateElm.classList.remove("err");
      this.$refs.emailElm.classList.remove("err");
      this.$refs.phoneNumberElm.classList.remove("err");

      //số điện thoại là bắt buộc
      if(!this.phoneNumber?.trim()){
        inputErrResult = "phoneNumberElm";
        this.$refs[inputErrResult].classList.add("err");
        this.$refs[inputErrResult].lastChild.innerHTML =
          this.resources.employeeNotify.RequiredPhonenumber;
        messagesResult.push(this.resources.employeeNotify.RequiredPhonenumber);
      }
      //kiểm tra có đúng định dạng email
      if (this.email && !IsValidEmail(this.email)) {
        inputErrResult = "emailElm";
        this.$refs[inputErrResult].classList.add("err");
        this.$refs[inputErrResult].lastChild.innerHTML =
          this.resources.employeeNotify.EmailNotValidate;
        messagesResult.push(this.resources.employeeNotify.EmailNotValidate);
      }
      //so sánh ngày cấp với ngày hiện tại
      if (this.identityDate) {
        let currentDate = new Date();
        let identityDate2 = new Date(this.identityDate);
        if (currentDate < identityDate2) {
          inputErrResult = "identityDateElm";
          this.$refs[inputErrResult].classList.add("err");
          this.$refs[inputErrResult].lastChild.innerHTML =
            this.resources.employeeNotify.IdentityDateNotValid;
          messagesResult.push(
            this.resources.employeeNotify.IdentityDateNotValid
          );
        }
      }
      if (!this.departmentId) {
        inputErrResult = "departmentIdElm";
        this.$refs[inputErrResult].classList.add("err");
        this.$refs[inputErrResult].lastChild.innerHTML =
          this.resources.employeeNotify.RequiredDepartmentID;
        messagesResult.push(this.resources.employeeNotify.RequiredDepartmentID);
      }
      //so sánh ngày sinh với ngày hiện tại
      if (this.dateOfBirth) {
        let currentDate = new Date();
        let dateOfBirth2 = new Date(this.dateOfBirth);
        if (currentDate < dateOfBirth2) {
          inputErrResult = "dateOfBirthElm";
          this.$refs[inputErrResult].classList.add("err");
          this.$refs[inputErrResult].lastChild.innerHTML =
            this.resources.employeeNotify.DateOfBirthNotValid;
          messagesResult.push(
            this.resources.employeeNotify.DateOfBirthNotValid
          );
        }
      }
      if (!this.employeeName?.trim()) {
        inputErrResult = "employeeNameElm";
        this.$refs[inputErrResult].classList.add("err");
        this.$refs[inputErrResult].lastChild.innerHTML =
          this.resources.employeeNotify.RequiredEmployeeName;
        messagesResult.push(this.resources.employeeNotify.RequiredEmployeeName);
      }
      if (!this.employeeCode?.trim()) {
        inputErrResult = "employeeCodeElm";
        this.$refs[inputErrResult].classList.add("err");
        this.$refs[inputErrResult].lastChild.innerHTML =
          this.resources.employeeNotify.RequiredEmployeeCode;
        messagesResult.push(this.resources.employeeNotify.RequiredEmployeeCode);
      }

      if (inputErrResult !== false) {
        this.inputErr = inputErrResult;
        this.messages = messagesResult;
      }
      return inputErrResult;
    },
    /**
     * useTo: reset form 
     * updateBy: tovantai_22/12/2022
     * author: tovantai
     * createdAt: 22/12/2022
     */
    clearForm() {
      this.employeeCode = "";
      this.departmentId = "";
      this.employeeName = "";
      this.positionName = "";
      this.dateOfBirth = "";
      this.gender = "";
      this.identityNumber = "";
      this.identityDate = "";
      this.identityPlace = "";
      this.address = "";
      this.phoneNumber = "";
      this.telephoneNumber = "";
      this.email = "";
      this.bankAccountNumber = "";
      this.bankName = "";
      this.bankBranchName = "";
    },
  },
  watch: {
    // forcus vào input lỗi đầu tiên
    inputErr() {},
  },
};
</script>

<style scoped>
.employeeForm {
  position: relative;
  width: var(--employeeform-width);
  max-width: 100%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--color-bg-white);
  cursor: default;
  padding: var(--padding-28) var(--padding-28) var(--padding-18)
    var(--padding-28);
}

.employeeForm::-webkit-scrollbar {
  display: none;
}

/* btn close */
.employeeForm__close {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--size-text-md);
  background-color: var(--color-bg-white);
  color: var(--color-text-grey);
  transition: color var(--time-transition) ease,
    background-color var(--time-transition) ease;
}

.employeeForm__close:hover {
  background-color: var(--color-border-red);
  color: var(--color-text-white);
}

/* heading */
.employeeForm__heading {
  display: flex;
  align-items: center;
  padding-bottom: var(--padding-10);
}

.employeeForm__heading--titleshow,
.employeeForm__heading--titlecreatenew {
  font-family: notosans semibold;
  color: var(--color-text-black);
  font-size: var(--size-text-lg);
}

/* body */
.employeeform__body {
  display: flex;
  flex-direction: column;
  /* gap: var(--padding-18); */
}

.employeeform__body .input__label {
  margin-top: var(--padding-10);
}

.employeeform__body::-webkit-scrollbar {
  display: none;
}

/* footer */
.employeeform__footer {
  margin-top: var(--margin-28);
  padding-top: var(--padding-28);
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.employeeform__footer {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.employeeform__footer__right {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: var(--padding-8);
}
</style>
