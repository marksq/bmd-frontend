<template>
  <div class="home">
    <Header/>
    <h1>Редактирование анкеты кандидата в доноры</h1>
    <h2>Комментарий сотрудника</h2>
    <div>{{comment.comment}}</div>
    <div v-for="field in fields" :key="field.key">
      <h2 v-if="field.type == 'header'">{{field.label}}</h2>
      <h3 v-if="field.type == 'subheader'">{{field.label}}</h3>
      <text-field
        v-if="field.type == 'text'"
        :label="field.label"
        v-model="survey[field.key]"
        :required="field.required"
      />
      <radio-field
        v-if="field.type == 'radio'"
        :label="field.label"
        v-model="survey[field.key]"
        :required="field.required"
        :options="options[field.options]"
      />
    </div>
    <button class="main-button" @click="createSurvey()">Отправить анкету</button>
  </div>
</template>

<script>
import axios from "axios";

// @ is an alias to /src
import TextField from "@/components/fields/TextField.vue";
import RadioField from "@/components/fields/RadioField.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    TextField,
    RadioField,
    Header
  },
  data: () => ({
    comment: {},
    fields: [
      {
        type: "header",
        label: "Основные и контактные данные"
      },
      {
        type: "text",
        label: "Фамилия",
        key: "last_name",
        required: true
      },
      {
        type: "text",
        label: "Имя",
        key: "first_name",
        required: true
      },
      {
        type: "text",
        label: "Отчество",
        key: "second_name",
        required: true
      },
      {
        type: "text",
        label: "Дата рождения",
        key: "birth_date",
        required: true
      },
      {
        type: "radio",
        label: "Пол",
        key: "gender",
        options: "genders",
        required: true
      },
      {
        type: "text",
        label: "Телефон",
        key: "phone",
        required: true
      },
      {
        type: "text",
        label: "Мобильный телефон",
        key: "mobile_phone",
        required: true
      },
      {
        type: "text",
        label: "Электронная почта",
        key: "email",
        required: true
      },
      {
        type: "text",
        label: "Другие способы связи",
        key: "other_contacts",
        required: false
      },
      {
        type: "text",
        label: "Адрес",
        key: "address",
        required: true
      },
      {
        type: "text",
        label: "Этническая группа",
        key: "ethnicity",
        required: true,
        options: "enhnicities"
      },
      {
        type: "text",
        label: "Дата заполнения",
        key: "filling_date",
        required: true
      },
      {
        type: "header",
        label: "Медицинские данные"
      },
      {
        type: "subheader",
        label: "Общие вопросы"
      },
      {
        type: "radio",
        label: "Были ли у вас беременности?",
        key: "has_been_pregnant",
        required: false,
        options: "yesno"
      },
      {
        type: "text",
        label: "Сколько беременностей у вас было?",
        key: "count_of_pregnant",
        required: false
      },
      {
        type: "text",
        label: "Группа крови и резус-фактор",
        key: "blood_type",
        required: false
      },
      {
        type: "radio",
        label: "Проводилось ли вам переливание крови?",
        key: "blood_transfusion",
        required: true,
        options: "yesno"
      },
      {
        type: "text",
        label: "Что переливали",
        key: "type_of_transfusion",
        required: false
      },
      {
        type: "text",
        label: "Когда переливали (год)",
        key: "year_of_transfusion",
        required: false
      },
      {
        type: "text",
        label: "Сколько раз переливали",
        key: "count_of_transfusion",
        required: false
      },
      {
        type: "radio",
        label: "Есть ли у вас аллергия?",
        key: "allergy",
        required: true,
        options: "yesno"
      },
      {
        type: "text",
        label: "На какие аллергены?",
        key: "allergy_kind",
        required: true
      },
      {
        type: "text",
        label: "Рост",
        key: "height",
        required: true
      },
      {
        type: "text",
        label: "Вес",
        key: "weight",
        required: true
      }
    ],
    survey: {},
    options: {
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
      yesno: [
        {
          id: true,
          name: "Да"
        },
        {
          id: false,
          name: "Нет"
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
    }
  }),
  created() {
    axios
      .get(
        "http://192.168.0.104:8000/api/questionary/questionaries/" +
          this.$route.params.id
      )
      .then(response => {
        this.survey = response.data.questionary;
        this.comment = response.data.questionary_status;
      });
  },
  methods: {
    createSurvey() {
      axios
        .put(
          "http://192.168.0.104:8000/api/questionary/questionaries/" +
            this.$route.params.id +
            "/",
          {
            questionary: this.survey
          }
        )
        .then(response => {
          console.log("response: ", response);
          this.$router.push({ name: "submittedSurvey" });
        })
        .catch(error => {
          console.log("error: ", error);
          this.$router.push({ name: "submittedSurvey" });
        });
    }
  }
};
</script>

<style lang="sass" scoped>
.main-button
  padding: 10px 20px
  font-size: 18px
  margin-left: 20px
</style>
