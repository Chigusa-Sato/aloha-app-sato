<template>
    <div class="home">
        <h1>Home</h1>
        <Search></Search>
        <Items></Items>
    </div>
</template>

<script>
import Search from "../components/home/seach.vue";
import Items from "../components/home/items.vue"

export default {
    name:'Home',
    components:{
        Search,
        Items
    }
}
</script>

<style>
.home{
    background: palegoldenrod;
}
</style>