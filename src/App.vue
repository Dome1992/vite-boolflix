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
}
</script>

<template>
  <AppHeader />
  <main>
    {{ store.apiURL }}
  </main>
 
</template>

<style lang="scss">
//@use './styles/general.scss';

main {
  padding-top: 20px;
  
}

</style>
