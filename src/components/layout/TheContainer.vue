<template>
  <div class="my-container">
    <ms-rail v-if="showRails"
      :listData="getDefaultData"
      :keyField="keyField"
      :textField="textField"
      :rowNumber="2"
      :heightItem="30"
      @rail-click="handleRailClick"
    />
    <button @click="n++">increase</button>
    <button @click="n--">decrease</button>
    <button @click="showRails = !showRails">close</button>
  </div>

</template>


<script>
import MsRail from "../common/MsRails.vue";
import { ref, getCurrentInstance, onMounted, computed  } from 'vue';
export default {
  name: "MainContainer",
  components: {
    MsRail
  },
  setup(){
    const {proxy} = getCurrentInstance();
    const keyField = ref();
    const textField = ref();
    const n = ref(16);
    const getDefaultData = computed(()=>{
      let arr = [];
      for(let i = 1; i<=proxy.n; i++){
        arr.push({
          id:'AB'+i,
          value: 'ABC_'+i
        })
      }
      return arr;
    });
    const handleRailClick = (item)=>{
      console.log(item);
    }
    onMounted(()=>{
      proxy.keyField = 'id';
      proxy.textField = 'value';
    })
    return {
      keyField,
      textField,
      getDefaultData,
      handleRailClick,
      n,
      showRails:ref(true)
    };
  }
}
</script>

<style >
.my-container{
  padding: 25px;
  margin: 24px 12px;
}

</style>