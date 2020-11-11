<template>
  <div>
    <Navbar/>
    <Alert></Alert>
    <div class="container-fluid">
        <div class="row">
            <Sidebar/>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view></router-view>
        </main>
        </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/backend/Navbar.vue';
import Sidebar from '@/components/backend/Sidebar.vue';
import Alert from '@/components/AlertMessage.vue';

export default {
  components: {
    Navbar,
    Sidebar,
    Alert,
  },
};
</script>

<style lang="scss" scoped>
body {
    font-size: .875rem;
  }

  .feather {
    width: 16px;
    height: 16px;
    vertical-align: text-bottom;
  }

  /*
   * Content
   */

  [role="main"] {
    padding-top: 133px; /* Space for fixed navbar */
  }

  @media (min-width: 768px) {
    [role="main"] {
      padding-top: 48px; /* Space for fixed navbar */
    }
  }
</style>
