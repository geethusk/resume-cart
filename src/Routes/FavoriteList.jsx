import {useContext} from 'react'
import { TemplateContext } from '../Context/TemplateList'
import "./favorite.css"
const FavoriteList = () => {
    
    const {template}=useContext(TemplateContext)
    const favList=template.filter((value)=>
        value.isLiked==="true"
    )
    console.log(template);
    console.log(favList);

    return (
        <div>
            
        </div>
    )
}

export default FavoriteList
