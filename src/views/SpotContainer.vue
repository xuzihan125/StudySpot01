<template>
  <el-container>
    <el-header>
      <SpotHeader/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
      <SpotFooter/>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import SpotHeader from "@/components/layouts/SpotHeader.vue";
import SpotFooter from "@/components/layouts/SpotFooter.vue";
export default {
  name: "Container",
  components: {SpotHeader, SpotFooter}
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
@import "@/assets/css/global.scss";

.el-container {
  min-height: calc(100% - 60px);
}
.el-header {
  padding: 0;
}
.el-main {
  padding-left: 0;
  padding-right: 0;
}
.el-footer{
  padding: 0;
}

</style>
