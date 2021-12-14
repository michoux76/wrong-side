function countdown() {
    // var countDownDate = new Date("2021-12-17T00:00:00.000Z").getTime();
    var countDownDate = new Date("12/17/2021 00:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var str = "";
    if(distance < 0) {
        str+= `<span class="days">00</span><span class="hours">00</span><span class="minutes">00</span><span class="seconds">00</span>`;
    } else {
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        str+= `<span class="days">${("00"+days).slice(-2)}</span>`;
        str+= `<span class="hours">${("00"+hours).slice(-2)}</span>`;
        str+= `<span class="minutes">${("00"+minutes).slice(-2)}</span>`;
        str+= `<span class="seconds">${("00"+seconds).slice(-2)}</span>`;
    }

    return str

}
var app = new Vue({
    el: '#app',
    data: {
        time: '<span class="days">00</span><span class="hours">00</span><span class="minutes">00</span><span class="seconds">00</span>',
        countDownDate: new Date("12/17/2021 00:00:00").getTime()
    //   countdown: 'Hello Vue!'
    },
    computed: {
    },
    watch:  {
        time: function() {
            setTimeout(function () {
                app.time = countdown()
            },1000)
        }
    },
    created: function () {
        this.time = countdown();        
    }
  })