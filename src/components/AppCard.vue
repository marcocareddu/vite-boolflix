<script>
import axios from 'axios';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
const apiImageEndpoint = 'https://image.tmdb.org/t/p/';
const endpoint = 'https://api.themoviedb.org/3';
const apiKey = '5446901a9478caa2f5783c5e24203b7c';
const langIta = '&language=it-IT';

export default {
    data() {
        return {
            apiImgSize: "w342",
            flagsInside: ["it", "en"],
        };
    },
    props: { catalogue: Object },

    methods: {
        // Return image Path if present
        langToImg(lang) {
            return (this.flagsInside.includes(lang) ? `./${lang}.png` : "/pirates.png");
        },

        // Create API Poster link
        createPosterLink(title) { return `${apiImageEndpoint}${this.apiImgSize}${title}`; },

        // Generate icon class by vote
        iconType(index, number) {
            const ceiledNum = Math.ceil((number) / 2);
            return index <= ceiledNum ? 'fas' : 'far';
        },

        // // !!!!! TEST!!!!!! 
        // takeActorsList(prodId) {
        //     const actors = [];
        //     axios.get(`${endpoint}/movie/${prodId}/credits?api_key=${apiKey}${langIta}`)
        //         .then(res => { actors = res.data.cast; });
        //     console.log(actors)
        //     return actors;
        // },
    },
}
</script>

<template>
    <div v-for="title in    catalogue  " :key="title.id" class="img-box col col-2 g-3 ">
        <img :src="createPosterLink(title.poster_path)" :alt="title.title" class="img-fluid rounded-3 poster">
        <div class="info-box">
            <h5>{{ title.title || title.name }}</h5>
            <h6>({{ title.original_title || title.original_name }})</h6>
            <img class="flag pt-2" :src="this.langToImg(title.original_language)" :alt="title.title">
            <p class="py-2">
                <FontAwesomeIcon v-for="n in 5" :key="title.name" :icon="[iconType(n, title.vote_average), 'star']" />
            </p>
            <!-- <p v-for="actor in takeActorsList(title.id)" :key="actor.name">{{ actor.name }}</p> -->
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
