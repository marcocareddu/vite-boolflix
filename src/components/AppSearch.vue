<script>
export default {
    data() {

        return {
            stringToSearch: '',
        }
    },

    props: {
        placeHolder: String,
    },

    emits: ['form-submit']
}
</script>

<template>
    <!-- Searchbar -->
    <form @submit.prevent="$emit('form-submit', stringToSearch)">
        <input type="text" :placeholder="placeHolder || 'Cerca...'" v-model="stringToSearch">
        <button>Cerca</button>
    </form>
</template>

<style></style>
