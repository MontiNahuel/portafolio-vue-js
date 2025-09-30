<script setup lang="ts">
import { computed } from 'vue';
import logoVue from '../assets/logo.svg'
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute();
const isHomePage = computed(() => route.path === '/');
defineProps<{
    items : { textoItem: string; urlItem: string }[]
}>()
</script>

<template name="Navbar">
    <nav>
        <img :src="logoVue" alt="">
        <ul>
            <li v-for="item in items" :key="item.textoItem">
    
                <RouterLink v-if="item.textoItem === 'Inicio'" :to="item.urlItem">
                    {{ item.textoItem }}
                </RouterLink>

                <a v-if="isHomePage" href="#">
                    {{ item.textoItem }}
                </a>

            </li>
        </ul>
    </nav>
</template>

<style scoped>

@import '../assets/base.css';

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
    text-decoration: none;
    color: var(--button-green-color);
    transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: var(--button-green-color-hover-02);
  }
}

</style>