<template>
  <div class="main">
    <Header/>
    <Title/>
    <EmployesPage/>
  </div>
</template>

<script>
import Header from "./header/TheHeader.vue"
import Title from "./title/TheTitle.vue"
import EmployesPage from "../../pages/employes/Employes.vue"
export default {
  name : "MainLayout", 
  components: {
    Header,Title,EmployesPage
  }
}
</script>

<style >
  .main {
    flex-grow: 1;
    height: 100vh;
    background-color: var(--color-bg-grey-four);
    overflow-x: hidden;
  }

</style>