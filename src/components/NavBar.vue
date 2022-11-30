<template>
    <nav class="navBar">
        <router-link :to="{name:'home'}" class="navItem">Home</router-link>
        <router-link :to="{name:'create'}" class="navItem">Create</router-link>
    </nav> 
</template>

<script>
export default {

}
</script>

<style scoped>
    .navBar {
        width: 100%;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .navItem {
        color: rgb(65, 61, 61);
        text-decoration: none;
        margin-left: 20px;
        
    }
    .navItem:hover {
        color: indigo;
    }
    .router-link-active {
        border-bottom: 2px solid indigo;
    }
</style>