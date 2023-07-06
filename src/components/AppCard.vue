<script>
const apiImageEndpoint = 'https://image.tmdb.org/t/p/';

export default {
    data() {
        return { imgPath: './', errFlag: false, apiImgSize: 'w342' }
    },

    props: { catalogue: Object },

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
    <div v-for="title in catalogue" :key="title.id" class="img-box col col-2 g-3 ">
        <img :src="cratePosterLink(title.poster_path)" :alt="title.title" class="img-fluid rounded-3 poster">
        <div class="info-box">
            <h5>{{ title.title }}</h5>
            <h6>({{ title.original_title }})</h6>
            <img class="flag" :src="this.langToImg(title.original_language)" :alt="title.title">
            <p v-html="numberToStar(title.vote_average)"></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.flag {
    height: 50px;
    width: 80px;
}

.img-box {
    position: relative;
    cursor: pointer;


    &:hover {
        .poster {
            transition: 0.5s;
            filter: brightness(0.2);
        }

        .info-box {
            display: block;
        }
    }
}

.info-box {
    display: none;
    padding: 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    overflow-y: auto;
    color: white;
}
</style>
