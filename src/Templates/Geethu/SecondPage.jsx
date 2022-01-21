import React, { useEffect } from 'react'
import "./Second.css"
import { useState } from 'react'
import TextArea from "./Components/TextArea"
import TextField from './Components/TextField'
import edu from "./assets/icons/university-solid.svg"
import work from "./assets/icons/laptop-house-solid.svg"
import phone from "./assets/icons/map-marker-alt-solid.svg"
import key from "./assets/icons/thumbtack-solid.svg"
import produce from "immer"
import { useStoreState} from 'easy-peasy';
import downloadTemplate from '../../Routes/templateDownload'
import download from "../../assets/icons/download-solid.svg"
import "../../Routes/footer.css"

const SecondPage = () => {
    const colorThemeList=[
        "blue",
        "turquoise",
        "violet",
        "brown",
        "green"
    ]
   

    const [templateState,setTemplateState]=useState({
        theme:["#000","#fff"],
        bio:"Human resources generalist with 8 years of experience in HR,including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers.Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards.Worked with OSHA to ensure that all safety regulations are followed.",
        experience:[
            {
                startingdate:"January 2016",
                endingdate:"Present",
                job:"Human Resources Manager",
                company:"Jim's Widget Factory, Plano, TX",
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
                startingdate:"March 2015 ",
                endingdate:"January 2016 ",
                job:"Human Resources Associate",
                company:"Jim's Widget Factory, Plano, TX",
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
                joiningdate:"September 2007",
                graduationdate:"May 2011",
                qualification:"Bachelor of Arts in Business",
                college:"The University of Texas at Dallas ",
                academicdetails:[
                    {
                        id:1,
                        value:"Academic Awardee of AY 2007-2008", 
                    }
                ]
                    
            }],
        name:"your Name",
        designation:"Sales Associate",
        address:{
            street:"4759 Sunnydale Lane",
            city:" Plano, TX, 75071",
            gmail:"email@youremail.com",
            phone:"(469) 385-2948"
        },
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
       if(userData.fullname || userData.email){
            changeState(["name"], userData.fullname);
            changeState(["address", "gmail"], userData.email)
       }
    },[userData.fullname, userData.email])

    const changeState=(keys,value)=>{
        setTemplateState(
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

    const addToList=(keys,i,value)=>{
        setTemplateState(
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
        setTemplateState(
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
    const{theme,name,designation,address,bio,experience,education,skills}=templateState;

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
        <div className={`container-parent-1 container-parent-1-${theme[0]}`}>
        
            <div className="container-1-left-box">
                <div className="summary-section">
                <TextArea  className="bio1"
                        value={bio}
                       onChange={value=>changeState(["bio"],value)}
                /><br/>  
                </div>

                <div className="heading">
                <img  className="image-1" src={work}/><h1 className="title-section-11">Work History</h1>
                </div>
                <div className="complete-work-container-1">
                {experience.map(({startingdate,endingdate,job,company,jobdetails},i)=>{ 
                        return(
                            <>
                            <div className="sub-container-1">                         
                            <div className='date-section'>
                                <TextField className="textfield" value={startingdate} onChange={value=>changeState(["experience",i,"startingdate"],value)}/><br/>
                                <TextField className="textfield"  value={endingdate}onChange={value=>changeState(["experience",i,"endingdate"],value)}/>
                            </div>
                            <div className="description"> 
                                <TextField value={company} onChange={value=>changeState(["experience",i,"company"],value)} /><br/>
                                <TextField  value={job} onChange={value=>changeState(["experience",i,"job"],value)}/>
                            <br/>
                            </div>
                            </div>  

                            <ul>
                            <button className="delete-button"
                                   onClick={()=>{
                                            deleteList(["experience"],i,"")
                                        }
                                    }
                                >X</button>
                                {jobdetails.map(({value,id},j)=><li className="licolor-1"
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
                            </ul>
                            
                            </>
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
            <div className="heading">
                <img className="image-1" src={edu} /><h1 className="title-section-11">Education</h1>
            </div>
            <div className="complete-work-container-1">
                {education.map(({qualification,college,joiningdate,graduationdate,academicdetails},i)=>{
                return(
                    <>
                    <div className="sub-container-1">
                            <div className="date-section"> 
                                <TextField className="textfield" value={joiningdate} onChange={value=> changeState(["education",i,"joiningdate"],value)}/>
                                |
                                <TextField value={graduationdate} onChange={value=> changeState(["education",i,"graduationdate"],value)}/><br/>
                            </div>
                            <div className='description'>
                                <TextField className="textfield" value={qualification} onChange={value=>changeState(["education",i,"qualification"],value)}/>
                                <br/>
                                <TextField className="textfield" value={college} onChange={value=>changeState(["education",i,"college"],value)}
                                /><br/>
                            </div>
                    </div> 
                    <button className="delete-button"
                                    onClick={()=>{
                                        deleteList(["education"],i)}
                                    }   
                                >X</button>

                            <ul>  
                                {academicdetails.map(({value,id},j)=><li className="licolor-1" key={id}>
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
           
            <div className="container-1-right-box">
                <div className='name-sec'>
                   <TextField className="name-folder" value={name} onChange={value=>changeState(["name"],value)}/>
                   <TextField  value={designation} className='sub-1' onChange={value=>changeState(['designation'],value)}/>
                </div>
                <div className="heading-1">
                <img className="image-11" src={phone}/><h1 className="title-section-1">contacts</h1>
                </div>
                <div className='address-field'>
                <TextField  className="address1"
                    value={address.street}  onChange={value=>changeState(["address","street"],value)}/><br/>
                <TextField className="city1"
                    value={address.city} onChange={value=>changeState(["address","city"],value)}
                    /><br/>
                <TextField className="email1"
                    value={address.gmail} onChange={value=>changeState(["address","gmail"],value)}/><br/>
                <TextField className="address1"
                    value={address.phone}  onChange={value=>changeState(["address","phone"],value)}
                    /><br/>
                </div>
                <div className="heading-1">
                <img className="image-11" src={key}/><h1 className="title-section-1">Skills</h1>
                </div>
                <div className="skill-sec-1">
                    <ul className='skill-set'>
                        {skills.map(({value,id},i)=><li className="licolor-1" key={id}><TextField value={value} 
                        onChange={value=>changeState(["skills",i],value)}
                        addToList={value=>addToList(["skills"],i+1,value)}
                        deleteList={value=>deleteList(["skills"],i,value)}
                        length={skills.length}
                        /></li>)}
                    </ul> 
                </div>

            </div>

        </div>
        <button onClick={()=>{downloadTemplate(templateState)}}><img className="save-button" src={download} /></button>

        </>
    )
}

export default SecondPage
