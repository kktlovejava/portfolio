<!-- 메인 템플릿 -->
<template>
  <section id="main-portfolio" class="main-body" v-animate.repeat.fade="'slide-up'">
    <div class="video-container">
      <video src="https://traversymedia.com/downloads/video.mov" autoplay muted loop></video>
    </div>
    <div class="playful">
      <v-row align="center" justify="center" style="z-index:999;">
        <v-col class="text-center" cols="12">
          <h1 class="font-weight-thin mb-4">
            <vue-typer
              :text="[
                'We are the Team',
                'Fullstack Developer'
              ]"
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
              class="ktsy-font-3"
            ></vue-typer>
          </h1>
        </v-col>
      </v-row>
      <!-- <span aria-hidden="true" v-for="(item, i) in items" :key="i">
        {{
        item.name
        }}
      </span>-->
    </div>
  </section>
</template>

<script>
export default {
  name: "main-portfolio"
};
</script>
<style>
.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--primary-color)
    url("./https://traversymedia.com/downloads/cover.jpg") no-repeat center
    center/cover;
}
.video-container video {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
}

.video-container:after {
  content: "";
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
}
</style>
