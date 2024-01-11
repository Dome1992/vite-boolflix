<script>
import { store } from '../store';

export default {
    data (){
        return {
            store,
        }
    },
}
</script>

<template>
    <!--Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film-->
   
      <input type="text" placeholder="Search.." name="search">
      <button type="submit"><i class="fa fa-search"></i></button>
   
</template>

<style lang="scss" scoped>

</style>