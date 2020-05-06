<template>
    <div class="sign-in">
        <v-container fluid class="sign">
            <v-row>
                <v-col>
                    abc
                    <text-field label="aa" placeholder="LOGIN"/>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    @Component({
        name: "SignInForm"
    })

    export default class SignInForm extends Vue {
    }

</script>

<style lang="scss">

</style>
