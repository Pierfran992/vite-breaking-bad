<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import SelectCategory from './components/SelectCategory.vue';
import CharacterList from './components/CharacterList.vue';

import { store } from './store.js';

export default {
    name: "App",
    components: {
        AppHeader,
        SelectCategory,
        CharacterList,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        // creo il metodo per far inserire gli oggetti contenuti il results nell'array vuoto characterList
        getCharacters() {

            let myUrl = store.apiURL;
            // creata la condizione per modificare l'url di partenza
            if (store.searchStatus !== "") {
                myUrl += `?${store.apiStatusParameter}=${store.searchStatus}`;
            }

            axios
                .get(myUrl)
                .then(res => {
                    store.characterList = res.data.results;
                })
                .catch(problem => {
                    console.log("Errori", problem);
                });
        }
    },
    mounted() {
        // faccio partire il metodo dopo che ha caricato la struttura della pagina
        this.getCharacters();
    }
}
</script>

<template>
    <AppHeader />
    <SelectCategory @search="getCharacters" />
    <CharacterList />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
