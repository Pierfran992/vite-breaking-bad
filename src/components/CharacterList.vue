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