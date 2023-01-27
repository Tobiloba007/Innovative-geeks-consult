import React from 'react'
import './reviews.css'
import {RiDoubleQuotesL} from 'react-icons/ri'
import {RiDoubleQuotesR} from 'react-icons/ri'

const Reviews = () => {
  return (
    <div className='reviews-con'>
        <div className="reviews-top">
            <h1 className='rev-title'>Our Customer Reviews</h1>
        </div>

        <div className="reviews-btm">

        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner review-inner-carousel">
    <div className="carousel-item active review-div">
      <p className='review-words'><RiDoubleQuotesL className='quote-left' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt et eveniet deserunt atque fugiat perspiciatis dignissimos
         optio cumque aliquam consequatur nam, ullam tenetur magnam sed veritatis sapiente rerum eligendi provident consectetur minima<RiDoubleQuotesR className='quote-right' />
          </p>
          <div className='reviews-contact'>
            <img className='review-img' 
            src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p className='review-name'>JOSEPH ALIGIBE</p>
          </div>
    </div>
    <div class="carousel-item review-div">
      <p className='review-words'><RiDoubleQuotesL className='quote-left' />Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusantium autem quis laborum doloremque blanditiis dolorem
         ullam dignissimos sit quidem dolorum, expedita suscipit ab nisi debitis reprehenderit deserunt totam minima maiores explicabo<RiDoubleQuotesR className='quote-right'/>
           </p>
           <div className='reviews-contact'>
            <img className='review-img' 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            <p className='review-name'>JOSEPH ALIGIBE</p>
          </div>
    </div>
  </div>
  <button className="carousel-control-prev-icon-1" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next-icon-2" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>

    </div>
  )
}

export default Reviews