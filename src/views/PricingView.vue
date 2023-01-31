<template>
<ContentView>
  <div class=" h-[64vh]  mt-20   ml-[10vw] mr-[10vw]">
  <div class=" card w-full bg-base-100 shadow-xl">
    <div class=" card-body">
      <h2 class="flex justify-center card-title">
        封闭测试
        <div class="badge badge-secondary">Beta</div>
      </h2>
      <div class="overflow-x-auto flex justify-center">
        <table class="table w-5/6">
          <thead>
          <tr>
            <th>功能</th>
            <th>价格</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>导航栏</td>
            <td>免费(5个模块)</td>
          </tr>
          <tr>
            <td>插件</td>
            <td>免费</td>
          </tr>
          <tr>
            <td>主题</td>
            <td>免费(内置5种)</td>
          </tr>
          <tr>
            <td>拓展</td>
            <td>免费</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="alert shadow flex justify-center mt-6">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>产品开发中，不代表最终定价</span>
        </div>
      </div>

    </div>
  </div>
  </div>
</ContentView>
</template>

<script>
import ContentView from "../components/ContentView.vue";
export default {
  name: "PricingView",
  components:{
    ContentView
  }
}
</script>

<style scoped>

</style>