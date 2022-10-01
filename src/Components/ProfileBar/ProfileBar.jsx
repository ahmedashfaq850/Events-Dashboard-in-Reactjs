import React from "react";
import "./ProfileBar.css";
const ProfileBar = () => {
  return (
    <>
      <div className="profileBarContainer">
        <div className="left-side">
          <div className="img-container">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </div>
          <div className="content">
            <h3>Louise Williamson</h3>
            <p>Guisborough, UK</p>
          </div>
        </div>
        <div className="right-side">
          <div className="vertical-line"></div>
          <div className="event">
            <div className="Event upcomingEvent">4</div>
            <div>
              <p className="purp-text">Upcoming Events</p>
            </div>
          </div>
          <div className="vertical-line"></div>
          <div className="event">
            <div className="Event grey">7</div>
            <p className="gre-text">Current Events</p>
          </div>
          <div className="vertical-line"></div>
          <div className="event">
            <div className="Event grey">0</div>
            <p className="gre-text">Past Events</p>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="item primarybox">Upcoming Events (27)</div>
        <div className="item Secondary">Current Events (5)</div>
        <div className="item Secondary">Pas Events (2)</div>
      </div>
    </>
  );
};

export default ProfileBar;
