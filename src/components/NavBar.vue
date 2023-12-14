<template>
  <div class="container mx-auto mt-1  navbar bg-base-100 shadow-md rounded-full">
    <div class="  navbar-start">
      <div class="  dropdown">
        <label tabindex="0" class="  btn   btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </label>
        <ul tabindex="0" class="  menu   menu-compact   dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
          <router-link class="nav-link" :to="{name:'home'}">
          <li><a>首页</a></li>
          </router-link>
          <router-link class="nav-link" :to="{name:'pricing'}">
          <li><a>定价</a></li>
          </router-link>
          <router-link class="nav-link" :to="{name:'about'}">
          <li><a>关于</a></li>
          </router-link>
        </ul>
      </div>
      <a class="rounded-full btn btn-ghost normal-case text-xl">UtiBoX</a>
    </div>
    <div class="  navbar-center hidden lg:flex">
      <router-link class="nav-link" :to="{name:'home'}">
        <a class="py-3 px-6 text-gray-400 hover:text-black  rounded-full btn btn-ghost normal-case mx-8 ">首页</a>
      </router-link>
      <router-link class="nav-link" :to="{name:'pricing'}">
        <a class="py-3 px-6 text-gray-400 hover:text-black  rounded-full btn btn-ghost normal-case mx-8 ">定价</a>
      </router-link>
      <router-link class="nav-link" :to="{name:'about'}">
        <a class="py-3 px-6 text-gray-400 hover:text-black  rounded-full btn btn-ghost normal-case mx-8 ">关于</a>
      </router-link>
    </div>
    <div class="navbar-end">
      <a href="https://pan.quark.cn/s/60fff6aa3e2f#/list/share" class="btn rounded-full py-3 px-6">下载</a>
    </div>
  </div>
</template>

<script>
import HomeView from "../views/HomeView.vue";
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
