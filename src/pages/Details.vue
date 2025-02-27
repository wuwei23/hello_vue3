<template>
    <ul class="news-list">
    <li>编号: {{ route.params.id }}</li>
    <li>标题: {{ route.params.title }}</li>
    <li>内容: {{ route.params.content}}</li>
    </ul>
</template>
<script setup lang="ts"name="Details">
    import { useRoute } from 'vue-router';
    import { toRefs ,reactive} from 'vue';
    let route = useRoute();
    console.log(route);
    // let params = toRefs(route.params); params并不是一个Proxy对象，而是一个普通对象，所以不能使用解构赋值
    // let {id,title,content} = toRefs(route.params);
</script>
<style scoped>
    .news-list{
        list-style:none;
        padding-left:20px;
    }
    .news-list li{
        line-height: 30px;
    }
</style>