import "./raeez.css"
import { useState,useEffect } from "react"
import  produce from "immer"
import TextField from "./Components/TextField"
import TextArea from "./Components/TextArea"
import { useStoreState,useStoreActions} from 'easy-peasy';
import downloadTemplate from "../../Routes/templateDownload"
const Raeez = () => {
    const colorThemeList= [ "violet",
        "indigo",
        "blue",
        "green",
        "red",
        "gray",
        "brown"]
    const[template,setTemplate]=useState({
        theme:['violet','red'],
        logo:"CC",
        name:"Raeez Mohammed",
        designation:"Full Stack developer",
        address:{street:"4759 Sunnydale Lane",city:"Plano ,TX ",pincode:"75071",gmail:"raeezmohammed97@email.com",phonenumber:"(469) 385-2948"},
        bio:"Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed..",
        profexp:[
            {
            startingdate:"january 2016",
            endingdate:"present",
            companyName:"Jim's Widget Factory, Plano, TX",
            jobdesignation:"Human Resources Manager",
        
        
            detailsList:[
            {id:1,value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations"},
            {id:2,value:"Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment"},
            {id:3,value:"Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies"},
            {id:4,value:"Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"},

            
        ],
    },
           
        {
            startingdate:"january 2016",
            endingdate:"March 2016",
            companyName:"Jim's Widget Factory, Plano, TX",
            jobdesignation:"Human Resources Associate",
        
        
            detailsList:[
                {id:1,
                value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations"},
                {id:2,value:"Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment"},
               {id:3,value:"Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies"},
               {id:4,value:"Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"},
            ]
        }
            
    ],
        Education:[{
            collegeName:"The University of Texas at Dalla",
            graduationyear:"September 2007",
           
            course:"Bachelor of Arts in Business",
            academicawards:[
                { id:1,
                   value:"Academic Awardee of AY 2007-2008"}]
        }],
        skills:[
            {
            id:1,
            value:"Detail oriented",
            },
            {
            id:2,
            value:"Well-versed in Texas employment law",
            },
            {
            id:3,
            value:"Excellent written and oral communication skill",
            },
            {
            id:4,
            value:"Develops positive workplace relationships"
            },
        ]
    })
    const userData = useStoreState((state) => state.userData);
    const changeFullName = useStoreActions((actions) => actions.changeFullName);
    useEffect(()=>{
        if(userData.fullname || userData.email){
        changeState(["name"], userData.fullname)
        changeState(["address", "gmail"], userData.email)
        }
    },[userData.fullname, userData.email])

    const getLogo=(name)=>{
        let nameList=name.split(" ");
        if(nameList.length <2 || !nameList[1]){      
            return nameList[0][0];
        }
        if(!nameList[nameList.length-1]){
            return nameList[0][0]+nameList[nameList.length - 2][0];
        }
        return nameList[0][0]+nameList[nameList.length-1][0];
    }

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

    const addToList=(keys,i,value)=>{
        setTemplate(
            (prev)=> produce(prev,(draft)=>{
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
        if(i===0) return               //0th index will not close
        setTemplate(
            (prev)=> produce(prev,(draft)=>{
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

    const{theme,logo,name,designation,address,bio,profexp,Education,skills}=template;
    const{street,pincode,gmail,phonenumber,city}=address;
  
   
    return (
        <>
        <div className="theme-selector-list3">
            {colorThemeList.map((value,i)=>
            <div 
            className={`theme-selector3-${value}`}
            onClick={
                ()=>{
                    changeState(["theme",0],value)
                }
            }
            key={i}
            ></div>)}

        </div>
        <div className={`main-body3 main-body3-${theme[0]}`}>
            <div className="header-section-3">
                <div className="logo-3">{getLogo(name)}</div>
                <div className=" name-3" >
                <TextField
                      onChange={value=>changeState(["name"],value)}
                      value={name}
                />
                    {/* <input type="text"
                    value={name}
                    className=" name-3"
                    onChange={(e)=>changeState(["name"],e.target.value)}/> */}
                  <h2 className="job-3">
                <TextField
                      onChange={value=>changeState(["designation"],value)}
                      value={designation}
                />
                      {/* <input type="text" className="job-3" value={designation}
                   onChange={(e)=>changeState(["designation"],e.target.value)}/> */}
                  </h2></div>
                 <div className="headerdiscription-3">
                <TextField
                      onChange={value=>changeState(["address","street"],value)}
                      value={street}
                />

                    {/* <input type="text"
                  value= {street}
                  className="headerdiscription-3"
                  onChange={(e)=>changeState(["address","street"],e.target.value)}
                  /> */}
                    
                   {/* <input type ="text"
                   value={city}
                   className="headerdiscription-3"
                   onChange={(e)=>changeState(["address","city"],e.target.value)}/>
                   <input type="text"
                   value={pincode}
                   onChange={(e)=>changeState(["address","pincode"],e.target.value)}
                   /> */}
                   <div className="raeez-3">
                <TextField
                      onChange={value=>changeState(["address","city"],value)}
                      value={city}
                />
                     <TextField
                      onChange={value=>changeState(["address","pincode"],value)}
                      value={pincode}
                     />
                     </div>
                   
                <TextField
                      onChange={value=>changeState(["address","gmail"],value)}
                      value={gmail}
                />
                   {/* <input type="text"
                   value={gmail}
                   className="headerdiscription-3"
                   onChange={(e)=>changeState(["address","gmail"],e.target.value)}/> */}
                   
                   {/* <input type ="text"
                    value={phonenumber}
                    className="headerdiscription-3"
                    onChange={(e)=>changeState(["address","phonenumber"],e.target.value)}/><br/> */}
                <TextField
                      onChange={value=>changeState(["address","phonenumber"],value)}
                      value={phonenumber}
                />
                </div>
            </div>
            <div className="body-container-3">
               <div className="body-des-3">
                   {/* <textarea  value={bio}  onChange={(e)=>changeState(["bio"],e.target.value)}/>  */}
                   <TextArea
                   
                   onChange={value=>changeState(["bio"],value)}
                      value={bio}
                      />
                   </div>
               <div className="firsthead-3">Professional Experience </div>
               
               {profexp.map(({startingdate,endingdate,companyName,jobdesignation,detailsList},i)=>{
                   return(
                       <>
              
               <div className="second-head-wrapper-3">
               <div className="secondhead-3">
               <TextField
                      onChange={value=>changeState(["profexp",i,"jobdesignation"],value)}
                      value={jobdesignation}
                    />
                     
                   {/* <input type="text"
                    className="secondhead-3"
                    value={jobdesignation}
                    onChange={(e)=>changeState(["profexp",i,"jobdesignation"],e.target.value)}/> */}
                </div>
                  <div className="secondheaddis-3">
                  <TextField
                      onChange={value=>changeState(["profexp",i,"companyName"],value)}
                      value={companyName}
                     />
                  
                      {/* <input type="text" value={companyName}
                      
                      onChange={(e)=>changeState(["profexp",i,"companyName"],e.target.value)}/> */}
                       |
                       <TextField
                      onChange={value=>changeState(["profexp",i,"startingdate"],value)}
                      value={startingdate}
                     />
                       {/* <input type="text" value={startingdate}
                       onChange={(e)=>changeState(["profexp",i,"startingdate"],e.target.value)}/> */}
                       - 
                       <TextField
                      onChange={value=>changeState(["profexp",i,"endingdate"],value)}
                      value={endingdate}
                     />
                     <button onClick={
                         ()=>
                         deleteList(["profexp"],i
                         )
                     }
                     className="closebutton-3"> X </button>
                       {/* <input type="text"
                       value={endingdate}
                       onChange={(e)=>changeState(["profexp",i,"endingdate"],e.target.value)}/> */}
                    </div>
               
               </div>
                
               <ul>
               {detailsList.map(({value,id},j)=><li className="licolor-3" key={id}>
                   <TextArea
                    value={value}
                  onChange={value=>changeState(["profexp",i,"detailsList",j,"value"],value)}
                  addToList={value=>addToList(["profexp",i,"detailsList"],j+1,value)}
                  deleteList={ value=>deleteList(["profexp",i,"detailsList"],j,value )}
                  length={detailsList.length}/>
                   
                      
               
                    {/* {/* <textarea 
                   value={val}
                   onChange={(e)=>changeState(["profexp",i,"detailsList",j],e.target.value)}/>  */}
                   </li>
                  )} 
                 
                </ul>
                </>
                )}
              
                   )}
                   <div className="button-3">
                     <button onClick={
                         ()=>
                             addToList(["profexp"],profexp.length,{
                                startingdate: "january 2016",
                                endingdate:"present",
                                companyName:"Jim's Widget Factory, Plano, TX",
                                jobdesignation:"Human Resources Manager",
                                detailsList:[
                                    {id:1,
                                    value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations"},
                                ] 
                            })
                        } >+</button></div>
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
                      <TextField value={course}  className="secondhead-3"
                      onChange={(value)=>changeState(["Education",i,"course"],value)}/>
                      </div>
                  <div className="secondheaddis-3"><TextField value={collegeName} 
                  onChange={(value)=>changeState(["Education",i,"collegeName"],value)}/>
                  | <TextField value={graduationyear}  
                  onChange={(value)=>changeState(["Education",i,"graduationyear"],value)}/>
                  <button onClick={()=>
                      deleteList(["Education"],i)}
                      className="closebutton-3">X</button>
                  </div>
               
                </div>
               <ul>
                  {academicawards.map(({value,id},j)=><li className="licolor-3" key={id}>
                      <TextArea
                      value={value}
                      onChange={value=>changeState(["Education",i,"academicawards",j,"value"],value)}
                      addToList={value=>addToList(["Education",i,"academicawards"],j+1,value)}
                      deleteList={value=>deleteList(["Education",i,"academicawards"],j,value)}
                      length={academicawards.length}
                      />
                    </li>)}
               </ul>
               </>
               
            )}
            )}
            <div className="button-3">
                     <button onClick={
                         ()=>
                             addToList(["Education"],Education.length,{                          
                                    collegeName:"The University of Texas at Dalla",
                                    graduationyear:"September 2007",
                                    course:"Bachelor of Arts in Business",
                                    academicawards:[
                                    { id:1,
                                       value:"Academic Awardee of AY 2007-2008"}
                                    ]
                             })}
                        >+</button></div>
               
               <div className="firsthead-3">Key Skills</div>
               <ul>
                   {skills.map(({value,id},i)=><li className="licolor-3" key={id}>
                   <TextArea value={value}  
                   onChange={(value)=>changeState(["skills",i,"value"],value)}
                   addToList={value=>addToList(["skills"],i+1,value)}
                   deleteList={value=>deleteList(["skills"],i,value)}
                   length={skills.length}
                   /></li>)}
                  
               </ul>


               
            </div>
           
        </div>
        <div>
       
        </div>
           <div className="download-button">
              <button onClick={()=>{downloadTemplate(template)}}>Download</button>
            </div>
        </>
    )
}

export default Raeez
