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
          Thông tin nhân viên
        </div>
        <div v-else class="employeeForm__heading--titlecreatenew">
          Thêm mới nhân viên
        </div>
        <div class="input__controller group" style="padding-left: 12px">
          <input
            type="checkbox"
            name="iscustomer"
            id="checkbox__iscustomer"
            value="true"
          />
          <label for="checkbox__iscustomer">Là khách hàng</label>
          <input
            type="checkbox"
            name="issupplier"
            id="checkbox__issupplier"
            value="false"
          />
          <label for="checkbox__issupplier">Là nhà cung cấp</label>
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
                <label class="input__label required" for="txtEmployeeCode"
                  >Mã</label
                >
                <div class="input__controller">
                  <input
                    type="text"
                    class="input__primary"
                    id="txtEmployeeCode"
                    v-model="employeeCode"
                    ref="employeeCodeElm"
                  />
                </div>
              </div>
              <div class="col col-8" style="padding-left: 8px">
                <label class="input__label required" for="txtEmployeeName"
                  >Tên</label
                >
                <div class="input__controller">
                  <input
                    type="text"
                    class="input__primary"
                    id="txtEmployeeName"
                    v-model="employeeName"
                    ref="employeeNameElm"
                  />
                </div>
              </div>
            </div>
            <!-- đơn vị -->
            <div class="row">
              <div class="col col-12">
                <label class="input__label required" for="txtDepartmentId"
                  >Đơn vị</label
                >
                <div class="input__controller">
                  <select
                    class="input__primary"
                    id="txtDepartmentId"
                    v-model="departmentId"
                    ref="departmentIdElm"
                  >
                    <option
                      v-for="department in departments"
                      :value="department.DepartmentId"
                      :key="department.DepartmentId"
                    >
                      {{ department.DepartmentName }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <!-- chức danh -->
            <div class="row">
              <div class="col col-12">
                <label class="input__label" for="txtPositionName"
                  >Chức danh</label
                >
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
                <label class="input__label" for="txtDateOfBirth"
                  >Ngày sinh</label
                >
                <div class="input__controller">
                  <input
                    type="date"
                    class="input__primary"
                    id="txtDateOfBirth"
                    v-model="dateOfBirth"
                  />
                </div>
              </div>
              <div class="col col-8" style="padding-left: 8px">
                <div class="input__label">Giới tính</div>
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
                  <label for="gender__male">Nam</label>
                  <input
                    type="radio"
                    v-model="gender"
                    value="0"
                    id="gender__female"
                  />
                  <label for="gender__female">Nữ</label>
                  <input
                    type="radio"
                    v-model="gender"
                    value="-1"
                    id="gender__other"
                  />
                  <label for="gender__other">Khác</label>
                </div>
              </div>
            </div>
            <!-- indentitycard, ngay cap -->
            <div class="row">
              <div class="col col-8" style="padding-right: 8px">
                <label class="input__label" for="txtIdentityNumber">
                  Số
                  <div class="tooltip">
                    CMND
                    <div class="tooltip__messenger">Số chứng minh nhân dân</div>
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
                <label class="input__label" for="txtIdentityDate"
                  >Ngày cấp</label
                >
                <div class="input__controller">
                  <input
                    type="date"
                    v-model="identityDate"
                    class="input__primary"
                    id="txtIdentityDate"
                  />
                </div>
              </div>
            </div>
            <!-- nơi cấp -->
            <div class="row">
              <div class="col col-12">
                <label class="input__label" for="txtIdentityPlace"
                  >Nơi cấp</label
                >
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
          <label class="input__label" for="txtAddress">Địa chỉ</label>
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
            <label class="input__label" for="txtPhoneNumber">
              <div class="tooltip">
                ĐT
                <div class="tooltip__messenger">Số điện thoại di động</div>
              </div>
              di đông
            </label>
            <div class="input__controller">
              <input
                type="tel"
                v-model="phoneNumber"
                id="txtPhoneNumber"
                class="input__primary"
              />
            </div>
          </div>
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label" for="txtTelephoneNumber">
              <div class="tooltip">
                ĐT
                <div class="tooltip__messenger">Số điện thoại cố định</div>
              </div>
              cố định
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
            <label class="input__label" for="txtEmail">Email</label>
            <div class="input__controller">
              <input
                type="email"
                v-model="email"
                class="input__primary"
                id="txtEmail"
              />
            </div>
          </div>
        </div>
        <!-- accountbank, bankname -->
        <div class="row">
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label" for="txtBankAccountNumber"
              >Tài khoản ngân hàng</label
            >
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
            <label class="input__label" for="txtBankName">Tên ngân hàng</label>
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
              >Chi nhánh</label
            >
            <div class="input__controller">
              <input
                type="text"
                v-model="bankBranchName"
                class="input__primary"
                id="txtBankBranchName"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- end body -->
      <!-- start footer -->
      <div class="employeeform__footer">
        <div class="employeeform__footer__right">
          <!-- btn for close and createnew -->
          <button
            class="btn btn-primary"
            v-if="!isShowInfo"
            @click.prevent="handleSubmitCreatenew"
          >
            Cất và Thêm
          </button>
          <!-- btn for close and update -->
          <button class="btn btn-primary" v-if="isShowInfo" @click.prevent="handleSubmitUpdateEmployee">Sửa</button>
          <!-- btn for createnew -->
          <button
            class="btn"
            v-if="!isShowInfo"
            @click.prevent="handleSubmitCreatenewAndClose"
          >
            Cất
          </button>
        </div>
        <div class="employeeform__footer__left">
          <!-- btn for đóng form -->
          <button class="btn" @click.prevent="closeForm">Hủy</button>
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
import BaseNotify from "../../../../components/common/BaseNotify.vue";
import { departmentsUrl, employesUrl } from "../../../../config/index";
export default {
  components: {
    BasePopup,
    BaseNotify,
  },
  data() {
    return {
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
      //hiển thị notify lỗi
      messages: [], //nếu có thì sẽ hiện notify
      inputErr: null, // true nếu submit form bị lỗi do server, hoặc input đầu tiên đang bị lỗi
      //khi đóng thông báo lỗi thì mới focus vào inputErr
    };
  },
  props: {
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
      type: [Object, null],
      default: null,
    },
    resetTable: {
      type: [Function, null],
      default: null
    }
  },
  mounted() {
    if (this.isShowInfo) {
      //ở trạng thái hiển thị thông tin nhân viên...
      this.initFromInfoEmployee();
    } else {
      this.initFromCreatenewEmployee();
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
            if (res.status == 500) {
              res.text().then((res) => reject(JSON.parse(res).userMsg));
            } else {
              reject("Không lấy được mã nhân vien mới.");
            }
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
            reject("Không lấy được danh sách phòng ban.");
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
          this.$refs.employeeNameElm.focus();
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
        this.isPending = false;
        this.employeeCode = this.employeeShow.EmployeeCode;
        this.departmentId = this.employeeShow.DepartmentId;
        this.employeeName = this.employeeShow.EmployeeName;
        this.positionName = this.employeeShow.PositionName;
        this.dateOfBirth = this.employeeShow.DateOfBirth;
        this.gender = this.employeeShow.Gender;
        this.identityNumber = this.employeeShow.IdentityNumber;
        this.identityDate = this.employeeShow.IdentityDate;
        this.identityPlace = this.employeeShow.IdentityPlace;
        this.address = this.employeeShow.Address;
        this.phoneNumber = this.employeeShow.PhoneNumber;
        this.telephoneNumber = this.employeeShow.TelephoneNumber;
        this.email = this.employeeShow.Email;
        this.bankAccountNumber = this.employeeShow.BankAccountNumber;
        this.bankName = this.employeeShow.BankName;
        this.bankBranchName = this.employeeShow.BankBranchName;
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
          this.$refs[this.inputErr].focus();
        }, 100);
      }
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
            let dataNewEmployee = {
              employeeCode: this.employeeCode,
              departmentId: this.departmentId,
              employeeName: this.employeeName,
              positionName: this.positionName,
              dateOfBirth: this.dateOfBirth,
              gender: this.gender,
              identityNumber: this.identityNumber,
              identityDate: this.identityDate,
              identityPlace: this.identityPlace,
              address: this.address,
              phoneNumber: this.phoneNumber,
              telephoneNumber: this.telephoneNumber,
              email: this.email,
              bankAccountNumber: this.bankAccountNumber,
              bankName: this.bankName,
              bankBranchName: this.bankBranchName,
            };
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
                res.json().then((res) => {
                  this.inputErr = "employeeCodeElm";
                  this.messages.push(res.devMsg);
                });
              }
            });
          }
        }
      } catch (err) {
        console.log();
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
            let dataNewEmployee = {
              employeeCode: this.employeeCode,
              departmentId: this.departmentId,
              employeeName: this.employeeName,
              positionName: this.positionName,
              dateOfBirth: this.dateOfBirth,
              gender: this.gender,
              identityNumber: this.identityNumber,
              identityDate: this.identityDate,
              identityPlace: this.identityPlace,
              address: this.address,
              phoneNumber: this.phoneNumber,
              telephoneNumber: this.telephoneNumber,
              email: this.email,
              bankAccountNumber: this.bankAccountNumber,
              bankName: this.bankName,
              bankBranchName: this.bankBranchName,
            };
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
                res.json().then((res) => {
                  this.inputErr = "employeeCodeElm";
                  this.messages.push(res.devMsg);
                });
              }
            });
          }
        }
      } catch (err) {
        console.log();
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
            let dataNewEmployee = {
              employeeCode: this.employeeCode,
              departmentId: this.departmentId,
              employeeName: this.employeeName,
              positionName: this.positionName,
              dateOfBirth: this.dateOfBirth,
              gender: this.gender,
              identityNumber: this.identityNumber,
              identityDate: this.identityDate,
              identityPlace: this.identityPlace,
              address: this.address,
              phoneNumber: this.phoneNumber,
              telephoneNumber: this.telephoneNumber,
              email: this.email,
              bankAccountNumber: this.bankAccountNumber,
              bankName: this.bankName,
              bankBranchName: this.bankBranchName,
            };
            fetch(`${employesUrl}/${this.employeeShow.EmployeeId}`, {
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
                res.json().then((res) => {
                  this.inputErr = true;
                  this.messages.push(res.devMsg);
                });
              }
            });
          }
        }
      } catch (err) {
        console.log();
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

      if (!this.departmentId) {
        inputErrResult = "departmentIdElm";
        messagesResult.push("Mã phòng ban là bắt buộc!");
      }
      if (!this.employeeName) {
        inputErrResult = "employeeNameElm";
        messagesResult.push("Tên nhân viên là bắt buộc!");
      }
      if (!this.employeeCode) {
        inputErrResult = "employeeCodeElm";
        messagesResult.push("Mã nhân viên là bắt buộc!");
      }
      if (inputErrResult !== false) {
        this.inputErr = inputErrResult;
        this.messages = messagesResult;
      }
      return inputErrResult;
    },
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
