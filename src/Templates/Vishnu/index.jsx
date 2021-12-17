import { useState } from "react"
import "./vishnu.css"
const Vishnu = () => {
    const[templateState,settemplateState] = useState({
        theme:["#5e8e66"],
        name: "VISHNU R NAIR",
        designation: "Full_Stack developer",
        address:{
            street:" 4759 Sunnydale Lane",
            city:"Plano, TX",
            pincode:"671314",
            email:"email@youremail.com",
            phone:"(469) 385-2948"

        },
        bio:" Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
        education:[{
            qualification:"Bachelor of Arts in Business",
            college:"College of engineering Trikarippur",
            graduationyear:"May 2011"
        }],        
        skills:["Detail oriented",
                "Well-versed in Texas employment law",
                "Excellent written and oral",
                "Develops positive workplace relationships"
            ],
        professionalexp:[{
            startingDate: "January 2016",
            endingDate:"present",
            role:"Human Resources Manager",
            companyName:"Jim's Widget Factory, Plano, TX",
            roleDetails:["Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                         "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
                         "Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
                        "Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"
                        ]
        }]
    })


    const{theme,name,designation,address,bio,education,skills,professionalexp}=templateState;
    const{street,city,pincode,email,phone} = address;
    

    const onChange = (action)=>{
        switch(action.type){
            case "baseValue":
                return settemplateState(prev=>({
                    ...prev,
                    [action.key] : action.value
                }))
        }
    }
    


    return (
        <div className="body-container5">
            <header>
                <div className="name-section">
                    <input 
                        className="name" 
                        value={name} 
                        text="text"
                        onChange={(e)=>{
                            onChange({
                                type: "baseValue",
                                key: "name",
                                value: e.target.value
                            })
                        }}
                        />
                    <input 
                        className="designation"
                        value={designation}
                        type="text"
                        onChange={(e)=>settemplateState(prev=>({
                            ...prev,
                            designation: e.target.value
                        }))}
                    />
                </div>
                <div className="address-section">
                        {street}<br/>
                        {city},{" "}{pincode}<br/>
                        {email}<br/>
                        {phone}
                </div>
            </header>
            <div className="about">
                {bio}
            </div>
            <div className="more-about">
                <div className="left-section">
                    <div className="education">
                            <h3 className="edu">Education</h3>
                            {education.map(({qualification,college,graduationyear},i)=>{
                                return(
                                    <>
                                    <div className="edu-college">{qualification}</div>
                                    <p className="coll-description">{college}{" "} |<br/>
                                    {graduationyear}</p>
                                    </>
                                )
                                }
                            )
                            }
                    </div>
                    <div className="skill-section">
                        <h3 className="skill">Key Skills</h3>
                        <ul className="list-orient">
                            {skills.map((val,i)=><li key={i}>{val}</li>)}
                        </ul>
                    </div>
                </div>
                <div className="right-section">
                    <h3>Professional Experience</h3>
                    {professionalexp.map(({startingDate,endingDate,role,companyName,roleDetails},i)=>{
                        return(
                            <>
                            <div className="right-side-section">
                        <div className="time-period">
                          {startingDate} -<br/> {endingDate}
                        </div>
                        <div className="exp-brief">
                            <h3>{role}<br/>
                            <i>{companyName}</i>
                            </h3>
                            <ul className="exp-list">
                                {roleDetails.map((val,i)=><li key={i}>{val}</li>)}                               
                            </ul>
                        </div>
                    </div>
                    
                            
                            </>
                        )
                    })}
                    <div className="right-side-section">
                        <div className="time-period">
                            March 2015 - <br/>January 2016
                        </div>
                        <div className="exp-brief">
                            <h3>Human Resources Manager<br/>
                            <i>Jim's Widget Factory, Plano, TX</i>
                            </h3>
                            <ul className="exp-list">
                                <li>Implement effective company policies to ensure that all practices comply with labor and employment regulations</li>
                                <li>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</li>
                                <li>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Vishnu
