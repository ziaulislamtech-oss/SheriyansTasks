import React from 'react'
import Card from './Card'

const CardsMain = () => {
const users = [
  {
    profileImage: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    name: "Alex Johnson",
    profession: "Photographer",
    likes: 1240,
    posts: 320,
    views: 45200,
    backgroundImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Sara Williams",
    profession: "UI/UX Designer",
    likes: 980,
    posts: 210,
    views: 38900,
    backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    name: "Michael Brown",
    profession: "Software Developer",
    likes: 1560,
    posts: 410,
    views: 67800,
    backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    profileImage: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
    name: "Emily Clark",
    profession: "Digital Marketer",
    likes: 870,
    posts: 185,
    views: 29400,
    backgroundImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
  },
  {
    profileImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    name: "David Miller",
    profession: "Fitness Trainer",
    likes: 2200,
    posts: 540,
    views: 91200,
    backgroundImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
  },
  {
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    name: "Daniel Smith",
    profession: "Content Creator",
    likes: 3100,
    posts: 620,
    views: 143000,
    backgroundImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  },
  {
    profileImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    name: "Olivia Martinez",
    profession: "Travel Blogger",
    likes: 2800,
    posts: 460,
    views: 118500,
    backgroundImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470"
  },
  {
    profileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    name: "Sophia Lee",
    profession: "Fashion Designer",
    likes: 1950,
    posts: 390,
    views: 73400,
    backgroundImage: "https://images.unsplash.com/photo-1521334884684-d80222895322"
  },
  {
    profileImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    name: "James Anderson",
    profession: "Architect",
    likes: 1100,
    posts: 260,
    views: 48200,
    backgroundImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  },
  {
    profileImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    name: "Ava Thompson",
    profession: "Chef",
    likes: 3400,
    posts: 580,
    views: 165000,
    backgroundImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
  }
];


  return (
   <div className='flex flex-wrap gap-10'>
    {
      users.map(function(card){
        return <Card username={card.name} profession={card.profession} profileImage={card.profileImage} bgImage={card.backgroundImage} likes={card.likes} posts={card.posts} views={card.views}  />
      })
    }
   </div>
  )
}

export default CardsMain
