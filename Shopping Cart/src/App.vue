<template>
  <div id='app'>
    <nav-wo></nav-wo>
    <!-- <nav> 无效，一定要有 - -->
    <router-view></router-view>
  </div>
</template>

<script>
import index from './components/index'
import Nav from './components/nav'

export default {
  name: 'App',
  components:{
    'nav-wo': Nav,
  }
}
</script>

<style>

</style>