function profileLekarAao(username,cb){
  console.log(`fetching profile data...`)
    setTimeout(()=>{
      cb({_id:1233,username, age : 22 , gmail : 'huiuhui@gmail.com'})
    },2000);
}

function saarePostLekarAao(id,cb){
  console.log('fetching all posts...')
  setTimeout(()=>{
    cb({_id:id, posts: ['hey','hello','good Morning']});
  },3000)
}
function savedPostNikalo(id,cb){
  console.log(`fetching saved posts....`)
  setTimeout(()=>{
    cb({_id:id, savedPost:[1,2,3,4,5]})
  },3000)
}
profileLekarAao('zia-khan',function(data){
  console.log(data)
  saarePostLekarAao(data._id,function(posts){
    console.log(posts)
    savedPostNikalo(data._id,function(saved){
      console.log(saved)
    })
  })
})