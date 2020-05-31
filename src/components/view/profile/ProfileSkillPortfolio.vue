<template>
  <section id="profile-skill-portfolio" class="main-body-column" v-animate.repeat.fade="'slide-up'">
    <div class="v-markdown">
      <!-- <div
        id="clickImage"
        style="width:80px; height:80px; transform: translateX(10vh) translateY(50vh); z-index:999; display:inline-block"
      >
        <img src="/static/image/click.svg" style="width:80px; height:80px;" />
      </div>-->
      <p class="ktsy-text-h-4 ktsy-p-b-8">@Skill</p>
      <div class="ktsy-d-50-1 skill-container">
        <div v-for="(item, i) in item" :key="i" class="box" @click="skill(item)">{{ item }}</div>
      </div>
    </div>
    <div class="ktsy-d-50-2">
      <div class="chart-container"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "profile-skill-portfolio",

  components: {},
  data() {
    return {
      item: ["BASIC", "Html", "javascript", "java", "oracle", "etc"],
      colors: ["#41B883", "#E46651", "#00D8FF", "#ffd600"],
      mainLabels: ["Html/Css", "javascript", "JAVA", "DBMS"],
      mainData: [15, 40, 25, 20],
      htmlLabels: ["크로스 부라우징", "반응형", "CSS이해", "SACC"],
      htmlData: [20, 45, 20, 15],
      javascriptLabels: ["REST API", "dhtmlx", "Vue", "jquery"],
      javascriptData: [30, 35, 15, 20],
      javaLabels: ["전자정부(스프링) 활용", "mybaties", "security", "jvm 이해"],
      javaData: [25, 35, 15, 25],
      oracleLabels: ["쿼리 활용", "procedure", "trigger"],
      oracleData: [40, 30, 30],
      etcLabels: ["JIRA", "SVN", "JENKINS", "PMD"],
      etcData: [20, 40, 30, 15]
    };
  },
  methods: {
    skill: function(name) {
      if (name === "BASIC") {
        this.charts(name, this.mainLabels, this.colors, this.mainData);
      }
      if (name === "Html") {
        this.charts(name, this.htmlLabels, this.colors, this.htmlData);
      }
      if (name === "javascript") {
        this.charts(
          name,
          this.javascriptLabels,
          this.colors,
          this.javascriptData
        );
      }
      if (name === "java") {
        this.charts(name, this.javaLabels, this.colors, this.javaData);
      }
      if (name === "oracle") {
        this.charts(name, this.oracleLabels, this.colors, this.oracleData);
      }
      if (name === "etc") {
        this.charts(name, this.etcLabels, this.colors, this.etcData);
      }
    },
    charts: function(name, labels, colors, data) {
      let myChart = document.querySelector("#myChart");
      myChart === null ? "" : myChart.remove();
      let ctx = document.createElement("canvas");
      ctx.id = "myChart";
      let chartContainer = document.querySelector(".chart-container");
      chartContainer.appendChild(ctx);
      new Chart(ctx, {
        type: "pie",
        data: {
          hoverBackgroundColor: "red",
          hoverBorderWidth: 10,
          labels: labels,
          datasets: [
            {
              label: "Data two",
              backgroundColor: colors,
              data: data
            }
          ]
        },
        options: {
          hoverBorderWidth: 50,
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            display: true
          },
          title: {
            display: true,
            text: "100을 기준으로 활용 가능한 수치 입니다.",
            position: "top",
            fontSize: 25,
            padding: 20
          },
          legend: {
            display: false,
            position: "bottom",
            labels: {
              boxWidth: 50,
              padding: 15
            }
          },
          plugins: {
            datalabels: {
              textAlign: "center",
              font: {
                size: 15,
                lineHeight: 1.8
              },
              formatter: function(value, ctx) {
                return (
                  ctx.chart.data.labels[ctx.dataIndex] + "\n" + (50 + value)
                );
              }
            }
          }
        }
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.charts("BASIC", this.mainLabels, this.colors, this.mainData);
      let clickImage = document.querySelector("#clickImage");
      this.$anime({
        targets: clickImage,
        translateX: () => {
          return this.$anime.random(10, 11) + "vh";
        },
        translateY: () => {
          return this.$anime.random(50, 52) + "vh";
        },
        loop: true
      });
    }, 3800);
    let box = document.querySelectorAll(".box");

    this.$anime({
      targets: box,
      background: () => {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      },
      opacity: () => {
        return 1;
      },
      duration: () => {
        return this.$anime.random(8000, 9000);
      },
      delay: () => {
        return this.$anime.random(2000, 3000);
      }
    });
  }
};
</script>
