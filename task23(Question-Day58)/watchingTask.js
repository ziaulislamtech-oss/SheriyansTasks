// function profileLekarAao(username,cb){
//   console.log(`fetching profile data...`)
//     setTimeout(()=>{
//       cb({_id:1233,username, age : 22 , gmail : 'huiuhui@gmail.com'})
//     },2000);
// }

// function saarePostLekarAao(id,cb){
//   console.log('fetching all posts...')
//   setTimeout(()=>{
//     cb({_id:id, posts: ['hey','hello','good Morning']});
//   },3000)
// }
// function savedPostNikalo(id,cb){
//   console.log(`fetching saved posts....`)
//   setTimeout(()=>{
//     cb({_id:id, savedPost:[1,2,3,4,5]})
//   },3000)
// }
// profileLekarAao('zia-khan',function(data){
//   console.log(data)
//   saarePostLekarAao(data._id,function(posts){
//     console.log(posts)
//     savedPostNikalo(data._id,function(saved){
//       console.log(saved)
//     })
//   })
// })

// --------------------------


//  --------------------Promises-----------

// let pr = new Promise(function(res,rej){
//   setTimeout(()=>{
//     let rn = Math.floor(Math.random()*10);
//     if(rn > 5)  res('resolved with '+rn);
//     else rej('reject with '+ rn)
//   },2000)
// })

// pr.then(function(val){
//   console.log(val)
// }).catch(function (val){
//   console.log(val)
// })


//  ----------async javaScript------


// async function abcd(){
//   try{
//     let val = await pr;
//     console.log(val)
//   } catch(error){
//     console.log(error)
//   }
// }
// abcd()