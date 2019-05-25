<template>
  <div class="home">
    <Menu></Menu>
    <h1>Редактирование печатной формы анкеты</h1>
    <div>
      <textarea-field label="Описание набора полей в формате JSON"></textarea-field>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Menu from "@/components/Menu.vue";
import TextareaField from "@/components/fields/TextareaField.vue";

export default {
  name: "home",
  components: {
    TextareaField,
    Menu
  },
  data: () => ({
    templateHTML: `
    
    `
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
 