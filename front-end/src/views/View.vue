<template>
<div class="wrapper">
    <hr>
      <div class="products">
        <div class="product" v-for="product in items" :key="product.id">
          <div class="info">
            <h1>{{product.name}}</h1>
            <p>{{product.genre}}</p>
          </div>
          <div class="image">
            <img :src="product.path">
          </div>
          <button class="auto" @click="goToUser(product.id,product.name,product.countryOfOrigin, product.yearCreated, product.genre, product.grade, product.image, product.subCount, product.bio, product.subscribed)">Learn more about this YouTuber</button>
        </div>
      </div>
</div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'View',
  data() {
    return {
      searchText: '',
      items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    goToUser(id, name, country, year,genre,grade, image, numSubs, bio, subbed) {
        this.$root.$data.selectedYoutuber = {id:id,name:name,countryOfOrigin:country,yearCreated:year,genre:genre,grade:grade,image:image, subCount:numSubs, bio:bio, subscribed:subbed};
        this.$router.push('/user');
    },
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
    },
}
</script>

<style scoped>
.image h2 {
  font-style: italic;
}


/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}
.image-gallery {
  column-gap: 1.5em;
}
.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}
.image img {
  width: 100%;
}
/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}
/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}
/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}
.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}
.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}
.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}
.info h1 {
  font-size: 16px;
}
.info h2 {
  font-size: 14px;
}
.info p {
  margin: 0px;
  font-size: 10px;
}
.price {
  display: flex;
}
button {
  height: 50px;
  background: grey;
  color: white;
  border: none;
}
.auto {
  margin-left: auto;
}
</style>