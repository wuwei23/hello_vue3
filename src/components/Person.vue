<template>
    <dev class='person'>
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click='showTel'>查看联系方式</button>
        <button @click='changeAge'>修改年龄</button>
        <br>
        <h2>汽车信息：{{car.brand}}车，价格{{ car.price }}</h2>
        <button @click='changeCarPrice'>修改车价格</button>

        <br>
        <h2>游戏信息</h2>
        <ul>
            <li v-for="game in games" :key="game.name">{{ game.name }}价格为{{ game.price }}</li>
        </ul>
        <button @click='changeLOLPrice'>修改LOL价格</button>
    </dev>

</template>
<!-- setup语法糖 -->
<script setup lang="ts" name="person">
    import {ref} from 'vue'
    import {reactive} from 'vue'

    let name = '张三'
    let age = ref(18)  //响应式用ref
    let tel = '13888888888'

    let car = reactive({brand:'奔驰', price:50000})

    let games = reactive([
        {name:'LOL', price:100},
        {name:'DOTA2', price:200},
        {name:'CSGO', price:300}
    ])

    //方法
    function showTel(){
                alert(tel)
            }
    function changeAge(){
        console.log(age.value)
        age.value += 1
    }
    function changeCarPrice(){
        car.price += 10000
    }
    function changeLOLPrice(){
        games[0].price += 100
    }
</script>

<style>
    .person{
        background-color:#aaa;
        box-shadow:0 0 10px;
        border-radius:20px;
        padding:20px;
    }
</style>