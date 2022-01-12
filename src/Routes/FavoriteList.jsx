import {useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { TemplateContext } from '../Context/TemplateList'
import "./favorite.css"
import "./HomeStyle.css"

const FavoriteList = () => {
    const navigate=useNavigate();
    const {template,setTemplate}=useContext(TemplateContext)
    const favList=template.filter(value => value.isLiked===true)
    // const [isClosed,setIsClosed]=useState(favList)

    
    return (
        <div className='favor_head'>
            MY WISHLIST...♥
            <div className='demo_home'>
            {favList.map(({id,image,url},i)=>{
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
