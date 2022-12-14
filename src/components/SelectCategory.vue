<script>
export default {
    name: "SelectCategory"
}
</script>

<template>
    <!-- creo la lista per selezionare le varie categorie -->
    <div class="container">
        <div class="select">
            <span>Select category</span>
            <font-awesome-icon icon="fa-solid fa-angle-down" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container {
    padding-left: 10px;

    .select {
        color: $primaryColor;
        width: fit-content;
        padding: 10px 20px;
        background-color: $thirdColor;
        border-radius: 10px;


        span {
            margin-right: 10px;
            font-weight: 600;
        }
    }
}
</style>