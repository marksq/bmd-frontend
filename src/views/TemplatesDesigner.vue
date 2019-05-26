<template>
  <div class="templatesDesigner">
    <Header/>
    <Menu/>
    <div>
      <h1>Шаблоны документов</h1>
    </div>
    <br>
    <div>
      <div>
        <button @click="create_template()">Создать новый шаблон</button>
      </div>
      <br>
      <div v-for="template in templates" :key="template.id">
        <router-link to="/template-edit">{{template.name}}</router-link>
      </div>
    </div>
    <!-- <table>
      <thead>
        <tr class="cell">
          <th>Наименование Документа</th>
        </tr>
        <tr v-for="template in templates" :key="template.id" class="cell">
          <td class="textInCell">{{template.name}}</td>
        </tr>
      </thead>
    </table>-->
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";

export default {
  name: "templateDesigner",
  data: () => ({
    templates: [
      {
        id: "1",
        name: "Анкета состояния здоровья"
      },
      {
        id: "2",
        name: "Соглашение об участии в научно-практическом исследовании"
      },
      {
        id: "3",
        name:
          "Соглашение о вступлении в регистр доноров гемопоэтических стволовых клеток"
      },
      {
        id: "4",
        name: "Этническая группа кандидата"
      },
      {
        id: "5",
        name: "Опросник"
      }
    ]
  }),
  components: { Header, Menu },
  methods: {
    create_template() {
      this.$router.push("/template-edit");
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
</style>