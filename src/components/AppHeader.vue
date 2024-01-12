<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data (){
        return {
            store,
        }
    },

    props: {
        info: Object
    }
}
</script>

<template>
    <!--Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film-->
   
    <div>
      <input v-model="store.searchText" type="text" placeholder="Search Movie..." name="search" @change="$emit ('filter', store.searchText)"/>
      <button @click="searchMovies">Search</button>
    </div>

     
</template>

<style lang="scss" scoped>

</style>