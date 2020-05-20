<template>
  <section id="portfolio-3" class="main-body" v-animate.repeat.fade="'slide-up'">
    <ul class="ktsy-list">
      <li class="ktsy-list-item">
        <v-carousel
          :show-arrows="false"
          cycle
          hide-delimiter-background
          align="center"
          justify="center"
        >
          <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet :color="colors[i]" height="100%">
              <v-row class="fill-height" align="center" justify="center">
                <div class="display-2">{{ slide }}</div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </li>
      <li class="ktsy-list-item">
        <strong class="ktsy-list-name">국방과학연구소 유지보수</strong>
        <div class="v-markdown" v-for="(item, i) in items" :key="i">
          <p class="ktsy-text-h-2">{{ item }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "portfolio-3",
  data() {
    return {
      colors: ["secondary", "indigo"],
      slides: [
        "보안상 소스 코드와 화면은 보여드릴수 없습니다. 양해부탁드립니다.",
        "18~19 정보체계 통합유지관리 2019.07.02 ~ 2019.09.30 "
      ],
      items: [
        "국방과학연구소에서 MIS 유지보수를 하였습니다.",
        "JENIFER를 사용하였고 , PROCEDURE , TRIGGER 등 기존 구현해 놓았지만 법이 변경었던 사항을",
        "수정 개발 하였습니다. 총무 , 인사 , 복지 쪽을 담당하였습니다.",
        "또한 이곳에서 고객과 소통하는 방법과 고객의 요청에 따른 UI를 위하여 화면을 수정하였습니다."
      ]
    };
  }
};
</script>
