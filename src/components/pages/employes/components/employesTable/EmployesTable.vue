<template>
  <div class="employespage__table">
          <table class="table">
            <thead>
              <tr>
                <th class="checkbox"><input type="checkbox" /></th>
                <th>Mã nhân viên</th>
                <th>Tên nhân viên</th>
                <th>Giới tính</th>
                <th class="date">Ngày sinh</th>
                <th>
                  Số
                  <div class="tooltip tooltip__bottom">
                    cmnd
                    <div class="tooltip__messenger">số chứng minh nhân dân</div>
                  </div>
                </th>
                <th>Chức danh</th>
                <th>Tên đơn vị</th>
                <th>Số tài khoản</th>
                <th>Tên ngân hàng</th>
                <th>
                  Chi nhánh
                  <div class="tooltip tooltip__bottom">
                    TK
                    <div class="tooltip__messenger">
                      chi nhánh tài khoản ngân hàng
                    </div>
                  </div>
                  ngân hàng
                </th>
                <th class="more">Chức năng</th>
              </tr>
            </thead>
            <tbody id="employestable">
              <EmployesTableItem v-for="employee in employesData.Data" :key="employee.EmployeeId" :employee="employee" />
            </tbody>
          </table>
        </div>
</template>

<script>
import EmployesTableItem from "./EmployesTableItem.vue"
import employesData from "../../../../../data/employes" 
export default {
  components: {EmployesTableItem},
  data(){
    return {
      employesData
    }
    
  }
}
</script>

<style>
  .employespage .employespage__table {
  height: calc(100vh - (40px + 92px + 18px + 50px + 18px + 18px + 24px));
  position: relative;
  /* overflow: hidden; */
}
.employespage .employespage__table table {
  display: block;
  height: 100%;
  width: 100%;
  overflow: auto;
}

</style>