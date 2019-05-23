<template>
  <b-container>
    <b-row class="justify-content-lg-center justify-content-md-center">
      <b-col lg="6" md="8">
        <b-form @submit.prevent="createUser" class="mt-5">
          <b-form-group id="fieldset-1"
                        :label="$t('user.enterEmail')"
                        label-for="exampleInput1"
                        :state="checkEmail"
          >
            <b-form-input id="exampleInput1"
                          required
                          v-model="userData.email"
                          :state="checkEmail"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup2"
                        :label="$t('user.enterName')"
                        label-for="exampleInput2">
            <b-form-input id="exampleInput2"
                          type="text"
                          required
                          v-model="userData.name"
            ></b-form-input>
          </b-form-group>
          <b-form-group id="exampleInputGroup3"
                        :label="$t('user.enterLastName')"
                        label-for="exampleInput3">
            <b-form-input id="exampleInput3"
                          type="text"
                          required
                          v-model="userData.lastName"
            ></b-form-input>
          </b-form-group>
          <div class="col-sm-12 d-flex justify-content-between p-0">
            <b-button type="submit" variant="primary">
              {{$t('user.create')}}
            </b-button>
            <b-button type="reset" variant="secondary">
              {{$t('user.reset')}}
            </b-button>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { mapActions, mapGetters, mapState } from 'vuex';
  import * as types from '../store/types';

  export default {
    data() {
      return {
        name: '',
        userData: {
          name: '',
          lastName: '',
          email: ''
        },
        flagCorrectEmail: false
      }
    },
    methods: {

      ...mapActions({
        create: types.CREATE_USER
      }),

      createUser() {
        this.create(this.userData);
        this.$router.push({ path: '/list-users' })
      }
    },
    computed: {
      checkEmail() {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(this.userData.email)
      },
    }
  }
</script>

<style lang="scss">
  @import '../static/sass/variables';

  .red {
    color: $color-red;
  }

  .correct {
    color: green;
    font-size: 14px;
  }

</style>
