<template>
  <TheTitle />
  <div class="employespage">
    <!-- tìm kiếm theo tên, mã, số điện thoại -->
    <EmployesController />
    <EmployesTable />
    <EmployesPagination />

  </div>
</template>

<script>
import EmployesController from "./components/employesController/EmployesController.vue";
import EmployesPagination from "./components/employesPagination/EmployesPagination.vue";
import EmployesTable from "./components/employesTable/EmployesTable.vue";
import TheTitle from "../../components/layout/title/TheTitle.vue";
import {} from "vue";
export default {
  name: "EmployesPage",
  components: {
    EmployesController,
    EmployesPagination,
    EmployesTable,
    TheTitle
  },
  setup() {
    // tạo provide cho các components: controller, pagination, table, popup
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
};
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
</style>