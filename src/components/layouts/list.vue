<template>
  <ul class="yin-header-nav">
    <li v-for="item in styleList" >
      {{ item }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    styleList: Array,
    activeName: String,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";

li {
  margin: $header-nav-margin;
  padding: $header-nav-padding;
  line-height: 3.3rem;
  color: $color-grey;
  border-bottom: none;
  cursor: pointer;
}

li.active {
  color: $color-black;
  font-weight: 600;
  border-bottom: 5px solid $color-black;
}
</style>
