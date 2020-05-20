<template>
  <section id="profile-portfolio" class="main-body" v-animate.repeat.fade="'slide-up'">
    <div id="profile-portfolio-wrapper" class="wrapper">
      <v-row align="center" justify="center" style="z-index:999;">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin mb-4">
            <vue-typer
              :text="['FULLSTACK DEVELOPER']"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="4000"
              :erase-delay="250"
              erase-style="select-all"
              :erase-on-complete="false"
              caret-animation="blink"
              class="display-4"
            ></vue-typer>
          </h1>
          <h4 class="subheading display-3">KyungTae Kim & ShinYoung Kang</h4>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "profile-portfolio",
  mounted() {
    const wrapper = document.getElementById("profile-portfolio-wrapper");

    for (let i = 1; i < 51; i++) {
      let div = document.createElement("div");
      let animeCircle = wrapper.appendChild(div);
      animeCircle.classList.add("anime-circle");
    }

    let circles = document.querySelectorAll(".anime-circle");

    let randomAnimation = this.$anime({
      targets: circles,
      background: () => {
        let hue = this.$anime.random(0, 360);
        let saturation = 60;
        let lumonisity = 70;
        let hslValue =
          "hsl(" + hue + "," + saturation + "%," + lumonisity + "%)";
        return hslValue;
      },
      borderRadius: () => {
        return this.$anime.random(25, 50);
      },
      translateX: () => {
        return this.$anime.random(80, -80) + "vh";
      },
      translateY: () => {
        return this.$anime.random(80, -80) + "vh";
      },
      scale: () => {
        return this.$anime.random(0.45, 1.75);
      },
      duration: () => {
        return this.$anime.random(250, 1500);
      },
      delay: () => {
        return this.$anime.random(500, 1000);
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
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.anime-circle {
  width: 30px;
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
