<template>
    <div class="DogImageList">
        <h2>{{ sum }}</h2>
        <button @click="add">点我+1</button>
        <br>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index">
        <button @click="getDog">点我+狗</button>
    </div>

</template>

<script lang="ts" setup name="DogImageList">
    import useDog from '../hooks/useDog'
    import useSum from '../hooks/useSum'

    const {sum,add} = useSum()
    const {dogList,getDog} = useDog()

</script>
    
<style scoped>
  img {
    height: 100px;
  }
</style>

