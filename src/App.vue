<script>
// importo Axios
import axios from 'axios'

// importo componete figlio 
import AppHeader from './components/AppHeader.vue';
import MovieList from './components/MovieList.vue'
import SerietvList from './components/SerietvList.vue'


// importo store da store.js
import { store } from './store.js';

export default {
  components: {
    AppHeader,
    MovieList,
    SerietvList,


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
        });
    },
    searchMovies () {
      if (store.searchText.trim() !== '') {

        axios
        .get(`${store.apiURL}&query=${store.searchText}`)
        .then((res => {

          console.log(res.data.results);
          store.movieList = res.data.results;

        }))
        .catch((err) => {
          console.log("Errore", err);
        });
        
        
      }
    },
    searchSeries () {
      if (store.searchText.trim() !== '') {

        axios
        .get(`${store.serietvapiURL}&query=${store.searchText}`)
        .then((res => {

          console.log(res.data.results);
          store.serietvapiURL = res.data.results;

        }))
        .catch((err) => {
          console.log("Errore", err);
        });
        
        
      }
    },
  },

  created () {
    this.getMovies ();
    this.searchMovies();
    this.searchSeries();
  }
}


</script>

<template>
  <header>
    <AppHeader @filter="searchMovies"  />
  </header>
  
  <main>
    <MovieList />
    <SerietvList />
  </main>
 
</template>

<style lang="scss">
@use './styles/general.scss';

header {
  background-color: black;
}
main {
  padding-top: 20px;
  background-color: rgb(24, 23, 23);
}

</style>
