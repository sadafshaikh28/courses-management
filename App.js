import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Button, Container, Row ,Col } from 'reactstrap';
import { ToastContainer ,toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Menu from './components/Menu';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';

function App() {

  

  return (
       <div >

        <Router>
        
        <ToastContainer />

          <Container>
            <Header/>
            <Row>
              <Col md={4}>
                <Menu/>
              </Col>
              <Col md={8}>
                <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/add-course" element={<AddCourse />}></Route>
                <Route path="/view-courses" element={<Allcourses />}></Route>
                </Routes>
              </Col>
            </Row>
          </Container>
        </Router>

          {/* <Course course={{title:"Django Course" , description:"this is just testing"}}/>
          <Course course={{title:"Java Course" , description:"this is just testing"}}/>  */}   
         
       </div>  
  );
}

export default App;
