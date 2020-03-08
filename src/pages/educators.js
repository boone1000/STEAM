import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { Card } from 'antd';



function educators(){
    return <div className="page">
    <div className="section-cover">
        <h1>Educators</h1>
    </div>
    

{/* 
    <div className='section'>
        <h2>Educator's Guide</h2>
        {/* <Button>Download Here</Button> 
    </div> */}

    <div className='section'>
        <h2>Curriculum Resources</h2>
        <div className='resourceList'>
            <div className='resourceItem'>
                <Card className='resourceCard' title="She Can STEM Toolkit" style={{ width: 350 }}>
                        <p>Worksheets, curriculum, and activities for young women in STEM </p>
                    <Button href='https://adcouncil-campaigns.brightspotcdn.com/4d/65/541b508b4872b195f770b448edbf/amplifier-education-toolkit-she-can-stem.pdf'>
                        Check it Out</Button>
                </Card>
            </div>
            <div className='resourceItem'>
                <Card className='resourceCard' title="Girl Scouts and STEM" style={{ width: 350 }}>
                        <p>Introducting Girl Scouts to Science, Technology, Math, and Engineering</p>
                    <Button href='https://www.girlscouts.org/en/about-girl-scouts/girl-scouts-and-stem.html'>
                        Check it Out</Button>
                </Card>
            </div>
            <div className='resourceItem'>
                <Card className='resourceCard' title="10 Ways to Engage a Girl in STEM" style={{ width: 350 }}>
                        <p>Use these tips to encourage girls in your life to stick with STEM</p>
                    <Button href='https://girlsinc.org/app/uploads/2017/06/10-things-you-can-do-to-encourage-a-girl-in-STEM.pdf'>
                        Check it Out</Button>
                </Card>
            </div>
            <div className='resourceItem'>
                <Card className='resourceCard' title="IBM: Teacher Advisor with Watson" style={{ width: 350 }}>
                        <p>Lessons and activity plans for math teachers</p>
                    <Button href='https://teacheradvisor.org/3/search?query=Math%20homework'>
                        Check it Out</Button>
                </Card>
            </div>
            <div className='resourceItem'>
                <Card className='resourceCard' title="Girls Who Code Lesson Plans" style={{ width: 350 }}>
                        <p>Lesson plans specifically designed to highlight women in tech and expose young girls to STEM topics</p>
                    <Button href='https://girlswhocode.com/women-in-tech-lessonplans/'>
                        Check it Out</Button>
                </Card>
            </div>
        </div>
    </div>

    <div className='section'>
        <h2>Curriculum Modules</h2>
        <div>
            <Button href='https://adcouncil-campaigns.brightspotcdn.com/4d/65/541b508b4872b195f770b448edbf/amplifier-education-toolkit-she-can-stem.pdf'>Download Now!</Button>
        </div>
    </div>

    </div>
}

export default educators