<script>
import axios from 'axios';
import Results from './character-list-components/Results.vue';
import CardGenerator from './character-list-components/CardGenerator.vue';

import { store } from '../store.js';

export default {
    name: "CharacterList",

    components: {
        Results,
        CardGenerator,
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
    <div class="container">
        <Results />
        <div class="small_container">
            <CardGenerator />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container {
    background-color: $primaryColor;
    margin-top: 30px;
    padding: 30px;
}
</style>