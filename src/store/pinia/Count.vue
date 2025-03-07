<template>
    <div class="count">
        <h2>当前求和为:{{sum}},两倍计算{{ doubleCount }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>
<script lang="ts" setup name="Count">
    import { useCountStore } from '@/store/count'
    import { storeToRefs } from 'pinia'

    const countStore = useCountStore()
    //storeToRefs只解构state中的属性
    const { sum,n, doubleCount} = storeToRefs(countStore)

    function add(){
        countStore.increment(n.value)
    }
    function minus(){
        countStore.subtract(n.value)
    }
</script>
<style scoped>
    .count {
        background-color:skyblue;
        padding: 10px;
        border-radius:10px;
        box-shadow:0 0 10px;
    }
    select,button {
        margin:0 5px;
        height: 40px;
    }
</style>