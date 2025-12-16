// ------------Sovling Quesiton------------------

// -------------Question No : 1-----------------

// function profileLaoo(time,cb){
//     console.log(`this code will run after ${time}sec...`)
//     setTimeout(()=>{
//         cb()
//     },time)
// }
// profileLaoo(3000,function(){
//     console.log('helllloooo')
// })

// ------------------------

//--------------Quesiton NO:2-----

function instagramSeDataLaao(userName,cb){
    console.log('fetching data...')
    setTimeout(()=>{
        cb({uniquenum:1224,userName:'harsh'})
    },3000)
}
function metaPeJaaoImagesLaao(uniqueNum,cb){
    console.log('fetching  Images...')
    setTimeout(()=>{
        cb(['img1','img2'])
    },3000)
}
instagramSeDataLaao('harsh',function(data){
    console.log(data)
    metaPeJaaoImagesLaao(data.uniqueNum,function(images){
        console.log(images)
    })
})