<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <section>
        <!-- logo del titolo -->
        <div>
            <img src="../assets/img/kisspng-rick-sanchez-lorem-ipsum-logo-typeface-font-5b0dffd4617136.8893298515276441163991.png"
                alt="Logo Breaking Bad">
        </div>
        <!-- Titolo della pagina -->
        <h1>Rick And Morty Api</h1>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

@import url('https://fonts.googleapis.com/css2?family=Rubik+Gemstones&display=swap');

section {
    height: 100px;
    padding-left: 20px;
    @include start();

    div {
        width: 200px;
        height: 100px;
        margin-right: 20px;
    }

    h1 {
        color: #18aec7;
        font-family: 'Rubik Gemstones', cursive;
        font-size: 35px;
    }
}
</style>