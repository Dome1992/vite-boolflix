<!-- Componente listato delle serieTV -->
<script>
// Importa il componente 'SingleSerie' all'interno di SerietvList

import SingleSerie from './SingleSerie.vue';

// Importo lo STORE
import { store } from '../store';

export default {
    // Nome del Componente 
    name: 'SerietvList',

    // Componenti utilizzati all interno del componente MovieList, in questo caso SingelMovie
    components: {
        SingleSerie,
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

            <div v-for="serie in store.serietvList" :key="serie.id" class="col-6 col-md-4 col-lg-3 mb-5">

            <!-- Utilizza il componente 'SingleMovie' e passa le informazioni del film -->
            <SingleSerie :info="serie"/>

            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>

</style>