<template>
  <ul class="pagination">
    <li class="num active">1</li>
    <li data-index="2" class="num">2</li>
    <li data-index="3" class="num">3</li>
    <li data-index="4" class="num">4</li>
    <li data-index="5" class="num">5</li>
    <li data-index="2" class="next">{{paginationResources.next  }}</li>
  </ul>
</template>

<script>
import { employeePage } from '@/resources';
export default {
  name: "PaginationComponent",
  data(){
    return { paginationResources : employeePage.pagination}
  }
}
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