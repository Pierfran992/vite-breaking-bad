<script>
export default {
    name: "SelectCategory"
}
</script>

<template>
    <!-- creo la lista per selezionare le varie categorie -->
    <div class="container">
        <select name="status" id="statusCharacter">
            <option value="">Select Status Character</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.container {
    padding-left: 10px;

    #statusCharacter {
        color: $secondaryColor;
        width: fit-content;
        margin-top: 30px;
        padding: 10px 20px;
        background-color: $thirdColor;
        border-radius: 10px;
        border: none;
        cursor: pointer;
    }
}
</style>