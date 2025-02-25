<template>
    <dev class='person'>
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <h2>姓名年龄: {{ nameAge }}</h2>
        <button @click='changeAge'>修改年龄</button>
        <br>
        <h2>姓名：{{person1.name}}</h2>
        <h2>年龄：{{person1.age}}</h2>
        <h2>车: {{ person1.car.c1 }}{{ person1.car.c2 }}</h2>
        <button @click='changec1'>改第一台车</button>
        <button @click='changec2'>改第二台车</button>
        <button @click='changecar'>改整个车</button>
    </dev>

</template>
<!-- setup语法糖 -->
<script setup lang="ts" name="person">
    import {computed,toRef, toRefs, reactive, watch} from 'vue'

    let person = reactive({
        name:'张三',
        age:18
        })
    //toRefs将reactive结构为ref
    let {name,age} = toRefs(person)

    let age1 = toRef(person,'age')

    let nameAge = computed({
        get() {
            return name.value + ':' + age.value;
        },
        set(nameage){
            const [newName, newAge] = nameage.split(':');
            name.value = newName;
            age.value = parseInt(newAge, 10); // 使用 parseInt 将字符串转换为数字
        }
    });

    //方法
    function changeAge(){
        console.log(age.value)
        age1.value += 1
    }
    //监视
    let stopWatch = watch(age1,(newValue,oldValue)=>{
        console.log(`age1 oldValue:${oldValue} newValue:${newValue}`)
        if(newValue>20){  //停止监视
            stopWatch()
        }
    },{deep:true}) //深度监视，监视对象下边的值的变化
    //reactive默认开启深度监视


    let person1 = reactive({
        name:'张三',
        age:18,
        car:{
            c1:'保时捷',
            c2:'宝马'
        }
        })
    function changec1(){
        person1.car.c1 += '~'
    }
    function changec2(){
        person1.car.c2 += '='
    }
    function changecar(){
        person1.car = {
            c1:'雅迪',
            c2:'小刀'
        }
    }
    //监视对象里边的具体属性 用getter函数
    // watch(()=>{return person1.car},(newValue,oldValue)=>{
    //     console.log(`person1.car oldValue:${oldValue} newValue:${newValue}`)
    // })

    watch(()=>{return person1.car.c1},(newValue,oldValue)=>{
        console.log(`person1.car.c1 oldValue:${oldValue} newValue:${newValue}`)
    })
    //监视多个值
    watch([()=>person1.car.c1, ()=>person1.car.c2],(newValue,oldValue)=>{
        console.log(`person1.car.c1 oldValue:${oldValue} newValue:${newValue}`)
    })

</script>

<style scoped>
    .person{
        background-color:#aaa;
        box-shadow:0 0 10px;
        border-radius:20px;
        padding:20px;
    }
</style>