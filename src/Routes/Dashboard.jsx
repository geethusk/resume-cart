import { useContext} from 'react'
import './Dashboard.css'
import profilePic from '../Templates/Faslu/images/photo.jpg'
import { UserContext } from '../Context/UserContext'
const Dashboard = () => {
    const { userData} = useContext(UserContext)
    return (
    <div className='dashboard-container'>
        <div className="dashboard-left-section">
            <img src={profilePic}/>
            <div className='dashboard-name'>{userData.fullname}</div>
            <div className="dashboard-contents">Profile</div>
            <div className="dashboard-contents">{userData.email}</div>
            <div className="dashboard-contents">Password<button className='dashboard-reset-button'>RESET</button></div>
        </div>
        <div className="dashboard-right-section">
            <div className="dashboard-section">
                 <label for ="dashboard-password">Confirm Password</label>
                 <div className="dashboard-input">
                     <input type="text"/><br/></div>
             </div>
             <div className="dashboard-section">
                 <label for ="dashboard-password">New Password</label>
                 <div className="dashboard-input">
                     <input type="text"/><br/></div>
             </div>
             <div className="dashboard-section">
                 <label for ="dashboard-password">Confirm New Password</label>
                 <div className="dashboard-input">
                     <input type="text"/><br/></div>
            </div>
            <div>
            <button className='dashboard-button'>UPDATE</button>
            </div>
        </div>
    </div>
      
    )
}

export default Dashboard
    