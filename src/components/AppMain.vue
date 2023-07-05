<script>
import MoviesCard from './CardsMovies.vue';
import SeriesCard from './CardsSeries.vue';
export default {
    props: { movies: Object, series: Object },
    components: { MoviesCard, SeriesCard },
}

</script>

<template>
    <!-- Movies Section -->
    <h1>FILM</h1>
    <MoviesCard :catalogue="this.movies" />

    <!-- Series Section -->
    <h1>SERIE TV</h1>
    <SeriesCard :catalogue="this.series" />
</template>