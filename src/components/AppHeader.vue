<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <section>
        <!-- logo del titolo -->
        <div>
            <img src="../assets/img/kisspng-logo-walter-white-vector-graphics-television-show-breaking-bad-png-18-5b754e10a05298.6389091215344143526567.png"
                alt="Logo Breaking Bad">
        </div>
        <!-- Titolo della pagina -->
        <h1>Breaking Bad Api</h1>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

section {
    height: 100px;
    padding-left: 20px;
    @include start();

    div {
        width: 100px;
        height: 100%;
        margin-right: 20px;
    }

    h1 {
        font-size: 27px;
    }
}
</style>