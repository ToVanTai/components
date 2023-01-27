<template>
  <!-- hiển thị ô input tìm kiếm theo mã và tên nhân viên, và icon để thực hiện hành động tìm kiếm -->
  <div class="employespage__controller">
    <div class="employespage__controller__left">
      <div class="dropdown">
        <div class="dropdown__btn btn">{{employeePage.controller.deleteList}} <i class="fas fa-sort-down"></i></div>
        <div class="dropdown__list">
          <div class="dropdown__item btn">{{employeePage.controller.delete}}</div>
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
    </div>
  </div>
  
</template>

<script>
import { employeePage } from '@/resources';

export default {
  data() {
    return {
      employeePage,
      employeefilter: this.$route.query?.filter || this.$route.query?.employeeFilter || "" 
    };
  },
  props: {
    initEmployesTable: {
      type: [Function, null],
      default: function () {},
    }
  }
  ,
  methods: {
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
