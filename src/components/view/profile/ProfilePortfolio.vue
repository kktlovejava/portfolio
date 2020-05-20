<template>
  <section id="profile-portfolio" class="main-body" v-animate.repeat.fade="'slide-up'">
    <div class="ktsy-d-50-1">
      <v-img
        class="mr-5 mb-5"
        src="https://cdn.vuetifyjs.com/images/lists/ali.png"
        width="400px"
        height="300px"
        dark
      ></v-img>
      <div class="v-markdown">
        <p>@김경태</p>
      </div>
      <div class="v-markdown" v-for="(item, i) in items" :key="i">
        <p class="ktsy-text-h-2">{{item}}</p>
      </div>
    </div>
    <div class="ktsy-d-50-2">
      <div class="v-markdown" v-for="(item, i) in items1" :key="i">
        <p class="ktsy-text-h-4 ktsy-p-b-8">{{item}}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "profile-portfolio",
  data() {
    return {
      items: [
        "안녕하세요! 2년차 개발자 김경태입니다.",
        "HTML , javascript , java , oracle 노선을 넘나 들며 다양한 분야를 접하였어요.",
        "저는 제 일을 좋아해요. 좋아해서 그런지 누구보다 잘하고 싶어요.",
        "저는 '노력'이란 단어를 좋아해요. 저를 배신하지 않아서애요.",
        "저는 부족한 '나'를 위해 잘하고 싶어 항상 '노력'하고 있어요.",
        "저는 최고는 아니지만 최고를 향해 달려가고 있어요.",
        "저는 어느 누구든 '노력'하지 않았다면 최고가 되지 못했을거라고 생각해요.",
        "저는 최고가 되기 위해 '노력'할 것이며 '노력'은 제가 가장 잘 하는 일입니다."
      ],
      items1: [
        "반갑습니다.",
        "코딩을 사랑하고",
        " java와 사랑에 빠진",
        "풀스택 개발자입니다."
      ]
    };
  }
};
</script>
