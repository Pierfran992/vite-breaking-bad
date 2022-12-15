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
            axios
                .get(store.apiURL)
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
    <SelectCategory />
    <CharacterList />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
