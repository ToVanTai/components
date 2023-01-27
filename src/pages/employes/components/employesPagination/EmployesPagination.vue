<template>
  <div class="employespage__pagination">
          <!-- hiển thị số lượng bản ghi đã tìm thấy -->
          <div class="employespage__pagination__left">
            <div class="employespage__pagination__left--text">
              {{ paginationResource.total }}: <b>{{employes?.TotalRecord}}</b> {{ paginationResource.records }}
            </div>
          </div>
          <div class="employespage__pagination__right">
            <div class="employespage__pagination__right--selectquantity">
              <!-- ô select để thay đổi số lượng bản ghi trên 1 trang -->
              <div class="input__controller input__iconend">
                <select class="input__primary" v-model="pageSize" >
                  <option value="5" selected="">5 {{paginationResource.recordPerPage}}</option>
                  <option value="10">10 {{paginationResource.recordPerPage}}</option>
                  <option value="15">15 {{paginationResource.recordPerPage}}</option>
                  <option value="20">20 {{paginationResource.recordPerPage}}</option>
                </select>
                <div class="input__icon--end">
                  <i class="fas fa-sort-down"></i>
                </div>
              </div>
            </div>
            <div class="employespage__pagination__right--pagination">
              <!-- hiển thị thanh phân trang -->
              <BasePagination :totalPage="employes?.TotalPage || 1" :currentPage="employes?.PageNumber || $route.query?.pageNumber || 1" :onPaginationClick="handleChangePage"/>
            </div>
          </div>
        </div>
</template>

<script>
import BasePagination from "../../../../components/common/BasePagination.vue"
import { employeePage } from "@/resources";
export default {
  components: {
    BasePagination
  },
  data(){
    return  {
      paginationResource: employeePage.pagination,
      pageSize: this.$route.query.pageSize || 5
    }
  },
  props: {
    employes: {
      type: [Object],
      default: null
    },
    initEmployesTable:{
      type: [Function],
      default: null
    }
  },
  methods: {
    /**
     * useTo: thay đổi url của trình duyệt và lấy ds employee từ server
     * updateBy:
     * author: tovantai
     * createdAt: 27/01/2023
     */
    handleChangePage(pageChange){
      let employeeQuery = {
        pageSize: this.$route.query.pageSize || 5,
        pageNumber: this.$route.query.pageNumber || 1 ,
        employeeFilter: this.$route.query.employeeFilter || "",
        filter: this.$route.query.filter || "",
      }
      employeeQuery.pageNumber = pageChange
      this.$router.push({query:{
        ...employeeQuery
      }})
      setTimeout(() => {
        this.initEmployesTable()
      }, 100);
    }
  },
  watch:{
    pageSize(newPageSize){
      let employeeQuery = {
        pageSize: this.$route.query.pageSize || 5,
        pageNumber: this.$route.query.pageNumber || 1 ,
        employeeFilter: this.$route.query.employeeFilter || "",
        filter: this.$route.query.filter || "",
      }
      employeeQuery.pageSize = newPageSize
      employeeQuery.pageNumber = 1
      this.$router.push({query:{
        ...employeeQuery
      }})
      setTimeout(() => {
        this.initEmployesTable()
      }, 100);
    }
  }
}
</script>

<style>
/* start css employes table */
.employespage__pagination {
  padding-top: var(--padding-8);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.employespage__pagination__left,
.employespage__pagination__right {
  flex-shrink: 0;
}
.employespage__pagination__right {
  display: flex;
  align-items: center;
  gap: 8px;
}
/* end css employes table */
</style>