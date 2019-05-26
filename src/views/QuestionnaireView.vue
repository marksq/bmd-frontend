<template>
  <div class="home">
    <div class="no-print">
      <Header/>
      <h1>Анкета кандидата в доноры</h1>
      <h2>Комментарий сотрудника регистра</h2>
      <div>
        <textarea-field>Вам нужно исправить поля такие-то и такие-то.</textarea-field>
        <button @click="changeStatus()">Серёга сказал тут нужна кнопка</button>
      </div>
      <div v-for="field in fields" :key="field.key">
        <h2 v-if="field.type == 'header'">{{field.label}}</h2>
        <h3 v-if="field.type == 'subheader'">{{field.label}}</h3>
        <property v-if="field.type == 'text'" :label="field.label" :content="survey[field.key]"/>
        <property v-if="field.type == 'radio'" :label="field.label" :v-model="survey[field.key]"/>
      </div>
      <button class="main-button" @click="createSurvey()">Отправить анкету</button>
    </div>
    <div class="print">
      Только это будет видно на печати
      <div v-for="document in documents" :key="document.id">{{document.template}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import Property from "@/components/Property.vue";
import TextareaField from "@/components/fields/TextareaField.vue";
import RadioField from "@/components/fields/RadioField.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    TextareaField,
    RadioField,
    Header,
    Property
  },
  data: () => ({
    fields: [],
    survey: {},
    options: {},
    documents: []
  }),
  created() {
    axios
      .get("http://192.168.0.104:8000/api/questionary/questionary-fields/1/")
      .then(response => {
        this.fields = response.data.fields;
        this.options = response.data.options;
      });
    axios
      .get("http://192.168.0.104:8000/api/questionary/document-templates/")
      .then(response => {
        this.documents = response.data;
      });
    axios
      .get(
        "http://192.168.0.104:8000/api/questionary/questionaries/" +
          this.$route.params.id +
          "/"
      )
      .then(response => {
        this.survey = response.data.questionary;
        this.comment = response.data.questionary_status;
      });
  },
  methods: {
    createSurvey() {
      axios
        .post("/address/", this.survey)
        .then(response => {
          console.log("response: ", response);
          this.$router.push({ name: "submittedSurvey" });
        })
        .catch(error => {
          console.log("error: ", error);
          this.$router.push({ name: "submittedSurvey" });
        });
    }
  }
};
</script>

<style lang="sass" scoped>
.print
 display: none

.main-button
  padding: 10px 20px
  font-size: 18px
  margin-left: 20px


@media print
  .no-print, .no-print *
    display: none !important
  .print
    display: inherit !important

</style>
