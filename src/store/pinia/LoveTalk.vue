<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in loveTalkStore.talkList" :key="talk.id">
            {{ talk.title }}
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup name="LoveTalk">
    import { useLoveTalkStore } from '@/store/loveTalk'

    const loveTalkStore = useLoveTalkStore()

    loveTalkStore.$subscribe((mutate, state) => {
        console.log('loveTalkStorestate里边的数据发生了变化',mutate, state)
        // 存储到本地
        localStorage.setItem('talkList', JSON.stringify(state.talkList))
    })

    function getLoveTalk(){
        loveTalkStore.getNewLoveTalk()
    }
</script>
<style scoped>
    .talk {
        background-color:orange;
        padding: 10px;
        border-radius:10px;
        box-shadow:0 0 10px;
    }
</style>