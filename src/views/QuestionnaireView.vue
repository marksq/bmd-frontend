<template>
  <div class="home">
    <div class="no-print">
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
    <div class="print">
      <div v-for="document in documents" :key="document.id" v-html="document.template"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import VRuntimeTemplate from "v-runtime-template";

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
    Property,
    VRuntimeTemplate
  },
  data: () => ({
    fields: [],
    survey: {},
    options: {},
    documents: [],
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
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common["Authorization"] =
        "JWT " + localStorage.getItem("token");
    }

    axios.get("/api/questionary/questionary-fields/1/").then(response => {
      this.fields = response.data.fields;
      this.options = response.data.options;
    });

    axios.get("/api/questionary/document-templates/").then(response => {
      this.documents = response.data;
    });
    axios
      .get("/api/questionary/questionaries/" + this.$route.params.id + "/")
      .then(response => {
        this.survey = response.data.questionary;
        this.status = response.data.questionary_status;
      });
  },
  methods: {
    editStatus() {
      axios
        .put(
          "/api/questionary/questionary-status/" + this.status.id + "/",
          this.status
        )
        .then(response => {
          this.$router.push({ name: "Questionnaires" });
        })
        .catch(error => {
          console.log("error: ", error);
        });
    },
    printDocs() {
      print();
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

.padding
  padding-left: 20px

.right
  float: right

@media print
  .no-print, .no-print *
    display: none !important
  .print
    display: inherit !important

.padding
  padding-left: 20px

.right
  float: right
</style>
