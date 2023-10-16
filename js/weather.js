let today = new Date().toLocaleDateString('ko', {
  hour: "2-digit"
})
let hour = new Date().toString()
console.log(hour)
let year = today.slice(0, 4)
let month = today.slice(6, 8)
let day = today.slice(10, 12)
let time = hour.slice(16, 18)-1
today = `${year}${month}${day}`;

console.log(today)
console.log(time)
const API_KEY = "qyRur7QSRyqCGsiZT%2B7R1FPMjeiPUBaUWZMGK613aO%2Boc%2FbwjVAp0qizm6LTL0Ikt5%2F6n4URH%2FwJpt6sebY1lw%3D%3D";
//민석 weather
$.getJSON(
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=${time}00&nx=91&ny=76`,
  function (data) {
    console.log(data)
    let showWeather = data.response.body.items.item[3].obsrValue;

    if (showWeather >= 30) {
      let teml_html = `<p>민석님 동네는 지금 더워요.</p> <p><span class="weather_hot">${showWeather}도</span>에요.</p>`;
      $("#weather_minseok").append(teml_html);
    } else if (showWeather < 30 && showWeather >= 20) {
      let teml_html = `<p>민석님 동네는 지금 따뜻해요.</p> <p><span class="weather_warm">${showWeather}도</span>에요.</p>`;
      $("#weather_minseok").append(teml_html);
    } else if (showWeather < 20 && showWeather >= 10) {
      let teml_html = `<p>민석님 동네는 지금 선선해요.</p> <p><span class="weather_cool">${showWeather}도</span>에요.</p>`;
      $("#weather_minseok").append(teml_html);
    } else if (showWeather < 10) {
      let teml_html = `<p>민석님 동네는 지금 추워요.</p> <p><span class="weather_cold">${showWeather}도</span>에요.</p>`;
      $("#weather_minseok").append(teml_html);
    }
  }
);
//미래 weather
$.getJSON(
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=${time}00&nx=63&ny=89`,
  function (data) {
    let showWeather = data.response.body.items.item[3].obsrValue;

    if (showWeather >= 30) {
      let teml_html = `<p>미래님 동네는 지금 더워요.</p> <p><span class="weather_hot">${showWeather}도</span>에요.</p>`;
      $("#weather_mirae").append(teml_html);
    } else if (showWeather < 30 && showWeather >= 20) {
      let teml_html = `<p>미래님 동네는 지금 따뜻해요.</p> <p><span class="weather_warm">${showWeather}도</span>에요.</p>`;
      $("#weather_mirae").append(teml_html);
    } else if (showWeather < 20 && showWeather >= 10) {
      let teml_html = `<p>미래님 동네는 지금 선선해요.</p> <p><span class="weather_cool">${showWeather}도</span>에요.</p>`;
      $("#weather_mirae").append(teml_html);
    } else if (showWeather < 10) {
      let teml_html = `<p>미래님 동네는 지금 추워요.</p> <p><span class="weather_cold">${showWeather}도</span>에요.</p>`;
      $("#weather_mirae").append(teml_html);
    }
  }
);
//유나 weather
$.getJSON(
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=${time}00&nx=60&ny=121`,
  function (data) {
    let showWeather = data.response.body.items.item[3].obsrValue;

    if (showWeather >= 30) {
      let teml_html = `<p>유나님 동네는 지금 더워요.</p> <p><span class="weather_hot">${showWeather}도</span>에요.</p>`;
      $("#weather_yuna").append(teml_html);
    } else if (showWeather < 30 && showWeather >= 20) {
      let teml_html = `<p>유나님 동네는 지금 따뜻해요.</p> <p><span class="weather_warm">${showWeather}도</span>에요.</p>`;
      $("#weather_yuna").append(teml_html);
    } else if (showWeather < 20 && showWeather >= 10) {
      let teml_html = `<p>유나님 동네는 지금 선선해요.</p> <p><span class="weather_cool">${showWeather}도</span>에요.</p>`;
      $("#weather_yuna").append(teml_html);
    } else if (showWeather < 10) {
      let teml_html = `<p>유나님 동네는 지금 추워요.</p> <p><span class="weather_cold">${showWeather}도</span>에요.</p>`;
      $("#weather_yuna").append(teml_html);
    }
  }
);
