<script>
import AppHeader from './components/AppHeader.vue';
import SelectCategory from './components/SelectCategory.vue';

export default {
    name: "App",
    components: {
        AppHeader,
        SelectCategory,
    }
}
</script>

<template>
    <AppHeader />
    <SelectCategory />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
