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
            axios.get(`${endpoint}/search/movie?api_key=${apiKey}&query=${title}${langIta}`)
                .then(res => {

                    const fullArray = res.data.results;

                    this.movies = fullArray.map(movie => {
                        const {
                            id,
                            title,
                            original_title,
                            original_language,
                            poster_path,
                            vote_average
                        } = movie;
                        return { id, title, original_title, original_language, poster_path, vote_average }
                    })
                });

            // Search series title with API
            axios.get(`${endpoint}/search/tv?api_key=${apiKey}&query=${title}${langIta}`)
                .then(res => {

                    const fullArray = res.data.results;

                    this.series = fullArray.map(series => {
                        const {
                            id,
                            name: title,
                            original_name: original_title,
                            original_language,
                            poster_path,
                            vote_average
                        } = series;
                        return { id, title, original_title, original_language, poster_path, vote_average }
                    })
                });
        }
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