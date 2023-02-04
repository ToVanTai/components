<template>
  <div :class="{
    mstoast: true,
    show: isShowToast
  }">
    <div>
      <div
        class="mstoast__icon"
        :style="{ backgroundColor: toastData[typeToast].mainColor }"
      >
        <i :class="toastData[typeToast].icon"></i>
      </div>
      <div class="mstoast__content">
        <span :style="{ color: toastData[typeToast].mainColor }">{{
          toastData[typeToast].title
        }}</span>
        {{toastMessage}}
      </div>
    </div>
    <div>
      <div class="mstoast__close" @click="onCloseToast"><i class="fas fa-times"></i></div>
    </div>
  </div>
</template>

<script>
import toastData from "@/data/toast";
import {ref} from "vue"
export default {
  setup(){
    let idTimeout = ref(null)
    return {
      idTimeout
    }
  },
  data() {
    return {
      toastData
    };
  },
  props: {
    /**success, error, warning, info */
    typeToast: {
        type: String,
        default: "success"
    },
    isShowToast: {
        type: Boolean,
        default: false
    },
    toastMessage: String
  },
  methods:{
    /**
     * useTo: emit sk khi click vào icon close
     * updateBy: tovantai_3/2/2022
     * author: tovantai
     * createdAt: 3/2/2022
     */
    onCloseToast(){
        this.$emit("onCloseToast")
    }
  },
  watch:{
    /**
     * useTo: emit sk close sau 2 giây
     * updateBy: tovantai_3/2/2022
     * author: tovantai
     * createdAt: 3/2/2022
     */
    isShowToast(current){
        if(current){
            this.idTimeout = setTimeout(()=>{
                this.$emit("onCloseToast")
            },5000)
        }else{
          clearTimeout(this.idTimeout)
        }
    }
  }
};
</script>

<style scoped>
.mstoast {
  position: fixed;
  z-index: 1001;
  left: 50%;
  transform: translate(-50%, 0%);
  min-width: 450px;
  max-width: 650px;
  background: var(--color-bg-white);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.078);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 110px;
  padding: var(--padding-20) var(--padding-16);
  transition: opacity 0.3s, top 0.3s;
  opacity: 0;
  top: -75px;
}

.mstoast.show{
    opacity: 1;
    top: 10px;
}
.mstoast > div:first-child {
  flex-basis: 100%;
  display: flex;
  align-items: center;
}
.mstoast > div:last-child {
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 16px;
}
.mstoast__icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-white);
  font-size: var(--size-text-xs);
  margin-right: 10px;
}
.mstoast__content {
  color: var(--color-text-grey);
  font-size: var(--size-text-md);
}
.mstoast__content span {
  font-family: notosans semibold;
}
.mstoast__close {
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--size-text-md);
  color: var(--color-bg-grey-third);
  cursor: pointer;
}
</style>