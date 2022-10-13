import React from "react";

const staff = ({ 
    post: { 
        name, 
        imgUrl, 
        position 
    }, index }) => {
return (
    <>
        <div className="col-lg-3">
            <div className="member d-flex align-items-start">
                <div className="member-info">
                    <img src={imgUrl} className="img-fluid" alt="staff-jpegs" />
                    <h4>{name}</h4>
                    <span>{position}</span>
                
                </div>
            </div>
        </div>

        </>
);
};

export default staff;
