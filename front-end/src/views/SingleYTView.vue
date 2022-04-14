<template>
<div>
  <div class="wrapper">
    <div class = "youtuberInfo">
        <h2>{{currentYT.name}}</h2>
        <img v-bind:src="currentYT.image" alt="nope" />
        <div class="infoBox">
            <p>Date Started: {{currentYT.yearCreated}}</p>
            <p>Sub Count: {{currentYT.subCount}}</p>
            <p>Country of Origin: {{currentYT.countryOfOrigin}}</p>
            <p>Style/Genre: {{currentYT.genre}}</p>
            <p>Bio: {{currentYT.bio}}</p>
        </div>
        <div class="gradeBox">
            <h3>Rating: {{currentYT.rating}}</h3>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'SingleYouTubeView',
  data() {
    return {
      searchText: '',
      currentYT: this.$root.$data.selectedYoutuber,
    }
  },
}
</script>

<style scoped>
.menu {
    background-color: lightcyan;
}
.infoDiv {
    max-width:400px;
    align-content: flex-start;
    display: float;
    float:left;
}
.youtuberInfo {
    background-color: beige;
}
.infoBox {
    display: float;
    float: left;
} 
.gradeBox {
    display: float;
    float: right;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 70px;
    margin-right:70px;
}
p {
    margin-left: 10px;
    max-width: 200px;
}
h2 {
    margin-left: 10px;
}
.wrapper img {
    margin-left: auto;
    margin-right: auto;
    max-height: 400px;
    max-width: 400px;
    display: flex;
}
.wrapper {
    padding: 5px;
    background-color: lightcyan;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}
form {
  display: table;
  width: 100%;
}
i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}
input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>