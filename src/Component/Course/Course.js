import React, { useState } from 'react';
import Courses from '../../Fake/Courses';
import './Course.css'
import Item from '../Item/Item';


const Course = (props) => {

   
    const onlineCourse = Courses ;
    const [products, setProducts] = useState(onlineCourse);
    
    let [cart, setCart] = useState([])
    
    const handleEnroll = (product)=>{
        console.log("Enrolled Course")
        const newCart = [...cart, product]
        setCart  (newCart);
    }

    // console.log(Courses);

//    const course = props.course 
//    const total = course.reduce ((total, crs) => total + crs.price ,0);
    
    
// Enroll Button Addeded 

    return (
        
        <div  className="main">
         
          <div className="course-gallery">
              <h3 style={{textAlign:"center"}}></h3>

              {
              products.map(course => <Item 
                course ={course} 
                handleEnroll={handleEnroll} ></Item>)
                
              }
            </div>


            <div className="order"> 
                <h5> Enroll Summery </h5>
            <h6 style= {{marginLeft:"20px"}}> Total Course: {cart.length}</h6>
                <h6 style= {{marginLeft:"20px"}}> Grand Total: </h6>
            </div>


        </div>
    );
};

export default Course;