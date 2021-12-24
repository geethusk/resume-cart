import React from 'react'
import "./secondpage.css"
import { useState } from 'react'
import  produce from "immer"
import TextField from "./Components/TextField"
import TextArea from "./Components/TextArea"
import profilepic from "./images/resumepic.jpg"
import Location from "./icons/location.png"
import Phone from "./icons/phone.png"
import Gmail from "./icons/gmail.png"



const SecondPage = () => {
    const[template,setTemplate]=useState({
        theme:['violet','red'],
        name:"JESSICA COOPER",
        profilebio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam at non illo ipsum. Fuga iusto, maiores distinctio aut expedita consectetur? Amet laudantium fugiat in temporibus odit aliquam ipsa possimus!",
   
        workexp:[
            {
                startingdate:"january 2016",
                endingdate:"present",
                companyName:"IONAUGHT TECHNOLOGIES",
                jobdesignation:"REACT DEVELOPER",
        
            detailsList:[
                {
                    id:1,value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations",
                    
                },{

                    id:2,value:"Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment"
                }
            ]
            }
        ],
        contact:{place:"LONDON,UNITED KINGDOM",phone:" 123-456-789-00",gmail:"raeezmohammed97@gmail.com"},
        skills:[
                           
                            {id:1,value: "Communication"},
                            {id:2,value:"Ability to Work"},
                            {id:3,value:"Decision Making"},
                            {id:4,value:"Time Mangement"},
                            {id:5,value:"Conflict Resolution"},
                            {id:6,value:"Leadership"}
               ],
        Education:[{
            course:"Master Degree",
            collegeName:"University Education",
            graduationyear:"2014"

        }]       

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
                        case 5:
                            draft[keys[0]][keys[1]][keys[2]][keys[3]][keys[4]]=value;  
                            break;    

                        default:
                             break;  
                    }          
                    
                })
        )
    }
    const{theme,name,profilebio,jobdesignation,workexp,contact,Education,skills}=template;
    const{place,phone,gmail}=contact;
    return (
        <div className="main-section-3">
            
            <div className="left-section-3">
                <div className='left-section-name-3'>
                <TextField
                      onChange={value=>changeState(["name"],value)}
                      value={name}
                />
                    {/* {/* JESSICA<br/> 
                   COOPER */}
                   </div> 
                <div className='position-header-3' >Position Title</div>
                <div className='left-header-3'>PROFILE</div>
                    <TextArea
                    onChange={value=>changeState(["profilebio"],value)}
                      value={profilebio}
                    />
                    {/* <textarea value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam at non illo ipsum. Fuga iusto, maiores distinctio aut expedita consectetur? Amet laudantium fugiat in temporibus odit aliquam ipsa possimus!"/> */}
                    <div className='left-section-workexp-3'>WORK EXPERIENCE</div>
                {workexp.map(({startingdate,endingdate,companyName,jobdesignation,detailsList},i)=>{
                   return(
                       <>
              
                
                    <div className='job-header-3'>
                    <TextField
                      onChange={value=>changeState(["workexp",i,"jobdesignation"],value)}
                      value={jobdesignation}
                     />
                    </div>
                      
                    <div className='company-name-header1-3'>
                    <TextField
                      onChange={value=>changeState(["workexp",i,"companyName"],value)}
                      value={companyName}
                     />
                     |
                     <TextField
                      onChange={value=>changeState(["workexp",i,"startingdate"],value)}
                      value={startingdate}
                     />
                    -
                    <TextField
                      onChange={value=>changeState(["workexp",i,"endingdate"],value)}
                      value={endingdate}
                     /> 
                    </div>
                    {/* <textarea value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid blanditiis culpa ratione harum fugiat deleniti accusamus iure eius itaque"/> */}
                    <ul>
                    {detailsList.map(({value,id},j)=><li className="licolors-3" key={id}>
                   <TextArea
                    value={value}
                  onChange={value=>changeState(["workexp",i,"detailsList",j,"value"],value)}
                  />

                {/* //     <li className="licolors-3"  >Implement effective company policies to ensure that all practices comply with labor and employment regulations</li>
                //    <li className="licolors-3">Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</li> */}
                </li>
                    )}
                   </ul>
                </>
                )}
                    )}
            </div>
            <div className="right-section-3">
          
                <img className='profilepic-3' src= {profilepic}/>
                
                <div className="contact-description-3">
                    <div className='contact-head-3'>CONTACT</div>
                     <div><img  src={Location}/>
                     <TextField
                      onChange={value=>changeState(["contact","place"],value)}
                      value={place}
                     /> 
                    </div>
                    <div><img  src={Phone}/>
                    <TextField
                      onChange={value=>changeState(["workexp","phone"],value)}
                      value={phone}
                     /> 
                     </div>
                    <div><img src={Gmail}/>
                    <TextField
                      onChange={value=>changeState(["workexp","gmail"],value)}
                      value={gmail}
                     /> 
                   </div>
                </div>
                <div className="skill-header-3">KEY SKILLS</div>
                <ul>
                {skills.map(({value,id},i)=><li className="li-colors-3" key={id}>
                   <TextArea value={value}  
                   onChange={(value)=>changeState(["skills",i,"value"],value)}
                   /></li>)}
                </ul>
                <div className="education-header-3">Education</div>

                <div className="education-discription-3">
                {Education.map(({ collegeName,graduationyear,course},i)=>{
                     return(
                        <>

                        <div className="education-qualification-3"> 
                            <TextField
                            onChange={value=>changeState(["Education",i,"course"],value)}
                            value={course}
                            /> 
                        </div>
                          <div>
                          <TextField
                            onChange={value=>changeState(["Education",i,"collegeName"],value)}
                            value={collegeName}
                            /> 
                          </div>
                          <div>
                          <TextField
                            onChange={value=>changeState(["Education",i,"graduationyear"],value)}
                            value={graduationyear}
                            /> 
                            </div><br/>
                          {/* <div className="education-qualification-3"> Masters degree</div>
                          <div> University edication</div>
                          <div>2014</div> */}
                        </>
                     
                    )}
                )}

                </div>
                




            
            </div>
        </div>
    )
}

export default SecondPage