<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-md-6 mx-auto mt-3">
        <div class="form-group">
          <label for="user.userName">User name</label>
          <input v-model="user.userName" class="form-control" type="text" id="userName">
        </div>
        <div class="form-group">
          <label for="user.eMail">Email</label>
          <input v-model="user.eMail" class="form-control" type="email" id="eMail">
        </div>
        <button @click="submit" class="btn btn-primary">Submit</button>
        <hr>
        <button @click="getData" class="btn btn-primary">Get Data</button>
        <br><br>
        <ul class="list-group">
          <li v-for="u in users" :key=u.eMail class="list-group-item">{{ u.userName }} - {{ u.eMail}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        eMail: "",
      },
      users: [],
    }
  },
  methods: {
    submit() {
      // The empty 1st parameter is the full http address. We defined it globaly, so no need to give it here (see mai.js)
      this.$http.post("", this.user)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error);
        })
      console.log(this.user)
    },
    getData() {
      // The empty get parameter is the full http address. We defined it globaly, so no need to give it here (see mai.js)
      this.$http.get("")
        .then(response => {
          return response.json();
        }, error => {console.log(error)}) 
        .then(data => {
          // Returned data is an object. We need to transform it to an array
          const dataArray = [];
          for (let key in data) {
            dataArray.push(data[key])
          };
          this.users = dataArray;
        }, error => {console.log(error)})      
    },    
  },
}
</script>

}
<style>
label {
  font-weight: bold;
}
</style>
