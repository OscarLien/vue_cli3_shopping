<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <router-link
        class="navbar-brand col-sm-3 col-md-2 mr-0"
        to="/watchmaster_home"
        >Watch Master</router-link
      >
      <input
        class="form-control form-control-dark w-100"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click="logout">Sign out</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      const vm = this;
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$store.dispatch('cartModules/updateMessage', { message: response.data.message, status: 'success' });
          vm.$router.push('/signin');
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>

  .navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, .25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  }

  .navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }

  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
  }

  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
  }
</style>
