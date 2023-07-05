<script>
import AppCard from './AppCard.vue'

export default {
    data() {
        return {
            imgPath: './',
            errFlag: false,
        }
    },
    props: {
        movies: Object,
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
    }
}

</script>

<template>
    <ul>
        <li v-for="movie in movies">
            <h4>{{ movie.title }}</h4>
            <h5>{{ movie.original_title }}</h5>
            <h5>{{ movie.original_language }}</h5>
            <img :src="this.langToImg(movie.original_language)" :alt="movie.title">
            <h5>{{ Math.ceil(movie.vote_average) }}</h5>
        </li>
    </ul>

    <!-- Content Card HERE -->
    <AppCard />
</template>

<style scoped>
img {
    height: 50px;
    width: 80px;
}
</style>
