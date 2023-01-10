<template>
  <div class="title">
    <div class="title__text">{{ mainTitle.employee.title }}</div>
    <BaseButton :btnClick="btnCreatenewEmployeeClick" 
    :isPrimary="true">
    {{ mainTitle.employee.createNewEmployee }}
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "../../../components/common/BaseButton.vue"
import {mainTitle} from "../../../resources/index"
export default {
  components: {BaseButton},
  
  data(){
    return {
      mainTitle
    }
  },
  props: {
    btnCreatenewEmployeeClick: {
      type: [Function, null],
      default: null
    }
  }
}
</script>

<style >
.title {
  padding: var(--padding-24);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title__text {
  font-family: notosans bold;
  color: var(--color-text-black);
  font-size: var(--size-text-lg);
}
</style>