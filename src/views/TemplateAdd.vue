<template>
  <div class="home">
    <Header/>
    <Menu/>
    <h1>Новый шаблон документа</h1>
    <div>
      <text-field label="Название" v-model="name" :required="true"/>
      <textarea-field label="HTML-шаблон" v-model="templateHTML" :required="true"></textarea-field>
      <button class="main-button" @click="create()">Создать шаблон</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Menu from "@/components/Menu.vue";
import TextareaField from "@/components/fields/TextareaField.vue";
import TextField from "@/components/fields/TextField.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    TextareaField,
    TextField,
    Menu,
    Header
  },
  data: () => ({
    templateHTML: "",
    name: ""
  }),
  created() {
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common["Authorization"] =
        "JWT " + localStorage.getItem("token");
    }
  },
  methods: {
    create() {
      axios
        .post("/api/questionary/document-templates/", {
          template: this.templateHTML,
          name: this.name
        })
        .then(response => {
          this.$router.push({ name: "TemplatesDesigner" });
        })
        .catch(error => {
          console.log("error: ", error);
        });
    }
  }
};
</script>
 