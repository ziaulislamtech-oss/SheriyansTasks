const people = [
  {
    fullName: "Emma Johnson",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    profession: "UI/UX Designer",
    description: "Creative designer with a passion for building elegant digital experiences.",
    tags: ["Design", "Creative", "Figma"]
  },
  {
    fullName: "Mark Anthony",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Full-Stack Developer",
    description: "Experienced developer building scalable web applications and APIs.",
    tags: ["JavaScript", "Node.js", "React"]
  },
  {
    fullName: "Sophia Carter",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    profession: "Digital Marketer",
    description: "Helping brands grow through effective digital campaigns and branding.",
    tags: ["Branding", "SEO", "Social Media"]
  },
  {
    fullName: "David Thompson",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "Data Scientist",
    description: "Data enthusiast turning raw numbers into actionable insights.",
    tags: ["Machine Learning", "Python", "Analytics"]
  },
  {
    fullName: "Ava Williams",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Photographer",
    description: "Capturing stories through stunning visual storytelling.",
    tags: ["Photography", "Editing", "Creativity"]
  }
];
let parentDiv = document.querySelector('.parent')
let clutter=''
people.forEach((obj)=>{
  
  clutter+=` <div class="object">
                <img src="${obj.image}" alt="">
                <h1>${obj.fullName}</h1>
                <h2>${obj.profession}</h2>
                <p>${obj.description}</p>

            </div>`
})
parentDiv.innerHTML = clutter