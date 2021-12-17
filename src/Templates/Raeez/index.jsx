import "./raeez.css"
import { useState } from "react"
import  produce from "immer"
const Raeez = () => {
    const[template,setTemplate]=useState({
        theme:['#17a9e4','red'],
        logo:"CC",
        name:"Raeez Mohammed",
        designation:"Full Stack developer",
        address:{street:"4759 Sunnydale Lane",city:"Plano ,TX ",  pincode:"75071",gmail:"email@youremail.com",phonenumber:"(469) 385-2948"},
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

    const changeState=(keys,value)=>{
        setTemplate(
            (prev)=> produce(prev,(draft)=>{
                    switch(keys.length){
                        case 1:
                            draft[keys[0]]=value;
                            break;
                        case 2:
                            draft[keys[0]][keys[1]]=value;
                            break;
                        case 3:
                            draft[keys[0]][keys[1]][keys[2]]=value;
                            break;
                        case 4:
                            draft[keys[0]][keys[1]][keys[2]][keys[3]]=value;   
                            break;

                        default:
                             break;  
                    }          
                    
                })
        )
    }

    const{theme,logo,name,designation,address,bio,profexp,Education,skills}=template;
    const{street,pincode,gmail,phonenumber,city}=address;
    return (
        <div className="main-body3">
            <div className="header-section-3">
                <div className="logo-3">{logo}</div>
                <div className=" name-3" >
                    <input type="text"
                    value={name}
                    className=" name-3"
                    onChange={(e)=>changeState(["name"],e.target.value)}/>
                  <h2 className="job-3"><input type="text" className="job-3" value={designation}
                   onChange={(e)=>changeState(["designation"],e.target.value)}/>
                  </h2></div>
                 <div className="headerdiscription-3">
                  <input type="text"
                  value= {street}
                  className="headerdiscription-3"
                  onChange={(e)=>changeState(["address","street"],e.target.value)}
                  /><br/>
                   <input type ="text"
                   value={city}
                   className="headerdiscription-3"
                   onChange={(e)=>changeState(["address","city"],e.target.value)}/>
                   <input type="text"
                   value={pincode}
                   onChange={(e)=>changeState(["address","pincode"],e.target.value)}
                   /><br/>
                   <input type="text"
                   value={gmail}
                   className="headerdiscription-3"
                   onChange={(e)=>changeState(["address","gmail"],e.target.value)}/>
                   <br/>
                   <input type ="text"
                    value={phonenumber}
                    className="headerdiscription-3"
                    onChange={(e)=>changeState(["address","phonenumber"],e.target.value)}/><br/>
                </div>
            </div>
            <div className="body-container-3">
               <div className="body-des-3">
                   <textarea  value={bio}  onChange={(e)=>changeState(["bio"],e.target.value)}/> 
                   </div>
               <div className="firsthead-3">Professional Experience</div>
               {profexp.map(({startingdate,endingdate,companyName,jobdesignation,detailsList},i)=>{
                   return(
                       <>
              
               <div className="second-head-wrapper-3">
               <div className="secondhead-3">
                   <input type="text"
                    className="secondhead-3"
                   value={jobdesignation}
                   onChange={(e)=>changeState(["profexp",i,"jobdesignation"],e.target.value)}/>
                </div>
                  <div className="secondheaddis-3">
                      <input type="text" value={companyName}
                      
                      onChange={(e)=>changeState(["profexp",i,"companyName"],e.target.value)}/>
                       |
                       <input type="text" value={startingdate}
                       onChange={(e)=>changeState(["profexp",i,"startingdate"],e.target.value)}/>
                       - 
                       <input type="text"
                       value={endingdate}
                       onChange={(e)=>changeState(["profexp",i,"endingdate"],e.target.value)}/>
                       </div>
               
               </div>
                
               <ul>
               {detailsList.map((val,j)=><li className="licolor-3" key={j}>
                   <textarea 
                   value={val}
                   onChange={(e)=>changeState(["profexp",i,"detailsList",j],e.target.value)}/>
                   </li>)}
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
                  <div className="secondhead-3">
                      <input type="text" value={course}  className="secondhead-3"
                      onChange={(e)=>changeState(["Education",i,"course"],e.target.value)}/>
                      </div>
                  <div className="secondheaddis-3"><input type="text" value={collegeName} 
                  onChange={(e)=>changeState(["Education",i,"collegeName"],e.target.value)}/>
                  | <input type="text" value={graduationyear}  
                  onChange={(e)=>changeState(["Education",i,"graduationyear"],e.target.value)}/>
                  </div>
               
                </div>
               <ul>
                  {academicawards.map((val,j)=><li className="licolor-3" key={j}>
                      <textarea
                      value={val}
                      onChange={(e)=>changeState(["Education",i,"academicawards",j],e.target.value)}/>
                    </li>)}
               </ul>
               </>
            )}
            )}
               
               <div className="firsthead-3">Key Skills</div>
               <ul>
                   {skills.map((val,i)=><li className="licolor-3" key={i}>
                   <textarea value={val}  
                   onChange={(e)=>changeState(["skills",i],e.target.value)}/></li>)}
                  
               </ul>


               
            </div>
        </div>
    )
}

export default Raeez
