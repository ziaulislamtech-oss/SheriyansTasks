// ~~~~~~~~~~~~~~~~~~~~LEVEL-ONE ----------------
// ----------------Question No:1------------

// function sayHello(cb){
//     console.log('call Back jaraha hain....')
//    setTimeout(()=>{
    //      cb(`Hello Call Back`)
//    },2000)
// }
// sayHello(function(callBack){
    //     console.log(callBack)
    
    // })
    
    // ------------------------------------
    
    
    // ----------------Question No:2------------
    
    // function doubleKaro(number,cb){
        //     console.log(`Number double horaha hain...`)
        //     setTimeout(()=>{
            //         cb(number+number)
            //     },2000)
            // }
            // doubleKaro(10,function(dbNum){
                //     console.log(dbNum)
                // })
                
                // ------------------------------------
                
                
                // ----------------Question No:3------------
                
                // function sayWelcome(name,cb){
                    //     console.log(`welcome aaraha hain...`)
//     setTimeout(()=>{
    //         cb(`Welcome ${name}`);
//     },1000)
// }
// sayWelcome('zikhan',function(welcome){
    //     console.log(welcome)
    // })
    
    // --------------Question No : 4------------
    
    // function sumDedo(num1,num2,cb){
//     console.log('sum horaha hain...')
//     setTimeout(()=>{
//         cb(num1+num2);
//     },2000)
// }

// sumDedo(2,5,function(Num){
    //     console.log(Num)
// })

// ------------------------------------

// -------------Question No: 5--------------

// function arraykiLengthDo(arr,cb){
//     console.log('array ki length arahe hain...')
//     setTimeout(()=>{
//         cb(arr.length)
//     },2000)
// }
// arraykiLengthDo([1,2,3,4,5,6],function(length){
//     console.log(length)
// })


// ------------------------------------

// ~~~~~~~~~~~~~~~~~~~~LEVEL-TWO ----------------

// -------------Question No: 6--------------


// function userNameDo(userObj,cb){
//     console.log(`user name araha hain....`)
//     setTimeout(()=>{
//         cb(userObj.name)
//     },2000)
// }

// userNameDo({id:22,name:'muhammad khan'},function(username){
//     console.log(username)
// })

// ----------------------------------------

// -------------Question No: 7--------------

// function oddYaEvenDo(number,cb){
//     console.log('number check hora ha  hain...')
//    setTimeout(()=>{
//      console.log()
//     if(number%2===0){
//         cb('Even')
//     }
//     else{cb('Odd')}
//    },2000)
// }
// oddYaEvenDo(5,function(batao){
//     console.log(batao)
// })


// ----------------------------------------

// -------------Question No: 8--------------

// function toUpperCase(string,cb){
//     console.log('Uper Case Main horaha hian.....!')
//     setTimeout(()=>{
//         cb(string.toUpperCase())
//     },2000)
// }
// toUpperCase('hello zia khan',function(st){
//     console.log(st)
// })


// ----------------------------------------
    
// -------------Question No: 9--------------

// function arraySeEvenNumDo(arr,cb){
//     console.log('Even numbers nekalain jarahain hain....')
//     setTimeout(()=>{
//         let evenNums=arr.filter(n => n%2===0)
//            cb(evenNums)
        
//     },2000)
// }

// arraySeEvenNumDo([1,2,3,4,5,6,7,8,9,10],function(evenNumbers){
//     console.log(evenNumbers)
// })



// ----------------------------------------
    
// -------------Question No: 10--------------

// function ageCheckKaro(age,cb){
//     console.log('age check horaha hian...')
//     setTimeout(()=>{
//         if(age>18) cb('you are allowed')
//             else cb('sorry you are young')
//     },2000)
// }
// ageCheckKaro(2,function(data){
//     console.log(data)
// })

// -----------------------------------

// ~~~~~~~~~~~~~~~~~~~~~~~~~~LEVEL THREE~~~~~~~~~~~~~~~~~~~~~~~~~~

// function getUser(name,cb){
//     console.log('Fetching Users.....')
//     setTimeout(()=>{
//         cb({
//             user1:name,
//             user2: 'Maaz khan',
//             user3 : 'Shouaib khan',
//             user4 : 'Khalid'
            
//         })
//     },2000)
// }
// function getProfile(username,cb){
//     console.log(`fetching ${username} profile...`)
//     setTimeout(()=>{
//         cb({
//             name : username,
//             age : 22,
//             gender:'Male',

//         })
//     },2000)
// }
// function getPosts(name,cb){
//     console.log(`Fetching ${name} posts....`)
//     setTimeout(()=>{
//         cb({
//             ProfileHolder:name,
//             post1: 'Fealing Happy',
//             post2:'Going to mardan',
//             post3:'Going to Lahore'
//         })
//     },2000)
// }
// function getComents(postNo,cb){
//     console.log(`Fetching  posts ${postNo} coments...`)
//     setTimeout(()=>{
//         cb({
//             post:postNo,
//             coment1:'wah wah great',
//             coment2:'have a nice journey',
//             coment2:'stay bless brother'
//         })
//     },2000)
// }
// function getLikes(postNo,cb){
//     console.log(`fetching post ${postNo} likes....`)
//     setTimeout(()=>{
//         cb({
//             post:postNo,
//             like1:'thumbLike',
//             like2:'heartLike',
//             like3:'sadEmoji',
//             like4:'laughing emoji',
//             like5:'crying emoji'
//         })
//     },2000)
// }

// getUser('Zia Ul Islam',function(user){
//     console.log(user)
//     getProfile(user.user1,function(profileD){
//         console.log(profileD)
//         getPosts(profileD.name,function(allPosts){
//             console.log(allPosts)
//             getComents(allPosts.post1,function(allComents){
//                 console.log(allComents)
//                 getLikes(allPosts.post2,function(allLikes){
//                     console.log(allLikes)
//                 })
//             })
//         })
//     })
// })


// -------------------------------------------------

// ----------Question No:12---------------------

function getUserLogins(userName,cb){
    console.log(`fetching user logins....`)
    setTimeout(()=>{
        cb({id:243,token:'2B54C'})
    },1000)
}

function getProfile(id,cb){
    console.log('fetching profile...')
    setTimeout(()=>{
        cb({name:'ziakhan',age:22})
    },1000)
}
function getPosts(profileName,cb){
    console.log(`fetching posts....`)
    setTimeout(()=>{
        cb(['Happy Day','Fealing Awesome','Going to Murree'])
    },2000)
}
function getComments(post,cb){
    console.log(`fetching comments...`);
    setTimeout(()=>{
        cb(['very well','stay bless brother','nice day'])
    },2000)
}
function getLikes(post,cb){
    console.log(`getting likes....`)
    setTimeout(()=>{
        cb([1,2,3,4,5,'2k'])
    },2000)
}
function logOutKaro(cb){
    console.log('logging out....')
    setTimeout(()=>{
        cb(`you have been logged out successfully`)
    },2000)

}

getUserLogins('ziakhan',function(logins){
    console.log(logins)
    getProfile(logins.id,function(profile){
        console.log(profile)
        getPosts(profile.name,function(posts){
            console.log(posts)
            getComments(posts[0],function(coments){
                console.log(coments)
                getLikes(posts[0],function(likes){
                    console.log(likes)
                    logOutKaro(function(msg){
                        console.log(msg)
                    })
                })
            })
        })
    })
    
})