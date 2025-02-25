<template>
    <div class="TS">
        <h2>{{ list }}</h2>
    </div>
</template>

<script lang="ts" setup name="TS">
    import { type Persons } from '../type/index'; // 根据实际路径调整
    
    //接受App.vue传递过来的数据
    withDefaults(defineProps<{
        a: string,
        list?: Persons
    }>(),{  // 默认值
        list: () => [
            { id: '1', name: 'John', age: 18 },
            { id: '2', name: 'Jane', age: 20 },
        ]
    })

    // defineProps(['a'])

</script>
    
<style scoped>

</style>