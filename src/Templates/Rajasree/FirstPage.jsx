import "./raju.css"
import { useState,useEffect } from "react"
import { useStoreState,useStoreActions} from 'easy-peasy';
import download from "../../assets/icons/download-solid.svg"
import produce from "immer"
import TextField from "./Components/TextField"
import TextArea from "./Components/TextArea"
import downloadTemplate from "../../Routes/templateDownload";
const Rajasree = () => {
    const colorThemeList4=[
        "indigo4",
            "darkviolet4",
            "blue4",
            "green4",
            "yellow4",
            "orange4",
            "Red4",
            "brown4",
            "black4"
    ]
    const[state,setState]=useState({
        theme:['black4'],
        logo:"CC",
        name:"Chris Candidate",
        designation:"Sales Associate",
        address:{street:"4759 Sunnydale Lane",
        city:" Plano, TX, 75071",
        gmail:"email@youremail.com",
        phone:"(469) 385-2948"},
        bio:`Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.`,
        experience:[
            {
                job:"Human Resources Manager",
                company:"Jim's Widget Factory, Plano, TX",
                startingdate:"January 2016",
                endingdate:"Present",
                jobdetails:[
                    {id:1,
                    value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                    },
                    {id:2,
                        value: "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment"
                        },
                        {id:3,
                            value:"Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies"
                            },
                            {id:4,
                                value:"Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met"
                                },
                    
                    
                   

                    ]  
            },
            {
                job:"Human Resources Associate",
                company:"Jim's Widget Factory, Plano, TX",
                startingdate:"March 2015 ",
                endingdate:"January 2016 ",
                jobdetails:[
                    {id:1,
                        value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations"
                        },
                        {id:2,
                            value: "Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment"
                            },
                            {id:3,
                                value:"Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies"
                                },
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
                        id: 1,
                        value: "Academic Awardee of AY 2007-2008"

                    }
                   ]  
            }],
        skills:[
           
            
            {
                id:1,
                value: "Detail oriented"
            },
            {
                id:2,
                value:" Well-versed in Texas employment law"
            },
            {
                id:3,
                value:"Excellent written and oral communication skills" 
            },
            {
                id:4,
                value: "Develops positive workplace relationships"
            }
                    
            ] 

    })
    const userData = useStoreState((state) => state.userData);
    const changeFullName=useStoreActions((action)=>action.changeFullName)
    
    useEffect(()=>{
       if( userData.fullname || userData.email){
          changeState(["name"],userData.fullname)
          changeState(["address","gmail"],userData.email)
         
          } 

    },[userData.fullname,userData.email])

    

    const getLogo=(name)=>{
        let nameList = name.split(" ");
        if(nameList.length<2 || !nameList[1]){
            return nameList[0][0]
        }
        if(!nameList[nameList.length-1]){
            return nameList[0][0]+nameList[nameList.length -2][0];
        }
        return nameList[0][0]+nameList[nameList.length -1][0];
    }
    const changeState =(keys,value)=>{
        setState((prev)=>{
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
        })
    }
    const addToList =(keys,i,value)=>{
        setState((prev)=>{
            return produce(prev,(draft)=>{
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
        })
    }
    const deleteList =(keys,i,value)=>{
        if(i===0)return
        setState((prev)=>{
            return produce(prev,(draft)=>{
                switch(keys.length){
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
        })
    }
    const{theme,logo,name,designation,address,bio,experience,education,skills}=state;
    return (
        <>
        <div className="theme_selector_list4">
            {colorThemeList4.map((value,i)=>
            
            
            <div className={`theme_selector4-${value}`}
            onClick={()=>{
                changeState(["theme",0],value)

            }}key={i}
            ></div>)}
            
        </div>
        
        <div className={`main_body4 main_body4-${theme[0]}`}>
            <div className="header_section4">
                <div className="logo4">{getLogo(name)}</div>

                <div className="namesection">
                <TextField value={name} className="name4"
                onChange={(value)=>changeState(["name"],value)}/><br/>
                    {/* <input type="text" value={name} className="name4"
                    onChange={(e)=>changeState(["name"],e.target.value)}/> */}
                    {/* <h2 className="job4">{designation}</h2> */}
                    {/* <input type="text" value={designation} className="job4"
                    onChange={(e)=>changeState(["designation"],e.target.value)}/> */}
                    <TextField value={designation} className="job4"
                onChange={(value)=>changeState(["designation"],value)}/>

                </div>
            <div className="headerdescription4">
                <TextField value={address.street}className="headerdescription4"
                onChange={(value)=>changeState(["address","street"],value)}/>
                {/* <input type="text" value={address.street}
                onChange={(e)=>changeState(["address","street"],e.target.value)}/> */}
                 
                 <TextField value={address.city}className="headerdescription4"
                onChange={(value)=>changeState(["address","city"],value)}/>
                {/* <input type="text" value={address.city}
                onChange={(e)=>changeState(["address","city"],e.target.value)}/> */}
                
                <TextField value={address.gmail}className="headerdescription4"
                onChange={(value)=>changeState(["address","gmail"],value)}/>
                {/* <input type="text" value={address.email}
                onChange={(e)=>changeState(["address","email"],e.target.value)}/> */}
                
                <TextField value={address.phone}className="headerdescription4"
                onChange={(value)=>changeState(["address","phone"],value)}/>
                {/* <input type="text" value={address.phone}
                onChange={(e)=>changeState(["address","phone"],e.target.value)}/> */}
                
                
           </div>
            </div>
            <div className="body_description4">
                <div className="firstdes4">
                    <TextArea value ={bio}
                    onChange={value=>changeState(["bio"],value)}
                // <textarea value= {bio}
                //     onChange={(e)=>changeState(["bio"],e.target.value)}
                />
            </div>
            <div className="firsthead4">Professional Experience</div>
            
            {experience.map(({job,company,startingdate,endingdate,jobdetails},i)=>{
                return(
                    <>
                    <div className="secondheadwrapper4">
            <div className="secondhead4">
                {/* {job} */}
                <TextField value={job}
                onChange={(value)=>changeState(["experience",i,"job"],value)}/>
                {/* <input type="text" value={job}
                    onChange={(e)=>changeState(["experience",i,"job"],e.target.value)}/> */}
                </div>
            <div className="secondsmallhead4">
            <TextField value={company}
                onChange={(value)=>changeState(["experience",i,"company"],value)}/>

            {/* <input type="text" value={company}
                    onChange={(e)=>changeState(["experience",i,"company"],e.target.value)}/> */}
                {/* {company} */}
                 |
                 <TextField value={startingdate}
                onChange={(value)=>changeState(["experience",i,"startingdate"],value)}/>
                 {/* <input type="text" value={startingdate}
                    onChange={(e)=>changeState(["experience",i,"startingdate"],e.target.value)}/> */}
                  {/* {startingdate} */}
                   - 
                   <TextField value={endingdate}
                onChange={(value)=>changeState(["experience",i,"endingdate"],value)}/>
                   {/* <input type="text" value={endingdate}
                    onChange={(e)=>changeState(["experience",i,"endingdate"],e.target.value)}/> */}
                   {/* {endingdate} */}
                     <button onClick={()=>
                    deleteList(["experience"],i)}
                     className="close4">X</button>
            </div></div>
            <ul>
            {jobdetails.map(({value,id},j)=><li className="licolor" key={id}>
            <TextArea value ={value}
                    onChange={value=>changeState(["experience",i,"jobdetails",j,"value"],value)}
                    addToList={value=>addToList(["experience",i,"jobdetails"],j+1,value)}
                    deleteList={value=>deleteList(["experience",i,"jobdetails"],j,value)}
                    length={jobdetails.length}/>
            {/* <textarea value={value}
                    onChange={(e)=>changeState(["experience",i,"jobdetails",j],e.target.value)}/> */}
            </li>)}
            
                
                
            </ul> </>

                )
            })}
            <div className="new4">
            <button onClick={()=>
            addToList(["experience"],experience.length,{
                job:"Human Resources Manager",
                company:"Jim's Widget Factory, Plano, TX",
                startingdate:"January 2016",
                endingdate:"Present",
                jobdetails:[{id:1,
                     value:"Implement effective company policies to ensure that all practices comply with labor and employment regulations"},]

            })} 
            >Add new</button></div>
             <div className="firsthead4">Education</div>
                {education.map(({qualification,joiningdate,graduationdate,academicdetails},i)=>{
                    return(
                        <>
            <div className="secondheadwrapper4">
                <div className="secondhead4">
                    {/* {qualification} */}
                    <TextField value={qualification}
                onChange={(value)=>changeState(["education",i,"qualification"],value)}/>
                    {/* <input type="text" value={qualification}
                    onChange={(e)=>changeState(["education",i,"qualification"],e.target.value)}/> */}

                    </div>
                <div className="secondsmallhead4">
                    {/* {joiningdate}  */}
                    <TextField value={joiningdate}
                onChange={(value)=>changeState(["education",i,"joiningdate"],value)}/>
                    {/* <input type="text" value={joiningdate}
                    onChange={(e)=>changeState(["education",i,"joiningdate"],e.target.value)}/> */}
                    |
                    <TextField value={graduationdate}
                onChange={(value)=>changeState(["education",i,"graduationdate"],value)}/> 
                    {/* <input type="text" value={graduationdate}
                    onChange={(e)=>changeState(["education",i,"graduationdate"],e.target.value)}/> */}
                    {/* {graduationdate} */}
                    <button onClick={()=>
                    deleteList(["education"],i)}
                     className="close4">X</button>
               </div></div> 
                <ul>
                {academicdetails.map(({value,id},j)=><li className="licolor" key={id}>
                <TextArea value ={value}
                    onChange={value=>changeState(["education",i,"academicdetails",j,"value"],value)}
                    addToList={value=>addToList(["education",i,"academicdetails"],j+1,value)}
                    deleteList={value=>deleteList(["education",i,"academicdetails"],j,value)}
                    length={academicdetails.length}
            // <textarea value={value}
            //         onChange={(e)=>changeState(["education",i,"academicdetails",j],e.target.value)}
                    />
            </li>)}
               
            </ul> 
            </>


                 ) })}
             <div className="new4">
            <button onClick={()=>
            addToList(["education"],education.length,{
                qualification:"Bachelor of Arts in Business",
                college:"The University of Texas at Dallas ",
                joiningdate:"September 2007",
                graduationdate:"May 2011",
                academicdetails:[
                    {id:1,value:"Academic Awardee of AY 2007-2008"}]  
               
            })} 
            >Add new</button></div>
            <div className="firsthead4">Key Skills</div>
            <ul>
            {skills.map(({value,id},i)=><li className="licolor" key={id}>
            <TextArea value ={value}
                    onChange={(value)=>changeState(["skills",i,"value"],value)}
                    addToList={value=>addToList(["skills"],i+1,value)}
                    deleteList={value=>deleteList(["skills"],i,value)}
                    length={skills.length}/>
            
            {/* <textarea value={value}
                    onChange={(e)=>changeState(["skills",i],e.target.value)}/> */}
                {/* {value} */}
                </li>)}
                
            </ul> 
            
            
            </div>
            
            
        </div>
        <div className="download-button">
        <button onClick={()=>{downloadTemplate(state)}}><img className="save-button" src={download} /></button>
        </div>
        </>
    )
}

export default Rajasree
