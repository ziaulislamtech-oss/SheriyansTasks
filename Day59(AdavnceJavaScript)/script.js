//   ---------------------- CallBack Hell------------------
// function abcd(fn){
//     fn(function(fn3){
//         fn3(function(fn5){
//             fn5(function(){
//                 console.log('i am fn6')
//             })
//         })
//     })
// }

// abcd(function(fn2){
//     fn2(function(fn4){
//         fn4(function(fn6){
//             fn6()
//         })
//     })
// })
// function(address,cb){}
function iceCreamLaao(address,cb){
    // logic
    cb('icecream')
}
iceCreamLaao('gufranDukan',function(ice){
    console.log(ice)
})