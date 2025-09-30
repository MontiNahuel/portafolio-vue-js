<script setup lang="ts">
import { projectsData } from '@/data';
import { RouterLink } from 'vue-router';
</script>

<template>
    <section>
        <h1>Proyectos</h1>
        <div class="projects">
            <div v-for="project in projectsData" :key="project.title" class="project">
                <h2>{{ project.title }}</h2>
                <p>{{ project.description }}</p>
                <RouterLink :to="project.urlProject">{{ project.textButton }}</RouterLink>
            </div>
        </div>
    </section>
</template>

<style scoped>
@import '../assets/main.css';

section {
    margin: 0 auto;
    padding: 20px;
    max-width: 800px;
    text-align: center;
}

section h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

section .projects {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
}

section .project {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    width: 300px;
}

section .project h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

section .project p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

section .project a {
     /* --- El truco final --- */
    margin-top: auto; /* <== ESTA LÍNEA ES LA CLAVE */
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
}

section .project a:hover {
    background-color: #0056b3;
}

</style>