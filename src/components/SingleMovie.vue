<script>
// Definire il componente SingleMovie 

export default {

    name: 'SingleMovie',

    props: {
        info: Object,
    },

}
</script>

<template>
    <!-- Inizia il Template del componente SingleMovie-->

    <div class="movie">
        <!-- Aggiungi immagine utilizzando URL del film -->
        <img class="img-fluid mb-3" :src="info.poster_path[0].image_url" :alt="info.name">
        <h4>{{ info.original_title }}</h4>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h4 {
    text-transform: capitalize;

    &::after {
        content: '';
        display: block;
        width: 40px;
        height: 1px;
        margin: 1rem auto;
    }
}


</style>