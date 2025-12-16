// ----------------Question No:1------------

function sayHello(cb){
    console.log('call Back jaraha hain....')
   setTimeout(()=>{
     cb(`Hello Call Back`)
   },2000)
}
sayHello(function(callBack){
    console.log(callBack)

})