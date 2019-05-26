<template>
  <div class="home">
    <Header/>
    <Menu/>
    <h1>Редактирование шаблона документа</h1>
    <div>
      <text-field label="Название" v-model="name" :required="true"/>
      <textarea-field label="HTML-шаблон" v-model="templateHTML" :required="true"></textarea-field>
      <button class="main-button" @click="edit()">Редактировать шаблон</button>
      <button class="right" @click="remove()">Удалить шаблон</button>
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
    axios
      .get(
        "http://192.168.0.104:8000/api/questionary/document-templates/" +
          this.$route.params.id
      )
      .then(response => {
        this.templateHTML = response.data.template;
        this.name = response.data.name;
      });
  },
  methods: {
    edit() {
      axios
        .put(
          "http://192.168.0.104:8000/api/questionary/document-templates/" +
            this.$route.params.id +
            "/",
          {
            template: this.templateHTML,
            name: this.name
          }
        )
        .then(response => {
          console.log("response: ", response);
          this.$router.push({ name: "TemplatesDesigner" });
        })
        .catch(error => {
          console.log("error: ", error);
        });
    },
    remove() {
      axios
        .delete(
          "http://192.168.0.104:8000/api/questionary/document-templates/" +
            this.$route.params.id +
            "/"
        )
        .then(response => {
          console.log("response: ", response);
          this.$router.push({ name: "TemplatesDesigner" });
        })
        .catch(error => {
          console.log("error: ", error);
        });
    }
  }
};
</script>
 
 <style lang="sass" scoped>
 .right
  float: right
 </style>
 