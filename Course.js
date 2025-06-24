import React from 'react'
import { Card, CardBody, CardTitle, CardText, Button, Container ,CardFooter ,CardSubtitle} from 'reactstrap';
import axios from 'axios';
import { toast } from "react-toastify";
import { useState } from 'react';


const Course = ( {course , remove}) =>
{

    const deleteCourse =(id)=>{
        axios.delete(`http://localhost:8080/courses/${id}`).then(
                          (response)=> {
                                  //success
                                  console.log(response);
                                  console.log("success"); 
                                  toast.success("Course deleted"); 
                                  remove(id);                  
                          } ,
                          (error) => {
                              //for error
                              console.log(error);
                              console.log("error occurred!");
                              toast.error("Couldnt delete course");
                          }
                      )
    }

    

    return <Card>
        <CardBody>
            <CardSubtitle style={{ fontWeight: 'bold' , marginLeft:14 }}>
               {course.title}
            </CardSubtitle>
            <CardText style={{ marginLeft: 14 }}>
               {course.description}
            </CardText>
            <Container style={{ marginLeft: 0 }}>
            <Button color='warning' style={{ marginRight: 5 }}>
                Update
            </Button>
            <Button color='danger' onClick={() =>
                {
                    deleteCourse(course.id);
                }
            }>
                Delete
            </Button>
        </Container>
        </CardBody>
        
    </Card>
 
}

export default Course;

