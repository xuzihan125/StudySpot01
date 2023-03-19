<template>
  <el-card shadow="always">
    <el-image
        :src="imgUrl"
        :fit="'fill'"
        class="image"
        v-if="imgUrl"
    />
    <el-row type="flex" justify="center">
    <el-avatar
        v-if="iconUrl"
        shape="circle"
        :size="50"
        :icon="iconUrl"
        :fit="'cover'"
        class="image"></el-avatar>
    </el-row>
    <el-row class="course-name" style="padding-top:10px; padding-bottom: 5px; justify-content: center">
      <p style="font-size: 20px; font-weight: bolder; font-family: 'arial', serif" >{{courseName}}</p>
    </el-row>
    <el-row class="class-rate" v-if="score" style="padding-bottom: 5px; justify-content: center">
      <el-rate  v-model="score" disabled show-score score-template="{value} /5" />
    </el-row>
    <el-row class="class-attend" v-if="parti" style="padding-bottom: 20px; justify-content: center">
      <span style="color: #999999" >{{parti}} has joined</span>
    </el-row>
    <el-row class="class-attend" v-if="desc" style="padding-bottom: 20px; justify-content: center">
      <span style="color: #999999" >{{desc}} </span>
    </el-row>
  </el-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CourseCard",

  props:{
    imgUrl: String,
    courseName: String,
    score: Number,
    parti: Number,
    iconUrl: String,
    desc:String,
  }
})
</script>

<style scoped>

</style>
