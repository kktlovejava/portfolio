<template>
  <section id="main-about" class="main-body" v-animate.repeat.fade="'slide-up'">
    <v-card id="aboutCard" max-width="450" class="mx-auto">
      <v-list one-line>
        <v-card-title class="white--text pl-12 pt-12">
          <div class="display-1" v-if="typerYn">
            <v-row align="center" justify="center" style="z-index:999;">
              <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-4">
                  <vue-typer
                    :text="['채용 하시겠습니까?']"
                    :repeat="0"
                    :shuffle="false"
                    initial-action="typing"
                    :pre-type-delay="250"
                    :type-delay="250"
                    :pre-erase-delay="6000"
                    :erase-delay="250"
                    erase-style="select-all"
                    :erase-on-complete="false"
                    caret-animation="blink"
                    @typed="onTyped"
                  ></vue-typer>
                </h1>
              </v-col>
            </v-row>
          </div>
          <div class="display-1" v-if="!typerYn">
            <v-row align="center" justify="center" style="z-index:999;">
              <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-4">
                  <vue-typer
                    :text="['Yes OR No']"
                    :repeat="0"
                    :shuffle="false"
                    initial-action="typing"
                    :pre-type-delay="250"
                    :type-delay="250"
                    :pre-erase-delay="6000"
                    :erase-delay="250"
                    erase-style="select-all"
                    :erase-on-complete="false"
                    caret-animation="blink"
                    @typed="onTyped"
                  ></vue-typer>
                </h1>
              </v-col>
            </v-row>
          </div>
        </v-card-title>
      </v-list>
      <!--   <v-img src="https://cdn.vuetifyjs.com/images/lists/ali.png" height="280px" light>
        <v-row class="fill-height">
          <v-spacer></v-spacer>
          <v-card-title class="white--text pl-12 pt-12">
            <div class="display-1 pl-12 pt-12">
              <v-row align="center" justify="center" style="z-index:999;">
                <v-col class="text-center" cols="12">
                  <h1 class="display-1 font-weight-thin mb-4">
                    <vue-typer
                      :text="['김경태 님을' , '채용 하시겠습니까?']"
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
                    ></vue-typer>
                  </h1>
                </v-col>
              </v-row>
            </div>
          </v-card-title>
        </v-row>
      </v-img>
      -->
      <v-list two-line>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">mdi-phone</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>010-7370-7956</v-list-item-title>
            <v-list-item-subtitle>Mobile</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">mdi-email</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>ktlovejava@naver.com</v-list-item-title>
            <v-list-item-subtitle>Mail</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon color="indigo">mdi-map-marker</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>대전 중구</v-list-item-title>
            <!-- <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-list-item href="이력서 준비중">
          <v-list-item-icon>
            <v-icon color="indigo">mdi-message-text</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>이력서 확인</v-list-item-title>
            <!-- <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
        <v-divider inset></v-divider>

        <v-list-item href="/static/xlx/kimktHistory.xls">
          <v-list-item-icon>
            <v-icon color="indigo">mdi-cloud-download</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>KOSA 경력 다운로드</v-list-item-title>
            <!-- <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </section>
</template>
<script>
export default {
  name: "main-about",
  data() {
    return {
      typerYn: true
    };
  },
  methods: {
    onTyped: function(typedString) {
      setTimeout(() => {
        this.typerYn = this.typerYn ? false : true;
        // this.typerYn = false;
      }, 8000);
    }
  }
};
</script>
