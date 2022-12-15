<script>
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
}
</script>

<template>
    <div class="container">
        <Results :info="store.characterList.length" />
        <div class="small_container">
            <!-- creo un ciclo for su CardGenerator così da stampare tutti gli oggetti contenuti nell'array characterList contenuto nel file store.js-->
            <CardGenerator v-for="obj in store.characterList" :key="obj.id" :info="obj" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container {
    background-color: $thirdColor;
    margin-top: 30px;
    margin-bottom: 100px;
    padding: 30px;
}

.small_container {
    @include between();
    flex-wrap: wrap;
    align-items: stretch;
    gap: 30px 5px;
}
</style>