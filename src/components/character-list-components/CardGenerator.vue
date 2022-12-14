<script>
export default {
    name: "CardGenerator",

    props: ["info"],
}
</script>

<template>
    <!-- creo la card -->
    <div class="gen_card">
        <div class="slot_img_card">
            <img :src="info.image" :alt="info.name">
        </div>
        <h4>{{ info.name }}</h4>
        <span>{{ info.status }}</span>
        <br>
        <span>{{ info.species }}</span>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

.gen_card {
    background-color: $secondaryColor;
    width: calc((100% - 30px)/ 5);
    padding: 10px;
    text-align: center;

    .slot_img_card {
        margin-bottom: 10px;
    }

}
</style>