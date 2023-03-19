<template>
  <div>test</div>
  <ElIcon :size="30" color="hotpink">
    <edit />
  </ElIcon>
  <div>test</div>

  <!--swiper-->
  <div class="swiper" style="padding-top: 20px; padding-bottom: 75px">
    <my-title
        title="learning in the study spot!"
        subtitle="In the study spot, our focus is to create a platform that is user-friendly and visually appealing, with a range of features to enhance the online learning experience for our students."
        title-pad=20px
        subtitle-pad=20px></my-title>
    <el-carousel class="swiper-container" type="card" height="20vw" :interval="4000">
      <el-carousel-item v-for="(item, index) in swiperList" :key="index">
        <img :src="item.picImg" />
      </el-carousel-item>
    </el-carousel>
  </div>

  <!-- courses -->
  <div class="course-card" style="padding-top: 50px; padding-bottom: 75px; background-color: bisque">
    <my-title
        title="We have plenty options for you"
        subtitle="In the study spot, we have many highly rated courses that may be helpful to you, which is specialized for online study."
        title-pad=20px
        subtitle-pad=20px></my-title>
    <el-row class = "tempo1">
      <el-col
          v-for="(course, index) in courses"
          :key="course"
          :span="5"
          :offset="index > 0 ? 1 : 0"
      >
        <course-card
          :img-url="course.image"
          :course-name="course.name"
          :score="course.score"
          :parti="course.people"></course-card>
      </el-col>
    </el-row>
  </div>

  <!-- search bar-->
  <div class="search-bar" style="padding-top: 50px; padding-bottom: 75px">
    <my-title
        title="Let's see if we have anything that interests you"
        subtitle="Give us a hint. Tell us what you want to learn, and we can start from there."
        title-pad=20px
        subtitle-pad=20px></my-title>
    <div style="text-align: -webkit-center">
      <div style="padding-left: 200px; padding-right: 200px">
        <el-input
            v-model="input3"
            placeholder="Please input"
            class="input-with-select"
        >
          <template #prepend>
            <el-button :icon="Search" />
          </template>
          <template #append>
            <el-select v-model="select" placeholder="Select" style="width: auto; min-width: 50px; max-width: 200px" >
              <el-option v-for="(value, index) in searchOption" :label="value.label" :value="value.value" />
            </el-select>
          </template>
        </el-input>
      </div>
      <div class="popular-subject" style="padding-top: 20px">
        <el-text type="info"> POPULAR:</el-text>
        <el-button type="primary" plain round v-for="(content, index) in popular" :key="index">{{content.content}}</el-button>
      </div>
    </div>
  </div>

  <!-- comment of users-->
  <div class="comments" style="padding-top: 50px; padding-bottom: 75px; background-color:  #2c95d7">
    <my-title
        title="Feel unsure? Let's see what others have achieved"
        subtitle="Give us a hint. Tell us what you want to learn, and we can start from there."
        title-pad=20px
        subtitle-pad=20px></my-title>
    <el-row class = "tempo1">
      <el-col
          v-for="(course, index) in comments"
          :key="course"
          :span="5"
          :offset="index > 0 ? 1 : 0">
          <course-card
              :icon-url = course.image
              :course-name = course.name
              :desc = course.desc
          ></course-card>
      </el-col>
    </el-row>
  </div>

  <!-- questions -->
  <div class="questions" style="padding-top: 50px; padding-bottom: 75px;">
    <my-title
        title="Need a hand? There are some thing that may be helpful"
        subtitle="Here is some most asked questions."
        title-pad=20px
        subtitle-pad=20px></my-title>
    <div class="question-bank" style="padding-right: 200px; padding-left: 200px">
      <el-collapse>
        <div v-for="(item, index) in question" :key="index">
          <el-collapse-item :title="item.title">
            <div>{{item.content}}</div>
          </el-collapse-item>
        </div>
      </el-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { swiperList } from "@/enums/swipper";
import {homePageContent} from "@/enums/home";
import {defineComponent, ref} from "vue"
import myTitle from "@/components/layouts/MyTitle.vue";
import CourseCard from "@/components/layouts/CourseCard.vue";
import { UserFilled } from '@element-plus/icons-vue'


export default defineComponent({
  components:{
    myTitle,
    CourseCard,
    UserFilled,
  },

  setup(){
    const select = ref('')

    const searchOption = [
      {
        label:"class",
        value:"1",
      },
      {
        label:"diploma",
        value:"2",
      },
      {
        label:"certificate",
        value:"3",
      },
    ]

    const popular=[
      {
        content:"Machine Learning"
      },
      {
        content:"Deep Learning"
      },
      {
        content:"VUE"
      },

      {
        content:"Django"
      },
      {
        content:"Spring Boot"
      },
    ]

    const courses = [{
      name:'Algorithm',
      image: new URL('@/assets/images/algorithm.png',  import.meta.url).href,
      desc:'Alex',
      score:5,
      people:300,
    },
      {
        name:'Data Structure',
        image: new URL('@/assets/images/dataStructure.png',  import.meta.url).href,
        desc:'Alex',
        score:4.8,
        people:157,
      },
      {
        name:'Machine Learning',
        image: new URL('@/assets/images/machine-learning.png',  import.meta.url).href,
        desc:'Alex',
        score:4.7,
        people:100,
      },
      {
        name:'Database',
        image: new URL('@/assets/images/database.jpg',  import.meta.url).href,
        desc:'Alex',
        score:3,
        people:50,
      },
    ]
    const comments = [{
      name:'Alex A.',
      image: UserFilled,
      desc:'Alex say this is a good website',
    },
      {
        name:'Beth B.',
        image: UserFilled,
        desc:'Beth say this is a good website',
      },
      {
        name:'Catherine C.',
        image: UserFilled,
        desc:'Catherine say this is a good website',
      },
      {
        name:'Debby D.',
        image: UserFilled,
        desc:'Debby say this is a good website',
      },
    ]

    const  question = [{
      title: "Register",
      content:"some introduction about register"
    },
      {
        title: "Taking course",
        content:"some introduction to taking course"
      },
      {
        title: "Graduation",
        content:"some introduction to Graduation"
      },
      {
        title: "Certification",
        content:"some introduction to Certification"
      },]

    return{
      swiperList,
      homePageContent,
      searchOption,
      courses,
      comments,
      question,
      popular,
      select,
    }
  }
})

</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";

.tempo1{
  padding-left: 200px;
  padding-right: 200px;
}

/*轮播图*/
.swiper-container {
  width: 90%;
  margin: auto;
  padding-top: 20px;
  img {
    width: 100%;
  }
}


.swiper-container:deep(.el-carousel__indicators.el-carousel__indicators--outside) {
  display: inline-block;
  transform: translateX(30vw);
}

//.el-slider__runway {
//  background-color: $color-blue;
//}

.play-title {

  font-size: 28px;
  text-align: center;
  font-family: "arial", serif;
  font-weight: bolder;
  color: $color-black;
  box-sizing: border-box;
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
}

.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.course-card{
  background-color: bisque;
  padding-bottom: 20px;
  padding-top: 20px;
}

</style>
