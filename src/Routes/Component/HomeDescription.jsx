import React from 'react'
import "../HomeStyle.css"
import {useNavigate} from 'react-router-dom'
import { useState,useContext } from 'react'
import star from "../../assets/icons/star-regular.svg"
import solid from "../../assets/icons/star-solid.svg"
import { TemplateContext } from '../../Context/TemplateList'
import { UserContext } from '../../Context/UserContext'




const HomeDescription = () => {
    const {template,setTemplate}=useContext(TemplateContext) 
    const {userData, setUserData } = useContext(UserContext)
    
    const navigate=useNavigate();
    // const [isLiked,setIsLiked]=useState(false);
    const[type,setType]=useState("all");
    const[status,setStatus]=useState("all");
    
    // const sort=(value)=>{
    //         setTemplate(totalTemplateList.filter(({type})=>type===value))
    //     }
    console.log(template);

    return (

        <div className="home-description-image-section">
           <h1 className="home-heading">Showcase your potential,Cut down on writing and,Store your resume online</h1>
            <div className="home-description-section">
                Easily build a professional-looking resume that showcases your goals and qualifications. Just pick a<br/>template and fill in the blanks. No formatting is needed!
            </div> 
            {!userData.isAdmin && 
            <div className="home-sort-section">
                <select value={status}
                    onChange={(e)=>{
                        setStatus(e.target.value);
                        }}
                className="select-sort">
                    <option className="home-option" value="all">You Are ...</option>
                    <option className="home-option" value="fresher">Fresher</option>
                    <option className="home-option" value="expert">Expert</option>
                </select>
                <select value={type}
                    onChange={(e)=>{
                        setType(e.target.value);
                       
                        }}
                className="select-sort">
                     <option className="home-option" value="all">I need...</option>
                    <option className="home-option" value="premium">Premium</option>
                    <option className="home-option" value="free">Free</option>
                </select>
            </div>}

            <div className="demo_home">
               {template.filter((value)=>{
                    return (type==="all"|| value.type===type)&&(status==="all"||value.status===status)
                })
                .map(({id,image,url,isLiked},i)=>
                    <div className="demo_images">
                        {!userData.isAdmin &&
                        <img className="like_button"src={isLiked?solid:star}
                            onClick={
                            ()=>{
                                setTemplate(prev=>{
                                    let newList=[...prev];
                                    let newLike={...newList[i]};
                                    newLike.isLiked=!newLike.isLiked;
                                    newList[i]=newLike;
                                    return newList;
                                })
                            }
                            }
                        />}
                    <img className='demos'
                    onClick={()=>{
                        navigate(url)
                    }}
                src={image} key={id} alt="" />
                </div>
                
                
                )}
                
                
                



            </div>
            

        </div>
    )
}

export default HomeDescription
