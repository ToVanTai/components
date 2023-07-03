<template>
    <div class="rails-container">
        <div class="rails-list" ref="ellipsis" :style="{
            'height': heightItem *rowNumber + 'px'
        }">
            <div
                class="rails-item"
                :style="{
                    'line-height': heightItem + 'px',
                }"
                ref="content"
                @click="testClick(item)"
                v-for="item in listData"
                :key="item[keyField]"
            >
                {{ item[textField] }}
            </div>
        </div>

        <div v-if="listHide.length != 0">
            <div
                @click="testClick(item)"
                v-for="item in listHide"
                :key="item[keyField]"
            >
                {{ item[textField] }}
            </div>
        </div>
    </div>
</template>

<script>

import { debounce } from "lodash";
import { getCurrentInstance, onMounted, onBeforeUnmount, ref } from "vue";
export default {
    name: "MsRails",
    props: {
        listData: {
            type: Array,
            default: () => {
                [];
            },
        },
        keyField: {
            type: String,
            default: "id",
        },
        textField: {
            type: String,
            default: "value",
        },
        rowNumber: {
            type: Number,
            default: 1,
        },
        heightItem: {
            type: Number,
            default: 18,
        },
    },
    setup() {
        let { proxy } = getCurrentInstance();

        let timeDelay = ref(proxy.timeDelay);
        const setListHide = debounce(()=>{
            if(proxy.listData && proxy.listData.length > 0){
                    let container = proxy.$refs.ellipsis;
                    if (container) {
                        let lstItem = container.querySelectorAll(".rails-item");
                        if (lstItem.length > 0) {
                            for (let i = 0; i < lstItem.length; i++) {
                                if (!proxy.isElementVisible(container, lstItem[i])) {
                                    proxy.listHide = proxy.listData.slice(i);
                                    return 
                                }
                            }
                        }
                    }
                }
                proxy.listHide = [];
                return;
        },proxy.timeDelay);

        //không nên dùng margin để tính toán vì nó không ăn vào widht, height. thay vào  đó ta dùng padding
        const isElementVisible = (lstElm, itemElm) => {
            let rect = lstElm.getBoundingClientRect();
            let rectItem = itemElm.getBoundingClientRect();
            const isElementInViewport =
                rectItem.x >= rect.x &&
                rectItem.y >= rect.y &&
                rectItem.right <= rect.right &&
                rectItem.bottom <= rect.bottom;
            return isElementInViewport;
        };

        const testClick = (item) => {
            proxy.$emit("rail-click", item);
        };
        
        onMounted(() => {
            window.addEventListener('resize',setListHide);
            setTimeout(() => {
                proxy.setListHide();
            }, proxy.timeDelay);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('resize',setListHide);
        });
        
        return {
            isElementVisible,
            listHide:ref([]),
            setListHide,
            testClick,
            timeDelay
        };
    },
    watch:{
        listData: function(){
            setTimeout(() => {
                this.setListHide();
            }, this.timeDelay);
        }
    }
};
</script>

<style >
.rails-list {
    overflow: hidden;
}
.rails-item {
    display: inline-block;
    cursor: pointer;
    color: green;
    font-weight: bold;
    margin-left: 8px;
    box-sizing: margin-box; /**Quan trọng vãi */
}
.rails-item:hover {
    color: red;
}
</style>