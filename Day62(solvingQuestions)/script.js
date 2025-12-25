// --------Question No :1;
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

// async function getWeather(city){
//     try{
//         let apiKey = `57a412c18e3fa9889a1cc9cba63e40ea`;
//        let raw = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//     );

//        if(!raw.ok){
//         throw new Error('city not found or something went wrong')
//        }

//        let realData = await raw.json()
//       if(realData.main.temp<0){
//         console.warn(`too cold out there ${realData.main.temp}`)
//         console.log(realData)
//     }
//     else if(realData.main.temp>40){
//         console.warn(`Too hot out there ${realData.main.temp}`)
//         console.log(realData)
//       }
//       else{
//         console.log(`tempreatur is ${realData.main.temp}`)
//        console.log(realData)
//       }
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// getWeather('leh')

//  ---------------------------

// ----------------Question No : 2--------

const users=[
    'akahrsh@femal.com',
    'ziakhan@gmail.com',
    'mubashir@gmail.com'
]
function sendEmail(email){
    return new Promise((resolve,reject)=>{
        let time = Math.floor(Math.random()*5)
        setTimeout(()=>{
            let probability = Math.floor(Math.random()*10)
            if(probability<=5) resolve('Email sent successfully')
            else reject('email not sent...')
        // console.log(probability)
        },time*1000)
    })
}

async function sendEmails(userList){
   let allresponses = userList.map(function(email){
        return sendEmail(email)
        .then(function(data){
            console.log(data)
        })
        .catch(function(error){
            console.log(error)
        })
    })
    let ans = await Promise.all(allresponses)
    console.log(ans)
}
sendEmails(users)