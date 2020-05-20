<template>
  <section id="portfolio-1" class="main-body" v-animate.repeat.fade="'slide-up'">
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
        <strong class="ktsy-list-name">국방과학연구소 SI</strong>
        <div class="v-markdown" v-for="(item, i) in items" :key="i">
          <p class="ktsy-text-h-2">{{ item }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "portfolio-1",
  data() {
    return {
      colors: [
        "secondary",
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1"
      ],
      slides: [
        "보안상 소스 코드와 화면은 보여드릴수 없습니다. 양해부탁드립니다.",
        "국방과학 연구소 IT관리 체계구축 2차 2018.06.14 ~ 2018.12.21",
        "연구 시설, 장비 통합 자산관리시스템 2018.12.24 ~ 2019.04.12",
        "정보체계 기능개선 및 고도화 2019.04.15 ~ 2019.07.01",
        "정보체계 기능개선 및 고도화 2019.10.01 ~ 2019.12.31"
      ],
      items: [
        "국방과학연구소에서 SRMS 및 MIS 개발을 하였습니다.",
        "전자정부 , JDK 1.7 , ORACLE을 사용하였습니다. 방대한 데이터 처리 및 procedure , trigger , job등을 활용하여",
        "쿼리 능력을 향상 되었습니다. 또한 SSO 인증을 통한 메일서비스 연동 및 SECURITY 인증을 배웠습니다.",
        "OZ리포트 할용 하여 결재 문서 & 리포트를 출력하는 방법 및 RESTFUL을 사용해보았습니다."
      ]
    };
  }
};
</script>
