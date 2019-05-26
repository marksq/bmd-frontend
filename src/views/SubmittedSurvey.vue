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
      <p>
        Ссылка на вашу анкету:
        <a
          href="http://192.168.0.120:8000/api/questionary/questionaries/"
        >http://192.168.0.120:8000/api/questionary/questionaries/</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: { Header },
  data: () => ({}),
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
 