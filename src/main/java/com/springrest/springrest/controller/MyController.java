package com.springrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springrest.springrest.entities.Course;
import com.springrest.springrest.service.CourseService;

@CrossOrigin(origins =  "*")
@RestController
public class MyController {
	
	@Autowired															//this will create an object of the implementation class(CourseServiceImpl) and inject it ,according to the rule of dependency injection
	private CourseService courseService;								//reference variable of CourseService interface

	@GetMapping("/home")
	public String home()
	{
		return "this is home page. welcome to courses application";
	}
		
	@GetMapping("/courses")
	public List<Course> getCourses()
	{
		return this.courseService.getCourses();	
	}
	
	@GetMapping("/courses/{courseId}")
	public Course getCourse(@PathVariable String courseId)
	{
		return this.courseService.getCourse(Long.parseLong(courseId));
		
	}
	
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course)
	{
		return this.courseService.addCourse(course);		
	}
	
	@PutMapping("/courses/{courseId}")
	public Course updateCourse(@RequestBody Course newCourse , @PathVariable String courseId)
	{
		return this.courseService.updateCourse(Long.parseLong(courseId), newCourse);	
	}

	@DeleteMapping("/courses/{courseId}")
	public String deleteCourse(@PathVariable String courseId)
	{
		return this.courseService.deleteCourse(Long.parseLong(courseId));
	}
}
