<template>
  <ContentView>
    <!--    主页面-->
    <div class="h-[90vh]  rounded-3xl shadow-xl bg-gradient-to-r from-green-400 to-blue-500 ml-3 mr-3">
      <div class="    hero min-h-screen">
        <div class="    hero-content flex-col lg:flex-row-reverse">
          <img src="../assets/home.png" class=" rounded-lg shadow-2xl"/>
          <div>
            <h1 class="text-5xl font-bold">超实用的功能管理工具 </h1>
            <p class="py-6">像瑞士军刀一样好用,样样都行,让您在工作中得心应手 </p>
            <button class="rounded-full btn  py-3 px-6">立即体验</button>
          </div>
        </div>
      </div>
    </div>
    <h3 class="mt-32 text-5xl font-bold flex justify-center"><a class="text-gray-600">你觉得行，</a>它就能行</h3>
    <h6 class="mt-6 text-2xl text-gray-400 flex justify-center">好用的工具就该如此</h6>
    <div class=" rounded-3xl shadow-2xl bg-white ml-[10vw] mr-[10vw] mt-[5vh] box-border">
      <div id="tab" class="text-center  ">
        <button v-for="item in tab" :key="item.id" :id="item.tag" @click="select(item.id)"
                class=" py-3 px-6 text-gray-400 hover:text-black rounded-full btn btn-ghost normal-case mx-[2vw] mt-6">
          {{ item.name }}
        </button>
      </div>
      <div class="mt-[5vh] grid grid-cols-2 gap-[4vw] w-full ">
        <img v-show="tab[0].show" class="mb-[5vh] col-span-1 w-[45vw] h-[45vh] ml-[4vw] rounded-3xl" src="../assets/todo.png" alt="Photo"/>
        <img v-show="tab[1].show" class="mb-[5vh] col-span-1 w-[45vw] h-[45vh] ml-[4vw] rounded-3xl" src="../assets/cal.png" alt="Photo"/>
        <img v-show="tab[2].show" class="mb-[5vh] col-span-1 w-[45vw] h-[45vh] ml-[4vw] rounded-3xl" src="../assets/habit.png" alt="Photo"/>
        <div class="col-span-1 ">
          <h2 class="flex justify-center  card-title text-6xl">{{ tab[sel].title }}</h2>
          <h2 class="flex justify-center text-gray-500 card-title text-4xl mt-8">{{ tab[sel].content }}</h2>
        </div>
      </div>
    </div>
    <div class=" h-[60vh]  mt-[5vh]   ml-[10vw] mr-[10vw]">
      <div class="grid items-center grid-cols-2 gap-4">
        <div class="card w-full bg-black h-full">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-4xl text-white">☀/🌙日夜模式</h2>
            <h2 class="card-title text-4xl text-white">更加护眼</h2>
          </div>
          <figure class="px-10 pb-10">
            <img src="../assets/darklight.png" alt="light/dark" class="rounded-xl"/>
          </figure>
        </div>
        <div class="card w-full bg-base-100 shadow-xl h-full">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-4xl">🔧模块定义</h2>
            <h2 class="card-title text-4xl">随意切换</h2>
          </div>
          <figure class="px-10 pb-10">
            <img src="../assets/module.png" alt="module" class="rounded-xl"/>
          </figure>
        </div>
      </div>
    </div>
      <div class="grid-cols-2 h-[30vh] mt-[5vh] shadow-2xl rounded-3xl  ml-[10vw] mr-[10vw] card lg:card-side bg-gradient-to-r from-green-400 to-blue-500 shadow-xl">
        <img class="col-span-1 ml-[5vw] mb-6  rounded-3xl mt-[5vh]" src="../assets/community.jpg" alt="Photo"/>
        <div class="col-span-1 ">
          <p class="flex justify-center  text-white   lg:text-6xl mt-[5vh] ml-[5vw]">众人拾柴火焰高</p>
          <p class="flex justify-center  text-gray-300 lg:text-4xl mt-[3vh]">社区共建，无限可能</p>
        </div>
      </div>
  </ContentView>
</template>

<script>

import ContentView from "../components/ContentView.vue";


export default {
  name: "HomeView",
  components: {ContentView},

  data() {
    return {
      sel: 0,
      tab: [
        {
          id: 0,
          tag:"todo",
          name: " 清单",
          title: "列表清单",
          content: "记下才能记住",
          show:false
        },
        {
          id: 1,
          tag:"cal",
          name: " 日程",
          title: "日程安排",
          content: "一切就会妥当",
          show:false

        },
        {
          id: 2,
          tag:"hab",
          name: " 习惯",
          title: "习惯追踪",
          content: "好习惯好生活",
          show:false

        }
      ]
    }
  },

  methods:{
    select(id){
      this.sel=id;
      for (let i = 0; i <3;i++){
        this.tab[i].show=false;
          document.getElementById(this.tab[i].tag).className='py-3 px-6 text-gray-400 hover:text-black rounded-full btn btn-ghost normal-case mx-8 mt-6';
      }
      this.tab[this.sel].show=true;
      document.getElementById(this.tab[this.sel].tag).className='btn rounded-full py-3 px-6 mx-8';

    },
    start(){
      this.tab[0].show=true;
      document.getElementById("todo").className='btn rounded-full py-3 px-6 mx-8';
    }
  },
  mounted() {
    this.start();
  }
}


</script>

<style scoped>
</style>