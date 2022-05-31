/* eslint-disable vue/multi-word-component-names */
<template>
  <v-app id="home" :style="{ background: $vuetify.theme.themes.dark.background }">
  
    <Navbar />
    
 <div id="app" class="container">
        <h3 class="d-flex justify-content-center">
            Vue JS Front End
        </h3>
        <h5 class="d-flex justify-content-center">
            Employee Management Portal
        </h5>

        <nav class="navbar navbar-expand-sm bg-light navbar-dark">
            <ul class="navbar-nav">
            <li class="nav-item m-1">
                <router-link class="btn btn-light btn-outline-primary"
                to="/home">Home</router-link>
            </li>
            <li class="nav-item m-1">
                <router-link class="btn btn-light btn-outline-primary"
                to="/apply">apply</router-link>
            </li>
             <li class="nav-item m-1">
                <router-link class="btn btn-light btn-outline-primary"
                to="/recruit">recruit</router-link>
            </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
    
    <Footer/>


</v-app>  


</template>

<script>
  import Navbar from '../components/Navbar'
  import Footer from '../components/Footer.vue'
   
  export default {
    name: 'Home',

    components: {
    Navbar,
    Footer,
    
},
  }
</script>

<style scoped>
#app1 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.appnow{ 
  flex: auto;
}

.mainimage{
  -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
  background-image:"ig5.jpg";
}
.appybuttons1{
  color: white;
  background-color: green;
  border-radius: 25px;
  
  
}
*{
  margin: 10;
  padding: 10;
  box-sizing: border-box;

}
body{
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

.top {
  margin-top: 180px;
}
.topInverse {
  margin-top: -250px;
}
.topTolbar {
  margin-top: 100px;
  text-align: center;
}
.first {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    #181818,
    #181818 50%,
    #111111 50%,
    #111111 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.second {
  width: 100%;
  height: 400px;
  background: #181818;
  text-align: center;
  padding: 2rem 2rem;
}
.secondchild1 {
  display: inline-block;
  background-color: #1e1e1e;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.bgColor1 {
  background-color: #1e1e1e;
}
.bgColor2 {
  background-color: #ce1d2a;
}
.child1 {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.child2 {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
.padding {
  padding: 8px 0;
}
.col-12.padd {
  padding: 12px 0 !important;
}
.col-12.childcol {
  padding: 0 !important;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
</style>