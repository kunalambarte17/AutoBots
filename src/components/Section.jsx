import React from 'react'
import "./Section.css"

function Section() {
  return (
    <div className="section-container">
      <div className="image-container">
        <img
          src={"/InfoSec.jpeg"}
          alt="Car"
        />
      </div>

      <div className="text-container">
        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </p>
        <button>Get in Touch</button>
      </div>
    </div>
  )
}

export default Section



