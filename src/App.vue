<template>
  <Container :isPending="isContainerPending"/>
  <!-- ta sẽ đặt toast ở đây vì trong trường hợp thêm mới nhân viên khi thêm thành công thì component sẽ bị unmount nên toast sẽ không thể show ra được. -->
  <BaseToast :isShowToast="toastManager.isShowToast" :typeToast="toastManager.typeToast" @onCloseToast="hideToast" :toastMessage="toastManager.toastMessage"/>
</template>

<script>
import Container from "./components/layout/TheContainer.vue"
import BaseToast from "@/components/common/BaseToast.vue"
import {provide, reactive, ref} from "vue" 
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
      toastManager.toastMessage = ""
    }

    //tạo ref lưu trữ trạng thái hiện icon pending container
    let isContainerPending = ref(false)

    //hàm để hiện icon pending container
    function showPendingContainer(){
      isContainerPending.value = true
    }

    //hàm để ẩn icon pending container
    function hidePendingContainer(){
      isContainerPending.value = false
    }

    //provide showPendingContainer cho toàn bộ component con
    provide("showPendingContainer", showPendingContainer);

    //provide hidePendingContainer cho toàn bộ component con
    provide("hidePendingContainer", hidePendingContainer);

    //provide showtoast cho toàn bộ component con
    provide("showToast", showToast);

    return {
      toastManager,
      hideToast,
      isContainerPending
    }
  }
};
</script>

<style>
@import url("./css/main.css");
</style>
