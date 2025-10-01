<script setup lang="ts">
import { reactive, ref } from 'vue';
import TheToDoItem from '@/components/TheToDoItem.vue';
import { EnumEstadosToDoItem } from '../enums/enumEstadosToDoItem.ts';
import { EnumPrioridadToDoItem } from '../enums/enumPioridadToDoItem.ts';

interface Tarea {
    id: number;
    texto: string;
    estado: EnumEstadosToDoItem;
    fecha: Date;
    prioridad: EnumPrioridadToDoItem;
}

const listaDeTareas = reactive<Tarea[]>([]);

const nombreTarea = ref<string>('');
const prioridadTarea = ref<EnumPrioridadToDoItem>(EnumPrioridadToDoItem.MEDIA);
const estadoTarea = ref<EnumEstadosToDoItem>(EnumEstadosToDoItem.PENDIENTE);
const fechaTarea = ref<Date | null>(null);
const idTarea = ref<number>(0);

const agregarTarea = () => {
    if (nombreTarea.value.trim() === '') return;

    const nuevaTarea: Tarea = {
        id: idTarea.value++,
        texto: nombreTarea.value,
        estado: estadoTarea.value,
        fecha: fechaTarea.value || new Date(),
        prioridad: prioridadTarea.value,
    };

    listaDeTareas.push(nuevaTarea);
    nombreTarea.value = '';
    prioridadTarea.value = EnumPrioridadToDoItem.MEDIA;
    estadoTarea.value = EnumEstadosToDoItem.PENDIENTE;
    fechaTarea.value = null;
};

const eliminarTarea = (id: number) => {
    const index = listaDeTareas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
        listaDeTareas.splice(index, 1);
    }
};

</script>

<template>
    <section>
        <h1>Lista de Tareas</h1>
        <div class="inputs">
            <input type="text" v-model="nombreTarea" placeholder="Nombre de la tarea">
            <select v-model="prioridadTarea">
                <option v-for="(prioridad, index) in EnumPrioridadToDoItem" :key="index" :value="prioridad">{{ prioridad }}</option>
            </select>
            <input type="date" v-model="fechaTarea">
        </div>
        <div class="buttons">
            <button @click="agregarTarea">Agregar Tarea</button>
        </div>
        <div v-if="listaDeTareas.length === 0">
            <p>No hay tareas en la lista.</p>
        </div>
        <div v-else class="bloque-tareas">
            <ul v-for="tarea in listaDeTareas" :key="tarea.id" class="tareas">
                <li class="tarea">
                    <TheToDoItem :tarea="tarea" @eliminar="eliminarTarea" />
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
section {
    padding: 1rem;
    border-radius: 8px;
}

section h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

section .bloque-tareas {
    margin-top: 1rem;
}

section .bloque-tareas .tareas {
    list-style-type: none;
    padding: 0;
}
</style>