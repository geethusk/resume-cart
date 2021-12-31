import React from 'react'
import "./aboutus.css"
import resume from "../Routes/hiw-images/resume.svg"

const About = () => {
    return (
        <div className='aboutus-container'>
            <div className='about-head'>
               <div className="about-main-head">About Us</div>
               <div className='about-main-description'>Do Everything In Love.</div>
            </div> 
            <div className='about-details'>
               <div className='details-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam sapiente minus facilis ab maxime corporis atque quasi natus fugiat culpa optio iusto aperiam quis tempora laborum, consequatur expedita nobis alias quaerat error iste quam? Delectus a nostrum saepe possimus inventore et similique enim nesciunt debitis, corrupti quos sunt laudantium, itaque ut hic mollitia soluta sit dignissimos aliquid aliquam facilis iste quod! Aperiam perferendis, ullam ab a beatae voluptatum atque consequatur cum similique omnis dicta optio! Ad cupiditate repellat hic cum unde. Odit mollitia illo beatae, ipsum distinctio magni, in molestiae maxime nihil quia aperiam sed quisquam, porro esse aut rem.</div> 
            </div> 
            <div className='about-footer-section'>
                <img className='about-image-section' src={resume}/>
                <div className='about-image-description'>Our Products <br/>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quae debitis quos beatae sequi itaque optio cum ducimus a sapiente! Eaque sequi et ipsa vitae assumenda animi quo voluptate reprehenderit, fugiat tenetur sapiente obcaecati unde vero asperiores! Aspernatur ad illum corporis nulla ut, perferendis fugiat velit voluptate minima temporibus ducimus.</div>
            </div>
            
        </div>
    )
}

export default About
