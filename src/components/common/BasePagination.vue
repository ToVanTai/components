<template>
  <ul class="pagination" v-html="showData" ref="pagination">
  </ul>
</template>

<script>
import { employeePage } from '@/resources';
export default {
  name: 'PaginationComponent',
  data() {
    return { paginationResources: employeePage.pagination };
  },
  props: {
    totalPage: {
      type: [Number, String],
      required: true,
    },
    currentPage: {
      type: [Number, String],
      required: true,
    },
    onPaginationClick: Function,
  },
  computed: {
    showData() {
      var liTagHtml = ``;
      if (Number(this.totalPage) >= 1 && Number(this.totalPage) <= 5) {
        if (Number(this.currentPage) > 1) {
          liTagHtml += `<li data-index=${Number(this.currentPage) - 1} class="prev">${employeePage.pagination.prev}</li>`;
        }
        for (let i = 1; i <= Number(this.totalPage); i++) {
          if (i == Number(this.currentPage)) {
            liTagHtml += `<li class="num active">${i}</li>`;
          } else {
            liTagHtml += `<li data-index=${i} class="num">${i}</li>`;
          }
        }
        if (Number(this.currentPage) < Number(this.totalPage)) {
          liTagHtml += `<li data-index=${Number(this.currentPage) + 1} class="next">${employeePage.pagination.next}</li>`;
        }
      } else if (Number(this.totalPage) > 5) {
        let before = Number(this.currentPage) - 1;
        let after = Number(this.currentPage) + 1;
        if (Number(this.currentPage) > 1) {
          liTagHtml += `<li data-index=${Number(this.currentPage) - 1} class="prev">${employeePage.pagination.prev}</li>`;
        }
        if (Number(this.currentPage) > 2) {
          liTagHtml += `<li data-index=1 class="num">1</li>`;
          if (Number(this.currentPage) > 3) {
            liTagHtml += `<li class="dots">...</li>`;
          }
        }
        if (Number(this.currentPage) == 1) {
          before++;
          after++;
        }
        if (Number(this.currentPage) == Number(this.totalPage)) {
          before--;
          after--;
        }
        for (let i = before; i <= after; i++) {
          if (i == Number(this.currentPage)) {
            liTagHtml += `<li class="num active">${i}</li>`;
          } else {
            liTagHtml += `<li data-index=${i} class="num">${i}</li>`;
          }
        }
        if (Number(this.currentPage) < Number(this.totalPage) - 1) {
          if (Number(this.currentPage) < Number(this.totalPage) - 2) {
            liTagHtml += `<li class="dots">...</li>`;
          }
          liTagHtml += `<li data-index=${Number(this.totalPage)} class="num">${Number(this.totalPage)}</li>`;
        }
        if (Number(this.currentPage) < Number(this.totalPage)) {
          liTagHtml += `<li data-index=${Number(this.currentPage) + 1} class="next">${employeePage.pagination.next}</li>`;
        }
      }
      return liTagHtml
    }
  },
  mounted(){
    let that  = this;
    var divContainer = this.$refs['pagination'];
    for(let i = 0; i< divContainer.childNodes.length;i++){
      
      divContainer.childNodes[i].addEventListener("click", function(event){
        let dataIndex = event.target.dataset.index;
        if(dataIndex && dataIndex.length >=1){
          that.onPaginationClick(dataIndex)
        }
      })
    }
  },
  updated(){
    let that  = this;
    var divContainer = this.$refs['pagination'];
    for(let i = 0; i< divContainer.childNodes.length;i++){
      
      divContainer.childNodes[i].addEventListener("click", function(event){
        let dataIndex = event.target.dataset.index;
        if(dataIndex && dataIndex.length >=1){
          that.onPaginationClick(dataIndex)
        }
      })
    }

  }
};
</script>

<style>
.pagination {
  list-style: none;
  display: flex;
  gap: 8px;
}
.pagination li {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--size-text-sm);
}
.pagination li.btn,
.pagination li.next,
.pagination li.prev {
  cursor: pointer;
}
.pagination li.num {
  border: 1px solid transparent;
  cursor: pointer;
}
.pagination li.dots {
  cursor: default;
}
.pagination li.num:hover {
  border-color: var(--color-border);
  font-family: notosans semibold;
}
.pagination li.num.active {
  border-color: var(--color-border);
  cursor: default;
  font-family: notosans regular;
}
.pagination li.prev:hover,
.pagination li.next:hover {
  color: var(--color-bg-grey-third);
}
</style>
