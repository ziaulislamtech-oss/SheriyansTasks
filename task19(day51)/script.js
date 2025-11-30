const reels = [
  {
    username: "tech_guru",
    likeCount: 1200,
    isLiked: false,
    commentCount: 145,
    caption: "Coding all day, every day 💻✨",
    video: "./vidoes/coding.mp4",
    shareCount: 40,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    isMuted : false
  },
  {
    username: "foodie_diaries",
    likeCount: 980,
    isLiked: true,
    commentCount: 109,
    caption: "Try out this 🍛🔥",
    video: "./vidoes/food.mp4",
    shareCount: 23,
    isFollowed: false,
    userProfile: {
      url: "https://randomuser.me/api/portraits/women/22.jpg"
    },
    isMuted : false
  },
  {
    username: "travel_with_sam",
    likeCount: 2350,
    isLiked: false,
    commentCount: 267,
    caption: "Sunset vibes in Turkey 🇹🇷🌅",
    video: "./vidoes/sunset.mp4",
    shareCount: 89,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/men/33.jpg"
    },
    isMuted : false
  },
  {
    username: "fitness_freak",
    likeCount: 3100,
    isLiked: true,
    commentCount: 320,
    caption: "Morning workout grind! 💪🔥",
    video: "./vidoes/workout.mp4",
    shareCount: 102,
    isFollowed: false,
    userProfile: {
      url: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    isMuted : false
  },
  {
    username: "artistic_soul",
    likeCount: 540,
    isLiked: false,
    commentCount: 67,
    caption: "New painting completed 🎨✨",
    video: "./vidoes/painting.mp4",
    shareCount: 15,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/men/55.jpg"
    },
      isMuted : false
    },
    {
    username: "gaming_corner",
    likeCount: 1570,
    isLiked: true,
    commentCount: 189,
    caption: "New gameplay uploaded! 🎮🔥",
    video: "./vidoes/gaming.mp4",
    shareCount: 45,
    isFollowed: false,
    userProfile: {
      url: "https://randomuser.me/api/portraits/women/66.jpg"
    },
    isMuted : false
  },
  {
    username: "daily_quotes",
    likeCount: 420,
    isLiked: false,
    commentCount: 30,
    caption: "Believe in yourself ✨",
    video: "./vidoes/belive.mp4",
    shareCount: 10,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/men/77.jpg"
    },
    isMuted : false
  },
  {
    username: "street_photography",
    likeCount: 2100,
    isLiked: false,
    commentCount: 199,
    caption: "Captured this moment 📸😍",
    video: "./vidoes/2.mp4",
    shareCount: 70,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/women/88.jpg"
    },
    isMuted : false
  },
  {
    username: "music_vibes",
    likeCount: 1650,
    isLiked: true,
    commentCount: 145,
    caption: "New melody dropping soon 🎵🔥",
    video: "./vidoes/melody.mp4",
    shareCount: 41,
    isFollowed: false,
    userProfile: {
      url: "https://randomuser.me/api/portraits/men/99.jpg"
    },
    isMuted : false
  },
  {
    username: "pet_lovers",
    likeCount: 890,
    isLiked: false,
    commentCount: 54,
    caption: "Just look at this cute puppy 🐶❤️",
    video: "./vidoes/dog.mp4",
    shareCount: 19,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/women/10.jpg"
    },
    isMuted : false
  }
];


let allReels = document.querySelector('.allReels');
function addData(){
    let sum = ''
    reels.forEach((obj,idx)=>{
    sum += `<div class="reel">
               
    <video autoplay loop ${obj.isMuted?'':'muted'}   src="${obj.video}">
    </video>
    <div class="right">
                    <div id='${idx}' class='video'>
                       <i id=${idx} class="${obj.isMuted ? 'ri-volume-down-line' : 'ri-volume-mute-line'}"></i>
                    </div>

                    <div id='${idx}' class="like">
                        <h4>${obj.isLiked?'<i class="ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'} </h4>
                        <h6>${obj.likeCount}</h6>
                    </div>
                    <div class="comments">
                        <h4><i class="ri-chat-3-line"></i></i></h4>
                        <h6>${obj.commentCount}</h6>
                    </div>
                    <div class="share">
                        <h4><i class="ri-share-forward-line"></i></h4>
                        <h6>${obj.shareCount}</h6>
                    </div>
                    <div class="more">
                        <h4><i class="ri-more-2-fill"></i></h4>
                    </div>

                </div>
                <div class="bottom">
                    <div  class="top">
                        <span><img src="${obj.userProfile.url}"
                                alt=""></span>
                        <p>${obj.username}</p> <button id = '${idx}'  class = 'follow'>${obj.isFollowed?'Unfollow':'follow'}</button>
                    </div>
                    <div class="bottom">
                        <h5>${obj.caption}</h5>
                    </div>
                </div>
            </div>`
})
     allReels.innerHTML=sum
}
addData()

allReels.addEventListener('click',(dets)=>{
  // console.log(dets.target)
   if(dets.target.className =='like'){
    if(reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount--
    reels[dets.target.id].isLiked = false
  }
  else{
    reels[dets.target.id].likeCount++
    reels[dets.target.id].isLiked = true
  }
  addData()
  }
 
  if(dets.target.className=='follow'){
    reels[dets.target.id].isFollowed? reels[dets.target.id].isFollowed =false : reels[dets.target.id].isFollowed = true
    addData()
  }

  if(dets.target.closest('.video')){
    console.log(dets.target)
    if(reels[dets.target.id].isMuted==false){
      reels[dets.target.id].isMuted =true;
      reels[dets.target.id].isMuted
      addData()
    }
    else{
      reels[dets.target.id].isMuted =false;
      reels[dets.target.id].isMuted
      addData()
    }
      
  
  }
   
})

