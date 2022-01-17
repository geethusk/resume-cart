import { useEffect, useState } from "react"
import "./vishnu.css"
import produce from "immer"
import TextField from "./Component/TextField"
import TextArea from "./Component/TextArea"
import { useStoreState} from 'easy-peasy';

const FirstPage = () => {
    
    const colorThemeList = ["red",
                            "blue",
                            "green",
                            "yellow",
                            "orange",
                            "brown"
                        ]


    const[templateState,settemplateState] = useState({
        theme:["red","blue"],
        name: "VISHNU R NAIR",
        designation: "Full_Stack developer",
        address:{
            street:" 4759 Sunnydale Lane",
            city:"Plano, TX",
            pincode:"671314",
            email:"email@youremail.com",
            phone:"(469) 385-2948"

        },
        bio:" Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.",
        education:[{
            qualification:"Bachelor of Arts in Business",
            college:"College of engineering Trikarippur",
            graduationyear:"May 2011"
        }],        
        skills:[{id: 1,
                    value:"Detail oriented"
                 },
                 {id: 2,
                    value:"Well-versed in Texas employment law"
                 }, 
                 {id: 3,
                    value:"Excellent written and oral"
                 }, 
                 {id: 4,
                    value:"Develops positive workplace relationships"
                 }    
               
            ],
        professionalexp:[{
            startingDate: "January 2016",
            endingDate:"present",
            role:"Human Resources Manager",
            companyName:"Jim's Widget Factory, Plano, TX",
            roleDetails:[ 
                          {id: 1,
                             value: "Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                            },
                           {id: 2,
                            value:"Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment"
                            },
                          {id: 3,
                            value:"Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies"
                          },
                          {id: 4,
                            value:"Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"
                          },
                          ]
        }]
    })


    const{theme,name,designation,address,bio,education,skills,professionalexp}=templateState;
    const{street,city,pincode,email,phone} = address;
    const userData = useStoreState((state) => state.userData);
    useEffect(()=>{
        userData.fullname && settemplateState(prev=>{
            return{
                ...prev,
                name:userData.fullname
            }
        })
    },[userData.fullname])
    

    // const onChange = (action)=>{
    //     switch(action.type){
    //         case "baseValue":
    //             return settemplateState(prev=>({
    //                 ...prev,
    //                 [action.key] : action.value
    //             }))
    //     }
    // }


    const addToList = (keys,i,value)=>{
        settemplateState(
            (prev)=>{
                return produce(prev,(draft)=>{
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
            }
        )
    }

    const deleteList = (keys,i,value)=>{
        if(i===0)return
        settemplateState(
            (prev)=>{
                return produce(prev,(draft)=>{
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
            }
        )
    }

    const changeState = (keys,value)=>{
        settemplateState(
            (prev)=>{
                return produce(prev,(draft)=>{
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
            }
        )
    }

    return (
    <>
        <div className="theme-selector-list5">
            {colorThemeList.map((value,i)=>
                <button 
               
                className={`theme-selection theme-selection-${value}`}
                onClick={
                    ()=>{
                        changeState(["theme",0],value)
                    }
                }
                key={i}
                ></button>
                
        
            )}
                
                
                

        </div>
        <div className={`body-container5 body-container5-${theme[0]} `}>
            <header>
                <div className="name-section">
                    <div className="name" >
                        {/* <input 
                        
                        value={name} 
                        type="text"
                        onChange={(e)=>{
                            changeState(["name"],e.target.value)
                        }}
                        /> */}
                        <TextField
                            onChange={value=>changeState(["name"],value)}
                            value={name}
                        />
                    </div>
                    <div>
                        {/* <input 
                        className="designation"
                        value={designation}
                        type="text"
                        onChange={(e)=>{
                            changeState(["designation"],e.target.value)
                        }}
                        /> */}
                        <TextField
                            onChange={value=>changeState(["designation"],value)}
                            value={designation}
                        />
                    </div>
                </div>
                <div className="address-section">
                        <TextField
                            onChange={value=>{
                                changeState(["address","street"],value)
                            }
                            }
                            value={street}

                        /><br/>
                         <TextField value={city}
                            onChange={(value)=>{
                                changeState(["address","city"],value)
                            }}

                         />,{" "}
                         
                         <TextField value={pincode}
                            onChange={(value)=>{
                                changeState(["address","pincode"],value)
                            }}
                          /><br/>
                         <TextField value={userData.email}
                            onChange={(value)=>{
                                changeState(["address","email"],value)
                            }}
                        
                         /><br/>
                         <TextField  value={phone}
                            onChange={(value)=>{
                                changeState(["address","phone"],value)
                            }}
                         />
                </div>
            </header>
            <div className="about">
                <TextArea
                    onChange={value=>changeState(["bio"],value)}
                    value={bio}
                />
            </div>
            <div className="more-about">
                <div className="left-section">
                    <div className="education">
                            <h3 className="edu">Education</h3>
                            <button

 


                             onClick={()=>{
                            
                        addToList(["education"],education.length,{
                            ...education[0],
                            
                        })
                    }}
                
                            
                            >add edu</button>
                            {education.map(({qualification,college,graduationyear},i)=>{
                                return(
                                    <>
                                    <button
                                    
                                       onClick={()=>deleteList(["education"],i)}
                                    >Delete</button>
                                    <div className="edu-college">
                                       <TextField value={qualification}
                                            onChange={(value)=>{
                                                changeState(["education",i,"qualification"],value)
                                            }}
                                       />
                                    </div>
                                    <div className="coll-description">
                                        <TextArea value={college}
                                            onChange={(value)=>{
                                                changeState(["education",i,"college"],value)
                                            }}
                                        />{" "} <br/>
                                        <TextField value={graduationyear}
                                           onChange={(value)=>{
                                            changeState(["education",i,"graduationyear"],value)
                                        }}
                                        />
                                    </div>
                                    </>
                                )
                                }
                            )
                            }
                    </div>
                    <div className="skill-section">
                        <h3 className="skill">Key Skills</h3>
                        <ul className="list-orient">
                            {skills.map(({value,id},i)=><li key={id}>
                                <TextArea value={value} 
                                  onChange={(value)=>{
                                      changeState(["skills",i,"value"],value)
                                  }}
                                  addToList={(value)=>addToList(["skills"],i+1,value)}

                                  deleteList={
                                    (value)=>{
                                        
                                        deleteList(["skills"],
                                        i,
                                        value
                                        )
                                    }
                                }
                                length = {skills.length}

                                />
                            </li>)}
                        </ul>
                    </div>
                </div>
                <div className="right-section">
                    <h3>Professional Experience</h3>
                    <button  
                       onClick={()=>{
                           
                        addToList(["professionalexp"],professionalexp.length,{
                            ...professionalexp[0],
                            roleDetails:[{...professionalexp[0].roleDetails[0]}]
                        }
                        // {
                        //     startingDate: "January 2016",
                        //     endingDate:"present",
                        //     role:"Human Resources Manager",
                        //     companyName:"Jim's Widget Factory, Plano, TX",
                        //     roleDetails:[ 
                        //                   {id: 1,
                        //                      value: "Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                        //                     }]
                        // }
                        )
                            
                              
                    }}
                    
                    >Addexp</button>  
                    {professionalexp.map(({startingDate,endingDate,role,companyName,roleDetails},i)=>{
                        return(
                          <>
                            <button
                                onClick={()=>deleteList(["professionalexp"],i)}
                            >delete</button>
                            <div className="right-side-section">
                               <div className="time-period">
                                   <TextField  value= {startingDate}
                                     onChange={(value)=>{
                                     changeState(["professionalexp",i,"startingDate"],value)
                                     }}
                                   /> -<br/> 
                                   <TextField  value={endingDate}
                                     onChange={(value)=>{
                                     changeState(["professionalexp",i,"endingDate"],value)
                                     }}
                                   />
                               </div>
                               <div className="exp-brief">
                                  <h3>
                                    <TextField  value={role}
                                       onChange={(value)=>{
                                       changeState(["professionalexp",i,"role"],value)
                                     }}
                                    /><br/>
                                    <i>
                                      <TextField  value={companyName}
                                        onChange={(value)=>{
                                        changeState(["professionalexp",i,"companyName"],value)
                                      }}  
                                     />
                                    </i>
                                  </h3>
                                  <ul className="exp-list">
                                     {roleDetails.map(({value,id},j)=><li key={id}>
                                          <TextArea value={value}
                                            onChange={(value)=>{
                                                
                                            changeState(["professionalexp",i,"roleDetails",j,"value"],value)
                                           }}
                                            addToList={(value)=>addToList(["professionalexp",i,"roleDetails"],j+1,value)}
                                            
                                            deleteList={
                                                (value)=>{
                                                    
                                                    deleteList(["professionalexp",i,"roleDetails"],
                                                    j,
                                                    value
                                                    )
                                                }
                                            }
                                            length = {roleDetails.length}
                                        />
                                        </li>)}                               
                                  </ul>
                               </div>
                            </div>   
                                                
                          </>
                        )
                    })}
                   
                </div>
            </div>
            
        </div>
    </>
    )
}

export default FirstPage
