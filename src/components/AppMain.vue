<script>
import AppCard from './AppCard.vue'

export default {
    props: {
        movies: Object,
    },
    components: { AppCard }
}

</script>

<template>
    <ul>
        <li v-for="movie in movies">
            <h4>{{ movie.title }}</h4>
            <h5>{{ movie.original_title }}</h5>
            <h5>{{ movie.original_language }}</h5>
            <h5>{{ movie.vote_average }}</h5>
        </li>
    </ul>
    <!-- Content Card HERE -->
    <AppCard />
</template>

<style></style>
