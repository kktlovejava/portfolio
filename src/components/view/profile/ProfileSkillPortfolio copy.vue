<template>
  <section id="profile-skill-portfolio" class="main-body" v-animate.repeat.fade="'slide-up'">
    <div class="ktsy-d-50-1">
      <v-list-item-title class="display-1">@저는 가능해요!</v-list-item-title>
    </div>
    <div class="ktsy-d-50-2 wrapper" id="profile-portfolio-wrapper">
      <div>
        <v-progress-linear color="light-blue" height="10" value="10" striped></v-progress-linear>
        <br />
        <v-progress-linear color="light-green darken-4" height="10" value="20" striped></v-progress-linear>
        <br />
        <v-progress-linear height="10" value="45" striped color="lime"></v-progress-linear>
        <br />
        <v-progress-linear value="60" height="10" striped color="deep-orange"></v-progress-linear>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "profile-skill-portfolio",
  data() {
    return {
      item: [
        "Html",
        "javascript",
        "dhtmlx",
        "java",
        "orcale",
        "jenkins",
        "nexus",
        "svn",
        "jenifer"
      ]
    };
  },
  mounted() {
    const wrapper = document.getElementById("profile-portfolio-wrapper");

    for (let i = 1; i < this.item.length; i++) {
      let div = document.createElement("div");
      div.innerText = this.item[i];
      let animeCircle = wrapper.appendChild(div);
      animeCircle.classList.add("anime-circle");
    }

    let circles = document.querySelectorAll(".anime-circle");

    let randomAnimation = this.$anime({
      targets: circles,
      background: () => {
        //let hue = this.$anime.random(0, 360);
        let hue = 250;
        let saturation = 60;
        let lumonisity = 70;
        let hslValue =
          "hsl(" + hue + "," + saturation + "%," + lumonisity + "%)";
        // return hslValue;
        return "";
      },
      borderRadius: () => {
        //return this.$anime.random(25, 50);
        return 0;
      },
      translateX: () => {
        return this.$anime.random(80, -40) + "vh";
      },
      translateY: () => {
        return this.$anime.random(80, -40) + "vh";
      },
      scale: () => {
        // return this.$anime.random(0.45, 1.75);
        return 1.75;
      },
      duration: () => {
        return this.$anime.random(10000, 11000);
      },
      delay: () => {
        return this.$anime.random(2000, 3000);
      },
      loop: true,
      direction: "alternate",
      easing: "easeOutExpo"
    });
  }
};
</script>
<style scope>
.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.anime-circle {
  width: 80px;
  height: 30px;
  position: absolute;
}
.anime-circle:after {
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}
</style>