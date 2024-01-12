<script>
// importo Axios
import axios from 'axios'

// importo componete figlio 
import AppHeader from './components/AppHeader.vue';


// importo store da store.js
import { store } from './store.js';

export default {
  components: {
    AppHeader,
    

  },
  data() {
    return {
      store,
    }
  },

  methods: {
    // Metodo per ottenere il film della chiamata Api
    getMovies () {

      axios
        .get(store.apiURL)
        .then((res => {

          console.log(res.data.results);
          store.movieList = res.data.results;

        }))
        .catch((err) => {
          console.log("Errore", err);
        })
    },
  },

  created () {
    this.getMovies ();
  }
}


</script>

<template>
  <AppHeader @filter="getMovies" />
  <main>
    
  </main>
 
</template>

<style lang="scss">
//@use './styles/general.scss';

main {
  padding-top: 20px;
  
}

</style>
