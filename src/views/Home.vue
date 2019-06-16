<template>
  <div class="home">
    <Header/>
    <h1>Анкета кандидата в доноры</h1>
    <div v-for="field in fields" :key="field.key">
      <h2 v-if="field.type == 'header'">{{field.label}}</h2>
      <h3 v-if="field.type == 'subheader'">{{field.label}}</h3>
      <text-field
        v-if="field.type == 'text'"
        :label="field.label"
        v-model="survey[field.key]"
        :required="field.required"
      />
      <radio-field
        v-if="field.type == 'radio'"
        :label="field.label"
        v-model="survey[field.key]"
        :required="field.required"
        :options="options[field.options]"
      />
    </div>
    <button class="main-button" @click="createSurvey()">Отправить анкету</button>
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
    fields: [],
    survey: {},
    options: {}
  }),
  created() {
    axios
      .get("/api/questionary/questionary-fields/1/")
      .then(response => {
        this.fields = response.data.fields;
        this.options = response.data.options;
      });
  },
  methods: {
    createSurvey() {
      axios
        .post("/api/questionary/questionaries/", {
          questionary: this.survey,
          email: this.survey.email
        })
        .then(response => {
          console.log("response: ", response);
          this.$router.push({
            name: "submittedSurvey",
            params: { id: response.data.id }
          });
        })
        .catch(error => {
          console.log("error: ", error);
        });
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
