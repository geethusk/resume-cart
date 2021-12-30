import React from 'react'
import "../HomeStyle.css"
import {Outlet,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import First from "../Component/1.png"
import Second from "../Component/2.png"
import Third from "../Component/3.png"
import Forth from "../Component/4.png"
import Fifth from "../Component/5.png"
import Sixth from "../Component/6.png"

const totalTemplateList=[
    {
        id:0,
        title:"",
        type:"premium",
        status:"expert",
        image:First,
        url:"/rajasree/second"
    },

    {
        id:1,
        title:"",
        type:"free",
        status:"expert",
        image:Second,
        url:"/geethu"
    },

    {
        id:2,
        title:"",
        type:"free",
        status:"fresher",
        image:Third,
        url:"/geethu/second"
    },

    {
        id:3,
        title:"",
        type:"premium",
        status:"fresher",
        image:Sixth,
        url:"/raeez/second"
    },

    {
        id:4,
        title:"",
        type:"premium",
        status:"expert",
        image:Forth,
        url:"/rajasree"
    },

    {
        id:5,
        title:"",
        type:"premium",
        status:"fresher",
        image:Fifth,
        url:"/raeez"
    },

]

const HomeDescription = () => {
    const navigate=useNavigate();
    const[template,setTemplate]=useState(totalTemplateList);
    const[type,setType]=useState(totalTemplateList);
    const[status,setStatus]=useState(totalTemplateList);
    
    const sort=(value)=>{
            setTemplate(totalTemplateList.filter(({type})=>type===value))
        }
    

    return (

        <div className="home-description-image-section">
           <h1 className="home-heading">Showcase your potential,Cut down on writing and,Store your resume online</h1>
            <div className="home-description-section">
                Easily build a professional-looking resume that showcases your goals and qualifications. Just pick a<br/>template and fill in the blanks. No formatting is needed!
            </div> 
            <div className="home-sort-section">
                <select 
                    onChange={(e)=>{
                        sort(e.target.value);
                        }}
                className="select-sort">
                    <option className="home-option" value="">You Are ...</option>
                    <option className="home-option" value="fresher">Fresher</option>
                    <option className="home-option" value="expert">Expert</option>
                </select>
                <select
                    onChange={(e)=>{
                        sort(e.target.value);
                        }}
                className="select-sort">
                    <option className="home-option" value="premium">Premium</option>
                    <option className="home-option" value="free">Free</option>
                </select>
            </div>
            <div className='demo_home'>
                {template.map(({id,image,url})=>
                    <img
                    onClick={()=>{
                        navigate(url)
                    }}
                src={image}  key={id} alt="" />
                )}
                
                
                



            </div>
            

        </div>
    )
}

export default HomeDescription
