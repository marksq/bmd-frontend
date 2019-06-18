<template>
  <div class="templatesDesigner">
    <Header/>
    <Menu/>
    <div>
      <h1>Шаблоны документов</h1>
    </div>
    <div>
      <button @click="create_template()">Создать новый шаблон</button>
      <div class="documents">
        <div v-for="template in templates" :key="template.id">
          <router-link :to="{name: 'TemplateEdit', params: {id: template.id}}">{{template.name}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";

export default {
  name: "templateDesigner",
  data: () => ({
    templates: []
  }),
  components: { Header, Menu },
  created() {
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common["Authorization"] =
        "JWT " + localStorage.getItem("token");
    }

    axios.get("/api/questionary/document-templates/").then(response => {
      this.templates = response.data;
    });
  },
  methods: {
    create_template() {
      this.$router.push("/template-add");
    }
  }
};
</script>

<style lang="sass" scoped>
table
  border-spacing: 0

td, th
  border: 1px solid black
  padding: 5px 10px


.textInCell  
  text-align: left

.nonTextInCell
  text-align: right

.checkboxContainer
  display: inline-block

.label
  display: inline
  position: relative
  top: -2px
  user-select: none
  font-weight: 500

.documents
  padding-top: 10px
  line-height: 1.5
</style>