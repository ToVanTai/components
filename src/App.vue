<template>
  <Container/>
  <!-- ta sẽ đặt toast ở đây vì trong trường hợp thêm mới nhân viên khi thêm thành công thì component sẽ bị unmount nên toast sẽ không thể show ra được. -->
  <BaseToast :isShowToast="toastManager.isShowToast" :typeToast="toastManager.typeToast" @onCloseToast="hideToast" :toastMessage="toastManager.toastMessage"/>
</template>

<script>
import Container from "./components/layout/TheContainer.vue"
import BaseToast from "@/components/common/BaseToast.vue"
import {provide, reactive} from "vue" 

export default {
  components: {Container, BaseToast},
  setup(){
    //tạo reactive lưu trữ trạng thái toast
    let toastManager = reactive({
      isShowToast: false,
      typeToast: "success",
      toastMessage: ""
    })
    //hàm để hiện toast
    function showToast(typeToast , toastMessage ){
      toastManager.isShowToast = true
      toastManager.typeToast = typeToast
      toastManager.toastMessage = toastMessage
    }
    //hàm để ẩn toast
    function hideToast(){
      toastManager.isShowToast = false
      toastManager.typeToast = "success"
      toastManager.toastMessage = ""
    }

    //provide showtoast cho toàn bộ component con
    provide("showToast", showToast);

    return {
      toastManager,
      hideToast
    }
  },
  data(){
    return {
      isChecked : true
    }
  },
  methods:{
    handleToggleCheckbox(){
      this.isChecked=!this.isChecked;
      console.log("sfs");
    }
  }
};
</script>

<style>
@import url("./css/main.css");
</style>
