import React, { useState } from 'react';
import fakedata from '../../fakecourses';
import CourseInfo from '../CourseInfo/CourseInfo';
import EnrolledCourse from '../EnrolledCourse/EnrolledCourse';

const CourseContainer = () => {
    const [courses, setCourses] = useState(fakedata);
    const [addedCourse, setAddedCourse] = useState([]);

    const handleAddCourse = (course) => {
        const newCourse = [...addedCourse, course];
        setAddedCourse(newCourse);
    }

    return (
        <div className="d-flex">
            <div>
                <ul>
                    {
                        courses.map(course => <CourseInfo handleAddCourse={handleAddCourse} course={course}></CourseInfo>)
                    }
                </ul>
            </div>
            <div>
                <EnrolledCourse course={addedCourse}></EnrolledCourse>
            </div>
        </div>
    );
};

export default CourseContainer;