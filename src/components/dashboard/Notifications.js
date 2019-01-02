import React from "react";
import { format } from "timeago.js";
import './Notifications';

const Notification = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="ard z-depth-0">
        <div className=" mdc-card">
          <span className="card-title"> Notifications</span>
          <ul className="notification my-card">
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="pink-text">{item.user} </span>
                    <span>{item.content}</span>
                    <div className="grey-text note-date">
                      {format(item.time.toDate().toString())}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
