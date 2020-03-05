import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';



function educators(){
    return <div className="page">
    <div className="section-cover">
        <h1>Educators</h1>
    </div>
    
    <div className='section'>
        <h2>Curriculum Modules</h2>
        <div>
            <p>modules go in here</p>
        </div>
    </div>
{/* 
    <div className='section'>
        <h2>Educator's Guide</h2>
        {/* <Button>Download Here</Button> 
    </div> */}

    <div className='section'>
        <h2>Other Curriculum Resources</h2>
        <div className='resourceItem'>
                <Button href='https://adcouncil-campaigns.brightspotcdn.com/4d/65/541b508b4872b195f770b448edbf/amplifier-education-toolkit-she-can-stem.pdf'>
                    Check it Out</Button>
                <p>She Can STEM Toolkit</p>
                <p>Worksheets, curriculum, and activities for young women in STEM </p>
        </div>
        <div className='resourceItem'>
                <Button href='https://www.girlscouts.org/en/about-girl-scouts/girl-scouts-and-stem.html'>Check it Out</Button>
                <p>Girl Scouts and STEM</p>
                <p>Introducting Girl Scouts to Science, Technology, Math, and Engineering</p>
        </div>
        <div className='resourceItem'>
                <Button href='https://girlsinc.org/app/uploads/2017/06/10-things-you-can-do-to-encourage-a-girl-in-STEM.pdf'>Check it Out</Button>
                <p>10 Ways to Engage a Girl in STEM</p>
                <p>Use these tips to encourage girls in your life to stick with STEM</p>
        </div>
        <div className='resourceItem'>
                <Button href='https://teacheradvisor.org/3/search?query=Math%20homework'>Check it Out</Button>
                <p>IBM: Teacher Advisor with Watson</p>
                <p>Lessons and activity plans for math teachers</p>
        </div>
        <div className='resourceItem'>
                <Button href='https://girlswhocode.com/women-in-tech-lessonplans/'>Check it Out</Button>
                <p>Girls Who Code Lesson Plans</p>
                <p>Lesson plans from girls who code with curriculum specifically designed to highlight women in tech and expose young girls to STEM topics</p>
        </div>
    </div>
    </div>
}

export default educators