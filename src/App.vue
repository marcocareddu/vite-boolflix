<script>
import axios from 'axios';

// API Links
const endpoint = 'https://api.themoviedb.org/3';
const apiKey = '5446901a9478caa2f5783c5e24203b7c';
const langIta = '&language=it-IT';

import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'Boolflix',
    data() {
        return {
            movies: [],
            series: [],
        }
    },
    components: { AppMain, AppHeader, },
    methods: {

        // Search movie title with API
        searchTitle(title) {

            // Search in movie
            axios.get(`${endpoint}/search/movie?api_key=${apiKey}&query=${title}${langIta}`)
                .then(res => { this.movies = res.data.results; });

            // Search in series
            axios.get(`${endpoint}/search/tv?api_key=${apiKey}&query=${title}${langIta}`)
                .then(res => { this.series = res.data.results; });
        },
    }
}
</script>

<template>
    <!--App Header -->
    <AppHeader @Searched-Title="searchTitle" />

    <!--App Main -->
    <AppMain :movies="this.movies" :series="this.series" />
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>