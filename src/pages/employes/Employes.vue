<template>
  <div class="employespage">
        <!-- tìm kiếm theo tên, mã, số điện thoại -->
        <EmployesController/>
        <!-- thêm class tại đây pending -->
        <EmployesTable/>
        <EmployesPagination/>
        <!-- start employespage__employeeform -->
        <!-- createnew || showinfo, show -->
        <div class="popup" id="employespage__employeeform">
          <form>
            <!-- start btn close -->
            <div class="employespage__employeeform--close">
              <i class="fas fa-times"></i>
            </div>
            <!-- end btn close -->

            <!-- start heading -->
            <div class="employespage__employeeform__heading">
              <div class="employespage__employeeform__heading--titleshow">
                Thông tin nhân viên
              </div>
              <div class="employespage__employeeform__heading--titlecreatenew">
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
            <div class="employespage__employeeform__body">
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
                          readonly=""
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
                          name="employeeName"
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
                          name="departmentId"
                        ></select>
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
                          name="dateOfBirth"
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
                          name="gender"
                          value="1"
                          id="gender__male"
                        />
                        <label for="gender__male">Nam</label>
                        <input
                          type="radio"
                          name="gender"
                          value="0"
                          id="gender__female"
                        />
                        <label for="gender__female">Nữ</label>
                        <input
                          type="radio"
                          name="gender"
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
                          <div class="tooltip__messenger">
                            Số chứng minh nhân dân
                          </div>
                        </div>
                      </label>
                      <div class="input__controller">
                        <input
                          type="text"
                          class="input__primary"
                          name="identityNumber"
                          id="txtIdentityNumber"
                          value="sfsfsf"
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
                          name="identityDate"
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
                          name="identityPlace"
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
                    name="address"
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
                      <div class="tooltip__messenger">
                        Số điện thoại di động
                      </div>
                    </div>
                    di đông
                  </label>
                  <div class="input__controller">
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="txtPhoneNumber"
                      class="input__primary"
                    />
                  </div>
                </div>
                <div class="col col-3" style="padding-right: 8px">
                  <label class="input__label" for="txtTelephoneNumber">
                    <div class="tooltip">
                      ĐT
                      <div class="tooltip__messenger">
                        Số điện thoại cố định
                      </div>
                    </div>
                    cố định
                  </label>
                  <div class="input__controller">
                    <input
                      type="tel"
                      name="telephoneNumber"
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
                      name="email"
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
                      name="bankAccountNumber"
                      class="input__primary"
                      id="txtBankAccountNumber"
                    />
                  </div>
                </div>
                <div class="col col-3" style="padding-right: 8px">
                  <label class="input__label" for="txtBankName"
                    >Tên ngân hàng</label
                  >
                  <div class="input__controller">
                    <input
                      type="text"
                      name="bankName"
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
                      name="bankBranchName"
                      class="input__primary"
                      id="txtBankBranchName"
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- end body -->
            <!-- start footer -->
            <div class="employespage__employeeform__footer">
              <div class="employespage__employeeform__footer__right">
                <!-- btn for close and createnew -->
                <button
                  class="btn btn-primary"
                  id="employespage__employeeform__footer__btncreatenew"
                >
                  Cất và Thêm
                </button>
                <!-- btn for close and update -->
                <button
                  class="btn btn-primary"
                  id="employespage__employeeform__footer__btnupdate"
                >
                  Sửa
                </button>
                <!-- btn for close form -->
                <button
                  class="btn"
                  id="employespage__employeeform__footer__btncloseform"
                >
                  Cất
                </button>
              </div>
              <div class="employespage__employeeform__footer__left">
                <!-- btn for reset form -->
                <button
                  class="btn"
                  id="employespage__employeeform__footer__btnresetform"
                >
                  Hủy
                </button>
              </div>
            </div>
            <!-- end footer -->
          </form>
        </div>
        <!-- end employespage_employeeform -->
        <!-- start employespage__popupnotify -->
        <div class="popup" id="employespage__popupnotify">
          <div class="employespage__popupnotify">
            <div class="employespage__popupnotify__body">
              <div class="employespage__popupnotify__body__icon"></div>
              <div class="employespage__popupnotify__body__messenger">
                Dữ liệu đã bị thay đổi. Bạn có muấn cắt không?
              </div>
            </div>
            <div class="employespage__popupnotify__footer">
              <button class="btn btn-primary" id="popupnotify__btnclose">
                Đóng
              </button>
              <button class="btn btn-danger" id="popupnotify__btnok">
                Đồng ý
              </button>
            </div>
          </div>
        </div>
        <!-- end employespage__popupnotify -->
      </div>
