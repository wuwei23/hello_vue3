
<template>
    <!-- <TS a="aa" :list="personList" /> -->
    <!-- <DogImageList /> -->
    <!-- <Route /> -->
    <Pinia />
</template>
<script lang="ts" setup name="App">
  // import Person from './components/Person1.vue'
  import TS from './components/TS.vue'
  import Route from './router/Route.vue'
  import DogImageList from './components/DogImageList.vue';
  import {type Persons} from './type/index'
  import {reactive} from 'vue'
  import Pinia from "./store/pinia/Pinia.vue"

  let personList = reactive<Persons>([
        { id:'1', name:'张三', age:18},
        { id:'2', name:'李四', age:19},
        { id:'3', name:'王五', age:20}
    ])
</script>

<style>
</style>
