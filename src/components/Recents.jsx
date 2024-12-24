import React from 'react'
import "./Recents.css"

function Recents() {
  return (
    <div>
      <h2 className='recentCars'>Abhi Kuch Decide nhi kiya badme likhuga</h2>
      <div className='container-fluid image-carousel'>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={"/I1.jpg"} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h2 className='label-info'>First slide label</h2>
              <p className='label-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibudam debitis, illum tenetur unde deleniti fuga, provident, id pariatur quo aut corporis. Culpa in hic ipsa explicabo nobis odit ut accusamus?</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={"/I2.jpg"} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h2 className='label-info'>Second slide label</h2>
              <p className='label-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximedoloribus dolore nihil corrupti consequuntur, placeat perspiciatis, cupiditate numquam inventore, saepe accusantium fugit hic? Quidem laborum, eaque magni repellendus reprehenderit magnam.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={"/I3.jpg"} class="d-block w-100"/>
            <div class="carousel-caption d-none d-md-block">
              <h2 className='label-info'>Third slide label</h2>
              <p className='label-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velitlaborum quidem temporibus distinctio placeat nesciunt dolore perspiciatis nulla libero, accusamus quisquam fugit nihil amet ipsa, rerum, culpa excepturi necessitatibus consequuntur.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={"/I4.jpg"} class="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h2 className='label-info hove'>Fourth slide label</h2>
              <p className='label-text hove'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi aboriosam perferendis perspiciatis veniam corporis cum at, aut dolorum aliquid fugiat sequi voluptas deleniti nobis incidunt nesciunt sint aspernatur dolor debitis.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </div> 
    </div>
  )
}

export default Recents
