import {useState} from "react"
import produce from "immer"
import "./Geethu.css"
import TextField from "./Components/TextField"
import TextArea from "./Components/TextArea"


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
        }
        )
    }


    const{theme,name,designation,address,bio,experience,education,skills}=tempState;

    return (
        <div className="main-wrapper">
            <div className="body-wrapper">
                <div className="left-page-inner">
                    <div className="name1"><TextField value={name} onChange={value=>changeState(["name"],value)}
                       /><br/>  
                        <h2 className="job1">{designation}</h2>
                    </div>
                    <div className="address-section1">
                       <TextField className="address1"
                       value={address.street}
                       onChange={value=>changeState(["address","street"],value)}
                       /><br/>
                       <TextField className="city1"
                       value={address.city}
                       onChange={value=>changeState(["address","city"],value)}
                       /><br/>
                        <TextField className="phone"
                       value={address.phone}
                       onChange={value=>changeState(["address","phone"],value)}
                       /><br/>
                        <TextField type="text" value={address.email} onChange={value=>changeState(["address","email"],value)}/><br/>
                    </div>
                    <div className="bio-wrap1">
                        <TextArea  className="bio1"
                         value={bio}
                       onChange={value=>changeState(["bio"],value)}
                       /><br/>  
                    </div>
                    <div className="key-skills1">Key Skills</div>
                        <ul>
                           {skills.map((value,i)=><li className="licolor1" key={i}><TextField value={value} onChange={value=>changeState(["skills",i],value)}/></li>)}
                        </ul>     
                </div>
            <div className="right-page-inner">
                <div className="top-heading-1"><h2 className="experience1">Professional Experience</h2> 
                    {experience.map(({job,company,startingdate,endingdate,jobdetails},i)=>{ 
                        return(
                            <>
                            <div className="second-head-wrapper1">
                            <div className="second-head-1"><TextField value={job} onChange={value=>changeState(["experience",i,"job"],value)}/></div>
                            <div className="second-small-head-1"><TextField value={company} onChange={value=>changeState(["experience",i,"company"],value)} />| <TextField value={startingdate} onChange={value=>changeState(["experience",i,"startingdate"],value)}  />-<TextField value={endingdate}onChange={value=>changeState(["experience",i,"endingdate"],value)} />
                            </div>
                            </div>
                            <ul>
                                {jobdetails.map((value,j)=><li className="licolor1" key={j}> <TextArea value={value} onChange={value=>changeState(["experience",i,"jobdetails",j],value)} /></li>)}    
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
                                <TextField value={qualification}  onChange={value=>changeState(["education",i,"qualification"],value)}
                                /><br/>
                                <TextField value={college} onChange={value=>changeState(["education",i,"college"],value)}
                                /><br/>
                                </div>
                            <div className="second-small-head-1">
                                <TextField value={joiningdate} onChange={value=> changeState(["education",i,"joiningdate"],value)}/>| <TextField value={graduationdate} onChange={value=> changeState(["education",i,"graduationdate"],value)}/><br/>
                            </div>
                            </div> 
                            <ul>

                                <li className="licolor1"><TextField value={academicdetails} onChange={value=> changeState(["education",i,"academicdetails"],value)}/>
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
