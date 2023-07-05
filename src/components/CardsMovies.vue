<script>
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
        catalogue: Object,
    },

    methods: {
        langToImg(lang) {
            // if (this.errFlag) {
            //     this.errFlag = false
            //     return `${this.imgPath}pirates.png`
            // } else {}
            return `${this.imgPath}${lang}.png`
        },

        // Create API Poster link
        cratePosterLink(title) {
            return `${apiImageEndpoint}${this.apiImgSize}${title}`
        },

        // Change Vote number to Stars
        numberToStar(number) {
            const roundedNumber = Math.ceil((number) / 2);
            let string = '';
            let fullStars = '';
            let emptyStars = '';
            for (let i = 0; i < roundedNumber; i++) {
                fullStars += '<i class="fa-solid fa-star"></i>';
            };
            for (let i = 0; i < (5 - roundedNumber); i++) {
                emptyStars += '<i class="fa-regular fa-star"></i>';
            };
            return fullStars + emptyStars;

        }
    }
}
</script>

<template>
    <ul>
        <li v-for="title in catalogue" :key="title.id">
            <img :src="cratePosterLink(title.poster_path)" :alt="title.title">
            <h4>{{ title.title }}</h4>
            <h5>{{ title.original_title }}</h5>
            <h5>{{ title.original_language }}</h5>
            <img class="flag" :src="this.langToImg(title.original_language)" :alt="title.title">
            <p v-html="numberToStar(title.vote_average)"></p>
        </li>
    </ul>
</template>

<style>
.flag {
    height: 50px;
    width: 80px;
}
</style>
