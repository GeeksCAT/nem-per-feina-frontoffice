<template>
  <div class="box">
    <h3 class="heading">New account</h3>
    <p class="lead">Not our registered yet?</p>
    <p class="text-muted">
      If you have any questions, please feel free to <a href="#">contact us</a>,
      our customer service center is working for you 24/7.
    </p>

    <div>
      <div class="form-group">
        <label for="id_first_name">Company Name</label>
        <input
          v-model="companyName"
          type="text"
          class="form-control"
          name="first_name"
          id="id_first_name"
          placeholder="Enter Company Name"
        />
      </div>

      <div class="form-group">
        <label for="id_last_name">Company Address</label>
        <input
          v-model="companyAddress"
          type="text"
          class="form-control"
          name="last_name"
          id="id_last_name"
          placeholder="Enter Company Address"
        />
      </div>

      <div class="form-group">
        <label for="id_email">Email</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          name="email"
          id="id_email"
          placeholder="Enter Email"
        />
      </div>

      <div class="form-group">
        <label for="id_password1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          name="password1"
          id="id_password1"
          placeholder="Enter Password"
        />
      </div>

      <div class="form-group">
        <label for="id_password2">Confirm Password</label>
        <input
          v-model="passwordConfirm"
          type="password"
          class="form-control"
          name="password2"
          id="id_password2"
          placeholder="Confirm Password"
        />
      </div>

      <div class="text-center">
        <button class="btn btn-outline-white-primary" @click="register()">
          <i class="fa fa-user-md"></i> Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      companyName: "",
      companyAddress: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    register: async function() {
      const body = {
        //companyName: this.companyName,
        //companyAddress: this.companyAddress,
        email: this.email,
        password: this.password,
        password2: this.passwordConfirm,
        gender: 1
      };

      console.log(JSON.stringify(body));

      const result = await this.$http.post(`/api/register`, body);
      const data = await result.json();
      console.log(data);
    },
  },
};
</script>
