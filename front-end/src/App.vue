<template>
<div id="app">
  <div class="header">
    <router-link to="/">
      <div class="logo">
        <img src="https://cdn.vox-cdn.com/thumbor/0kpe316UpZWk53iw3bOLoJfF6hI=/0x0:1680x1050/1400x1400/filters:focal(706x391:974x659):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/56414325/YTLogo_old_new_animation.0.gif">
      </div>
    </router-link>
    <div class="title">
      <br><br>
      <h1>Personal YouTube Hall of Fame</h1>
      <br>
      <router-link to="/admin">
        <img class="icon"
          src= "data:image/png;base64,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"
        >
      </router-link>
      <router-link to="/"> 
        <img class="icon" 
          src="https://cdn5.vectorstock.com/i/1000x1000/14/04/home-icon-vector-20131404.jpg"
        >
      </router-link>
      <router-link to="/delete">
        <img class="icon"
          src="data:image/png;base64,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"
        >
      </router-link>
    </div>
  </div>
  <div class="content">
    <router-view />
  </div>
  <div class="footer">
    <!--GITHUB CODE-->
    <a href="#">GitHub Code</a>
  </div>
</div>
</template>

<style>
html {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background: #fff;
  padding: 0px;
  margin: 0px;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: orange;
  color: #1C454F;
}
img {
  width: 45px;
  height: 45px;

}
.icon {
  width: 30px;
  height: 30px;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}
.logo {
  display:float;
  float:right;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

/* Footer */
.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
