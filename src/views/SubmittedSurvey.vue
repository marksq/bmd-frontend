<template>
  <div class="home">
    <Header/>
    <h1>Анкета кандидата в доноры принята</h1>
    <div>
      <p>
        Ваша анкета кандидата принята. Она будет проверена нашим специалистом,
        итоги проверки будут оправлены на ваш электронный адрес. Если анкета
        требует правок, мы сообщим об этом, если не требует — договоримся о
        визите в офис для подписания документов.
      </p>
      <p>Ссылка на вашу анкету: http://address//</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: { Header },
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
 