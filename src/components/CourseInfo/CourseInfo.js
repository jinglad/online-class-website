import React from 'react';
import "./CourseInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';



const CourseInfo = (props) => {
    const { title, description, img, price, author } = props.course;
    const element = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div className="course-info d-flex mb-5 w-75 p-3 bg-dark text-white ml-3 rounded">
            <div className="mx-3 mt-2">
                <img src={img} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p className="lead">{description}</p>
                <p>Price - ${price}</p>
                <p>Created By - <span className="text-info">{author}</span></p>
                <button className="btn btn-primary" onClick={() => props.handleAddCourse(props.course)}>{element} Enroll Course</button>
            </div>
        </div>
    );
};

export default CourseInfo;