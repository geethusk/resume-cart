import React from 'react'


const ProfileSetting = ({ uploadProfile }) => {
    return (
        <div>
            <img className='change-image-button-2'src={camera} alt="camera icon"/>
            <input 
                type="file"
                onChange={(e)=>{
                    setImage(e.target.files[0])
                uploadProfile(e.target.files[0])
            }}   
        />
        </div>
    )
}


export default ProfileSetting
