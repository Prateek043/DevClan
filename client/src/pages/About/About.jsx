import React from 'react'
import './about.css';
function About() {
  return (
    <>
    <div class="responsive-container-block bigContainer">
  <div class="responsive-container-block Container bottomContainer">
    <div class="ultimateImg">
      <img class="mainImg" src="https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg"/>
      <div class="purpleBox">
        <p class="purpleText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
        </p>
        <img class="stars" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp5.svg"/>
      </div>
    </div>
    <div class="allText bottomText">
      <p class="text-blk headingText">
        About Me
      </p>
      <p class="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p class="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <a class="explore">
        View Services
      </a>
    </div>
  </div>
</div>
    </>
  )
}

export default About