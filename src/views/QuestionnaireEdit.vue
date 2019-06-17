<template>
  <div class="home">
    <Header/>
    <Menu/>
    <h1>Редактирование набора полей онлайн-опросника</h1>
    <div>
      <textarea-field label="Набор полей в формате JSON" v-model="fields"></textarea-field>
      <textarea-field label="Набор справочников в формате JSON" v-model="options"></textarea-field>
    </div>
    <button class="main-button" @click="saveFields()">Сохранить набор полей</button>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "@/components/Menu.vue";
import TextareaField from "@/components/fields/TextareaField.vue";
import Header from "@/components/Header.vue";

if (localStorage.getItem("token")) {
  axios.defaults.headers.common["Authorization"] =
    "JWT " + localStorage.getItem("token");
}

export default {
  name: "home",
  components: {
    TextareaField,
    Menu,
    Header
  },
  data: () => ({
    fields: {},
    options: {}
  }),
  created() {
    axios
      .get("/api/questionary/questionary-fields/")
      .then(response => {
        console.log(response);
        this.fields = JSON.stringify(response.data[0].fields, null, 2);
        this.options = JSON.stringify(response.data[0].options, null, 2);
      });
  },
  methods: {
    saveFields() {
      let fieldsAndOptions = { fields: {}, options: {} };

      fieldsAndOptions.fields = JSON.parse(this.fields);
      fieldsAndOptions.options = JSON.parse(this.options);

      axios
        .put(
          "/api/questionary/questionary-fields/1/",
          fieldsAndOptions
        )
        .then(response => {
          console.log("response: ", response);
        })
        .catch(error => {
          console.log("error: ", error);
        });
    }
  }
};
</script>
 