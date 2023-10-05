let today = new Date();

let month = String(today.getUTCMonth() + 1).padStart(2, '0'); //months from 1-12
let day = String(today.getUTCDate()).padStart(2, '0');
let year = today.getUTCFullYear();

today = `${year}${month}${day}`;


const API_KEY = 'dFutIVbhP9iCO5wH%2Bn0dhh4QasCgcBUBGWoQNFldz8YNlyL8Jo0b32tAknfEA8N9YfCYdZ3O2PrRscDkO0gX1g%3D%3D'
$.getJSON(
    `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=${API_KEY}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${today}&base_time=0000&nx=91&ny=76`,
    function (data) {
        console.log(data.response.body.items.item[3].obsrValue)

        let showWeather = data.response.body.items.item[3].obsrValue

        if (showWeather >= 30) {
            let teml_html = `민석님 동네는 지금 더워요 ${showWeather}도에요 `
            $('.weather').text(teml_html)
        } else if (showWeather < 30 && showWeather >= 20) {
            let teml_html = `민석님 동네는 지금 따뜻해요 ${showWeather}도에요 `
            $('.weather').text(teml_html)
        } else if (showWeather < 20 && showWeather >= 10) {
            let teml_html = `민석님 동네는 지금 선선해요 ${showWeather}도에요 `
            $('.weather').text(teml_html)
        } else if (showWeather < 10) {
            let teml_html = `민석님 동네는 지금 추워요 ${showWeather}도에요 `
            $('.weather').text(teml_html)
        }
    }
)