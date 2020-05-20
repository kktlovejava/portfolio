<template>
  <v-app id="main">
    <!--
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-for="item in navItems" :key="item.title" @click="scrollMove(item.link)">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left v-show="scrolled">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>-->
    <v-list dense></v-list>
    <v-content>
      <v-layout justify-center align-center>
        <main-portfolio></main-portfolio>
      </v-layout>
    </v-content>
    <v-content>
      <v-layout justify-center align-center>
        <profile-portfolio></profile-portfolio>
      </v-layout>
    </v-content>
    <v-content>
      <v-layout justify-center align-center>
        <profile-skill-portfolio></profile-skill-portfolio>
      </v-layout>
    </v-content>
    <v-content>
      <v-layout justify-center align-center>
        <portfolio-1></portfolio-1>
      </v-layout>
    </v-content>
    <v-content>
      <v-layout justify-center align-center>
        <portfolio-2></portfolio-2>
      </v-layout>
    </v-content>
    <v-content>
      <v-layout justify-center align-center>
        <portfolio-3></portfolio-3>
      </v-layout>
    </v-content>
    <v-content>
      <v-layout justify-center align-center>
        <main-about></main-about>
      </v-layout>
    </v-content>
    <div class="z-index nav-up-button my-2" v-show="!scrolled">
      <v-btn small color="primary" @click="scrollMove()">
        <v-icon dark>mdi-arrow-up-bold</v-icon>
      </v-btn>
    </div>
  </v-app>
</template>

<script>
import MainPortfolio from "./components/layout/MainPortfolio";
import ProfilePortfolio from "./components/view/profile/ProfilePortfolio";
import ProfileSkillPortfolio from "./components/view/profile/ProfileSkillPortfolio";
import Portfolio1 from "./components/view/portfolio/Portfolio1";
import Portfolio2 from "./components/view/portfolio/Portfolio2";
import Portfolio3 from "./components/view/portfolio/Portfolio3";
import About from "./components/view/about/About";
export default {
  components: {
    "main-portfolio": MainPortfolio,
    "profile-portfolio": ProfilePortfolio,
    "profile-skill-portfolio": ProfileSkillPortfolio,
    "portfolio-1": Portfolio1,
    "portfolio-2": Portfolio2,
    "portfolio-3": Portfolio3,
    "main-about": About
  },
  props: {
    source: String
  },
  data() {
    return {
      navItems: [
        { title: "Home", icon: "mdi-home", link: "main" },
        { title: "Profile", icon: "mdi-account", link: "profile-portfolio" },
        { title: "Portfolio", icon: "mdi-book", link: "portfolio-1" },
        { title: "About", icon: "mdi-phone", link: "main-about" }
      ],
      drawer: false,
      scrolled: true
    };
  },
  created() {},
  methods: {
    detectWindowScrollY() {
      this.scrolled = window.scrollY < 50;
      this.drawer = false;
      var scrollX = window.scrollX;
    },
    scrollMove() {
      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.detectWindowScrollY);
  }
};
</script>
<style lang="scss" scope>
@import "./sass/variables.scss";
.page-enter-active,
.page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
.v-list {
  padding: 0;
}
</style>
