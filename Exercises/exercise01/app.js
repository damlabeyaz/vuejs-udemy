Vue.createApp({
    data: function() {
        return {
            name: "Damla Beyaz",
            age: 33,
            imageLink: "https://image.geo.de/30145676/t/49/v3/w960/r0/-/blaumeise-as-115260317-jpg--82954-.jpg"
        };
    },
    methods: {
        favoriteNumber() {
            return Math.random();
        },
        calculateAge() {
            return this.age + 5;
        }
    }
}).mount("#assignment");