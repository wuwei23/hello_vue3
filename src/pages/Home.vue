<template>
    <div class="home">
    <img src="http://www.atguigu.com/images/index new/logo.png">
    </div>
</template>
<script setup lang="ts" name="Home">
    import { useRouter } from 'vue-router';
    import { onMounted } from 'vue';

    const router = useRouter();

    //过三秒跳转
    onMounted(()=>{
        console.log('home页面挂载了')
        setTimeout(()=>{
            router.push('/news')
        },3000)
    })

</script>
<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items:center;
    height: 100%;
}
</style>