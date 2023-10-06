let today = new Date();
let month = String(today.getUTCMonth() + 1).padStart(2, "0"); //months from 1-12
let day = String(today.getUTCDate()).padStart(2, "0");
let year = today.getUTCFullYear();
let time = String(today.getHours() - 1).padStart(2, "0");
today = `${year}${month}${day}`;

const API_KEY =
  "dFutIVbhP9iCO5wH%2Bn0dhh4QasCgcBUBGWoQNFldz8YNlyL8Jo0b32tAknfEA8N9YfCYdZ3O2PrRscDkO0gX1g%3D%3D";

//민석 weather
$.getJSON(
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=${time}00&nx=91&ny=76`,
  function (data) {
    let showWeather = data.response.body.items.item[3].obsrValue;

<<<<<<< HEAD
    if (showWeather >= 30) {
      let teml_html = `민석님 동네는 지금 더워요 ${showWeather}도에요 `;
      $("#weather_minseok").text(teml_html);
    } else if (showWeather < 30 && showWeather >= 20) {
      let teml_html = `민석님 동네는 지금 따뜻해요 ${showWeather}도에요 `;
      $("#weather_minseok").text(teml_html);
    } else if (showWeather < 20 && showWeather >= 10) {
      let teml_html = `민석님 동네는 지금 선선해요 ${showWeather}도에요 `;
      $("#weather_minseok").text(teml_html);
    } else if (showWeather < 10) {
      let teml_html = `민석님 동네는 지금 추워요 ${showWeather}도에요 `;
      $("#weather_minseok").text(teml_html);
=======
        if (showWeather >= 30) {
            let teml_html = `<p>민석님 동네는 지금 더워요.</p><p>현재 <span class="weather_hot">${showWeather}도</span>에요.</p>`
            $('#weather_minseok').append(teml_html)
        } else if (showWeather < 30 && showWeather >= 20) {
            let teml_html = `<p>민석님 동네는 지금 따뜻해요.</p><p>현재 <span class="weather_warm">${showWeather}도</span>에요.</p> `
            $('#weather_minseok').append(teml_html)
        } else if (showWeather < 20 && showWeather >= 10) {
            let teml_html = `<p>민석님 동네는 지금 선선해요.</p><p>현재 <span class="weather_cool">${showWeather}도</span>에요.</p>`
            $('#weather_minseok').append(teml_html)
        } else if (showWeather < 10) {
            let teml_html = `<p>민석님 동네는 지금 추워요.</p><p>현재 <span class="weather_cold">${showWeather}도</span>에요.</p>`
            $('#weather_minseok').append(teml_html)
        }
>>>>>>> 9c8515591358b9b93c00afa598871350faaf7454
    }
  }
);
//미래 weather
$.getJSON(
<<<<<<< HEAD
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=${time}00&nx=63&ny=89`,
  function (data) {
    let showWeather = data.response.body.items.item[3].obsrValue;

    if (showWeather >= 30) {
      let teml_html = `미래님 동네는 지금 더워요 ${showWeather}도에요 `;
      $("#weather_mirae").text(teml_html);
    } else if (showWeather < 30 && showWeather >= 20) {
      let teml_html = `미래님 동네는 지금 따뜻해요 ${showWeather}도에요 `;
      $("#weather_mirae").text(teml_html);
    } else if (showWeather < 20 && showWeather >= 10) {
      let teml_html = `미래님 동네는 지금 선선해요 ${showWeather}도에요 `;
      $("#weather_mirae").text(teml_html);
    } else if (showWeather < 10) {
      let teml_html = `미래님 동네는 지금 추워요 ${showWeather}도에요 `;
      $("#weather_mirae").text(teml_html);
=======
    `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=${time}00&nx=63&ny=89`,
    function (data) {
        let showWeather = data.response.body.items.item[3].obsrValue
   
        if (showWeather >= 30) {
            let teml_html = `<p>미래님 동네는 지금 더워요.</p><p>현재 <span class="weather_hot">${showWeather}도</span>에요.</p>`
            $('#weather_mirae').append(teml_html)
        } else if (showWeather < 30 && showWeather >= 20) {
            let teml_html = `<p>미래님 동네는 지금 따뜻해요.</p><p>현재 <span class="weather_warm">${showWeather}도</span>에요.</p>`
            $('#weather_mirae').append(teml_html)
        } else if (showWeather < 20 && showWeather >= 10) {
            let teml_html = `<p>미래님 동네는 지금 선선해요.</p><p>현재 <span class="weather_cool">${showWeather}도</span>에요.</p>`
            $('#weather_mirae').append(teml_html)
        } else if (showWeather < 10) {
            let teml_html = `<p>미래님 동네는 지금 추워요.</p><p>현재 <span class="weather_cold">${showWeather}도</span>에요.</p>`
            $('#weather_mirae').append(teml_html)
        }
>>>>>>> 9c8515591358b9b93c00afa598871350faaf7454
    }
  }
);
//유나 weather
$.getJSON(
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=${time}00&nx=60&ny=121`,
  function (data) {
    let showWeather = data.response.body.items.item[3].obsrValue;

<<<<<<< HEAD
    if (showWeather >= 30) {
      let teml_html = `유나님 동네는 지금 더워요 ${showWeather}도에요 `;
      $("#weather_yuna").text(teml_html);
    } else if (showWeather < 30 && showWeather >= 20) {
      let teml_html = `유나님 동네는 지금 따뜻해요 ${showWeather}도에요 `;
      $("#weather_yuna").text(teml_html);
    } else if (showWeather < 20 && showWeather >= 10) {
      let teml_html = `유나님 동네는 지금 선선해요 ${showWeather}도에요 `;
      $("#weather_yuna").text(teml_html);
    } else if (showWeather < 10) {
      let teml_html = `유나님 동네는 지금 추워요 ${showWeather}도에요 `;
      $("#weather_yuna").text(teml_html);
=======
        if (showWeather >= 30) {
            let teml_html = `<p>유나님 동네는 지금 더워요.</p><p>현재 <span class="weather_hot">${showWeather}도</span>에요.</p>`
            $('#weather_yuna').append(teml_html)
        } else if (showWeather < 30 && showWeather >= 20) {
            let teml_html = `<p>유나님 동네는 지금 따뜻해요.</p><p>현재 <span class="weather_warm">${showWeather}도</span>에요.</p>`
            $('#weather_yuna').append(teml_html)
        } else if (showWeather < 20 && showWeather >= 10) {
            let teml_html = `<p>유나님 동네는 지금 선선해요.</p><p>현재 <span class="weather_cool">${showWeather}도</span>에요.</p>`
            $('#weather_yuna').append(teml_html)
        } else if (showWeather < 10) {
            let teml_html = `<p>유나님 동네는 지금 추워요.</p><p>현재 <span class="weather_cold">${showWeather}도</span>에요.</p>`
            $('#weather_yuna').append(teml_html)
        }
>>>>>>> 9c8515591358b9b93c00afa598871350faaf7454
    }
  }
);
