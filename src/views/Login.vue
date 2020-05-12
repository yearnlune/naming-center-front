<template>
    <div class="container">
        <SignInForm></SignInForm>
    </div>
</template>


<script lang="ts">
    import SignInForm from "@/components/account/SignInForm.vue";
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: "Login",
        components: {
            SignInForm
        }
    })

    export default class Login extends Vue {
    }
</script>

<style lang="scss">
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
