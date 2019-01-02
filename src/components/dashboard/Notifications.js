import React from "react"
import hdate from "human-date";

const Notification = (props) => {
    const {notifications} = props;
    return(
        <div className="section">
        <div className="ard z-depth-0">
        <div className="card-content">
        <span className="card-title"> Notifications</span>
        <ul className="notification">
            {notifications && notifications.map(item => {
                return (
                    <li key={item.id}>
                    <span className="pink-text">{item.user} </span>
                    <span>{item.content}</span>
                    <div className='grey-text note-date'>
                        {hdate.prettyPrint(new Date(item.time))}
                    </div>
                    </li>
                )
            })}
        </ul>
        </div>
        </div>
        </div>
    )
}

export default Notification;