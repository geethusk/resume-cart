import { useState } from 'react'
import './style.css'
const Faslu = () => {
    const [template,setTemplate] = useState({
        theme:" #58585b",
        logo:"CC",
        name:"Chris Candidate",
        designation:"Sales Associate",
        address:{street:"4759 Sunnydale Lane" ,city:"Plano, TX,",pin:"75071",email:"email@youremail.com",phone:"(469) 385-2948"},
        bio:"Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
        skill:["Detail oriented","Well-versed in Texas employment law","Excellent written and oral communication skills","Develops positive workplace relationships"],
        exp:[
            {
            startingDate:"January 2016",
            endingDate:"Present",
            companyName:"Jim's Widget Factory, Plano, TX",
            role:"Human Resources Manager",
            detailList:["Implement effective company policies to ensure that all practices comply with labor and employment regulations",
            "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
            "Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
            "Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"
            ]
        },
        {
            startingDate:"March 2015 ",
            endingDate:"January 2016",
            companyName:"Jim's Widget Factory, Plano, TX",
            role:"Human Resources Associate",
            detailList:["Implement effective company policies to ensure that all practices comply with labor and employment regulations",
            "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
            "Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
            "Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"
            ]
        }
    ],
        education:[{
            joiningDate:"September 2007",
            endingDate:"May 2011",
            course:"Bachelor of Arts in Business",
            collegeName:"The University of Texas at Dallas",
            awards:["Academic Awardee of AY 2007-2008"]
        }]
    });
    const{theme,logo,name,designation,address,bio,skill,exp,education}=template;
    const{street,city,pin,email,phone}=address;
    return (
        <div className="resume-page">
            <div className="left-section">
                <div className="header-part-section">
                <div className="logo-area">{logo}
                </div>
                <div className="resume-name">
                    {name}
                </div>
                <div className="resume-profession">
                    {designation}
                </div>
                <div className="header-part-address-section"> 
                    {street}<br/>
                    {city}{pin}<br/>
                    {email}<br/>
                    {phone}<br/>
                </div>
                </div>
                <div className="description-section">
                    {bio}
                </div>
                <div className="block-section">
                    <h3>Key Skills</h3>
                    <ul>
                        {skill.map((value,i)=><li key={i}>{value}</li>)}   
                    </ul>
                </div>
            </div>
            <div className="right-section">
                <div className="template-block">
                    <h3>Professional Experience</h3>
                    {exp.map(({startingDate,endingDate,companyName,role,detailList},i)=>{
                    return(
                        <div className="right-first-section">
                        <ul>
                        <li>{role}<br/>
                            {companyName}|{startingDate}-{endingDate}
                        <ul>
                            {detailList.map((value,i)=><li className ="list-section" key={i}>{value}</li>)}
                        </ul>
                        </li>
                        </ul>
                        </div>
                        )})}
                </div>
                <div className="template-block">
                    <h3>Education</h3>
                    {education.map(({joiningDate,endingDate,course,collegeName,awards},i)=>{
                        return(
                            <div className="two-side-section">
                                <div className="one-side">
                                    {joiningDate}<br/>
                                    {endingDate}
                                </div>
                                <div className="two-side">
                                    {course}<br/>
                                    {collegeName}<br/>
                                    {awards.map((value,i)=><div key={i}>{value}</div>)}
                                </div>
                            </div>

                        )}
                        
                    )}    
                </div>
            </div>
        </div>
    )
}

export default Faslu
