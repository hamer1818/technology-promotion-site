<template>
    <div class="container">
      <form @submit.prevent="handleSubmit" class="form">
        <h2>Giriş Yap</h2>
        <div class="form-group">
          <label for="email">E-posta:</label>
          <input type="email" name="email" class="form-control" v-model="formData.email">
        </div>
        <div class="form-group">
          <label for="password">Şifre:</label>
          <input type="password" name="password" class="form-control" v-model="formData.password">
        </div>
        <button type="submit" class="btn btn-primary">Giriş Yap</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {}
      };
    },
    methods: {
      handleSubmit() {
        // Form verilerini bir API'ye göndermek için buraya kod yazabilirsiniz.
      }
    }
  };
  </script>
  
  <style scoped>
  /* Bootstrap stilleri */
  .form-group label {
    font-weight: bold;
  }
  .form {
    margin-top: 50px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }
  </style>
  