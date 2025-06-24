package com.springrest.springrest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrest.springrest.dao.CourseDao;
import com.springrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseDao courseDao;
	

	@Override
	public List<Course> getCourses() {
		
		return courseDao.findAll();
		
	}



	@Override
	public Course getCourse(long courseId) {
		
		return courseDao.getOne(courseId);
	}



	@Override
	public Course addCourse(Course course) {
		
		courseDao.save(course);
		return course;
	}



	@Override
	public Course updateCourse(long parseLong, Course newCourse) {
		
		courseDao.save(newCourse);
		
		return newCourse;
	}



	@Override
	public String deleteCourse(long parseLong) {
		
		Course entity = courseDao.getOne(parseLong);
		courseDao.delete(entity);
		return "Entity Deleted!";
	}

}
