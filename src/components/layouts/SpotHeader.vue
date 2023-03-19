<template>
  <div class="yin-header">
    <!--图标-->
    <div class="header-logo">
      <el-image style="width: 100px; height: 50px" :fit="'cover'" :src="iconUrl" />
    </div>
    <list class="yin-header-nav" :styleList="headerNavList" :activeName="activeNavName" @click="goPage"></list>
    <!--搜索框-->
    <div class="header-search">
      <!--      <el-input placeholder="Search" :prefix-icon="Search" v-model="keywords"/>-->
      <el-input
          v-model="input1"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
          :suffix-icon="Search"
      />
    </div>
    <!--设置-->
    <list v-if="!token" :styleList="signList" :activeName="activeNavName" @click="goPage"></list>
    <el-dropdown class="user-wrap" v-if="token" trigger="click">
      <el-image class="user" fit="contain" :src="attachImageUrl(userPic)" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="(item, index) in menuList" :key="index" @click.stop="goMenuList(item.path)">{{ item.name }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, computed, reactive } from "vue";
import { Search } from "@element-plus/icons-vue";
import List from "@/components/layouts/list.vue";
// import { HEADERNAVLIST, SIGNLIST, MENULIST, Icon, MUSICNAME,} from "@/enums";

export default defineComponent({
  components: {
    List,
  },
  setup() {
    // const musicName = ref(MUSICNAME);
    const headerNavList = ["class", "diploma", "certificates"]//ref(HEADERNAVLIST); // 左侧导航栏
    const signList = ["register", "login"]; // 右侧导航栏
    const iconUrl = new URL('@/assets/icon/logo1.png',  import.meta.url).href
    // const menuList = ref(MENULIST); // 用户下拉菜单项
    const iconList = reactive({
      ERJI: "#icon-erji",
    });
    const keywords = ref("");


    return {
      // musicName,
      headerNavList,
      signList,
      iconUrl,
      // menuList,
      iconList,
      keywords,
      Search,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/css/var.scss";
@import "@/assets/css/global.scss";

@media screen and (min-width: $sm) {
  .header-logo {
    margin: 0 1rem;
  }
}

.yin-header {
  position: fixed;
  width: 100%;
  height: $header-height;
  line-height: $header-height;
  padding: $header-padding;
  margin: $header-margin;
  background-color: #4348bd;
  box-shadow: $box-shadow;
  box-sizing: border-box;
  z-index: 100;
  display: flex;
  white-space: nowrap;
  flex-wrap: nowrap;
}

/* LOGO */
.header-logo {
  font-size: $font-size-logo;
  font-weight: bold;
  cursor: pointer;
  .icon {
    @include icon(1.9rem, $color-grey);
    vertical-align: middle;
  }
  span {
    margin-left: 1rem;
  }
}

.yin-header-nav {
  flex: 1;
}

.website-title{
  line-height: 3.3rem;
  color: $color-grey;
  border-bottom: none;
}

/*搜索输入框*/
.header-search {
  margin: 0 ;
  width: 100%;
  &::v-deep input {
    text-indent: 5px;
    //max-width: $header-search-max-width;
    //min-width: $header-search-min-width;
    //border-radius: $header-search-radius;
    box-shadow: none;
    background-color: $color-light-grey;
    color: $color-black;
  }
}

</style>
