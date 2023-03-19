<template>
  <div class="play-title">
    {{title}}
  </div>
  <div class="play-subtitle" style="padding-bottom: 20px">
    {{subtitle}}
  </div>
</template>

<script>
import { defineComponent } from "vue";


export default defineComponent({
  name: "Title",
  props: {
    title: String,
    titlePad: String,
    subtitle: String,
    subtitlePad: String,

  },
});
</script>

<style>
.play-title {

  font-size: 28px;
  text-align: center;
  font-family: "arial", serif;
  font-weight: bolder;
  color: #000000;
  box-sizing: border-box;
  padding-bottom: v-bind("titlePad");
}

.play-subtitle {
  padding-right: 300px;
  padding-left: 300px;
  font-family: "arial", serif;
  font-size: 16px;
  font-weight: lighter;
  text-align: center;
  color: #313131;
  box-sizing: border-box;
  padding-bottom: v-bind("subtitlePad");
}
</style>
