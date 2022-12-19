<template>
  <div class="sidebar">
      <div class="sidebar__header">
        <div class="sidebar__header--toggle"><i class="fas fa-th"></i></div>
        <router-link to="/" class="sidebar__header__logo">
          <img
            src="../../../assets/img/Logo_Module_TiengViet_White.66947422.svg"
            alt="QLNV AMIS kế toán"
          />
        </router-link>
      </div>
      <div class="sidebar__body">
        <!-- render danh sách các item bên trong sidebar -->
        <SidebarItem v-for="(item, index) in sidebarData" :key="index" :sidebarItemData="item">
        </SidebarItem>
      </div>
    </div>
</template>


<script>
import sidebarData from "../../../data/sidebar.js"
import SidebarItem from "./TheSidebarItem.vue"
export default {
  components: {SidebarItem},
  data(){
    return {
      sidebarData
    }
  }
}
</script>

<style>
  
.sidebar {
  flex-basis: var(--sidebar-width);
  flex-shrink: 0;
  flex-grow: 0;
  background-color: var(--color-bg-grey);
}

.sidebar__header {
  height: var(--header-height);
  display: flex;
  padding: 0px var(--padding-26);
  align-items: center;
  gap: 12px;
}
.sidebar__header--toggle {
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-size: var(--size-text-md);
  color: var(--color-text-white);
  font-weight: 300;
}
.sidebar__header__logo {
  flex-grow: 1;
  height: 32px;
}

.sidebar__body {
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
  padding-top: var(--padding-12);
}
.sidebar__body::-webkit-scrollbar {
  display: none;
}


</style>