import {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { TemplateContext } from '../Context/TemplateList'
import "./favorite.css"
import "./HomeStyle.css"

const FavoriteList = () => {
    const navigate=useNavigate();
    const {template}=useContext(TemplateContext)
    const favList=template.filter(value => value.isLiked===true)
    // console.log(favList);
    // console.log(template);
    return (
        <div className='favor_head'>
            MY WISHLIST...♥
            {favList.map(({id,image,url},i)=>{
                return(
                <img className='demos'
                    onClick={()=>{
                        navigate(url)
                    }}
                src={image} key={id} alt="" />)
            })}
        </div>
    )
}

export default FavoriteList
