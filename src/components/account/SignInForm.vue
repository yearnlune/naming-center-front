<template>
    <div class="sign-in">
        <v-container fluid class="sign">
            <v-row>
                <v-col>
                    <v-text-field placeholder="ID"></v-text-field>
                    <v-text-field placeholder="PW"></v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    @Component({
        name: "SignInForm"
    })

    export default class SignInForm extends Vue {
        @Prop({default: false})
        private loading!: boolean;

    }

</script>

<style lang="scss">

</style>
