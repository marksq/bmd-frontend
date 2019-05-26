<template>
  <div class="home">
    <Header/>
    <h1>Анкета кандидата в доноры</h1>
    <div v-for="field in fields" :key="field.key">
      <h2 v-if="field.type == 'header'">{{field.label}}</h2>
      <h3 v-if="field.type == 'subheader'">{{field.label}}</h3>
      <property
        class="padding"
        v-if="field.type == 'text'"
        :label="field.label"
        :content="survey[field.key]"
      />
      <property
        class="padding"
        v-if="field.type == 'radio'"
        :label="field.label"
        :v-model="survey[field.key]"
      />
    </div>
    <h2>Поля для заполнения сотрудником регистра</h2>
    <div>
      <textarea-field label="Комментарий" v-model="status.comment"></textarea-field>
      <radio-field label="Статус" v-model="status.status" :options="statuses"/>
    </div>
    <button class="main-button" @click="editStatus()">Внести изменения</button>
    <button class="right" @click="printDocs()">Распечатать набор документов</button>
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
    status: {
      comment: "",
      status: ""
    },
    statuses: [
      {
        id: 0,
        name: "Заполнен"
      },
      {
        id: 1,
        name: "Отправлен на перезаполнение"
      },
      {
        id: 2,
        name: "Подтверждён"
      },
      {
        id: 3,
        name: "Отклонён"
      }
    ]
  }),
  created() {
    axios
      .get("http://192.168.0.104:8000/api/questionary/questionary-fields/1/")
      .then(response => {
        this.fields = response.data.fields;
        this.options = response.data.options;
      });

    axios
      .get(
        "http://192.168.0.104:8000/api/questionary/questionaries/" +
          this.$route.params.id +
          "/"
      )
      .then(response => {
        this.survey = response.data.questionary;
        this.status = response.data.questionary_status;
      });
  },
  methods: {
    editStatus() {
      axios
        .put(
          "http://192.168.0.104:8000/api/questionary/questionary-status/" +
            this.status.id +
            "/",
          this.status
        )
        .then(response => {
          console.log("response: ", response);
          this.$router.push({ name: "Questionnaires" });
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

.padding
  padding-left: 20px

.right
  float: right
</style>
