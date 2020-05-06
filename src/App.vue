<template>
    <v-app id="app">
        <router-view class="view"/>
    </v-app>
</template>

<script>
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: "App",
    })

    export default class App extends Vue {

    }
</script>
