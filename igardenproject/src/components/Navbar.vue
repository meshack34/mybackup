

<template>
  <header>
     
       
        <v-img
          alt="Vuetify Logo"
          src="../assets/talent.png"
          transition="scale-transition"
          width="100"
         
        /> 
       <nav> 
   

<div @click="scroll('project')" class="menu-item"><a href="#">Outsourcing</a></div>
<div class="menu-item"><a href="#">IT Services</a></div>
<Dropdown title="Campus" :items="services"/>
<div class="menu-item"><a href="#">Coworking</a></div>
<div class="menu-item"><a href="#">About Us</a></div>
</nav>
  </header>
</template>

<script>
import Dropdown from './Dropdown.vue'
export default {
    name: "nav-bar",
    components: {
         Dropdown 
         },
    data() {
        return {
            services: [
                {
                    title: "web",
                    link: "#"
                },
                {
                    title: "Design",
                    link: "#"
                },
                {
                    title: "Videos",
                    link: "#"
                },
            ]
        };
    },

  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style>

header{
  width: 100vw;
  padding: 15px;
  margin: 20px;
  background-color:green;
  border-bottom: 9px solid white;

}
.logo{
  
}


nav{
    display: flex;
    align-items: center;
    justify-content: center;
}
nav .menu-item{
color: black;
padding: 10px 20px;
position: relative;
text-align: center;
border-bottom: 3px solid transparent;
display: flex;
transition: 0.4s;
}
nav .menu-item:active,
nav .menu-item:hover {
background-color:green;
border-color: #7E7574;
}
nav .menu-item a{
    color: inherit;
    text-decoration: none;
}
</style>