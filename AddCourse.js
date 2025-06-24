import React, { Fragment, useEffect, useState } from 'react'
import { Form, FormGroup ,Label ,Input ,Container ,Button} from 'reactstrap'
import axios from 'axios'
import { toast } from "react-toastify";

const AddCourse = () => {

  useEffect(()=> {

    document.title="Add Course";
  },[])

  const [course,setCourse] = useState({});

  //form handler function
  const handleForm = (e) =>
  {
    console.log(course);
    postDatatoServer(course);
    e.preventDefault();
  }

  //creating function to post data on server
  const postDatatoServer =(data) =>
  {
      axios.post('http://localhost:8080/courses',data).then(
                  (response)=> {
                          //success
                          console.log(response);
                          console.log("success"); 
                          toast.success("Course added successfully");                   
                  } ,
                  (error) => {
                      //for error
                      console.log(error);
                      console.log("error occurred!");
                      toast.error("Oops!Something went wrong");
                  }
              )
  }

  return (
   
    <Fragment>

        <h1 className='text-center my-3'>Fill Course Details</h1>
        <Form onSubmit={handleForm} action="none">
            <FormGroup>
            <Label for="userId">Course Id</Label>
            <Input id="userId" name="userId" placeholder="Enter course id" type="text" onChange={(e)=> {
              setCourse({...course, id: e.target.value});
            }}/>
            </FormGroup>

            <FormGroup>
            <Label for="title">Course Title</Label>
            <Input id="title" name="title" placeholder="Enter course title" type="text" onChange={(e)=> {
              setCourse({...course, title:e.target.value});
            }}/>
            </FormGroup>

            <FormGroup>
            <Label for="description">Course Description</Label>
            <Input id="description" name="description" placeholder="Enter course description" type="textarea" onChange={(e)=> {
              setCourse({...course, description:e.target.value});
            }}/>
            </FormGroup>

            <Container className='text-center'>
            <Button type="submit" color='success' style={{ marginRight: 5 }}>
              Add Course
            </Button>

            <Button type='reset' color='warning'>Clear</Button>
            </Container>


        </Form>
    </Fragment>
  )
}

export default AddCourse
