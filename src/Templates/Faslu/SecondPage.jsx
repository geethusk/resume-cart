import React, { useState } from 'react'
import TextArea from './Components/TextArea';
import TextField from './Components/TextField'
import './SecondPage.css'
import ProfilePic from './images/jordan-2c43ff762e625d49ea58424e3e74188a.jpg';
import FileUpload from './Components/FileUpload';
import produce from 'immer';
const SecondPage = () => {
    const [template,setTemplate]=useState({
        name:"John Doe",
        designation:"Business Development Manager",
        bio:"Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
        profileImage:ProfilePic,
        exp:[
            {
            role:"Human Resources Manager",
            companyName:"Jim's Widget Factory, Plano, TX",
            startingDate:"January 2016",
            endingDate:"Present",
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
                {id:4,
                value:"Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"
                }
            ]
        },
        {   
            role:"Human Resources Associate",
            companyName:"Jim's Widget Factory, Plano, TX",
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
                {id:4,
                value:"Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"
                }
            ]
        }
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
            }
        ],
    });
    const{name,designation,bio, profileImage,exp,skill}=template;
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
    return (
        <div className='container-2'>
            <div className='header-section-2'>
                <div className='header-left-section-2'>
                    <div className="resume-name2">
                        <TextField 
                            value={name}
                        />
                    </div>
                    <div className="resume-designation-2">
                        <TextField 
                            value={designation}
                        />
                    </div>
                    <div className='detail-section-2'>
                        <TextArea
                            value={bio}
                        />
                    </div>   
                </div>
                <FileUpload 
                image={profileImage}
                onChange={value=>changeState(["profileImage"],value)}/>  
            </div>
            <div className='nav-section-2'></div>
            <div className='content-section-2'>
                <div className="left-section-2">
                    <h3>Work Experience</h3>
                    {exp.map(({role,companyName,startingDate,endingDate,detailList},i) =>{
                return(
                    <div>
                        <TextField 
                            value={role}
                        /><br/>
                        <TextField 
                           value={companyName}
                        /><br/>
                        <TextField 
                           value={startingDate}
                        />-
                        <TextField 
                           value={endingDate}
                        />    
                            {detailList.map(({value,id},i)=><li key={id}>
                            <TextArea
                            value={value}
                            />
                            </li>

                            )}
                    </div>
                    )})}
                </div>
                <div className="right-section-2">
                    <h3>SKILLS</h3>

                </div>        
            </div>
        </div> 
    )
}

export default SecondPage
 