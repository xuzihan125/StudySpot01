<template>
  <div class="spot-footer">
    <div>
      <li class="terms" v-for="(item, index) in footerList" :key="index">
        {{ item }}
      </li>
    </div>
    <p>"Copyright © 2023 The Study Spot",</p>
  </div>
</template>

<script>
import { defineComponent, readonly } from "vue";
export default defineComponent({
  name: "SpotFooter",
  setup(){
    const footerList = readonly([
      "Privacy Policy",
      "FAQ",
      "Terms & Conditions ",
    ]);

    return { footerList };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
@import "@/assets/css/global.scss";

.terms{
  padding-left: 30px;
}

.spot-footer {
  width: 100%;
  height: $footer-height;
  padding: 20px 20px;
  box-sizing: border-box;
  font-size: 14px;
  background-color: #4348bd;
  @include layout(center, center, column);
}

p {
  height: 30px;
}
</style>
