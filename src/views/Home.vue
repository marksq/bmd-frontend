<template>
  <div class="home">
    <h1>Анкета кандидата в доноры</h1>
    <div>{{survey}}</div>
    <text-field label="Фамилия" v-model="survey.last_name" :required="true"/>
    <text-field label="Имя" v-model="survey.first_name" :required="true"/>
    <text-field label="Отчество" v-model="survey.second_name" :required="true"/>
    <text-field label="Дата рождения" v-model="survey.birth_date" :required="true"/>
    <radio-field label="Пол" v-model="survey.gender" :required="true" :options="genders"/>
    <text-field label="Телефон" v-model="survey.phone"/>
    <text-field label="Мобильный телефон" v-model="survey.mobile_phone" :required="true"/>
    <text-field label="Электронная почта" v-model="survey.email" :required="true"/>
    <text-field label="Другие способы связи" v-model="survey.other_contacts"/>
    <text-field label="Адрес" v-model="survey.address" :required="true"/>
    <radio-field
      label="Этническая группа"
      v-model="survey.ethnicity"
      :required="true"
      :options="enhnicities"
    />
    <text-field label="Дата заполнения" v-model="survey.created_date" :required="true"/>
    <button @click="createSurvey()">Отправить анкету</button>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import TextField from "@/components/fields/TextField.vue";
import RadioField from "@/components/fields/RadioField.vue";

export default {
  name: "home",
  components: {
    TextField,
    RadioField
  },
  data: () => ({
    survey: {},
    genders: [
      {
        id: "male",
        name: "Мужской"
      },
      {
        id: "female",
        name: "Женский"
      }
    ],
    enhnicities: [
      {
        id: "russians",
        name: "Русские"
      },
      {
        id: "tatars",
        name: "Татары"
      },
      {
        id: "ukrainians",
        name: "Украинцы"
      },
      {
        id: "bashkirs",
        name: "Башкиры"
      },
      {
        id: "chuvashs",
        name: "Чувашы"
      },
      {
        id: "chechens",
        name: "Чеченцы"
      },
      {
        id: "armenians",
        name: "Армяне"
      },
      {
        id: "avars",
        name: "Аварцы"
      },
      {
        id: "mordvins",
        name: "Мордвины"
      },
      {
        id: "unknown",
        name: "Не знаю"
      }
    ]
  }),
  methods: {
    createSurvey() {
      axios
        .post("/address/", this.survey)
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
 