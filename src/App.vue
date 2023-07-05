<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'

export default {
    data() {
        return {
        }
    },
    components: { AppMain, AppHeader, },
    methods: {
        searchTitle(title) {
            console.log(title)
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