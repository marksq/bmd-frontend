<template>
  <div class="questionnaires">
    <div>
      <ul>
        <li>
          <router-link to="/questionnaires">Анкеты</router-link>
        </li>
        <li>
          <router-link to="/templates-designer">Шаблоны документов</router-link>
        </li>
        <li>
          <router-link to="/questionnary-edit">Шаблон опросника</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String,
    content: String,
    label: String,
    pre: Boolean,
    additional: String,
    compact: Boolean
  }
};
</script>

<style lang="sass">

ul
  margin: 0
  padding: 4px
  
ul li 
  display: inline
  margin-right: 5px
  padding: 3px 
</style>
