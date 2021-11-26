const button = document.querySelector('#botton');
button.addEventListener('click',function(){
     let input = document.querySelector('#input').value;
    
     fetch('https://api.openweathermap.org/data/2.5/weather?q='+input+'&appid=0e3bd4234f80540cc97b529daabac8b8')
     .then(response => response.json())
     .then(data => {
         console.log(data)
         let cityName =  data.name;
         let con = data.sys.country
         let tem =  data.main.temp;
         let temp = tem - 273.15;
         let description = data.weather[0].description

         document.querySelector('#citys').innerHTML = cityName
         document.querySelector('#temps').innerHTML = temp.toFixed(0)
         document.querySelector('#descripts').innerHTML = description
         document.querySelector('#country').innerHTML = con
         
     })
     .catch((error) =>  alert('invalid  city name ? '))
      
})