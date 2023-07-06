<script>
import AppSearch from './AppSearch.vue';

export default {
    emits: ['Searched-Title'],
    components: { AppSearch },
    methods: {
        // Emit searched term on App component
        onInput(searchedWord) { this.$emit('Searched-Title', searchedWord); },
    }
}
</script>

<template>
    <header class="px-3 d-flex justify-content-between align-items-center">
        <h1>BOOLFLIX</h1>
        <!-- Content Search -->
        <AppSearch :place-holder="'Cerca film o serie...'" @form-submit="onInput" />
    </header>
</template>

<style lang="scss" scoped>
header {
    height: 80px;
    background-color: black;
}

h1 {
    color: red;
}
</style>