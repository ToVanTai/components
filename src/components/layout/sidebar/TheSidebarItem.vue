<template>
  <router-link :to="sidebarItemData.to" class="sidebar__body__item">
    <div class="sidebar__body__item--icon">
      <i :class="sidebarItemData.icon"></i>
    </div>
    <div class="sidebar__body__item--text">{{sidebarItemData.title}}</div>
  </router-link>
</template>

<script>
export default {
  props: {
    sidebarItemData : {
      icon: String,//icon
      title: String,//mô tả đường đẫn
      to: String//ấn vào sẽ chuyển sang...
    }
  }
}
</script>

<style >
  .sidebar__body__item {
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: inherit;
  /* transition: all var(--time-transition) ease; */
  }
.sidebar__body__item:hover {
  background-color: var(--color-bg-grey-second);
}
.sidebar__body__item:hover .sidebar__body__item--icon {
  color: var(--color-text-white);
}
.sidebar__body__item--icon {
  flex-basis: var(--sidebar-icon-width);
  flex-shrink: 0;
  height: 100%;
  padding-right: var(--padding-12);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--color-bg-grey-third);
  font-size: var(--size-text-md);
}
.sidebar__body__item--text {
  display: flex;
  height: 100%;
  flex-grow: 1;
  color: var(--color-text-white);
  align-items: center;
  font-size: var(--size-text-sm);
  font-family: notosans regular;
}
</style>