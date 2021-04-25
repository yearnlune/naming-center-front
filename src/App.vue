<template>
  <v-app id="app">
    <v-app-bar app flat absolute extended elevate-on-scroll color="white">
      <v-toolbar-title>Naming Center</v-toolbar-title>
      <div class="bar-search col-9" v-if="result">
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
import { Component, Vue } from "vue-property-decorator";
import { accountService } from "@/service/accountService";
import SearchInput from "@/components/naming/SearchInput";

@Component({
  name: "App",
  components: { SearchInput },
})
export default class App extends Vue {
  created() {
    document.title = "NAMING CENTER";
  }

  get account() {
    return this.$store.getters["account/hasAccount"];
  }

  get result() {
    return this.$store.getters["naming/hasNamingList"];
  }

  logout() {
    accountService.logout();
  }
}
</script>
<style lang="scss">
.bar-search {
  display: flex;
  align-items: center;
  margin: 2.5em 0 0 0;
  .container {
    justify-content: left;
  }
}
</style>
