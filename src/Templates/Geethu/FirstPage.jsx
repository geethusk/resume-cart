import {useEffect, useState} from "react"
import produce from "immer"
import "./Geethu.css"
import TextField from "./Components/TextField"
import TextArea from "./Components/TextArea"
import { useStoreState} from 'easy-peasy';


const FirstPage = () => {
    const colorThemeList=[
        "blue",
        "turquoise",
        "violet",
        "brown",
        "green"
    ]
    
 

    const[tempState,tempSetState]=useState({
        theme:['#58585b','black'],
        name:"Chris Candidate",
        designation:"Sales Associate",
        address:{street:"4759 Sunnydale Lane",
        city:" Plano, TX, 75071",
        email:"email@youremail.com",
        phone:"(469) 385-2948"},
        bio:"Human resources generalist with 8 years of experience in HR,including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers.Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards.Worked with OSHA to ensure that all safety regulations are followed.",
        experience:[
            {
                job:"Human Resources Manager",
                company:"Jim's Widget Factory, Plano, TX",
                startingdate:"January 2016",
                endingdate:"Present",
                jobdetails:[
                    {id: 1,
                     value: "Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                    },
                    {id: 2,
                     value:"Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
                     },
                     {id:3,
                      value: "Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
                     },
                    {id:4,
                     value:"Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met",
                    }
                 ]  
                 },
            {
                job:"Human Resources Associate",
                company:"Jim's Widget Factory, Plano, TX",
                startingdate:"March 2015 ",
                endingdate:"January 2016 ",
                jobdetails:[
                   {id: 1,
                    value: "Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                   },
                   {id: 2,
                    value:"Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment",
                    },
                    {id:3,
                     value: "Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies",
                    },
                    {id:4,
                        value:"Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met",
                    }
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
                    {
                        id:1,
                        value:"Academic Awardee of AY 2007-2008", 
                    }
                ]
                    
            }],
        skills:[
                {
                    id:1,
                    value:"Detail oriented",
                },
                {
                    id:2,
                    value:" Well-versed in Texas employment law",
                },
                {
                    id:3,
                    value:"Excellent written and oral communication skills",
                },
                {
                    id:4,
                    value: "Develops positive workplace relationships",
                }
         ] 

    })
    const userData = useStoreState((state) => state.userData);
    useEffect(()=>{
        userData.fullname && tempSetState(prev=>{
            return{
                ...prev,
                name:userData.fullname,
            }
        })

    },[userData.fullname])
       
    const addToList=(keys,i,value)=>{
        tempSetState(
            (prev)=>produce(prev,(draft)=>{
                switch(keys.length){
                    case 1:
                        draft[keys[0]].splice(i,0,value);
                        break;
                    case 2:
                        draft[keys[0]][keys[1]].splice(i,0,value);
                        break;
                    case 3:
                        draft[keys[0]][keys[1]][keys[2]].splice(i,0,value);
                        break;
                    case 4:
                        draft[keys[0]][keys[1]][keys[2]][keys[3]].splice(i,0,value);
                        break;
                    default:
                        break;
                }
            })
        )
    }

    const deleteList=(keys,i,value)=>{
        if(i===0)return
        tempSetState(
            (prev)=>produce(prev,(draft)=>{
                switch(keys.length){
                    case 1:
                        draft[keys[0]].splice(i,1);
                        draft[keys[0]][i-1].value+=value;
                        break;
                    case 2:
                        draft[keys[0]][keys[1]].splice(i,1);
                        draft[keys[0]][keys[1]][i-1].value+=value;
                        break;
                    case 3:
                        draft[keys[0]][keys[1]][keys[2]].splice(i,1);
                        draft[keys[0]][keys[1]][keys[2]][i-1].value+=value;
                        break;
                    case 4:
                        draft[keys[0]][keys[1]][keys[2]][keys[3]].splice(i,1);
                        draft[keys[0]][keys[1]][keys[2]][keys[3]][i-1].value+=value;
                        break;
                    default:
                        break;
                }
            })
        )
    }
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
                    case 5:
                        draft[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]]=value;
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
        <>
        <div className="theme-selector-list-1">
            {colorThemeList.map((value,i)=>
            <div
            className={`theme-selector-11-${value}`}
            onClick={
                ()=>{
                    changeState(["theme",0],value)
                }
            }
            key={i}
            ></div>)}
            
        </div>
            <div className={`body-wrapper body-wrapper-${theme[0]}`}>
                <div className="left-page-inner">
                    <div className="name1"><TextField className="title-name" value={name} onChange={value=>changeState(["name"],value)}
                       /><br/>  
                        <div  className="job1">
                            <TextField className="title-name" value={designation} onChange={value=>changeState(["designation"],value)}/>
                        </div>
                        </div>
                    <div className="address-section1">
                       <TextField  className="address1"
                       value={address.street}
                       onChange={value=>changeState(["address","street"],value)}
                       />
                       <TextField className="city1"
                       value={address.city}
                       onChange={value=>changeState(["address","city"],value)}
                       />
                        <TextField className="phone"
                       value={address.phone}
                       onChange={value=>changeState(["address","phone"],value)}
                       />
                        <TextArea  className="textarea" type="text" value={userData.email} onChange={value=>changeState(["address","email"],value)}/><br/>
                    </div>
                    <div className="bio-wrap1">
                        <TextArea  className="bio1"
                         value={bio}
                       onChange={value=>changeState(["bio"],value)}
                       /><br/>  
                    </div>
                    <div className="key-skills1">Key Skills</div>
                        <ul>
                           {skills.map(({value,id},i)=><li className="licolor1" key={id}><TextField value={value} 
                           onChange={value=>changeState(["skills",i],value)}
                           addToList={value=>addToList(["skills"],i+1,value)}
                           deleteList={value=>deleteList(["skills"],i,value)}
                           length={skills.length}
                           /></li>)}
                        </ul>     
                </div>
                <div className="right-page-inner">
                    <div className="top-heading-1"><h2 className="experience1">Professional Experience</h2> 
                        {experience.map(({job,company,startingdate,endingdate,jobdetails},i)=>{ 
                        return(
                            <>
                            <div className="second-head-wrapper1">
                            <div className="second-head-1">
                            
                            <TextField  value={job} onChange={value=>changeState(["experience",i,"job"],value)}/>
                            <br/>
                            </div>
                           
                            
                            
                           
                            <div className="second-head-des-1">
                           <TextField value={company} onChange={value=>changeState(["experience",i,"company"],value)} />           
                            <TextField className="textfield" value={startingdate} onChange={value=>changeState(["experience",i,"startingdate"],value)} />
                            -
                            <TextField className="textfield"  value={endingdate}onChange={value=>changeState(["experience",i,"endingdate"],value)} />
                            </div>
                            
                            
                            </div>
                            <ul>
                            <button className="delete-button"
                                   onClick={()=>{
                                            deleteList(["experience"],i,"")
                                        }
                                    }
                                >X</button>
                                {jobdetails.map(({value,id},j)=><li className="licolor1"
                                key={id}>
                                <TextArea value={value} onChange={value=>changeState(["experience",i,"jobdetails",j,"value"],value)}
                                addToList={(value)=>addToList(["experience",i,"jobdetails"],j+1,value)}
                                length={jobdetails.length}
                                
                                deleteList={
                                    (value)=>{
                                        deleteList(["experience",i,"jobdetails"],j,value)
                                    }
                                }
                                />
                                </li>)}    
                            </ul> </>
        
                        )
                    })}
                    <button className="add-button"
                            onClick={()=>{
                                addToList(["experience"],experience.length,{
                                    job:"your profession",
                                    company:"organization",
                                    startingdate:"starting date",
                                    endingdate:"ending date",
                                    jobdetails:[
                                        {id: 1,
                                         value: "",
                                        }
                                     ]  
                                     })
                            }}
                            >+</button>
                </div> 
                <div className="education-section">
                    <h2 className="education1">Education</h2>
                        {education.map(({qualification,college,joiningdate,graduationdate,academicdetails},i)=>{
                        return(
                        <>
                            <div className="second-head-wrapper-1">
                            <div className="second-head-1">
                                <TextField className="textfield" value={qualification} onChange={value=>changeState(["education",i,"qualification"],value)}
                                /><br/>
                                <TextField className="textfield" value={college} onChange={value=>changeState(["education",i,"college"],value)}
                                /><br/>
                                </div>
                            <div className="second-small-head-1">
                                <TextField className="textfield" value={joiningdate} onChange={value=> changeState(["education",i,"joiningdate"],value)}/>|<TextField value={graduationdate} onChange={value=> changeState(["education",i,"graduationdate"],value)}/><br/>
                                <button className="delete-button"
                                    onClick={()=>{
                                        deleteList(["education"],i)}
                                    }   
                                >X</button>
                            
                            </div>
                            </div> 
                            <ul>

                                
                                {academicdetails.map(({value,id},j)=><li className="licolor1" key={id}>
                                <TextArea value={value} onChange={value=> changeState(["education",i,"academicdetails",j,"value"],value)}
                                addToList={(value)=>addToList(["education",i,"academicdetails"],j+1,value)}
                                
                                deleteList={
                                    (value)=>{
                                        deleteList(["education",i,"academicdetails"],j,value)
                                    }
                                }
                                length={academicdetails.length}/>
                            </li>)}
                            <button className="add-button"
                            onClick={()=>{
                                addToList(["education"],education.length,{
                                    qualification:"Bachelor of Arts in Business",
                                    college:"The University of Texas at Dallas ",
                                    joiningdate:"September 2007",
                                    graduationdate:"May 2011",
                                    academicdetails:[
                                    {
                                        id:1,
                                        value:"type something...", 
                                    }
                                     ]  
                                     })
                            }}
                            >+</button>
                
                            </ul> 
                        </>
                        )})}
                </div>

            </div>
        </div>            
    </>
    )
}

export default FirstPage
