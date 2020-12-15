<template>
    <div class="search">
        <v-container fluid class="search-container">
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
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from "vue-property-decorator";
    import searchService, {ApiPath, SearchService} from "@/service/searchService";

    @Component({
        name: "Search",
    })

    export default class Search extends Vue {
        private search = '';
        private searchItem = '';
        private autocompleteItems = [];
        private loading = false;
        private searchService: SearchService = searchService();
        private timer: NodeJS.Timeout | number = 0;
        private TYPING_PENDING_TIMEOUT = 500;

        @Watch("searchItem")
        onWatchSearchItem(neo: string) {
            const item = neo;
            if (!item || item.length === 0) {
                return;
            }
            this.getAutocomplete(item);
        }

        private getAutocomplete(naming: string) {
            if (typeof this.timer === 'number') {
                clearTimeout(this.timer);
            }

            this.timer = setTimeout(() => {
                this.loading = true;
                this.searchService.restfulGet(ApiPath.SEARCH, naming, ApiPath.AUTOCOMPLETE)
                    .then((response) => {
                        this.autocompleteItems = response.data?.namingList || [];
                    }).catch((error) => {
                    console.error(error);
                }).finally(() => {
                    this.loading = false;
                })
            }, this.TYPING_PENDING_TIMEOUT);
        }
    }
</script>

<style lang="scss">
    .search {
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
