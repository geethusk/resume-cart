import 'react-circular-progressbar/dist/styles.css';
import "./second.css"
import Profile4 from "./assets/icons/become_an_illustrator.jpg"
import { CircularProgressbar} from 'react-circular-progressbar';
import { useState,useEffect} from "react"
import produce from "immer"
import TextField from "./Components/TextField"
import TextArea from "./Components/TextArea"
import FileUpload from './Components/FileUpload';
import { useStoreState} from 'easy-peasy';
import ProgressBar from './Components/ProgressBar';
import downloadTemplate from '../../Routes/templateDownload';
import download from "../../assets/icons/download-solid.svg"
const SecondPage = () => {
    const [progress,setProgress]=useState(0);
    const [skills, setSkills] = useState({
        photoshop: 0,
        afterEffects: 0,
        lightRoom: 0
    }) 

    
    const colorThemeList4_1=[
        "indigo4",
        "darkviolet4",
        "blue4",
        
        
        "orange4",
        
        "brown4",
        "black4"
    ]
    const[state,setState]=useState({
        theme:['black4'],
        profileImage:Profile4,
        name:"Patrick",
        // name2:"Marz",
        designation:"Illustrator",
        details:{call:" 1234567890",
        gmail:"email@youremail.com",
        location:"America"},
        profile:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium dicta ducimus deserunt labore ad officia explicabo impedit. Repellendus mollitia quidem suscipit deserunt nostrum odit deleniti id aliquid neque dicta?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos illum ullam eaque porro sapiente architecto voluptatum repellat odit natus quibusdam, non blanditiis dicta, hic animi quia et cupiditate temporibus.",
        // skillset:{
        //     photoshop:"PhotoShop",
        //     afterEffects:"AfterEffects",
        //     lightRoom:"LightRoom",
            
        // },
        skillset:[
            {
                id:1,
                value: "PhotoShop",
                percentage: 0
            },
            {
                id:2,
                value:"AfterEffects",
                percentage: 0
            },
            {
                id:3,
                value:"LightRoom",
                percentage: 0
            }     
            ],
        education:[
            {
                
                college:"University Of Arts",
                startingdate:"2013",
                endingdate:"2017",
                collegedetails:
                    
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit harum consequuntur laudantium molestias expedita illum ullam doloremque rerum sapiente ratione, ad, illo consectetur, corporis debitis aperiam! Eligendi earum aliquam quod?"
                     
            },
            {
                college:"University Of Arts",
                startingdate:"2013",
                endingdate:"2017",
                collegedetails:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit harum consequuntur laudantium molestias expedita illum ullam doloremque rerum sapiente ratione, ad, illo consectetur, corporis debitis aperiam! Eligendi earum aliquam quod?"
                    
                     
            }
            
        ],
        experience:[
            {
                
                job:"Director",
                joiningdate:"2013",
                retiredate:"2017",
                jobdetails:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit harum consequuntur laudantium molestias expedita illum ullam doloremque rerum sapiente ratione, ad, illo consectetur, corporis debitis aperiam! Eligendi earum aliquam quod?"
                    
            },
            {job:"Director",
            joiningdate:"2013",
            retiredate:"2017",
            jobdetails:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit harum consequuntur laudantium molestias expedita illum ullam doloremque rerum sapiente ratione, ad, illo consectetur, corporis debitis aperiam! Eligendi earum aliquam quod?"
                
                
            },
            {
                job:"Director",
                joiningdate:"2013",
                retiredate:"2017",
                jobdetails:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit harum consequuntur laudantium molestias expedita illum ullam doloremque rerum sapiente ratione, ad, illo consectetur, corporis debitis aperiam! Eligendi earum aliquam quod?"
                         
            }
            
        ]
        
    })
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
    const onChange = (key,value) => {
        if(value>100){
            changeState(key, 100)
        }else {
            changeState(key, value)
        }
    }
    const userData = useStoreState((state) => state.userData);
   
    
    useEffect(()=>{
        if( userData.fullname || userData.email || userData.profilePic){
           changeState(["name"],userData.fullname)
           changeState(["details","gmail"],userData.email)
           changeState(["profileImage"],userData.profilePic)
          
           } 
 
     },[userData.fullname,userData.email,userData.profilePic])

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
                        if(value) draft[keys[0]][i-1].value += value;
                        break;
                    case 2:
                        draft[keys[0]][keys[1]].splice(i,1);
                        if(value) draft[keys[0]][keys[1]][i-1].value += value;
                        break;
                    case 3:
                        draft[keys[0]][keys[1]][keys[2]].splice(i,1);
                        if(value) draft[keys[0]][keys[1]][keys[2]][i-1].value += value;

                        break;
                    case 4:
                        draft[keys[0]][keys[1]][keys[2]][keys[3]].splice(i,1);
                        if(value) draft[keys[0]][keys[1]][keys[2]][keys[3]][i-1].value += value;
                        break;
                        default:
                            break;
                }
            })
        })
    }
   
    const{theme,profileImage,name,designation,details,profile,experience,education, skillset}=state;
    return (
        <>
        <div className="theme_selector_list4">
            {colorThemeList4_1.map((value,i)=>
            
            
            <div className={`theme_selector4-${value}`}
            onClick={()=>{
                changeState(["theme",0],value)

            }}key={i}
            ></div>)}
            
        </div>
        <div className={`main_body4_1 main_body4_1-${theme[0]}`}>
            <div className="main_container4_1">
                <div className="head4_1">
                    <div className='firstname_4_1'>
                        <TextField value={name} className='firstname_4_1'
                        onChange={(value)=>changeState(["name"],value)}/>
                        <br/>
                        <TextField value={designation} className="job4_1"
                        onChange={(value)=>changeState(["designation"],value)}/>
                    </div>
                    <div className="contacts4_1">
                        ✆<TextField value={details.call}
                        onChange={(value)=>changeState(["details","call"],value)}/><br/>
                        ✉<TextField value={details.gmail}
                        onChange={(value)=>changeState(["details","gmail"],value)}/><br/>
                        📍<TextField value={details.location}
                        onChange={(value)=>changeState(["details","location"],value)}/><br/>
                    </div>
                </div>
                <div className="bottom4_1">
                    <div className="bottomleft4_1">   
                        <FileUpload image={profileImage} 
                        onChange={value=>changeState(["profileImage"],value)}/>
                        
                        <div className="profile4_1">Profile</div>
                        <div className="description4_1">
                            <TextArea value ={profile}
                            onChange={value=>changeState(["profile"],value)}/>
                        </div>
            
                    <div className="profile4_1">Skills</div>
                    
                    <div className="circlesection4_1">
                        {skillset.map(({value, percentage},i)=>
                            <div className="uppercircle4_1">
                                
                                <div className="circle4_1"><ProgressBar progress={percentage}
                                text="PS" />
                                </div>
                               
                                <input type="text" name='percent' placeholder='progress value add'
                                onChange={(e)=>{onChange(["skillset",i,"percentage"], e.target.value)}}/>
                                
                                <div className="circlename4_1">
                                <button onClick={()=>{deleteList(["skillset"], i, undefined)}}
                                    className="close4">X</button>
                                <TextField value={value}
                                onChange={(value)=>changeState(["skillset",i,"value"],value)}
                                length={skillset.length}/>
                                </div>
                                
                                 </div>              
                            )   
                        }
                    </div> 
                    <div className="new4">
                        <button onClick={()=>{addToList(['skillset'], skillset.length, {
                            id: skillset.length+1,
                            value:"Photoshop",
                            percentage: 0
                            })}}>Add new</button>
                    </div>
                    
        </div>
        
                <div className="bottomright4_1">
                <div className="profile4_1">Education</div>
                {education.map(({college,startingdate,endingdate,collegedetails},i)=>{
                    return(
                        <>
            
                <div className="fistdes4_1">
                <button className="second4_1" onClick={()=>
                    deleteList(["education"],i)}
                     className="close4">X</button>
                    <TextField value={college}
                onChange={(value)=>changeState(["education",i,"college"],value)}/><br/>
                    
                <TextField value={startingdate}
                onChange={(value)=>changeState(["education",i,"startingdate"],value)}/>-
                <TextField value={endingdate}
                onChange={(value)=>changeState(["education",i,"endingdate"],value)}/> 
                  
                <TextArea value ={collegedetails}
                    onChange={value=>changeState(["education",i,"collegedetails"],value)}
                    />
             
              </div>
           </>
            ) })}
                <div className="new4">
            <button onClick={()=>
            addToList(["education"],education.length,{
                college:"University Of Arts",
                startingdate:"2013",
                endingdate:"2017",
                collegedetails:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit harum consequuntur laudantium molestias expedita illum ullam doloremque rerum sapiente ratione, ad, illo consectetur, corporis debitis aperiam! Eligendi earum aliquam quod?"
                     
               
            })} 
           
            >Add new</button></div>
                
                <div className="profile4_1">Experience</div>
               
                {experience.map(({job,joiningdate,retiredate,jobdetails},i)=>{
                    return(
                        <>
            
                <div className="fistdes4_1">
                <button className="second4_1" onClick={()=>
                    deleteList(["experience"],i)}
                     className="close4">X</button>
                    <TextField value={job}
                onChange={(value)=>changeState(["experience",i,"job"],value)}/><br/>
                   
                <TextField value={joiningdate}
                onChange={(value)=>changeState(["experience",i,"joiningdate"],value)}/>-
                <TextField value={retiredate}
                onChange={(value)=>changeState(["experience",i,"retiredate"],value)}/> 
                  
                <TextArea value ={jobdetails}
                    onChange={value=>changeState(["experience",i,"jobdetails"],value)}
                    />
            
              </div>
           </>
            ) })}
             <div className="new4">
            <button onClick={()=>
            addToList(["experience"],experience.length,{
                job:"Director",
                joiningdate:"2013",
                retiredate:"2017",
                jobdetails:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit harum consequuntur laudantium molestias expedita illum ullam doloremque rerum sapiente ratione, ad, illo consectetur, corporis debitis aperiam! Eligendi earum aliquam quod?"
                                   
            })} 
            >Add new</button></div>   
                
                </div>
            </div>       
        </div>   
        </div>
        <div className="download-button">
        <button onClick={()=>{downloadTemplate(state)}}><img className="save-button" src={download} /></button>
        </div>
        
        </>   
       
    )
}

export default SecondPage
