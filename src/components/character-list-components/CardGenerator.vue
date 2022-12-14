<script>
export default {
    name: "CardGenerator",

    props: [],
}
</script>

<template>
    <!-- creo la card -->
    <div class="gen_card">
        <div class="slot_img_card">
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
        </div>
        <h4>Rick Sanchez</h4>
        <span></span>
        <br>
        <span></span>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

.gen_card {
    background-color: $secondaryColor;
    width: calc(100% / 5);
    padding: 10px;
    text-align: center;

    .slot_img_card {
        margin-bottom: 10px;
    }

}
</style>