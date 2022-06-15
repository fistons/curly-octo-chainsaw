<template>
  <div class="col-md-12">
    <div class="card card-container">
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="username">Username</label>
          <Field name="login" type="text" class="form-control" />
          <ErrorMessage name="login" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field name="password" type="password" class="form-control" />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { ErrorMessage, Field, Form } from "vee-validate";
import AuthService from "@/services/auth.service";
import * as yup from "yup";

export default {
  name: "TheLogin",
  components: { Form, Field, ErrorMessage },
  data() {
    const schema = yup.object().shape({
      login: yup.string().required("Login is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    handleLogin(user) {
      this.loading = true;
      AuthService.authenticate(user).then(
        () => this.$router.push("/"),
      );
    },
  },
  mounted() {
    if (this.currentUser) {
      this.$router.push("/");
    }
  },
  computed: {
    currentUser() {
      return localStorage.getItem("user");

    }
  }
};
</script>

<style scoped></style>
