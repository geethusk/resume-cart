import { useState } from 'react'
import './style.css'
import produce from "immer"
import TextField from "./Components/TextField"
import TextArea from "./Components/TextArea"

const Faslu = () => {
    const colorThemeList =[ "blue",
                            "gray",
                            "red",
                            "AntiqueWhite",
                            "brown",
                            "yellow",
                            ]
    const [template,setTemplate] = useState({
        theme:['#58585b','#fff'],
        logo:"CC",
        name:"Chris Candidate",
        designation:"Sales Associate",
        address:{street:"4759 Sunnydale Lane" ,city:"Plano, TX,",pin:"75071",email:"email@youremail.com",phone:"(469) 385-2948"},
        bio:"Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
        skill:[
            {id:1,
             value:"Detail oriented"
            },
            {id:2,
            value:"Well-versed in Texas employment law"
            },
            {id:3,
            value:"Excellent written and oral communication skills"
            },
            {id:4,
             value:"Develops positive workplace relationships"
            }
        ],
        exp:[
            {
            startingDate:"January 2016",
            endingDate:"Present",
            companyName:"Jim's Widget Factory, Plano, TX",
            role:"Human Resources Manager",
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
            startingDate:"March 2015 ",
            endingDate:"January 2016",
            companyName:"Jim's Widget Factory, Plano, TX",
            role:"Human Resources Associate",
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
        education:[{
            joiningDate:"September 2007",
            endingDate:"May 2011",
            course:"Bachelor of Arts in Business",
            collegeName:"The University of Texas at Dallas",
            awards:[{id:1,
                    value:"Academic Awardee of AY 2007-2008"}]
        }]
    });
    const{theme,logo,name,designation,address,bio,skill,exp,education}=template;
    const{street,city,pin,email,phone}=address;


    const getLogo = (name)=>{
        let nameList =name.split(" ")
        if (nameList.length < 2 || !nameList[1]){
            return nameList[0][0]
        }
        if(!nameList[nameList.length-1]){
            return nameList[0][0]+nameList[nameList.length - 2][0];
        }
        return nameList[0][0]+nameList[nameList.length -1 ][0];

    }
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

    const addToList = (keys,i,value)=>{
        setTemplate(
            (prev)=>produce(prev,(draft)=>{
                switch (keys.length){
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

    const deleteList = (keys,i,value)=>{
        if(i===0)return
        setTemplate(
            (prev)=>produce(prev,(draft)=>{
                switch (keys.length){
                    case 1:
                        draft[keys[0]].splice(i,1);
                        draft[keys[0]][i-1].value += value;
                        break;
                    case 2:
                        draft[keys[0]][keys[1]].splice(i,1);
                        draft[keys[0]][keys[1]][i-1].value += value;
                        break;
                    case 3:
                        draft[keys[0]][keys[1]][keys[2]].splice(i,1);
                        draft[keys[0]][keys[1]][keys[2]][i-1].value += value;
                        break;
                    case 4:
                        draft[keys[0]][keys[1]][keys[2]][keys[3]].splice(i,1);
                        draft[keys[0]][keys[1]][keys[2]][keys[3]][i-1].value += value;
                        break;
                    default:
                        break;
                }
            })
        )

    }
    return (
        <div>
            <div className="theme-selector-2">
                {colorThemeList.map((value,i)=>
                <div
                className={`theme-selector-2-${value}`}
                onClick={
                    ()=>{
                        changeState(["theme",0],value)
                    }
                }
                key={i}>
                </div>
                )}
            </div>
            <div className={`resume-page2 resume-page2-${theme[0]}`}>
            <div className="left-section2">
                <div className="header-part-section2">
                <div className="logo-area2">{getLogo(name)}
                </div>
<<<<<<< HEAD
                <div className="resume-name2">
=======
                <div className="resume-name-2">
>>>>>>> 8282e7b3751b60a4940dd7c8beddfb84895a5911
                    {/* <input
                    type="text"
                    value={name}
                    onChange={(e)=>changeState(["name"],e.target.value)}></input> */}
                    <TextField
                        value={name}
                        onChange={value=>changeState(["name"],value)}    
                    />
                </div>
                <div className="resume-profession">
                    <TextField
                        value={designation}
                        onChange={value=>changeState(["designation"],value)}    
                    />
                </div>
                <div className="header-part-address-section2"> 
                    {/* <input
                        type="text"
                        className="header-part-address-section"
                        value={street}
                        onChange={(e)=>changeState(["address","street"],e.target.value)}></input><br/> */}
                    <TextField
                        onChange={value=>changeState(["address","street"],value)}
                        value={street}
                    /><br/>
                    <TextField
                        value={city}
                        onChange={value=>changeState(["address","city"],value)}
                    />
                    <TextField
                        value={pin}
                        onChange={value=>changeState(["address","pin"],value)}
                    /><br/>
                    <TextField
                        value={email}
                        onChange={value=>changeState(["address","email"],value)}
                    /><br/>
                    <TextField
                        value={phone}
                        onChange={(value)=>changeState(["address","phone"],value)}
                    /><br/>                        
                </div>
                </div>
                <div className="description-section2">
                    <TextArea
                        value={bio}
                        onChange={value=>changeState(["bio"],value)}
                    />
                </div>
                <div className="block-section2">
                    <h3>Key Skills</h3>
                    <ul>
                        {skill.map(({value,id},i)=><li className="list-section" key={id}>
                        <TextArea
                            value={value}
                            length={skill.length}
                            onChange={(value)=>changeState(["skill",i,"value"],value)}
                            addToList={
                                (value)=>{
                                    addToList(["skill"],i + 1,value)}
                            }
                            deleteList={value=>deleteList(["skill"],i,value)}
                        /></li>)}      
                    </ul>
                </div>
            </div>
            <div className="right-section">
                <div className="template-block2">
                    <h3>Professional Experience</h3>
                    {exp.map(({startingDate,endingDate,companyName,role,detailList},i)=>{
                    return(
                        <div className="right-section2">
                            <div className="heading-section2">
                                <span className='sub-heading-section2'>
                                <TextField
                                value={role}
                                onChange={(value)=>changeState(["exp",i,"role"],value)}
                                />
                                <button classNme="close-button2" onClick={()=>deleteList(['exp'],i,"")}>REMOVE</button>

                                </span>
                                <div>
                                {/* <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e)=>changeState(["exp",i,"companyName"],e.target.value)}></input> */}
                                <TextField
                                    value={companyName}
                                    onChange={(value)=>changeState(["exp",i,"companyName"],value)}
                                />
                                |<TextField
                                    value={startingDate}
                                    onChange={(value)=>changeState(["exp",i,"startingDate"],value)}
                                />
                                -<TextField
                                    value={endingDate}
                                    onChange={(value)=>changeState(["exp",i,"endingDate"],value)}
                                /></div>
                            </div>
                            <ul>
                                {detailList.map(({value,id},j)=><li className ="list-section2" 
                                key={id}>
                                <TextArea
                                    value={value}
                                    onChange={(value)=>changeState(["exp",i,"detailList",j,"value"],value)}
                                    addToList={(value)=>addToList(["exp",i,"detailList"],j + 1,value)}
                                    deleteList={value=>
                                        // console.log(value);
                                        deleteList(["exp",i,"detailList"],j,value)
                                    }
                                    length={detailList.length}
                                   
                                />
                                <button className="close-button2"onClick={()=>deleteList(['exp',i,'detailList'],j,"")}>X</button>
                                </li>)}
                            </ul>
                        </div>
                        )})}
                        <button onClick={()=>addToList(["exp"],exp.length,{ 
                            startingDate:"March 2015 ",
                            endingDate:"January 2016",
                            companyName:"Jim's Widget Factory, Plano, TX",
                            role:"Human Resources Associate",
                            detailList:[
                                {id:1,
                                value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                                },
                            ]
                        })}>ADD</button>
                </div>
                <div className="template-block2">
                    <h3>Education</h3>
                    {education.map(({joiningDate,endingDate,course,collegeName,awards},i)=>{
                        return(
                            <div className="two-side-section">
                                <div className="one-side">
                                    <TextField
                                        value={joiningDate}
                                        onChange={(value)=>changeState(["education",i,"joiningDate"],value)}
                                    />
                                    <TextField
                                        value={endingDate}
                                        onChange={(value)=>changeState(["education",i,"endingDate"],value)}
                                    />
                                    
                                </div>
                                <div className="two-side">
                                    <TextField
                                        value={course}
                                        onChange={(value)=>changeState(["education",i,"course"],value)}
                                    /><br/>
                                    <TextField
                                        value={collegeName}
                                        onChange={(value)=>changeState(["education",i,"collegeName"],value)}
                                    /><br/>
                                    <ul>
                                        {awards.map(({value,id},j)=><li key={id}>
                                        {/* <input 
                                        type="text"
                                        value={value}
                                        onChange={(e)=>changeState(["education",i,"awards",i],e.target.value)}></input> */}
                                            <TextArea
                                            value={value}
                                            onChange={(value)=>changeState(["education",i,"awards",j,"value"],value)}
                                            addToList={
                                                (value)=>{
                                                    addToList(["education",i,"awards"],j + 1,value)}
                                            }
                                            length={awards.length}
                                            // deleteList={value=>deleteList(["education",i,"awards"],i,value)}
                                            />
                                        </li>)}
                                    </ul>
                                    <button onClick={()=>deleteList(["education"],i,"")}>REMOVE</button>  
                                    
                                </div>
                               
                            </div>
                             
                        )} 
                        
                    )}    
                    
                    <button onClick={()=>addToList(["education"],education.length,{ 
                            joiningDate:"September 2007",
                            endingDate:"May 2011",
                            course:"Bachelor of Arts in Business",
                            collegeName:"The University of Texas at Dallas",
                            awards:[
                                {id:1,
                                value:"Academic Awardee of AY 2007-2008",
                                },
                            ]
                        })}>ADD</button>
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default Faslu
