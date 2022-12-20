<template>
  <Popup :isShow="isShow" :isPending="isPending" :overlayClick="overlayClick">
    <form class="employeeForm">
      <!-- start btn close -->
      <div class="employeeForm__close">
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
            value="true" />
          <label for="checkbox__iscustomer">Là khách hàng</label>
          <input
            type="checkbox"
            name="issupplier"
            id="checkbox__issupplier"
            value="false" />
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
                    name="employeeCode"
                    readonly />
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
                    name="employeeName" />
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
                    name="departmentId"></select>
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
                    name="positionName"
                    class="input__primary"
                    id="txtPositionName" />
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
                    name="dateOfBirth" />
                </div>
              </div>
              <div class="col col-8" style="padding-left: 8px">
                <div class="input__label">Giới tính</div>
                <div
                  class="input__controller group"
                  style="height: 32px"
                  id="txtGender">
                  <input
                    type="radio"
                    name="gender"
                    value="1"
                    id="gender__male" />
                  <label for="gender__male">Nam</label>
                  <input
                    type="radio"
                    name="gender"
                    value="0"
                    id="gender__female" />
                  <label for="gender__female">Nữ</label>
                  <input
                    type="radio"
                    name="gender"
                    value="-1"
                    id="gender__other" />
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
                    name="identityNumber"
                    id="txtIdentityNumber"
                    value="sfsfsf" />
                </div>
              </div>
              <div class="col col-4">
                <label class="input__label" for="txtIdentityDate"
                  >Ngày cấp</label
                >
                <div class="input__controller">
                  <input
                    type="date"
                    name="identityDate"
                    class="input__primary"
                    id="txtIdentityDate" />
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
                    name="identityPlace"
                    class="input__primary"
                    id="txtIdentityPlace" />
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
              name="address"
              id="txtAddress"
              class="input__primary" />
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
                name="phoneNumber"
                id="txtPhoneNumber"
                class="input__primary" />
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
                name="telephoneNumber"
                class="input__primary"
                id="txtTelephoneNumber" />
            </div>
          </div>
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label" for="txtEmail">Email</label>
            <div class="input__controller">
              <input
                type="email"
                name="email"
                class="input__primary"
                id="txtEmail" />
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
                name="bankAccountNumber"
                class="input__primary"
                id="txtBankAccountNumber" />
            </div>
          </div>
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label" for="txtBankName">Tên ngân hàng</label>
            <div class="input__controller">
              <input
                type="text"
                name="bankName"
                class="input__primary"
                id="txtBankName" />
            </div>
          </div>
          <div class="col col-3" style="padding-right: 8px">
            <label class="input__label" for="txtBankBranchName"
              >Chi nhánh</label
            >
            <div class="input__controller">
              <input
                type="text"
                name="bankBranchName"
                class="input__primary"
                id="txtBankBranchName" />
            </div>
          </div>
        </div>
      </div>
      <!-- end body -->
      <!-- start footer -->
      <div class="employeeform__footer">
        <div class="employeeform__footer__right">
          <!-- btn for close and createnew -->
          <button class="btn btn-primary" v-if="!isShowInfo">
            Cất và Thêm
          </button>
          <!-- btn for close and update -->
          <button class="btn btn-primary" v-if="isShowInfo">Sửa</button>
          <!-- btn for close form -->
          <button class="btn" v-if="!isShowInfo">Cất</button>
        </div>
        <div class="employeeform__footer__left">
          <!-- btn for reset form -->
          <button class="btn">Hủy</button>
        </div>
      </div>
      <!-- end footer -->
    </form>
  </Popup>
</template>

<script>
import Popup from '../../../../components/common/Popup.vue';
export default {
  components: {
    Popup,
  },
  data() {
    return {};
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    isPending: {
      type: Boolean,
      default: false,
    },
    isShowInfo: {
      type: Boolean,
      default: false,
    },
    overlayClick: {
      type: [Function, null],
      default: function () {},
    }
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
  margin-top: var(--padding-18);
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
