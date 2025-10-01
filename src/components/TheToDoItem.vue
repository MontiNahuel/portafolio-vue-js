<script setup lang="ts">
import { EnumEstadosToDoItem } from '../enums/enumEstadosToDoItem.ts'
import { EnumPrioridadToDoItem } from '../enums/enumPioridadToDoItem.ts';
const props = defineProps<{
    tarea: {
        id: number;
        texto: string;
        estado: EnumEstadosToDoItem;
        fecha: Date;
        prioridad: EnumPrioridadToDoItem;
    }
}>()

const emit = defineEmits(['eliminar', 'actualizar']);

function eliminarTarea() {
    emit('eliminar', props.tarea.id);
}

</script>

<template>
    <div class="tarea-item">
        <span>{{ tarea.texto }}</span>
        <span>{{ tarea.estado }}</span>
        <span>{{ tarea.fecha.toLocaleDateString() }}</span>
        <span>{{ tarea.prioridad }}</span>
        <button @click="eliminarTarea">Eliminar</button>
    </div>
</template>

<style scoped>
.tarea-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
.tarea-item span {
    margin: 0 10px;
}
</style>