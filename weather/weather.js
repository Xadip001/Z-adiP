const button=document.getElementById('btn');
button.addEventListener('click',function() {
   
    let cityName=document.getElementById('city').value;
    if(cityName==""|| cityName==null||cityName==undefined)
        {
            document.querySelector('p.invalid').style.display='block';
            return false;
        }
    getweather(cityName);
})

async function getweather(cityName)
{
    try
    {
        let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=c816c7abe6cbcbe5eaa9abf61bbe5f06`
        const response=await fetch(apiURL);
        console.log(response);
        if(response.ok&&response.status==200)
            {
                document.querySelector('p.invalid').style.display='none';
                const data=await response.json();
                console.log(data);
                const temp=Math.round(data.main.temp);
                const t=`${temp}&deg;C` 
                console.log(t);
                document.querySelector('.temp').innerHTML=t;
                const city=data.name;
                console.log(city);
                document.querySelector('.city').innerHTML=city;
                const weather=data.weather[0].main;
                console.log(weather);
                document.querySelector('.description').innerHTML=weather;
                const humid=`${data.main.humidity}%`;
                console.log(humid);
                document.querySelector('.humidity').innerHTML=humid;
                const wind=`${data.wind.speed}m/s`;
                console.log(wind);
                document.querySelector('.wind').innerHTML=wind;
                const icon=data.weather[0].icon;
                console.log(icon);
                const imageURL=`https://openweathermap.org/img/wn/${icon}@4x.png`;
                document.getElementById('imgICON').src=imageURL;
            }
            else
            {
                document.querySelector('p.invalid').style.display='block';
            }
    }
catch(error)
    {
        document.querySelector('p.wrong').style.display='block';
        document.querySelector('p.wrong').innerHTML=error.message;
    }
}