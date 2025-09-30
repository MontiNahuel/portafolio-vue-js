<script setup lang="ts">
import { homeData } from '@/data';
</script>
<template>
    <section>
        <h1>{{homeData.title}}</h1>
        <h2>{{homeData.subtitle}}</h2>
        <div class="buttons">
            <a href="#">
                <div>
                    <span>{{homeData.botonCv}}</span>
                    <img :src="homeData.iconoDownload" alt="CV Icon">
                </div>
            </a>
            <a href="#">
                <div>
                    <span>{{homeData.botonGithub}}</span>
                    <img :src="homeData.iconoGithub" alt="GitHub Logo">
                </div>
            </a>
        </div>
    </section>
</template>

<style scoped>

@import '../assets/main.css';

section {
    margin: 0 auto;
    padding: 100px 20px 20px 20px;
    max-width: 800px;
    text-align: center;
}

section h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

section h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #555;
}

.buttons {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;

}

.buttons a {
    display: flex;
    margin: 0 10px;
    padding: 10px 20px;
    color: var(--button-green-color);
    text-decoration: none;
    border-radius: 5px;
    transition: 0.3s;
}

.buttons a div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.buttons a div img {
    height: 40px;
    width: auto;
    filter: invert(34%) sepia(98%) saturate(749%) hue-rotate(134deg) brightness(92%) contrast(100%);
}

.buttons a:hover {
    background-color: var(--button-green-color-hover-02);
}

</style>