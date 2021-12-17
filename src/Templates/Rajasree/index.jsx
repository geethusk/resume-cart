import { useState } from "react"
import "./raju.css"
const Rajasree = () => {
    const[state,setState]=useState({
        theme:['#de8535'],
        logo:"CC",
        name:"Chris Candidate",
        designation:"Sales Associate",
        address:{street:"4759 Sunnydale Lane",
        city:" Plano, TX, 75071",
        email:"email@youremail.com",
        phone:"(469) 385-2948"},
        bio:`Human resources generalist with 8 years of experience in HR,
        including hiring and terminating, 
        disciplining employees and helping department managers improve employee performance. 
        Worked with labor unions to negotiate compensation packages for workers.
       Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards.
        Worked with OSHA to ensure that all safety regulations are followed.`,
        experience:[
            {
                job:"Human Resources Manager",
                company:"Jim's Widget Factory, Plano, TX",
                startingdate:"January 2016",
                endingdate:"Present",
                jobdetails:[
                    "Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                    "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
                    "Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
                    "Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"]  
            },
            {
                job:"Human Resources Associate",
                company:"Jim's Widget Factory, Plano, TX",
                startingdate:"March 2015 ",
                endingdate:"January 2016 ",
                jobdetails:[
                    "Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                    "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
                    "Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
                    ]  
            }
            
        ],
        education:[
            {
                qualification:"Bachelor of Arts in Business",
                college:"The University of Texas at Dallas ",
                joiningdate:"September 2007",
                graduationdate:"May 2011",
                academicdetails:[
                    "Academic Awardee of AY 2007-2008"]  
            }],
        skills:[
                
                    "Detail oriented",
                   " Well-versed in Texas employment law",
                    "Excellent written and oral communication skills",
                    "Develops positive workplace relationships"
                        ] 

    })
    const{theme,logo,name,designation,address,bio,experience,education,skills}=state;
    return (
        <div className="main_body4">
            <div className="header_section4">
                <div className="logo4">{logo}</div>
                <div className="name4">{name}
                    <h2 className="job4">{designation}</h2>
                </div>
            <div className="headerdescription4">
                {address.street}<br/>
                {address.city}<br/>
                {address.email}<br/>
                {address.phone}<br/>
           </div>
            </div>
            <div className="body_description4">
                <div className="firstdes4">
           {bio}
            </div>
            <div className="firsthead4">Professional Experience</div>
            {experience.map(({job,company,startingdate,endingdate,jobdetails},i)=>{
                return(
                    <>
                    <div className="secondheadwrapper4">
            <div className="secondhead4">{job}</div>
            <div className="secondsmallhead4">{company} | {startingdate} - {endingdate}
            </div></div>
            <ul>
            {jobdetails.map((value,i)=><li className="licolor" key={i}>{value}</li>)}
            
                
                
            </ul> </>

                )
            })}
             <div className="firsthead4">Education</div>
                {education.map(({qualification,joiningdate,graduationdate,academicdetails},i)=>{
                    return(
                        <>
            <div className="secondheadwrapper4">
                <div className="secondhead4">{qualification}</div>
                <div className="secondsmallhead4">{joiningdate} | {graduationdate}
               </div></div> 
                <ul>
                <li className="licolor">{academicdetails}</li>
               
            </ul> 
            </>


                 ) })}
            <div className="firsthead4">Key Skills</div>
            <ul>
            {skills.map((value,i)=><li className="licolor" key={i}>{value}</li>)}
                
            </ul> 
            
            </div>
            
            
        </div>
    )
}

export default Rajasree
