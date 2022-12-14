<script>
import Results from './character-list-components/Results.vue';

export default {
    name: "CharacterList",

    components: {
        Results,
    }
}
</script>

<template>
    <div class="container">
        <Results />
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