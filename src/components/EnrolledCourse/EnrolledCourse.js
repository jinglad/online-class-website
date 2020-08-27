import React from 'react';
import "./EnrolledCourse.css";

const EnrolledCourse = (props) => {
    const enrolledCourse = props.course;
    // console.log(enrolledCourse)
    let total = 0;
    for (let i = 0; i < enrolledCourse.length; i++) {
        const element = enrolledCourse[i].price;
        total += element;
    }
    return (
        <div className="box bg-danger rounded">
            <div className="innerBox">
                <h3>Enrolled - {enrolledCourse.length}</h3>
                <h3>Total Price - ${total}</h3>
            </div>
        </div>
    );
};

export default EnrolledCourse;