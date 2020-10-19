new Vue({
  el: '#app',
  data: {
    size: null,
    speed: null,
    result: null
  },
  methods: {
    calculate() {
      if (!this.size || this.size == 0 || !this.speed) {
        this.result = null;
        return;
      }
      let hours = this.size * 1000;
      hours /= this.speed;
      hours /= 3600;
      if (isNaN(hours)) {
        this.result = null;
        return;
      }
      const duration = moment.duration(hours, 'hours');
      let result = 'in';
      const days = Math.floor(duration.asDays());
      if (days > 0) {
        result += ' ' + days + ' ' + (1 < days ? 'days' : 'day');
      }
      hours = duration.hours();
      if (hours > 0) {
        result += ' ' + hours + ' ' + (1 < hours ? 'hours' : 'hour');
      }
      const minutes = duration.minutes();
      if (minutes > 0) {
        result += ' ' + minutes + ' ' + (1 < minutes ? 'minutes' : 'minute');
      }
      const seconds = duration.seconds();
      this.result = result + ' ' + seconds + ' ' +  (1 < seconds ? 'seconds' : 'second');
    }
  }
});
