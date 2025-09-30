<script setup lang="ts">
import logoVue from '../assets/logo.svg'
defineProps<{
    items : string[]
}>()
</script>

<template name="Navbar">
    <nav>
        <img :src="logoVue" alt="">
        <ul>
            <li v-for="item in items" :key="item">
                <a href="#">{{ item }}</a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px 20px;

}

nav img {
    height: 30px;
    width: auto;
    float: left;
    margin-left: 10px;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: right;
}

li {
    display: inline;
    margin-right: 1rem;
    border-radius: 2px;
}

a {
    text-decoration: none;
    border-radius: 3px;
    padding: 5px 15px;
}

</style>