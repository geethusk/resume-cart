import {useState} from "react"
import produce from "immer"


const Geethu = () => {
    const[tempState,tempSetState]=useState({
        theme:['#58585b'],
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
    const changeState=(keys,value)=>{
        tempSetState(
        (prev)=>{
            return produce(prev,(draft)=>{
                switch(keys.length){
                    case 1:
                        draft[keys[0]]=value;
                        break;
                    case 2:
                        draft[keys[1]][keys[0]]=value;
                        break;
                    case 3:
                        draft[keys[0]][keys[1]][keys[2]]=value;
                        break;
                    case 4:
                        draft[keys[0]][keys[1]][keys[2]][keys[3]]=value;
                    default:
                        break;
                }
            })
        }
        )
    }


    const{theme,name,designation,address,bio,experience,education,skills}=tempState;

    return (
        <div className="main-wrapper">
            <div className="body-wrapper">
                <div className="left-page-inner">
                    <div className="name1"><input type="text" value={name} onChange={(e)=>changeState(["name"],e.target.value)}
                       /><br/>  
                        <h2 className="job1">{designation}</h2>
                    </div>
                    <div className="address-section1">
                       <input type="text" className="address1"
                       value={address.street}
                       onChange={(e)=>changeState(["address","street"],e.target.value)}
                       /><br/>
                       <input type="text" className="city1"
                       value={address.city}
                       onChange={(e)=>changeState(["address","city"],e.target.value)}
                       /><br/>
                        <input type="text" className="phone"
                       value={address.phone}
                       onChange={(e)=>changeState(["address","phone"],e.target.value)}
                       /><br/>
                        <input type="text" value={address.email} onChange={(e)=>changeState(["address","email"],e.target.value)}/><br/>
                    </div>
                    <div className="bio-wrap1">
                        <textarea  className="bio1"
                         value={bio}
                       onChange={(e)=>changeState(["bio"],e.target.value)}
                       /><br/>  
                    </div>
                    <div className="key-skills1">Key Skills</div>
                        <ul>
                           {skills.map((value,i)=><li className="licolor1" key={i}><textarea value={value}onChange={(e)=>changeState(["skills"],e.target.value)}/></li>)}
                        </ul>     
                </div>
            <div className="right-page-inner">
                <div className="top-heading-1"><h2 className="experience1">Professional Experience</h2> 
                    {experience.map(({job,company,startingdate,endingdate,jobdetails},i)=>{ 
                        return(
                            <>
                            <div className="second-head-wrapper1">
                            <div className="second-head-1"><input type="text" value={job} onChange={(e)=>changeState(["experience",i,"job"],e.target.value)}/></div>
                            <div className="second-small-head-1"><input type="text" value={company} onChange={(e)=>changeState(["experience",i,"company"],e.target.value)} />| <input type="text" value={startingdate} onChange={(e)=>changeState(["experience",i,"startingdate"],e.target.value)}  />-<input type="text" value={endingdate}onChange={(e)=>changeState(["experience",i,"endingdate"],e.target.value)} />
                            </div>
                            </div>
                            <ul>
                                {jobdetails.map((value,i)=><li className="licolor1" key={i}> <textarea value={value} onChange={(e)=>changeState(["experience",i,"jobdetails",i],e.target.value)} /></li>)}    
                            </ul> </>
        
                        )
                    })}
                </div> 
                <div className="education-section">
                    <h2 className="education1">Education</h2>
                        {education.map(({qualification,college,joiningdate,graduationdate,academicdetails},i)=>{
                        return(
                        <>
                            <div className="second-head-wrapper-1">
                            <div className="second-head-1">
                                <input type="text" value={qualification}  onChange={(e)=>changeState(["education",i,"qualification"],e.target.value)}
                                /><br/>
                                <input type="text" value={college} onChange={(e)=>changeState(["education",i,"college"],e.target.value)}
                                /><br/>
                                </div>
                            <div className="second-small-head-1">
                                <input type="text" value={joiningdate} onChange={(e)=> changeState(["education",i,"joiningdate"],e.target.value)}/>| <input type="text"value={graduationdate} onChange={(e)=> changeState(["education",i,"graduationdate"],e.target.value)}/><br/>
                            </div>
                            </div> 
                            <ul>

                                <li className="licolor1"><input type="text" value={academicdetails} onChange={(e)=> changeState(["education",i,"academicdetails"],e.target.value)}/>
                            </li>
                
                            </ul> 
                        </>


                        ) })}
                </div>

            </div>

            </div>

            
        </div>
    )
}

export default Geethu
