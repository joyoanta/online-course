import React from 'react';

const Item = (props) => {

    console.log(props)

    return (
        <div style={{marginBottom: '20px', marginLeft:"30px", padding:"20px 20px", border: "1px solid lightpink"}}>
                <p><b> Title : {props.course.title}</b><br/>
                 Description :{props.course.description}<br/>
                 Instructor : {props.course.instructor}</p>
                <p>Price :$ {props.course.price}</p>
                <button onClick = {()=> props.handleEnroll(props.courses)}>Enroll Now</button>
                <br/>
        </div>
    );
};

export default Item;