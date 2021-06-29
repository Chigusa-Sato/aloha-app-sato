<template>
    <div class="home">
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

<style scoped lang="scss">
@import "../style/flocss.scss";
.home{
    background: $color-default-white;
}
</style>