import React from 'react'
import {Link} from "react-router-dom"
import "./works.css"
import home from "../Routes/hiw-images/home.png"
import login from "../Routes/hiw-images/login.png"
import aboutUs from "../Routes/hiw-images/aboutus.jpg"
import signup from  "../Routes/hiw-images/signup.png"


const HowItWorks = () => {
    return (
        <div className='working-container3'>
            
            <div className='working-pagehead3'>
                <div className='main-title3'>HOW IT WORKS</div>
                <div className='main-title-description-3'>BUILD YOUR RESUME,BUILD YOUR CAREER</div>
            </div>
            <div className='step-container'>
                 <div className='procedure-title-3'>Procedure:-</div>
                 <div className='step-info'>Resume building is a totally unique and innovative solution to help you reach your career goals. Our service is easy to use, provides all of the necessary tools, and the results really make a difference in how employers see your skills and experience. We are not going to charge you for building resumes in the traditional way, instead you can use all of our matching technology for free and still receive excellent matching results.w you to review what's left out of your mismatch resume in the section titled "my skills that this employer doesn't value" and click on whichever skills you want added back into your mismatch resume..</div>
            </div>
            <div className='step-conatiner'>
                <div className='step-title-3'>Step 1:- Navigate to Home page</div>
                <img className='hiw-image-3' src={home} alt="home-page"/>
                <div className='linking-pages'><Link className='link-3' to="/">Click here to view home page</Link></div>
                <div className='step-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aspernatur provident laboriosam perspiciatis eveniet fugit quibusdam deleniti consectetur totam autem voluptatum voluptatem fugiat, possimus quasi cum voluptates porro ullam deserunt?</div>
            </div>
            <div className='step-conatiner'>
                <div className='step-title-3'>Step 2:- About US</div>
                <img className='hiw-image-3' src={aboutUs}/>
                <div className='linking-pages'><Link className='link-3' to="/about">Click here to go to about Us page</Link></div>
                <div className='step-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias vero saepe architecto voluptas obcaecati odio! Asperiores sequi reiciendis incidunt sunt temporibus, vitae amet ut deserunt magni, repellendus, quos officia dicta?</div>
            </div>
            <div className='step-conatiner'>
                <div className='step-title-3'>Step 2:- Feedback</div>
                <div className='step-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias vero saepe architecto voluptas obcaecati odio! Asperiores sequi reiciendis incidunt sunt temporibus, vitae amet ut deserunt magni, repellendus, quos officia dicta?</div>
            </div> 
            <div className='step-conatiner'>
                <div className='step-title-3'>Step 4:- Login</div>
                <img className='hiw-image-3' src={login}/>
                <div className='linking-pages'><Link className='link-3' to="/login">Click here to go to Login page</Link></div>
                <div className='step-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias vero saepe architecto voluptas obcaecati odio! Asperiores sequi reiciendis incidunt sunt temporibus, vitae amet ut deserunt magni, repellendus, quos officia dicta?</div>
            </div> 
            <div className='step-conatiner'>
                <div className='step-title-3'>Step 4:- Navigates to Sign Up Page</div>
                <img className='hiw-image-3' src={signup}/>
                <div className='linking-pages'><Link className='link-3' to="/sign-up">Click here to go to SignUp page</Link></div>
                <div className='step-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias vero saepe architecto voluptas obcaecati odio! Asperiores sequi reiciendis incidunt sunt temporibus, vitae amet ut deserunt magni, repellendus, quos officia dicta?</div>
            </div>    
            
        </div>
    )
}

export default HowItWorks
