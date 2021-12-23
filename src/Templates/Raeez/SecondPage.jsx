import React from 'react'
import "./secondpage.css"
import { useState } from 'react'
import profilepic from "./images/resumepic.jpg"
import Location from "./icons/location.png"
import Phone from "./icons/phone.png"
import Gmail from "./icons/gmail.png"



const SecondPage = () => {
    const[template,setTemplate]=useState({
        theme:['violet','red'],
        name:"JESSICA COOPER",
        profilebio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam at non illo ipsum. Fuga iusto, maiores distinctio aut expedita consectetur? Amet laudantium fugiat in temporibus odit aliquam ipsa possimus!",
        workexp:[
            {
                startingdate:"january 2016",
                endingdate:"present",
                companyName:"Jim's Widget Factory, Plano, TX",
                jobdesignation:"REACT DEVELOPER",
        
            detailsList:[
                {
                    id:1,value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                    id:2,value:"Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment"

                }]
            }
        ],
        contact:{palce:"LONDON,UNITED KINGDOM",phone:" 123-456-789-00",gmail:"raeezmohammed97@gmail.com"},
        skills:[
                           
                            {id:1,value: "Communication"},
                            {id:2,value:"Ability to Work"},
                            {id:3,value:"Decision Making"},
                            {id:4,value:"Time Mangement"},
                            {id:5,value:"Conflict Resolution"},
                            {id:6,value:"Leadership"}
               ],
        Education:[{
            course:"Master Degree",
            collegeName:"University Education",
            graduationyear:"2014"

        }]       

   })
    return (
        <div className="main-section-3">
            
            <div className="left-section-3">
                <div className='left-section-name-3'>JESSICA<br/> 
                   COOPER</div>
                <div className='position-header-3' >Position Title</div>
                <div className='left-header-3'>PROFILE</div>
                    <textarea value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam at non illo ipsum. Fuga iusto, maiores distinctio aut expedita consectetur? Amet laudantium fugiat in temporibus odit aliquam ipsa possimus!"/>
                    <div className='left-section-workexp-3'>WORK EXPERIENCE</div>
                <div>

                    <div className='job-header-3'>REACT DEVELOPER</div>
                    <div className='company-name-header1-3'>IONAUGHT TECHNOLOGIES|2016- Present</div>
                    {/* <textarea value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid blanditiis culpa ratione harum fugiat deleniti accusamus iure eius itaque"/> */}
                    <ul>
                    <li className="licolors-3"  >Implement effective company policies to ensure that all practices comply with labor and employment regulations</li>
                   <li className="licolors-3">Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</li>
                   </ul>
                </div> 
            </div>
            <div className="right-section-3">
          
                <img className='profilepic-3' src= {profilepic}/>
                
                <div className="contact-description-3">
                    <div className='contact-head-3'>CONTACT</div>
                     <div><img  src={Location}/>LONDON,UNITED KINGDOM</div>
                    <div><img  src={Phone}/> 123-456-789-00</div>
                    <div><img src={Gmail}/>raeezmohammed97@gmail.com</div>
                </div>
                <div className="skill-header-3">KEY SKILLS</div>
                <ul>
                    <li className='li-colors-3'>Communication</li>
                    <li className='li-colors-3'>Ability to Work</li>
                    <li className='li-colors-3'>Decision Making</li>
                    <li className='li-colors-3'>Time Mangement</li>
                    <li className='li-colors-3'>Conflict Resolution</li>
                    <li className='li-colors-3'>Leadership</li>
                </ul>
                <div className="education-header-3">Education</div>
                <div className="education-discription-3">
                          <div className="education-qualification-3"> Masters degree</div>
                          < div> University edication</div>
                          <div>2014</div><br/>
                          <div className="education-qualification-3"> Masters degree</div>
                          <div> University edication</div>
                          <div>2014</div>
                </div>




            
            </div>
        </div>
    )
}

export default SecondPage
