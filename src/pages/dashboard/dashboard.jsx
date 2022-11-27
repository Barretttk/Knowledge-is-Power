import React from 'react'
import "./dashboard.scss"
import { CourseData } from './CourseData'


const Dashboard = () => {
  return (
    <>
    <div className="container">

        <div className="course-cards">
            {CourseData.map((item, index) => {
                return (
                  <div class="card-text-center" key={index}>
                    <div class="card-header">Featured</div>
                    <div class="card-body">
                      <h5 class="card-title" className={item.icon}>
                        {item.icon}
                        {item.title}
                      </h5>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a
                        className={item.cName}
                        href={item.url}
                        class="btn btn-primary"
                      >
                        {item.title}
                      </a>
                    </div>
                    <div class="card-footer text-muted"></div>
                  </div>
                );
            })}
        
        </div>
      </div>
      </>
    );
  }


export default Dashboard