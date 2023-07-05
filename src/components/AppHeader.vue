<script>
import AppSearch from './AppSearch.vue';

export default {
    emits: ['Searched-Title'],
    components: { AppSearch },
    methods: {
        onInput(searchedWord) {
            this.$emit('Searched-Title', searchedWord);
        }
    }
}
</script>

<template>
    <!-- Content Search -->
    <AppSearch :place-holder="'Cerca film o serie...'" @form-submit="onInput" />
</template>

<style></style>
