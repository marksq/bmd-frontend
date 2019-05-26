<template>
  <div class="home">
    <Header/>
    <h1>Вход в систему</h1>
    <div>
      <text-field label="Логин" v-model="cred.login" :required="true"/>
      <text-field label="Пароль" v-model="cred.password" :required="true"/>
    </div>
    <button class="main-button" @click="auth()">Войти в систему</button>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import TextField from "@/components/fields/TextField.vue";
import RadioField from "@/components/fields/RadioField.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    TextField,
    RadioField,
    Header
  },
  data: () => ({
    cred: {},
    token: "123456654321"
  }),
  created() {},
  methods: {
    auth() {
      localStorage.setItem("token", this.token);
      this.$router.push("/questionnaires");
    }
  }
};
</script>

<style lang="sass" scoped>
.main-button
  padding: 10px 20px
  font-size: 18px
  margin-left: 20px
</style>
