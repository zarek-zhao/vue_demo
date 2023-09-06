
<script lang="ts" setup>

import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import qs from 'qs'


const router = useRouter();
const activeIndex = ref('1')
// const quote = ref("123")
const myData = reactive({
  quote: null
})

const comfort_word_one_day = ref("")
const videoUrl = ref("")

let items = reactive([
  {
    id: "",
    name: ""
  }
])




function method() {

  const quote = {
    quote: "asd",
    name: "zhaoruihang"
  }

  axios({
    method: "POST",
    withCredentials: false,
    data: quote,
    headers: {
      // 'X-Requested-With': 'XMLHttpRequest',
      "Content-Type": "application/json",
      // 'Access-Control-Allow-Methods': 'POST',
      // 'Access-Control-Request-Headers': 'Content-Type'
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    },
    url: "https://api.kanye.rest/",
    // params: {
    //   username: "zhaoruihang",
    //   age: 12
    // },
    //   transformRequest: [function (data, headers) {
    //   // 对发送的 data 进行任意转换处理

    //   return qs.stringify(quote);
    // }],
    responseType: "json"
  }).then((res) => {
    console.log(res)
    // const quote = JSON.parse(res.data.quote)
    myData.quote = res.data.quote
  })


  // axios.post('https://api.kanye.rest/',qs.stringify(quote)).then(response => {
  //   // handle response
  //   console.log(response)
  //   const data = response.data
  //   myData.quote = data;


  // })
  return 123

}

function comfort_word() {

  axios({
    method: "GET",
    // withCredentials: false,
    url: "https://v.api.aa1.cn/api/yiyan/index.php",
    params: {
      type: "json"
    },
    // data: {
    //   quote: "qwe"
    // },
    responseType: "json"
  }).then((res) => {
    console.log(res)
    // const quote = JSON.parse(res.data.quote)
    comfort_word_one_day.value = res.data.anwei
  })

  // axios.get("https://v.api.aa1.cn/api/yiyan/index.php").then(data=>{
  //     console.log(data.data);
  // })
  // await axios.get('https://api.kanye.rest/').then(response => {
  //   // handle response
  //   console.log(response)
  //   const data = response.data
  //   myData.quote = data;


  // })
  return 123

}

function getVideoUrl() {

  axios({
    method: "GET",
    // withCredentials: false,
    url: "https://zj.v.api.aa1.cn/api/bk/",
    params: {
      num: 5,
      type: "json"
    },
    // data: {
    //   quote: "qwe"
    // },
    responseType: "json"
  }).then((res) => {
    console.log(res)
    console.log(res.data.content)
    items = res.data.content
    console.log(items);

    // const quote = JSON.parse(res.data.quote)
    // videoUrl.value = res.data.mp4
  })

  // axios.get("https://v.api.aa1.cn/api/yiyan/index.php").then(data=>{
  //     console.log(data.data);
  // })
  // await axios.get('https://api.kanye.rest/').then(response => {
  //   // handle response
  //   console.log(response)
  //   const data = response.data
  //   myData.quote = data;


  // })


}




const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
  if (key == "login") {
    router.push({ path: '/login' })
  } else if (key == "home") {
    // router.push({ path: '/' })
    method()
  } else if (key == "comfort_word") {
    comfort_word()
  } else if (key == "video") {
    getVideoUrl()
  }
}

import axios from 'axios';






</script>

<template id="#app">
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.name }}</li>
  </ul>
  <!-- <video controls>
    <source src="{{ videoUrl }}" type="video/mp4">
    您的浏览器不支持 HTML5 视频播放。
  </video> -->
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <div class="h-6" />
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
    text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
    <el-menu-item index="login">登录</el-menu-item>
    <el-sub-menu index="workPlace">
      <template #title>工作空间</template>
      <el-menu-item index="home">主页</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="comfort_word">安慰</el-menu-item>
    <el-menu-item index="video">视频</el-menu-item>
    <el-menu-item index="5">Orders</el-menu-item>
  </el-menu>

  <p style="color: red;">{{ myData.quote }}</p>

  <br />

  <p>每日安慰：{{ comfort_word_one_day }}</p>

  <br />



  <router-view />
  <router-link :to="{ path: '/login' }">
    跳转到c语言详情页
  </router-link>

  <router-link :to="{ path: '/' }">
    跳转到b语言详情页
  </router-link>
</template>



<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
