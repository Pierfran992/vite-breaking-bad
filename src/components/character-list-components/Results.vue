<script>
export default {
    name: "Results",

    props: ["info"],
}
</script>

<template>
    <div class="small_container">
        <h2>Found {{ info }} characters</h2>
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;
@use '../../styles/partials/mixins' as *;

.small_container {
    background-color: #212529;
    padding: 10px;
    margin-bottom: 30px;
    font-weight: 600;
}
</style>