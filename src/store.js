import { reactive } from "vue"

export const store = reactive({
    searchText: "",
    loading: true,
    movieList: [],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=4819c5b000937425484aba76e9048865&query=batman"
});