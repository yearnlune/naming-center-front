<template>
  <div class="sign-in">
    <v-container fluid class="sign">
      <v-row>
        <v-col>
          <v-form>
            <v-text-field
              id="id-input"
              placeholder="ID"
              v-model="userId"
              :label="userId ? 'ID' : ''"
              autofocus
            ></v-text-field>
            <v-text-field
              placeholder="PW"
              v-model="userPassword"
              :label="userPassword ? 'PW' : ''"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-on:keyup.enter="login"
            ></v-text-field>
            <v-btn
              color="primary"
              :disabled="!validation"
              :loading="loading"
              @click="login"
              >LOGIN
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {
  accountService,
  AccountService,
  ApiPath,
  LoginRequest,
} from "@/service/accountService";

@Component
export default class SignInForm extends Vue {
  private showPassword = false;
  private userId = "";
  private userPassword = "";
  private loading = false;
  private accountService: AccountService = accountService;

  private get validation(): boolean {
    let isValidation = false;
    if (this.userId && this.userPassword) {
      isValidation = true;
    }
    return isValidation;
  }

  private login() {
    this.loading = true;
    this.accountService
      .restfulPost(ApiPath.LOGIN, this.loginRequestPayload)
      .then((response) => {
        this.$store.dispatch("account/loginAccount", response.data);

        if (response.data.jwt) {
          window.localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("search");
        }

        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
        this.loading = false;
      });
  }

  private get loginRequestPayload(): LoginRequest {
    return { id: this.userId, password: this.userPassword };
  }
}
</script>

<style lang="scss"></style>
