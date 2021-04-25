<template>
  <div v-if="!hasResult" class="search">
    <search-input> </search-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SearchInput from "@/components/naming/SearchInput.vue";

@Component({
  name: "Search",
  components: { SearchInput },
})
export default class Search extends Vue {
  get hasResult() {
    console.log(
      `hasResult ${JSON.stringify(
        this.$store.getters["naming/getNamingList"].length
      )}`
    );
    return this.$store.getters["naming/getNamingList"].length > 0;
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
