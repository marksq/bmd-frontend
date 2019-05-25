<template>
  <div class="home">
    <h1>Редактирование анкеты</h1>
    <div>
      <textarea-field label="Описание набора полей в формате JSON"></textarea-field>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import TextareaField from "@/components/fields/TextareaField.vue";

export default {
  name: "home",
  components: {
    TextareaField
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
          this.$router.push({ name: "approvedSurvey" });
        })
        .catch(error => {
          console.log("error: ", error);
        });
    }
  }
};
</script>
 