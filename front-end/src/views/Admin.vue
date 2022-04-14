<template>
<div class="youtuber">

  <div class="inputStuff">
    <p>Please fill in the characteristics below to add a new YouTuber</p>
    <div class="anInput">
      <input v-model="name" class="description" placeholder="Name">
    </div>
    <div class="anInput">
      <textarea v-model="bio" class="description" placeholder="Short Bio"></textarea>
    </div>
    <div class="anInput">
      <input v-model="dateStarted" class="description" placeholder="Year channel started">
    </div>
    <div class="anInput">
      <input v-model="numSubs" class="description" placeholder="Num Subs">
    </div>
    <div class="anInput">
      <input v-model="genre" class="description" placeholder="Genre of Channel">
    </div>
    <div class="anInput">
      <input v-model="rating" class="description" placeholder="Rating">
    </div>
    <div class="anInput">
      <input type="file" name="photo" @change="fileChanged">
      <div class="submitButton">
        <button @click="upload">Add to List</button>
      </div>
    </div>
    <div class="anInput">
    </div>
  </div>


  <div class="edit">

    <div class="upload" v-if="findItem">
      <input v-model="findItem.title">
      <textarea v-model="findItem.description"></textarea>
      <img :src="findItem.path">
    </div>

    <div class="actions" v-if="findItem">
      <button @click="deleteItem(findItem)">Delete</button>
      <button @click="editItem(findItem)">Edit</button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
  return {
    name: '',
    dateStarted: '',
    numSubs: '',
    genre: '',
    bio: '',
    rating:'',

    items: [],
    file: null,
    }
  },
  created() {
    this.getItems();
  },
  methods: {

    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(item) {
      try {
        await axios.delete("/api/items/" + item._id);
        this.findItem = null;
        this.getItems();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    fileChanged(event) {
      this.file = event.target.files[0];
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/items', {
          name: this.name,
          path: r1.data.path,
          bio: this.bio,
          dateStarted: this.dateStarted,
          numSubs: this.numSubs,
          genre: this.genre,
          rating: this.rating,
        });
        this.addItem = r2.data;
        this.name = '';
        this.path = '';
        this.bio = '';
        this.dateStarted = '';
        this.numSubs = '';
        this.genre = '';
        this.rating = '';
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.anInput {
  float:left;
  margin-right:5px;
}
.submitButton {
  float: right;
  margin-left: -20px;
  clear: left;
}
.footer {
  position: absolute;
  bottom: 0px;
}

.description {
  display: flex;
  float: left;
}
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}
</style>
