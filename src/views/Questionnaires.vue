<template>
  <div class="questionnaires">
    <Header/>
    <Menu/>
    <h1>Анкеты кандидатов</h1>
    <table>
      <thead>
        <tr class="cell">
          <th>ФИО</th>
          <th>Дата создания</th>
          <th>Дата редактирования</th>
          <th>Статус</th>
        </tr>
        <tr v-for="questionnaire in questionnaires" :key="questionnaire.id" class="cell">
          <td class="textInCell">
            <router-link
              :to="{name:'QuestionnaireView', params: { id: questionnaire.id }}"
            >{{questionnaire.questionary.last_name}} {{questionnaire.questionary.first_name}} {{questionnaire.questionary.second_name}}</router-link>
          </td>
          <td class="nonTextInCell">{{questionnaire.created_date}}</td>
          <td class="nonTextInCell">{{questionnaire.modified_date}}</td>
          <td class="textInCell">
            <b
              v-if="questionnaire.questionary_status"
            >{{statuses[questionnaire.questionary_status.status]}}</b>
          </td>
        </tr>
      </thead>
    </table>

    <button @click="removeApproved()">Удалить все подтверждённые</button>
    <button @click="removeRejected()">Удалить все отклонённые</button>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import Header from "@/components/Header.vue";

if (localStorage.getItem("token")) {
  axios.defaults.headers.common["Authorization"] =
    "JWT " + localStorage.getItem("token");
}

export default {
  name: "questionnaire",
  data: () => ({
    questionnaires: [],
    statuses: [
      "Заполнен",
      "Отправлен на перезаполнение",
      "Подтверждён",
      "Отклонён"
    ]
  }),
  components: { Menu, Header },
  created() {
    axios
      .get("/api/questionary/questionaries/")
      .then(response => {
        this.questionnaires = response.data;
      });
  },
  methods: {
    removeApproved() {
      axios
        .delete("/api/questionary/delete-accepted/")
        .then(() => {
          this.$router.go();
        });
    },
    removeRejected() {
      axios
        .delete("/api/questionary/delete-rejected/")
        .then(() => {
          this.$router.go();
        });
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