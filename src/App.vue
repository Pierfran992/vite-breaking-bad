<script>
import AppHeader from './components/AppHeader.vue';
import SelectCategory from './components/SelectCategory.vue';
import CharacterList from './components/CharacterList.vue';

export default {
    name: "App",
    components: {
        AppHeader,
        SelectCategory,
        CharacterList,
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
