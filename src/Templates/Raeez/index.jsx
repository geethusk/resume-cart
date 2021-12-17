import "./raeez.css"
import { useState } from "react"
const Raeez = () => {
    const[template,setTemplate]=useState({
        theme:['#17a9e4','red'],
        logo:"CC",
        name:"Raeez Canditate",
        designation:"Full Stack developer",
        address:{street:"4759 Sunnydale Lane",  pincode:"Plano ,TX 75071",gmail:"email@youremail.com",phonenumber:"(469) 385-2948"},
        bio:"Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed..",
        profexp:[
            {
            startingdate:"january 2016",
            endingdate:"present",
            companyName:"Jim's Widget Factory, Plano, TX",
            jobdesignation:"Human Resources Manager",
        
        
            detailsList:["Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
               "Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
                "Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"]

        },
        {
            startingdate:"january 2016",
            endingdate:"March 2016",
            companyName:"Jim's Widget Factory, Plano, TX",
            jobdesignation:"Human Resources Associate",
        
        
            detailsList:["Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
               "Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
                "Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"]

        }
    ],
        Education:[{
            collegeName:"The University of Texas at Dalla",
            graduationyear:"September 2007",
           
            course:"Bachelor of Arts in Business",
            academicawards:["Academic Awardee of AY 2007-2008"]
        }],
        skills:["Detail oriented",
            "Well-versed in Texas employment law",
            "Excellent written and oral communication skill",
            "Develops positive workplace relationships"
        ]
    })

    const{theme,logo,name,designation,address,bio,profexp,Education,skills}=template;
    const{street,pincode,gmail,phonenumber}=address;
    return (
        <div className="main-body3">
            <div className="header-section-3">
                <div className="logo-3">{logo}</div>
                <div className=" name-3" >{name}
                 <h2 className="job-3">{designation}</h2></div>
                 <div className="headerdiscription-3">
                  {street}<br/>
                   {pincode}<br/>
                   {gmail}<br/>
                   {phonenumber}<br/>
                </div>
            </div>
            <div className="body-container-3">
               <div className="body-des-3">{bio}</div>
               <div className="firsthead-3">Professional Experience</div>
               {profexp.map(({startingdate,endingdate,companyName,jobdesignation,detailsList},i)=>{
                   return(
                       <>
              
               <div className="second-head-wrapper-3">
               <div className="secondhead-3">{jobdesignation}</div>
                  <div className="secondheaddis-3">{companyName} | {startingdate} - {endingdate}</div>
               
               </div>
                
               <ul>
               {detailsList.map((val,i)=><li className="licolor-3" key={i}>{val}</li>)}
                   
               </ul>
               </>
                )}
                   )}
               {/* <div className="second-head-wrapper-3">
               <div className="secondhead-3">Human Resources Associate</div>
                  <div className="secondheaddis-3">Jim's Widget Factory, Plano, TX |  | March 2015 - January 2016</div>
               
               </div>
               <ul>
                  
                   <li className="licolor-3"  >Implement effective company policies to ensure that all practices comply with labor and employment regulations</li>
                   <li className="licolor-3">Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</li>
                   <li  className="licolor-3">Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies</li>
                   <li  className="licolor-3">Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met</li>
                  
               </ul> */}
                   
               <div className="firsthead-3">Education</div>
              
            {Education.map(({ collegeName,graduationyear,course,academicawards},i)=>{
                     return(
                         <>
                <div className="second-head-wrapper-3">
                  <div className="secondhead-3">{course}</div>
                  <div className="secondheaddis-3">{collegeName} | {graduationyear}</div>
               
                </div>
               <ul>
                   <li className="licolor-3">{ academicawards}</li>
               </ul>
               </>
            )}
            )}
               
               <div className="firsthead-3">Key Skills</div>
               <ul>
                   {skills.map((val,i)=><li className="licolor-3" key={i}>{val}</li>)}
               </ul>


               
            </div>
        </div>
    )
}

export default Raeez
