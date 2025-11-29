const reels = [
  {
    username: "tech_guru",
    likeCount: 1200,
    isLiked: false,
    commentCount: 145,
    caption: "Coding all day, every day 💻✨",
    video: "https://www.pexels.com/download/video/5495890/",
    shareCount: 40,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/men/11.jpg"
    }
  },
  {
    username: "foodie_diaries",
    likeCount: 980,
    isLiked: true,
    commentCount: 109,
    caption: "The best spicy food in town! 🍛🔥",
    video: "https://www.pexels.com/download/video/11571662/",
    shareCount: 23,
    isFollowed: false,
    userProfile: {
      url: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  },
  {
    username: "travel_with_sam",
    likeCount: 2350,
    isLiked: false,
    commentCount: 267,
    caption: "Sunset vibes in Turkey 🇹🇷🌅",
    video: "https://www.pexels.com/download/video/4997759/",
    shareCount: 89,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/men/33.jpg"
    }
  },
  {
    username: "fitness_freak",
    likeCount: 3100,
    isLiked: true,
    commentCount: 320,
    caption: "Morning workout grind! 💪🔥",
    video: "https://www.pexels.com/download/video/8380510/",
    shareCount: 102,
    isFollowed: false,
    userProfile: {
      url: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  },
  {
    username: "artistic_soul",
    likeCount: 540,
    isLiked: false,
    commentCount: 67,
    caption: "New painting completed 🎨✨",
    video: "https://www.pexels.com/download/video/4135963/",
    shareCount: 15,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/men/55.jpg"
    }
  },
  {
    username: "gaming_corner",
    likeCount: 1570,
    isLiked: true,
    commentCount: 189,
    caption: "New gameplay uploaded! 🎮🔥",
    video: "https://www.pexels.com/download/video/8128342/",
    shareCount: 45,
    isFollowed: false,
    userProfile: {
      url: "https://randomuser.me/api/portraits/women/66.jpg"
    }
  },
  {
    username: "daily_quotes",
    likeCount: 420,
    isLiked: false,
    commentCount: 30,
    caption: "Believe in yourself ✨",
    video: "https://www.pexels.com/download/video/8061013/",
    shareCount: 10,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/men/77.jpg"
    }
  },
  {
    username: "street_photography",
    likeCount: 2100,
    isLiked: false,
    commentCount: 199,
    caption: "Captured this moment 📸😍",
    video: "https://www.pexels.com/download/video/3206742/",
    shareCount: 70,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/women/88.jpg"
    }
  },
  {
    username: "music_vibes",
    likeCount: 1650,
    isLiked: true,
    commentCount: 145,
    caption: "New melody dropping soon 🎵🔥",
    video: "https://www.pexels.com/download/video/10125140/",
    shareCount: 41,
    isFollowed: false,
    userProfile: {
      url: "https://randomuser.me/api/portraits/men/99.jpg"
    }
  },
  {
    username: "pet_lovers",
    likeCount: 890,
    isLiked: false,
    commentCount: 54,
    caption: "Just look at this cute puppy 🐶❤️",
    video: "https://www.pexels.com/download/video/5534310/",
    shareCount: 19,
    isFollowed: true,
    userProfile: {
      url: "https://randomuser.me/api/portraits/women/10.jpg"
    }
  }
];


let sum = ''
let allReels = document.querySelector('.allReels');
reels.forEach((obj,idx)=>{
    console.log("hellow"+idx);
    sum += `<div class="reel">
              <video autoplay loop muted src="${obj.video}"></video>
                <div class="right">
                    <div class="like">
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
                    <div class="top">
                        <span><img src="${obj.userProfile.url}"
                                alt=""></span>
                        <p>${obj.username}</p> <button>${obj.isFollowed?'Unfollow':'follow'}</button>
                    </div>
                    <div class="bottom">
                        <h5>${obj.caption}</h5>
                    </div>
                </div>
            </div>`
})
allReels.innerHTML=sum