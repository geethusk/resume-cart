import React from 'react'
import "../HomeStyle.css"
import {Outlet,useNavigate} from 'react-router-dom'
import First from "../Component/1.png"
import Second from "../Component/2.png"
import Third from "../Component/3.png"
import Forth from "../Component/4.png"
import Fifth from "../Component/5.png"
import Sixth from "../Component/6.png"

const HomeDescription = () => {
    const navigate=useNavigate();

    return (

        <div className="home-description-image-section">
           <h1 className="home-heading">Showcase your potential,Cut down on writing and,Store your resume online</h1>
            <div className="home-description-section">
                Easily build a professional-looking resume that showcases your goals and qualifications. Just pick a<br/>template and fill in the blanks. No formatting is needed!
            </div> 
            <div className="home-sort-section">
                <select className="select-sort">
                    <option className="home-option" value="">You Are ...</option>
                    <option className="home-option" value="fresher">Fresher</option>
                    <option className="home-option" value="experienced">Expert</option>
                </select>
                <select className="select-sort">
                    <option className="home-option" value="premium">Premium</option>
                    <option className="home-option" value="free">Free</option>
                </select>
            </div>
            <div className='demo_home'>
                <img
                    onClick={()=>{
                        navigate("/rajasree/second")
                    }}
                src={First} alt="" />
                <img
                    onClick={()=>{
                        navigate("/geethu")
                    }}
                src={Second} alt="" />
                <img 
                    onClick={()=>{
                        navigate("/geethu/second")
                    }}
                src={Third} alt="" />
                <img 
                    onClick={()=>{
                        navigate("/raeez/second")
                    }}
                src={Sixth} alt="" />
                <img 
                    onClick={()=>{
                        navigate("/rajasree")
                    }}
                src={Forth} alt="" />
                <img 
                    onClick={()=>{
                        navigate("/raeez")
                    }}
                src={Fifth} alt="" />
                



            </div>
            

        </div>
    )
}

export default HomeDescription
