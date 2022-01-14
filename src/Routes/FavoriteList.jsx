import {useContext,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { TemplateContext } from '../Context/TemplateList'
import "./favorite.css"
import "./HomeStyle.css"
import api from '../services/api';

const FavoriteList = () => {
    const navigate=useNavigate();
    const {template,setTemplate}=useContext(TemplateContext)
    const [favorite,setFavorite]=useState([])
    const favList=template.filter(value => value.isLiked===true)
    const [templateRemoved,setTemplateRemoved]=useState(false)
    // const [isClosed,setIsClosed]=useState(favList)
    useEffect(()=>{
        const favoriteLiked = async() => {
            try {
                const response = await api.get("/get-favorite-template")
                console.log(response);
                setFavorite(response.data.data)
            } catch (error) {
                console.log(error.response);
            }
        }
        favoriteLiked()
    }, [templateRemoved]) 
    
    const favoriteRemove = async(url) => {
        try {
            const response = await api.post("/remove-favorite-template",{url:url})
            console.log(response);
            if(response.data.status){
                    setTemplateRemoved(prev => !prev)
            }
        } catch (error) {
            console.log(error.response);
        }
    
    
}  
    
    return (
        <div className='favor_head'>
            MY WISHLIST...♥
            <div className='demo_home'>
            {favorite.map(({id,image,url},i)=>{
                return(
                <>
                <div className="close_container">

                <button className='close_button'
                    onClick={()=>{
                        setTemplate(prev=>{
                            let newList = [...prev];
                            newList[id] = {
                                ...newList[id],
                                isLiked: false
                            }
                            return newList;
                        })
                        favoriteRemove(url)
                    }}
                >X</button>
                    <img className='demos'
                        onClick={()=>{
                            navigate(url)
                        }}
                    src={image} key={id} alt=""  />
                    </div>
                </>
                )
            })}
            </div>
            
        </div>
    )
}

export default FavoriteList
