import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div className="card w-70 h-90  p-2 box-border rounded-2xl overflow-hidden bg-[#F9F5F0]">

      <div className="top relative w-full h-25   box-border rounded-2xl overflow-hidden ">
        <img src={props.bgImage} alt="" className='w-full h-full object-cover z-[-1] ' />
        <button className=' absolute right-5 top-5 px-2 py-1 rounded-2xl bg-[#F9F8F6]'>Follow <i className="ri-add-line"></i></button>
      </div>
      <div className="middle flex flex-col items-center relative bottom-10 ">
        <div className="profile w-20 h-20 rounded-[50%] overflow-hidden">
          <img src={props.profileImage} alt="" className='w-full h-full object-cover' />
        </div>
        <h3 className='font-medium text-xl'>{props.username}</h3>
        <p>{props.profession}</p>
      </div>
      <div className="bottom w-full  flex justify-between p-2 bg-[white]  ">
        <div className="likes">
          <h3>234</h3>
          <h5>likes</h5>
        </div>
        <div className="posts">
          <h3>828</h3>
          <h5>posts</h5>
        </div>
        <div className="views">
          <h3>342.9k</h3>
          <h5>views</h5>
        </div>
      </div>
      <div className="social-icons  flex justify-around p-1 border-t-1 bg-[white] rounded-b-2xl">
            <div className="instargram">
              <i class="ri-instagram-line"></i>
            </div>
            <div className="twitter">
              <i class="ri-twitter-x-line"></i>
            </div>
            <div className="thread">
              <i class="ri-threads-line"></i>
            </div>
          </div>
    </div>
  )
}

export default Card
