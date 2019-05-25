<template>
  <div class="questionnaires">
    <Header/>
    <Menu/>
    <h1>Анкеты кандидатов</h1>
    <table>
      <thead>
        <tr class="cell">
          <th>№ кандидата</th>
          <th>ФИО</th>
          <th>Статус</th>
          <th>Дата создания</th>
          <th>Дата редактирования</th>
        </tr>
        <tr v-for="questionnaire in questionnaires" :key="questionnaire.id" class="cell">
          <td class="nonTextInCell">{{questionnaire.id}}</td>
          <td class="textInCell">{{questionnaire.name}}</td>
          <td class="textInCell">{{questionnaire.status}}</td>
          <td class="nonTextInCell">{{questionnaire.created_date}}</td>
          <td class="nonTextInCell">{{questionnaire.modyfied_date}}</td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";

export default {
  name: "questionnaire",
  data: () => ({
    questionnaires: [
      {
        id: "1",
        name: "Васька",
        status: "Уточняется",
        created_date: "2011-9-31",
        modyfied_date: "2011-9-31"
      },
      {
        id: "2",
        name: "Мурка",
        status: "Заполнена",
        created_date: "2011-9-31",
        modyfied_date: "2011-9-31"
      },
      {
        id: "3",
        name: "Васька",
        status: "Создана",
        created_date: "2011-9-31",
        modyfied_date: "2011-9-31"
      }
    ]
  }),
  components: { Menu, Header }
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