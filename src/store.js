import { reactive } from 'vue';

export const store = reactive({
    totalResults: "",
    characterList: [],
    apiURL: "https://rickandmortyapi.com/api/character",
    searchStatus: "",
    apiStatusParameter: "status",
});