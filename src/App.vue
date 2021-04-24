<template>
    <v-app id="app">
        <v-app-bar app flat
                   absolute
                   elevate-on-scroll>
            <v-toolbar-title>Naming Center</v-toolbar-title>
            <div class="v-toolbar__content">
                <search-input></search-input>
            </div>
            <v-spacer></v-spacer>
            <div v-if="account">
                <v-btn @click="logout" icon>
                    <v-icon> mdi-logout</v-icon>
                </v-btn>
            </div>
        </v-app-bar>
        <router-view class="view"/>
    </v-app>
</template>

<script>
    import {Component, Vue} from "vue-property-decorator";
    import {accountService} from "@/service/accountService";
    import SearchInput from "@/components/naming/SearchInput";

    @Component({
        name: "App",
        components: {SearchInput},
    })
    export default class App extends Vue {
        created() {
            document.title = "NAMING CENTER";
        }

        get account() {
            return this.$store.getters["account/hasAccount"];
        }

        logout() {
            accountService.logout();
        }
    }
</script>
