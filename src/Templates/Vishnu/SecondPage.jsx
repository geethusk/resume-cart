import React from 'react'
import FileUpload from './FileUpload'
import profilepic from "./images/s.webp"
import "./Second.css"


const SecondPage = () => {
    return (
        <div className='main-container-51'>
            <div className="left-section-51">
                <div className="basic-info51">
                    <FileUpload profilepic={profilepic}/>
                    <div className="basic-profile">
                        <div className='intro'>
                            H E L LO I 'M                          
                        </div>
                        <div>
                            <input type="text" className="first-name"
                               value="Jacqueline"/>
                        </div>
                        <div>
                            <input type="text" className="second-name"
                              value="Thompson"/>
                        </div>
                        <div>
                           <input type="text" className="designation"
                                value=" WEB D E V E LOPERS"/>
                        </div>
                    </div>
                </div>
                <div className="second-section-51">
                    <div className="my-profile">
                        <div className="profile-heading">
                            MY PROFILE
                        </div>
                        <div >
                        <textarea className="description"
                         value="Senior Web Developer specializing in front
                        end development, Experienced with all
                        stages of the development. Well-versed in
                        numerous programming languages
                        including HTML, PHP, Javascript" />
                        </div>
                    </div>
                    <div className="award-area">
                        <div className="award-heading">
                          MY AWARDS
                        </div>
                        <div className="awards">
                            <ul>
                                <li>Best Php Framework Developer, 2015</li>
                                <li>Best UI/UX Concept, 2017</li>
                                <li>Champions of Web Developer in the Future, 2018</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section-52">
                <div className="contact-section">
                    <div className="email" >
                        <input type="text" value="hello@reallygreatsite.com" id='contact'/>

                    </div>
                    <div className='number' >
                        <input type="text" value="9061352517" id='contact'/>
                    </div>
                    <div className="place" >
                        <input type="type" value="washington DC" id='contact'/>
                    </div>
                </div>
                <div className="experience-section">
                    <div className="experience-heading">
                       EXPERIENCES
                    </div>
                    <div className="experience-details">
                        <div className="duration">
                            <input type="text" value="2019"/>-
                            <input type="text" value="present"/>
                        </div>
                        <div >
                            <input type="text" className='role' value="WEB DEVELOPER"/>
                        </div>
                        <div className='company'>
                            <input type="text" value="Salford Unlimited"/>
                        </div>
                        <div className="role-details">
                            <ul>
                                <li>Corporate with designer to create clean
                                    interface and simple website</li>
                                <li>Corporate with designer to create clean
                                    interface and simple website</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-details">
                        <div className="duration">
                            <input type="text" value="2017"/>-
                            <input type="text" value="2019"/>
                        </div>
                        <div >
                            <input type="text" className='role' value=" DEVELOPER"/>
                        </div>
                        <div className='company'>
                            <input type="text" value="TCS AmsterDam"/>
                        </div>
                        <div className="role-details">
                            <ul>
                                <li>Corporate with designer to create clean
                                    interface and simple website</li>
                                <li>Corporate with designer to create clean
                                    interface and simple website</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="education-section">
                    <div className="education-heading">
                        EDUCATION
                    </div>
                    <div className="education-details">
                        <div className="duration">
                            <input type="text" value="2017"/>-
                            <input type="text" value="2019"/>
                        </div>
                        <div >
                            <input type="text" className='degree' value="BACHELOR OF INFORMATION SYSTEM "/>
                        </div>
                        <div className='college'>
                            <input type="text" value="University Of Hanover"/>
                        </div>
                        <div className="specialization-details">
                            <ul>
                                <li>Speciality applied computer science</li>
                                <li>Specialization information analyst</li>
                                <li>Qualification computer science</li>
                            </ul>
                        </div>
                    </div>
                    <div className="education-details">
                        <div className="duration">
                            <input type="text" value="2017"/>-
                            <input type="text" value="2019"/>
                        </div>
                        <div >
                            <input type="text" className='degree' value="BACHELOR OF INFORMATION SYSTEM "/>
                        </div>
                        <div className='college'>
                            <input type="text" value="University Of Hanover"/>
                        </div>
                        <div className="specialization-details">
                            <ul>
                                <li>Speciality applied computer science</li>
                                <li>Specialization information analyst</li>
                                <li>Qualification computer science</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SecondPage
