<script>
import axios from 'axios';

// Endpoint TMDB API
const endpoint = 'https://api.themoviedb.org/3';
const apiKey = '5446901a9478caa2f5783c5e24203b7c'

import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
    data() {
        return {
            movies: [],
        }
    },
    components: { AppMain, AppHeader, },
    methods: {

        // Search movie title with API
        searchTitle(title) {
            axios.get(`${endpoint}/search/movie?api_key=${apiKey}&query=${title}`)
                .then(res => {
                    this.movies = res.data
                })
        }
    }
}
</script>

<template>
    <!--App Header -->
    <AppHeader @Searched-Title="searchTitle" />

    <!--App Main -->
    <AppMain />
</template>