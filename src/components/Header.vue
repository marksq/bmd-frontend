<template>
  <div class="header">
    Карельский регистр неродственных доноров гемопоэтических стволовых клеток
    <div class="auth">
      <router-link class="auth-link" to="/login">Войти</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.auth-link {
  color: white;
}
.auth {
  float: right;
  font-weight: bold;
}
.header {
  width: calc(100% - 40px);
  color: white;
  background-color: darkblue;
  padding: 10px 20px;
}
</style>
