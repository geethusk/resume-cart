import React, { useState } from 'react'
import './second_page.css'
import profilePic from './images/photo.jpg'
import gmail from "./icons/envelope-solid.svg"
import mobileImage from "./icons/mobile-alt-solid.svg"
import location from "./icons/map-marker-alt-solid.svg"
import linkedin from "./icons/linkedin-in-brands.svg"
import skype from "./icons/skype-brands.svg"
import produce from 'immer'
import FileUpload from './Components/FileUpload'
import TextField from './Components/TextField'
import TextArea from "./Components/TextArea"
import { useStoreState} from 'easy-peasy';


const SecondPage = () => {
    const [template,setTemplate]=useState({
        name:"John Doe",
        designation:"Business Development Manager",
        bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aspernatur minus praesentium repellat! Tenetur dolor iusto, eos consectetur dolorem libero molestiae velit optio quibusdam adipisci explicabo ipsum odit omnis fuga!",
        profileImage:profilePic,
        address:{phone:"202-555-0166",place:"New York,USA",linkedinId:"linkedin.com/in/john.doe",skypeId:"john.doe"},
        exp:[
            {
                role:"Business Development Manager",
                companyName:"AirState Solutions",
                startingDate:"January 2016",
                endingDate:"Present",
                detailList:[
                    {id:1,
                     value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                    },
                    {id:2,
                        value:"Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
                    },
                    {id:3,
                        value:"Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
                    },
                ]
            },
            {   
            role:"Business Development Assistant",
            companyName:"AirState Solutions",
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
            ]
            },
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
            },
            {id:5,
            value:"Email Marketing"
            }
        ],
    });
    const{name,designation,bio, profileImage,address,exp, skill}=template;
    const{phone,place,linkedinId,skypeId}=address;
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
    const userData = useStoreState((state) => state.userData);
    return (
        <div className="second_page_container">
            <div className="header-section2">
                <div className="header-left-sec2">
                    <div className="name2">
                        <TextField
                            value={userData.fullname}
                            onChange={value=>changeState(["name"],value)}    
                        />
                    </div>
                    <div className="profession2">
                        <TextField
                            value={designation}
                            onChange={value=>changeState(["designation"],value)}    
                        />
                    </div>
                    <p>
                        <TextArea 
                            value={bio}
                            onChange={value=>changeState(["bio"],value)}  
                        />
                    </p>
                </div>
                <FileUpload
                    image={userData.profilePic} 
                    onChange={value=>changeState (["profileImage"],value)}
                />
            </div>
            <div className="nav-section2">
                <div><img src={gmail}/>
                <TextField 
                    value={userData.email}
                /></div>
                <div><img src={mobileImage}/>
                <TextField 
                    value={phone}
                    onChange={value=>changeState(["address","phone"],value)}
                /></div>
                <div><img src={location}/>
                <TextField 
                    value={place}
                    onChange={value=>changeState(["address","place"],value)}
                />
                </div>
                <div><img src={linkedin}/>
                <TextField 
                    value={linkedinId}
                    onChange={value=>changeState(["address","linkedinId"],value)}
                /></div>
                <div><img src={skype}/>
                <TextField 
                    value={skypeId}
                    onChange={value=>changeState(["address","skypeId"],value)}
                /></div>
            </div>
            <div className="content-section2">
                <div className="left-section-sec-2">
                    <div className="heading-section-2">
                        <h4>WORK EXPERIENCE</h4>
                    </div>
                    {exp.map(({startingDate,endingDate,companyName,role,detailList},i)=>{
                        return(
                            <div>
                                <div className="sub-section-2">

                                    <TextField
                                        className="role-section"
                                        value={role}
                                        onChange={(value)=>changeState(["exp",i,"role"],value)}
                                        
                                    />
                                    <div className="sub-heading-section">
                                        <TextField
                                            value={companyName}
                                            onChange={(value)=>changeState(["exp",i,"companyName"],value)}
                                        />
                                    </div>
                                    <i>
                                        <TextField
                                            value={startingDate}
                                            onChange={(value)=>changeState(["exp",i,"startingDate"],value)}
                                        />
                                    </i>
                                    -<i>
                                        <TextField
                                            value={endingDate}
                                            onChange={(value)=>changeState(["exp",i,"startingDate"],value)}
                                        />
                                    </i>
                                    <ul>
                                    {detailList.map(({value},j)=><li key={j}>
                                        <TextArea
                                            value={value}
                                            onChange={(value)=>changeState(["exp",i,"detailList",j,"value"],value)}
                                        />
                                    </li> 
                                    )}
                                </ul>
                                </div>
                            </div>
                    )})}
                    <div className="heading-section-2">
                        <h4>EDUCATION</h4>
                    </div>
                    <div className="sub-section-2">
                        <h4>MSc in Economics and Business <br/>Administration</h4>
                        <div className="sub-heading-section">
                            The University of Chicago
                        </div>
                        {/* <i>{startingDate}-{endingDate}</i> */}
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
                        <div className="skill-section-2"><div className="skill-main-section">
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
                        <div className="skill-main-section">
                        <div className="skill-heading">Email Marketing</div>
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


                        </div>
                    <div className="heading-section-2">
                        <h4>ORGANIZATIONS</h4>
                    </div>
                    <div className="sub-section-2">
                            <div className='sub-sec-2'>American Management Association<br/>
                                 (2015-Present)
                            </div>
                            <div className='sub-sec-2'>Association of Private Enterprise Education<br/>
                                 (2014-Present)
                            </div>
                            <div className='sub-sec-2'>eBusiness Association(eBA)(2013-Present)</div>   
                    </div>
                    <div className="heading-section-2">
                        <h4>HONOURS AND AWARDS</h4>
                    </div>
                    <div className="sub-section-2">
                        <div className='sub-sec-2'>Jury Member Venture Cup Entrepreneurship<br/>
                        Competition(2016)</div>
                        <div className='sub-sec-2'>Sales Individual & Business Development Award(2015)</div>
                        <div className='sub-sec-2'>Excellence in Customer Partnering Award</div>
                    </div>

                </div>
        
            </div>
        </div>
    )
}

export default SecondPage
 