<script setup lang="ts">
import { EnumEstadosToDoItem } from '../enums/enumEstadosToDoItem.ts'
defineProps<{
    id: number;
    texto: string;
    estado: EnumEstadosToDoItem;
    fecha: Date;
    prioridad: string;
}>()
</script>