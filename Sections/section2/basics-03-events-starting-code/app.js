const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ""
    };
  },
  computed: {
    fullname() {
      if (this.name == '') {
        return '';
      } else {
        return this.name + ' ' + 'Schwarzmüller';
      }
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    displayName(event) {
      this.name = event.target.value;
    },
    resetInput() {
      this.name = "";
    }
  },
});

app.mount('#events');
