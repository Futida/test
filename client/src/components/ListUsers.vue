<template>
  <b-container>
    <div v-if="isBusy" class="spinner-container">
      <div class="spinner-border" role="status"></div>
    </div>
    <table v-else class="table table-bordered table-responsive-md table-hover mt-5">
      <thead class="thead-inverse">
      <th>Name</th>
      <th>Last name</th>
      <th style="width:200px">E-mail</th>
      <th style="width:200px">Actions</th>
      </thead>
      <tbody>
      <tr v-for="user in listUsers.slice(sliceCountUsers.start,sliceCountUsers.end)">
        <td>{{user.name}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.email}}</td>
        <td class="d-flex justify-content-around">
          <b-button class="btn-modal" variant="primary" @click="showEditModal(user)">
            {{ $t('user.edit') }}
          </b-button>
          <b-button variant="danger" size="sm" @click="deleteUser(user._id)">
            {{ $t('user.delete') }}
          </b-button>
          <b-button variant="link" :to="'users/' + user._id">
            <font-awesome-icon
                size="lg"
                icon="arrow-circle-right"
            />
          </b-button>
        </td>
      </tr>
      </tbody>
    </table>
    <Pagination :current="paginator.currentPage"
                :total="listUsers.length"
                :perPage="paginator.perPage"
                @change="computedCountUsers">
    </Pagination>

    <b-modal id="modaledit" title="Edit user" ref="editModal" hide-footer>
      <b-form-group id="exampleInputGroup1"
                    label="Edit Email address:"
                    label-for="exampleInput1">
        <b-form-input id="exampleInput1"
                      type="email"
                      required
                      placeholder="Edit email"
                      v-model="editUser.email"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Edit Name:" label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      required
                      placeholder="Edit name"
                      v-model="editUser.name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Edit Last name:" label-for="exampleInput3">
        <b-form-input id="exampleInput3"
                      type="text"
                      required
                      placeholder="Edit Last name"
                      v-model="editUser.lastName"
        ></b-form-input>
      </b-form-group>
      <b-button class="mt-3" variant="outline-primary" block @click="updateUser(editUser)">Edit
      </b-button>
    </b-modal>
  </b-container>
</template>

<script>
  import Pagination from './pagination/Pagination.vue'
  import { mapActions, mapGetters, mapState } from 'vuex';
  import * as types from '../store/types';

  export default {
    data() {
      return {
        editUser: [],
        paginator: {
          currentPage: 1,
          perPage: 5,
        },
        sliceCountUsers: {
          start: 0,
          end: 5
        }
      }
    },
    components: { Pagination },

    created() {
      this.getUsers();
    },
    methods: {
      ...mapActions({
        getUsers: types.GET_LIST_USERS,
        deleteUser: types.DELETE_USER,
        UPDATE_USER: types.UPDATE_USER,
      }),
      updateUser(data) {
        this.UPDATE_USER(data);
        this.$refs.editModal.hide();
      },
      showEditModal(item) {
        this.$refs.editModal.show();
        this.editUser = { ...item };
      },
      computedCountUsers(page) {
        this.paginator.currentPage = page;
        this.sliceCountUsers.end = (page * this.paginator.perPage);
        this.sliceCountUsers.start = this.sliceCountUsers.end - this.paginator.perPage;
      }
    },
    computed: {
      ...mapGetters({
        listUsers: types.LIST_USERS,
      }),
      ...mapState(['isBusy']),
    }
  }
</script>

<style lang="scss">
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
  }
</style>
