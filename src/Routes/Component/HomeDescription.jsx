import {useEffect} from 'react'
import "../HomeStyle.css"
import {useNavigate} from 'react-router-dom'
import {useQuery} from 'react-query'
import { useState,useContext } from 'react'
import star from "../../assets/icons/star-regular.svg"
import solid from "../../assets/icons/star-solid.svg"
import { TemplateContext } from '../../Context/TemplateList'
import { UserContext } from '../../Context/UserContext'
import Form from './Form'
import { useStoreState } from 'easy-peasy'
import api from '../../services/api';





const HomeDescription = () => {
    const [formVisibility, setFormVisibility ] = useState(false);
    const [template, setTemplate] = useState([])
    // const {userData, setUserData } = useContext(UserContext)
    const userData = useStoreState((state) => state.userData);
    
    const navigate=useNavigate();
    // const [isLiked,setIsLiked]=useState(false);
    const[type,setType]=useState("all");
    const[status,setStatus]=useState("all");
    const[likedTemplate,setLikedTemplate]=useState([])
    // const sort=(value)=>{
    //         setTemplate(totalTemplateList.filter(({type})=>type===value))
    //     }
    const[errorFormVisibility,setErrorFormVisibility]=useState(false)
    const[error,setError]=useState("")
    
    
    useEffect(()=>{
        const getTemplate = async() => {
            try {
                const response = await api.get("/get-template")
                setTemplate(response.data.data)
            } catch (error) {
                navigate('/network-error')
            }
        }
        getTemplate()
    }, [])
    const postTemplate = async(url) =>{
        try {
            const response = await api.post("/add-favorite-template",{templates:[url]})
            if(response.data.status==true){
                setFormVisibility(false)
            }
        } catch (error) {
            let data = error.response.data
            if(data.status==false){
                setErrorFormVisibility(true)
                setError(data)
            }
        }

    }
    
    const favTemplate = async() => {
            try {
                const response = await api.get("/get-favorite-template")
                setLikedTemplate(response.data.data)
                if(response.data.status==true){
                    setFormVisibility(false)
                }            
            } catch (error) {
                let data = error.response.data
                if(data.status==false){
                    navigate("/loading")
                   
                }
            }
        }
        // const{data,error,isloading,isError}=useQuery(['templates'], ()=> api.get("/get-template"))
        // if(isloading) return <div>Loading...</div>
        // if(isError) return <div>Error</div>

    return (

        <div className="home-description-image-section">
           <h1 className="home-heading">Showcase your potential,Cut down on writing and,Store your resume online</h1>
            <div className="home-description-section">
                Easily build a professional-looking resume that showcases your goals and qualifications. Just pick a<br/>template and fill in the blanks. No formatting is needed!
            </div> 
            {!userData.isAdmin &&                    //if useradminlogged in avoid viewing this section
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
                    <option className="home-option" value="Premium">Premium</option>
                    <option className="home-option" value="Free">Free</option>
                </select>
            </div>}

            <div className="demo_home">
               {template.filter((value)=>{
                   
                    return (type==="all"|| value.type===type)&&(status==="all"||value.status===status)
                    
                }
                
                )
                
                .map(({image,url,isLiked},i)=>
                
                    <div className="demo_images">
                        {!userData.isAdmin && 
                        <img className="like_button"src={ isLiked?solid:star}
                        onClick={
                            ()=>
                            {
                                if(userData. isLoggedIn===false){
                                    navigate("/login")
                                }
                                else{
                                setTemplate(prev=>{
                                    let newList=[...prev];
                                    let newLike={...newList[i]};
                                    newLike.isLiked=!newLike.isLiked;
                                    newList[i]=newLike;
                                    return newList;
                                })
                            }
                            postTemplate(url)
                            favTemplate()
                        }
                        
                        }
                        
                           
                        />}
                    <img className='demos'
                    onClick={()=>{
                        navigate(url)
                    }}
                src={image} key={i} alt="" />
                </div>
                
                
                )
                
            }
            
            
                {userData.isAdmin &&
                <button className='admin_add'
                onClick={()=>{
                    setFormVisibility(true)
                }}
                >+</button>}
            </div>
            

            {formVisibility && <Form setFormVisibility={setFormVisibility} />}
        </div>
    )
}

export default HomeDescription
