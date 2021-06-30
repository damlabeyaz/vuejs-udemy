Vue.createApp({
    data: function() {
        return {
            courseGoalA: "I want to finish Vue.js course until the end of this week.",
            courseGoalB: "I want to master Vue.js course until the end of this week.",
            courseGoalC: "Learn <i>HTML<i/>",
            vueLink: "https://vuejs.org"
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
}).mount("#user-goal");