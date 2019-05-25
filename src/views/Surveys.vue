<template>
  <div class="surveys">
    <div>sdvsdvs</div>
    <div>
      Поиск анкеты
      <div>
        <form>
          <input type="text">№ кандидата
          <input type="text">
ФИО кандидата
        </form>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>№ кандидата</th>
          <th>ФИО</th>
          <th>Статус</th>
          <th>Дата создания</th>
          <th>Дата редактирования</th>
        </tr>
        <tr v-for="survey in surveys" :key="survey.id">
          <td>{{survey.id}}</td>
          <td>{{survey.name}}</td>
          <td>{{survey.status}}</td>
          <td>{{survey.created_date}}</td>
          <td>{{survey.modyfied_date}}</td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "surveys",
  data: () => ({
    surveys: [
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
  components: {}
};
</script>
