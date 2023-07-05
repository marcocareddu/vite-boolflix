<script>
import AppCard from './AppCard.vue';
const apiImageEndpoint = 'https://image.tmdb.org/t/p/';

export default {
    data() {
        return {
            imgPath: './',
            errFlag: false,
            apiImgSize: 'w342',
        }
    },
    props: {
        movies: Object,
        series: Object,
    },
    components: { AppCard },
    methods: {
        langToImg(lang) {
            // if (this.errFlag) {
            //     this.errFlag = false
            //     return `${this.imgPath}pirates.png`
            // } else {}
            return `${this.imgPath}${lang}.png`
        },
        cratePosterLink(title) {
            return `${apiImageEndpoint}${this.apiImgSize}${title}`
        }
    }
}

</script>

<template>
    <h1>FILM</h1>
    <!-- ! TEST - Movies Section -->
    <ul>
        <li v-for="movie in movies" :key="movie.id">
            <img :src="cratePosterLink(movie.poster_path)" :alt="movie.title">
            <h4>{{ movie.title }}</h4>
            <h5>{{ movie.original_title }}</h5>
            <h5>{{ movie.original_language }}</h5>
            <img class="flag" :src="this.langToImg(movie.original_language)" :alt="movie.title">
            <h5>{{ Math.ceil(movie.vote_average) }}</h5>
        </li>
    </ul>

    <h1>SERIE TV</h1>

    <!-- ! TEST - Series Section -->
    <ul>
        <li v-for="title in series" :key="title.id">
            <img :src="cratePosterLink(title.poster_path)" :alt="title.title">
            <h4>{{ title.name }}</h4>
            <h5>{{ title.original_name }}</h5>
            <h5>{{ title.original_language }}</h5>
            <img class="flag" :src="this.langToImg(title.original_language)" :alt="title.name">
            <h5>{{ Math.ceil(title.vote_average) }}</h5>
        </li>
    </ul>

    <!-- Content Card HERE -->
    <AppCard />
</template>

<style scoped>
.flag {
    height: 50px;
    width: 80px;
}
</style>
