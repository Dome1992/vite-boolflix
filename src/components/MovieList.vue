<!-- Componente listato dei film -->
<script>
// Importa il componente 'SingleMovie' all'interno di MovieList

import SingleMovie from './SingleMovie.vue';

// Importo lo STORE
import { store } from '../store';

export default {
    // Nome del Componente 
    name: 'MovieList',

    // Componenti utilizzati all interno del componente MovieList, in questo caso SingelMovie
    components: {
        SingleMovie,
    },

    data () {
        return {
            store,
        }
    }
}
</script>

<template>
    <!-- Inizia il template del componente -->
    <section class="container">

        <div class="row">

            <div v-for="movie in store.SingleMovie" :key="movie.id" class="col-6 col-md-4 col-lg-3 mb-5">

            <!-- Utilizza il componente 'SingleMovie' e passa le informazioni del film -->
            <SingleMovie :info="movie"/>

            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>

</style>