</template>

<script>
import EmployesController from "./components/employesController/EmployesController.vue" 
import EmployesPagination from "./components/employesPagination/EmployesPagination.vue"
import EmployesTable from "./components/employesTable/EmployesTable.vue"
export default {
  name: "EmployesPage",
  components: {EmployesController, EmployesPagination,EmployesTable},  
}
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

#employespage__popupnotify.pending .employespage__popupnotify::before,
.employespage .employespage__table.pending::before,
#employespage__employeeform.pending form::before {
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-image: url('../../assets/loading.svg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50px 50px;
  animation: pendingRotate 2s linear 0s infinite reverse;
}
#employespage__popupnotify.pending .employespage__popupnotify::after,
.employespage .employespage__table.pending::after,
#employespage__employeeform.pending form::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
}
@keyframes pendingRotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}


#employespage__employeeform form {
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
#employespage__employeeform form::-webkit-scrollbar {
  display: none;
}

/* btn close */
#employespage__employeeform .employespage__employeeform--close {
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
#employespage__employeeform .employespage__employeeform--close:hover {
  background-color: var(--color-border-red);
  color: var(--color-text-white);
}
/* heading */
#employespage__employeeform .employespage__employeeform__heading {
  display: flex;
  align-items: center;
  padding-bottom: var(--padding-10);
}
#employespage__employeeform .employespage__employeeform__heading--titleshow,
#employespage__employeeform
  .employespage__employeeform__heading--titlecreatenew {
  display: none;
  font-family: notosans semibold;
  color: var(--color-text-black);
  font-size: var(--size-text-lg);
}
#employespage__employeeform.showinfo
  .employespage__employeeform__heading--titleshow {
  display: block;
}
#employespage__employeeform.createnew
  .employespage__employeeform__heading--titlecreatenew {
  display: block;
}
/* body */
#employespage__employeeform .employespage__employeeform__body {
  display: flex;
  flex-direction: column;
  /* gap: var(--padding-18); */
}
#employespage__employeeform .employespage__employeeform__body .input__label {
  margin-top: var(--padding-18);
}
#employespage__employeeform
  .employespage__employeeform__body::-webkit-scrollbar {
  display: none;
}
/* footer */
#employespage__employeeform .employespage__employeeform__footer {
  margin-top: var(--margin-28);
  padding-top: var(--padding-28);
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.employespage__employeeform__footer {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
#employespage__employeeform .employespage__employeeform__footer__right {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: var(--padding-8);
}
#employespage__employeeform__footer__btncreatenew,
#employespage__employeeform__footer__btnupdate {
  display: none;
}
#employespage__employeeform.showinfo
  #employespage__employeeform__footer__btnupdate {
  display: block;
}
#employespage__employeeform.showinfo
  #employespage__employeeform__footer__btncloseform {
  display: none;
}
#employespage__employeeform.createnew
  #employespage__employeeform__footer__btncreatenew {
  display: block;
}
/* end css employespage_employeeform */

/* start css employespage__popupnotify */
.employespage__popupnotify {
  position: relative;
  width: var(--popupnotify-width);
  background-color: var(--color-bg-white);
  border-radius: var(--border-radius);
  padding: var(--padding-28);
  cursor: default;
}
.employespage__popupnotify__body {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: var(--padding-28);
  margin-bottom: var(--margin-28);
}
.employespage__popupnotify__body__icon {
  height: 70px;
  flex-basis: 48px;
  flex-grow: 0;
  flex-shrink: 0;
  background-image: url('../../assets/img/warning-question.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.popup-warningred .employespage__popupnotify__body__icon {
  background-image: url('../../assets/img/warning-red.png');
}
.popup-question .employespage__popupnotify__body__icon {
  background-image: url('../../assets/img/warning-question.png');
}
.employespage__popupnotify__body__messenger {
  flex-grow: 1;
  color: var(--color-text-grey);
}
.employespage__popupnotify__footer {
  padding-top: var(--padding-28);
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}
#popupnotify__btnok {
  display: none;
}
#employespage__popupnotify.popup-question #popupnotify__btnok {
  display: block;
}
/* start css employespage__popupnotify */

</style>