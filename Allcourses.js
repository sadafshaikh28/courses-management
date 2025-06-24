import React, { useState , useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from 'axios'; 
import { toast } from "react-toastify";


const Allcourses = () =>
{

    useEffect(()=>{
        document.title="All Courses";
    },[]);

    const customId = "custom-id-yes";                   //this avoids duplicate toasts(2 same toasts were appearing)          

    //function to call server:
    //writing with base_url variable was giving a lot of errors , so directly writing the full url
    const getAllCoursesFromServer =() =>
    {
        axios.get('http://localhost:8080/courses').then(
            (response)=> {
                    //success
                    console.log(response.data);
                    toast.success("Courses have been loaded!", {
                        toastId: customId
                      });
                    setCourses(response.data);
            } ,
            (error) => {
                //for error
                console.log(error);
                toast.error("Something went wrong..");
            }
        )
    }

    useEffect(()=>{

        getAllCoursesFromServer();
    },[]);

    const [courses ,setCourses] = useState([
        
    ])

    const removeCourseById = (id) =>
    {
        setCourses(courses.filter((c) => c.id != id));
    }

    return(

        <div>
            <h1>All Courses</h1>
            <p>List of courses are as follows : </p>

            {
                courses.length>0 ? courses.map((item)=> <Course key={item.id} course={item} remove={removeCourseById} />) :"No courses found."
            }
        </div>

    )
}

export default Allcourses;