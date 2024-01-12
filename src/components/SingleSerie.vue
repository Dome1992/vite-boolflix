<script>
// Definire il componente SingleMovie 

export default {

    name: 'SingleSerie',

    props: {
        info: Object,
    },

}
</script>

<template>
    <!-- Inizia il Template del componente SingleSerie-->

    <div class="movie">
        <!-- Aggiungi immagine utilizzando URL del film -->
        <img class="img-fluid mb-3" :src=" `https://image.tmdb.org/t/p/w342/${info.poster_path}`" :alt="info.name">
        <h4>{{ info.title  }}</h4>

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