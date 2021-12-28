import React from 'react'
import './second_page.css'
import profilePic from './images/photo.jpg'
import gmail from "./icons/envelope-solid.svg"
import mobileImage from "./icons/mobile-alt-solid.svg"
import location from "./icons/map-marker-alt-solid.svg"
import linkedin from "./icons/linkedin-in-brands.svg"
import skype from "./icons/skype-brands.svg"
const SecondPage = () => {
    const [template,setTemplate]=useState({
        name:"John Doe",
        designation:"Business Development Manager",
        bio:"Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
        profileImage:ProfilePic,
        exp:[
            {
            role:"Human Resources Manager",
            companyName:"Jim's Widget Factory, Plano, TX",
            startingDate:"January 2016",
            endingDate:"Present",
            detailList:[
                {id:1,
                 value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                },
                {id:2,
                value: "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
                },
                {id:3,
                value:"Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
                },
                {id:4,
                value:"Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"
                }
            ]
        },
        {   
            role:"Human Resources Associate",
            companyName:"Jim's Widget Factory, Plano, TX",
            startingDate:"March 2015 ",
            endingDate:"January 2016",
            detailList:[
                {id:1,
                 value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                },
                {id:2,
                value: "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
                },
                {id:3,
                value:"Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
                },
                {id:4,
                value:"Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"
                }
            ]
        }
        ],
        skill:[
            {id:1,
             value:"SEO"
            },
            {id:2,
            value:"Public Speaking"
            },
            {id:3,
            value:"TeamWork"
            },
            {id:4,
             value:"Decision Making"
            }
        ],
    });
    const{name,designation,bio, profileImage,exp,skill}=template;
    const changeState =(keys,value) =>{
        setTemplate(
            (prev)=>produce(prev,(draft)=>{
                switch (keys.length){
                    case 1:
                        draft[keys[0]] = value;
                        break;
                    case 2:
                        draft[keys[0]][keys[1]] = value;
                        break;
                    case 3:
                        draft[keys[0]][keys[1]][keys[2]] = value;
                        break;
                    case 4:
                        draft[keys[0]][keys[1]][keys[2]][keys[3]] = value;
                        break;
                    case 5:
                        draft[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]] = value;
                        break;
                    default:
                        break;
                }
            })
        )
    }
    return (
        <div className="second_page_container">
            <div className="header-section2">
                <div className="header-left-sec2">
                    <h1>John Doe</h1>
                    <div className="profession2">Business Development Manager</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur minus praesentium repellat! Tenetur dolor iusto, eos consectetur dolorem libero molestiae velit optio quibusdam adipisci explicabo ipsum odit omnis fuga!</p>
                </div>
                <div className="header-right-sec2">
                    <img src={profilePic}/>
                </div>  
            </div>
            <div className="nav-section2">
                <div><img src={gmail}/>john.doe@gmail.com</div>
                <div><img src={mobileImage}/>202-555-0166</div>
                <div><img src={location}/>New York,USA</div>
                <div><img src={linkedin}/>linkedin.com/in/john.doe</div>
                <div><img src={skype}/>john.doe</div>
            </div>
            <div className="content-section2">
                <div className="left-section-sec-2">
                    <div className="heading-section-2">
                        <h4>WORK EXPERIENCE</h4>
                    </div>
                        <div className="sub-section-2">
                        <h4>Business Development Manager</h4>
                        <div className="sub-heading-section">
                            AirState Solutions
                        </div>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sapiente cupiditate doloremque quisquam blanditiis, illo consectetur architecto! Corrupti, impedit reprehenderit. Quas sit saepe animi facilis recusandae magnam eum cum officia.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sapiente cupiditate doloremque quisquam blanditiis, illo consectetur architecto! Corrupti, impedit reprehenderit. Quas sit saepe animi facilis recusandae magnam eum cum officia.
                            </li>
                        </ul>
                        </div>
                        <div className="sub-section-2">
                        <h4>Business Development Assistant</h4>
                        <div className="sub-heading-section">
                            AirState Solutions
                        </div>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sapiente cupiditate doloremque quisquam blanditiis, illo consectetur architecto! Corrupti, impedit reprehenderit. Quas sit saepe animi facilis recusandae magnam eum cum officia.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sapiente cupiditate doloremque quisquam blanditiis, illo consectetur architecto! Corrupti, impedit reprehenderit. Quas sit saepe animi facilis recusandae magnam eum cum officia.
                            </li>
                        </ul>
                        </div>
                    <div className="heading-section-2">
                        <h4>EDUCATION</h4>
                    </div>
                        <div className="sub-section-2">
                        <h4>MSc in Economics and Business <br/>Administration</h4>
                        <div className="sub-heading-section">
                            The University of Chicago
                        </div>
                        </div>  
                    <div className="heading-section-2">
                        <h4>LANGUAGES</h4>
                    </div>
                    <div className="language-main-section">
                        <div>
                            <div className="language-section">
                                <div className="language-sub-section"></div>
                            </div>
                            <div>English</div>
                        </div>
                        <div className="div">
                            <div className="language-section">
                                <div className="language-sub-section"></div>
                            </div>
                            <div>Spanish</div>
                        </div>
                        <div className="div">
                            <div className="language-section">
                                <div className="language-sub-section"></div>
                            </div>
                            <div className>French</div>
                        </div>     
                    </div>
                </div>
                <div className="right-section-2">
                    <div className="heading-section-2">
                        <h4>SKILLS</h4>
                    </div> 
                    <div className="skill-main-section">
                        <div className="skill-heading">SEO</div>
                        <div className="skill-option-section">

                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div>   
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        </div>
                    </div>
                    <div className="skill-main-section">
                        <div className="skill-heading">Public Speaking</div>
                        <div className="skill-option-section">
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div>   
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 

                        </div>  
                    </div>
                    <div className="skill-main-section">
                        <div className="skill-heading">Team Work</div>
                        <div className="skill-option-section">
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div>   
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 

                        </div>  
                    </div>
                    <div className="skill-main-section">
                        <div className="skill-heading">Decision Making</div>
                        <div className="skill-option-section">
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div>   
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 
                        <div className="skill-section2">
                            <div className="skill-sub-section">
                            </div>
                        </div> 

                        </div>  
                    </div>
                    <div className="heading-section-2">
                        <h4>ORGANIZATIONS</h4>
                    </div>
                        <div className="sub-section-2">
                            <div>American Management Association<br/>
                                 (2015-Present)
                            </div>
                            <div>Association of Private Enterprise Education<br/>
                                 (2014-Present)
                            </div>
                            <div>eBusiness Association(eBA)(2013-Present)</div>   
                        </div>
                    <div className="heading-section-2">
                        <h4>HONOURS AND AWARDS</h4>
                    </div>
                    <div className="sub-section-2">
                        <div>Jury Member Venture Cup Entrepreneurship<br/>
                        Competition(2016)</div>
                        <div>Sales Individual & Business Development Award(2015)</div>
                        <div>Excellence in Customer Partnering Award</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SecondPage
 