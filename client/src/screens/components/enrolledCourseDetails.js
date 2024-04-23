import React, { useEffect } from 'react';
import NavBar from "./navbar";
import Button from '@mui/material/Button';
import { Link, useNavigate, useParams } from 'react-router-dom'; // Import useNavigate hook
import { useCourseContext } from '../../context/CourseContext';

const CourseDetails = (props) => {
    const navigate = useNavigate();
    let { id } = useParams();
    let [contentNo, setContentNo] = React.useState(0);
    const { enrolledCourses, setProgress } = useCourseContext()
    const course = enrolledCourses.find(each => each.id === id)
    console.log(course)

    if (course.progress === 25) contentNo = 1
    else if (course.progress === 50) contentNo = 2
    else if (course.progress === 75) contentNo = 3
    else if (course.progress === 100) {
        alert("Your course is now restarted, start from beginning")
        setProgress(id, 0)
    }

    return (
        <div style={{ height: '88vh', width: '100%' }}>
            <NavBar />
            <div style={{ width: '100%', display: 'flex', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', minWidth: '18vw', maxWidth: '18vw', height: '100%', borderRight: '2px solid #00000099' }}>
                    <Link to="/mylearning" style={{ padding: '10px' }}>← <a style={{ color: 'blue' }}>Back to My Learnings</a></Link>
                    <ul style={{ listStyleType: 'none' }}>
                        <li style={{ padding: '20px', width: '100%', borderTop: '1px solid black', backgroundColor: contentNo === 0 ? "#e3e3e3" : "white" }}>
                            <button onClick={() => {
                                if (course.progress > 0) {
                                    alert("You can't access completed section")
                                    return
                                }
                                setContentNo(0)
                            }}>1. Introduction to course</button>
                        </li>
                        <li style={{ padding: '20px', width: '100%', borderTop: '1px solid black', backgroundColor: contentNo === 1 ? "#e3e3e3" : "white" }}>
                            <button onClick={() => {
                                if (course.progress > 25) {
                                    alert("You can't access completed section")
                                    return
                                }
                                if (course.progress < 25) {
                                    alert("Please complete previous section to access this content")
                                    return
                                }
                                setContentNo(1)
                            }}>2. Outcomes of the course</button>
                        </li>
                        <li style={{ padding: '20px', width: '100%', borderTop: '1px solid black', backgroundColor: contentNo === 2 ? "#e3e3e3" : "white" }}>
                            <button onClick={() => {
                                if (course.progress > 50) {
                                    alert("You can't access completed section")
                                    return
                                }
                                if (course.progress < 50) {
                                    alert("Please complete previous section to access this content")
                                    return
                                }
                                setContentNo(2)
                            }}>3. Full course video</button>
                        </li>
                        <li style={{ padding: '20px', width: '100%', borderTop: '1px solid black', backgroundColor: contentNo === 3 ? "#e3e3e3" : "white" }}>
                            <button onClick={() => {
                                if (course.progress > 75) {
                                    alert("You can't access completed section")
                                    return
                                }
                                if (course.progress < 75) {
                                    alert("Please complete previous section to access this content")
                                    return
                                }
                                setContentNo(3)
                            }}>4. Assignment</button>
                        </li>
                    </ul>
                </div>
                <hr />
                <div style={{ display: 'flex', flexDirection: 'column', padding: '15px' }}>
                    <h1 style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', margin: '10px', marginBottom: '20px' }}>{course.name}</h1>
                    {contentNo === 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src={course.img} alt={course.name} style={{ margin: 'auto', width: '50%', height: 'auto' }} />
                            <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, marginTop: '70px' }}>Introduction page</h1>
                            <Button style={{ marginTop: '15px', backgroundColor: '#cfcfcf', alignSelf: 'center' }} onClick={() => {
                                alert("Congrats on completing the step-1 !!")
                                setProgress(id, 25)
                                setContentNo(1)
                            }}>Mark as completed</Button>
                        </div>
                    )}
                    {contentNo === 1 && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src={course.img} alt={course.name} style={{ margin: 'auto', width: '50%', height: 'auto' }} />
                            <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, marginTop: '70px' }}>Outcomes page</h1>
                            <Button style={{ marginTop: '15px', backgroundColor: '#cfcfcf', alignSelf: 'center' }} onClick={() => {
                                alert("Congrats on completing the step-2 !!")
                                setProgress(id, 50)
                                setContentNo(2)
                            }}>Mark as completed</Button>
                        </div>
                    )}
                    {contentNo === 2 && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src={course.img} alt={course.name} style={{ margin: 'auto', width: '50%', height: 'auto' }} />
                            <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, marginTop: '70px' }}>Course video page</h1>
                            <Button style={{ marginTop: '15px', backgroundColor: '#cfcfcf', alignSelf: 'center' }} onClick={() => {
                                alert("Congrats on completing the step-3 !!")
                                setProgress(id, 75)
                                setContentNo(3)
                            }}>Mark as completed</Button>
                        </div>
                    )}
                    {contentNo === 3 && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <img src={course.img} alt={course.name} style={{ margin: 'auto', width: '50%', height: 'auto' }} />
                            <h1 style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 30, marginTop: '70px' }}>Assignment page</h1>
                            <Button style={{ marginTop: '15px', backgroundColor: '#cfcfcf', alignSelf: 'center' }} onClick={() => {
                                alert("Congrats for completing the course!!")
                                setProgress(id, 100)
                                navigate("/mylearning")
                            }}>Mark as completed</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;