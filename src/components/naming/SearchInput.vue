<template>
  <v-container fluid>
    <v-row class="col-6">
      <v-col>
        <v-form>
          <v-combobox
            id="search-input"
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            :items="autocompleteItems"
            :search-input.sync="searchItem"
            :loading="loading"
            v-on:keyup.enter="searchKeyword"
            outlined
            rounded
            clearable
            hide-selected
            autofocus
          ></v-combobox>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { SearchService, searchService } from "@/service/searchService";

@Component
export default class SearchInput extends Vue {
  private search = "";
  private searchItem = "";
  private autocompleteItems = [];
  private loading = false;
  private searchService: SearchService = searchService;
  private timer: NodeJS.Timeout | number = 0;
  private readonly TYPING_PENDING_TIMEOUT = 500;

  @Watch("searchItem")
  onWatchSearchItem(neo: string) {
    const item = neo;
    if (!item || item.length === 0) {
      return;
    }
    this.getAutocomplete(item);
  }

  private getAutocomplete(naming: string) {
    if (typeof this.timer === "number") {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.loading = true;
      this.searchService
        .searchAutoComplete(naming)
        .then((response) => {
          this.autocompleteItems = response || [];
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.loading = false;
        });
    }, this.TYPING_PENDING_TIMEOUT);
  }

  private searchKeyword() {
    this.searchService
      .searchName(this.search)
      .then((naming) => {
        console.log(`SEARCH ${this.search}: ${JSON.stringify(naming)}`);
        this.$store.dispatch("naming/saveNamingList", naming);
      })
      .catch((e) => {
        console.error(e);
      });
  }
}
</script>

<style scoped></style>
