<template>
  <div class="home">
    <Header/>
    <h1>Вход в систему</h1>
    <div>
      <text-field label="Электронная почта" v-model="email" :required="true"/>
      <password-field label="Пароль" v-model="password" :required="true"/>
    </div>
    <button class="main-button" @click="auth()">Войти в систему</button>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import TextField from "@/components/fields/TextField.vue";
import PasswordField from "@/components/fields/PasswordField.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    TextField,
    PasswordField,
    Header
  },
  data: () => ({
    email: "",
    password: ""
  }),
  created() {},
  methods: {
    auth() {
      axios
        .post("/api/users/auth/", {
          email: this.email,
          password: this.password
        })
        .then(response => {
          localStorage.setItem("token", response.data.token);
          this.$router.push("/questionnaires");
        });
    }
  }
};
</script>

<style lang="sass">
.main-button
  padding: 10px 20px
  font-size: 18px
  margin-left: 20px
</style>
