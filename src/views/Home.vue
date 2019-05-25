<template>
  <div class="home">
    <h1>Анкета кандидата в доноры</h1>
    <h2>Основные и контактные данные</h2>
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
    <h2>Медицинские данные</h2>
    <h3>Общие вопросы</h3>
    <radio-field
      label="Были ли у вас беременности?"
      v-model="survey.has_been_pregnant"
      :required="true"
      :options="yesno"
    />
    <text-field
      label="Сколько беременностей у вас было?"
      v-model="survey.count_of_pregnant"
      :required="true"
    />
    <text-field
      label="Групп крови и резус-фактор (если известны)"
      v-model="survey.blood_type"
      :required="true"
    />
    <radio-field
      label="Проводилось ли вам переливание крови?"
      v-model="survey.blood_transfusion"
      :required="true"
      :options="yesno"
    />
    <text-field label="Что переливали" v-model="survey.type_of_transfusion" :required="true"/>
    <text-field label="Когда переливали" v-model="survey.year_of_transfusion" :required="true">
      <div slot="extra">год</div>
    </text-field>
    <text-field
      label="Сколько раз переливали"
      v-model="survey.type_of_transfusion"
      :required="true"
    />
    <radio-field
      label="Есть ли у вас аллергия?"
      v-model="survey.allergy"
      :required="true"
      :options="yesno"
    />
    <text-field label="На какие аллергены?" v-model="survey.type_of_transfusion" :required="true"/>
    <text-field label="Рост" v-model="survey.type_of_transfusion" :required="true">
      <div slot="extra">см</div>
    </text-field>
    <radio-field
      label="Курите ли вы?"
      v-model="survey.is_smoking"
      :required="true"
      :options="yesno"
    />
    <radio-field
      label="Регулярно ли вы употребляете алкоголь?"
      v-model="survey.is_smoking"
      :required="true"
      :options="yesno"
    />
    <radio-field
      label="Вы когда-нибудь были донором крови?"
      v-model="survey.is_donor"
      :required="true"
      :options="yesno"
    />
    <radio-field
      label="Вас когда-нибудь отстраняли от донорства?"
      v-model="survey.is_dismissal_of_donoring"
      :required="true"
      :options="yesno"
    />
    <text-field
      label="Какова была причина отстранения"
      v-model="survey.dismiss_reason"
      :required="true"
    />
    <radio-field
      label="Принимаете ли вы на данный момент какие-нибудь медицинские препараты?"
      v-model="survey.is_dismissal_of_donoring"
      :required="true"
      :options="yesno"
    />
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
  }),
  methods: {
    createSurvey() {
      axios
        .post("/address/", this.survey)
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