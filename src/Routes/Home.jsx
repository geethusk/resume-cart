import React from 'react'

import "./HomeStyle.css"
import "./Component/HomeDescription"
import HomeDescription from './Component/HomeDescription'

const Home = () => {
    return (
        <div className="home-container">
            <HomeDescription/>
        </div>
    )
}

export default Home
