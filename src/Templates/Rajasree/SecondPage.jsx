import 'react-circular-progressbar/dist/styles.css';
import "./second.css"
import Profile4 from "./assets/icons/become_an_illustrator.jpg"
import { CircularProgressbar} from 'react-circular-progressbar';
import { useState } from "react"
import produce from "immer"
import TextField from "./Components/TextField"
import TextArea from "./Components/TextArea"
import FileUpload from './Components/FileUpload';
import { useStoreState} from 'easy-peasy';
import ProgressBar from './Components/ProgressBar';
const SecondPage = () => {
    const [progress,setProgress]=useState(0);
    const [skills, setSkills] = useState({
        photoshop: 0,
        afterEffects: 0,
        lightRoom: 0
    })
    // const  progressivevalue=()=>{
    //     const progressValue = Math.floor(Math.random()*101);
    //     setProgress(progressValue)
    // }
    // const onChange = e =>{
    //     if(e.target.value){
    //         let progress = parseInt(e.target.value, 10);
    //         if(progress >100){
    //             progress=100;
    //         }
    //         setProgress(progress)
    //     }else{
    //         setProgress(0);
    //     }

    // }
    // const states={
    //     size :100,
    //     progress,
    //     strokeWidth:10,
    //     circleOneStroke: 'gray',
    //     circleTwoStroke: 'white'
    // }

    const onChange = (key, value) => {
        setSkills(prev => {
            return{
                ...prev,
                [key]: value
            }
        })
    }
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
        name1:"Patrick",
        name2:"Marz",
        designation:"Illustrator",
        details:{call:" 1234567890",
        email:"email@youremail.com",
        location:"America"},
        profile:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium dicta ducimus deserunt labore ad officia explicabo impedit. Repellendus mollitia quidem suscipit deserunt nostrum odit deleniti id aliquid neque dicta?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos illum ullam eaque porro sapiente architecto voluptatum repellat odit natus quibusdam, non blanditiis dicta, hic animi quia et cupiditate temporibus.",
        skillset:{
            photoshop:"PhotoShop",
            afterEffects:"AfterEffects",
            lightRoom:"LightRoom",
            
        },
        skillname:{
            ps:"PS",
            ae:"AE",
            lr:"LR",
            
        },
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
    const userData = useStoreState((state) => state.userData);

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
    const{theme,profileImage,name1,name2,designation,details,profile,experience,education,skillset,skillname}=state;
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
                        <TextField value={userData.fullname} className='firstname_4_1'
                        onChange={(value)=>changeState(["name1"],value)}/>
                        <br/>
                        {/* <TextField value={name2} className='firstname_4_1'
                        onChange={(value)=>changeState(["name2"],value)}/> */}
                        <TextField value={designation} className="job4_1"
                        onChange={(value)=>changeState(["designation"],value)}/>
                    </div>
                    <div className="contacts4_1">
                        ✆<TextField value={details.call}
                        onChange={(value)=>changeState(["details","call"],value)}/><br/>
                        ✉<TextField value={userData.email}
                        onChange={(value)=>changeState(["details","email"],value)}/><br/>
                        📍<TextField value={details.location}
                        onChange={(value)=>changeState(["details","location"],value)}/><br/>
                    </div>
                </div>
                <div className="bottom4_1">
                    <div className="bottomleft4_1">   
                        <FileUpload image={userData.profilePic} 
                        onChange={value=>changeState(["profileImage"],value)}/>
                        
                        <div className="profile4_1">Profile</div>
                        <div className="description4_1">
                            <TextArea value ={profile}
                            onChange={value=>changeState(["profile"],value)}/>
                        </div>
                    <div className="profile4_1">Skills</div>
                    <div className="circlesection4_1">
                        <div className="uppercircle4_1">
                            <div className="circle4_1"><ProgressBar progress={skills.photoshop} 
                             text="PS" />
                            </div>
                            <input type="text" name='percent' placeholder='progress value add'
                            onChange={(e)=>onChange('photoshop', e.target.value)}/>
                            <div className="circlename4_1">
                            <TextField value={skillset.photoshop} 
                            onChange={(value)=>changeState(["skillset","photoshop"],value)}/>
                            </div>
                        </div>
                        <div className="lowercircle4_1">
                            <div className="circle4_1" ><ProgressBar progress={skills.afterEffects} text="AE"/></div>
                            <input type="text" name='percent' placeholder='progress value add'
                            onChange={(e)=>onChange('afterEffects', e.target.value)}/>
                            <div className="circlename4_1">
                            <TextField value={skillset.afterEffects} 
                            onChange={(value)=>changeState(["skillset","afterEffects"],value)}/>
                            </div>
                
                        </div>
                    <div className="middle4_1">
                        <div className="circle4_1"><ProgressBar progress={skills.lightRoom} text="LR"/></div>
                        <input type="text" name='percent' placeholder='progress value add'
                            onChange={(e)=>onChange('lightRoom', e.target.value)}/>
                        <div className="circlename4_1">
                        <TextField value={skillset.lightRoom} 
                            onChange={(value)=>changeState(["skillset","lightRoom"],value)}/>
                        </div>
                    
                    </div>
                    {/* <button onClick={progressivevalue}>random</button> */}
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
        </>   
       
    )
}

export default SecondPage
