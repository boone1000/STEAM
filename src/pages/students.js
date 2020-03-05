import React from 'react'
import ReactDOM from 'react-dom';
import { Button } from 'antd';


function Students(){
    return <div className="page">
        <div className='section-cover'>
            <h1>Students</h1>
            <p>We believe that learning should be fun! 
                Check out our resources to find fun interdisciplinary
                resources that explore the intersection of STEM and the arts.
            </p>
        </div>
        <div className="section">
            <h2>Student Playbook</h2>
            <p>For fun DIY activities, coloring pages, and games, downloade
                our workbook below!
            </p>
        </div>

        <div className="section">
            <h2>Online Resources</h2>
            <p>Check out the following online resources for extra fun online 
                learning.
            </p>

            <div className='resourceItem'>
                <Button href='https://girlswhocode.com/'>
                    Check it Out</Button>
                <p>Girls Who Code</p>
                <p>Events, summer camps, and internships for women in tech</p>
            </div>

            <div className='resourceItem'>
                <Button href='https://brilliant.org/'>
                    Check it Out</Button>
                <p>Brilliant</p>
                <p>Build quantitative skills in math, science, and computer science with fun and challenging interactive explorations.</p>
            </div>

            <div className='resourceItem'>
                <Button href='https://www.theellaproject.com/'>
                    Check it Out</Button>
                <p>The Ella Project</p>
                <p>Sharing the stories of remarkable women in STEM</p>
            </div>

        </div>
    </div>
}

export default Students