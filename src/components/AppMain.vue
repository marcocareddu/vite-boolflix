<script>
import MoviesCard from './AppCard.vue';
import SeriesCard from './AppCard.vue';

export default {
    props: { movies: Object, series: Object },
    components: { MoviesCard, SeriesCard },
}
</script>

<template>
    <main class="px-3">
        <!-- Movies Section -->
        <section class="movies">
            <h1>FILM</h1>
            <div class="row">
                <MoviesCard :catalogue="this.movies" />
            </div>
        </section>

        <!-- Series Section -->
        <section class="series">
            <h1>SERIE TV</h1>
            <div class="row">
                <SeriesCard class="col col-4" :catalogue="this.series" />
            </div>
        </section>
    </main>
</template>

<style lang="scss">
main {
    height: calc(100vh - 80px);
    overflow: auto;
}

section {
    h1 {
        color: lightgrey;
        font-weight: 700;
    }

}
</style>