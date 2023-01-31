<template>
<ContentView>
  <div class="flex justify-center h-[64vh]  mt-20   ml-[10vw] mr-[10vw]">
    <div class="  card w-[44vw] bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src="../assets/newyear.png" alt="happy" class="rounded-xl" />
      </figure>
      <div class="card-body  text-center">
        <p class="card-title ">我是一个普通的人</p>
        <p>我怕新年的钟声太响，你会听不见我的祝福，我怕除夕的鞭炮太吵，你会收不到我的问候。</p>
        <p  class="text-3xl text-red-500">新年快乐！阖家幸福！</p>
      </div>
    </div>
  </div>

</ContentView>
</template>

<script>
import ContentView from "../components/ContentView.vue";
export default {
  name: "AboutView",
  components: {ContentView}
}
</script>

<style scoped>

</style>