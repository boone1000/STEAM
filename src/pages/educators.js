import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { Card } from 'antd';



function educators(){
    return <div className="page">
    <div className="section-cover">
        <h1>Educators</h1>
        <p>Interdisciplinary STEAM activities can promote student learning, increase student 
            interest in STEAM careers, and create more inclusive classroom experiences. We've collected
            resources for teachers, administrators, and leaders in education looking for innovative ways 
            to bring science, technology, engineering, arts, and math.</p>
    </div>
    

{/* 
    <div className='section'>
        <h2>Educator's Guide</h2>
        {/* <Button>Download Here</Button> 
    </div> */}

    <div className='section'>
        <h2>Curriculum Resources</h2>
        <p>We recommend the following resources to instructors looking to build curriculum at the intersection of 
            STEM and the arts.</p>
        <div className='resourceWrapper'>
        <div className='resourceList'>
            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>She Can STEM Toolkit</h3>
                    <p>Worksheets, curriculum, and activities for young women in STEM </p>
                    <Button href='https://adcouncil-campaigns.brightspotcdn.com/4d/65/541b508b4872b195f770b448edbf/amplifier-education-toolkit-she-can-stem.pdf'>
                        Check it Out</Button>
                </Card>
            </div>
            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>Girl Scouts and STEM</h3>
                    <p>Introducting Girl Scouts to Science, Technology, Math, and Engineering</p>
                    <Button href='https://www.girlscouts.org/en/about-girl-scouts/girl-scouts-and-stem.html'>
                        Check it Out</Button>
                </Card>
            </div>
            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>10 Ways to Engage a Girl in STEM</h3>
                    <p>Use these tips to encourage girls in your life to stick with STEM</p>
                    <Button href='https://girlsinc.org/app/uploads/2017/06/10-things-you-can-do-to-encourage-a-girl-in-STEM.pdf'>
                        Check it Out</Button>
                </Card>
            </div>
            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>Makey Makey</h3>
                    <p>Projects and lesson plans that connect you computer to the world around you</p>
                    <Button href='https://makeymakey.com/'>
                        Check it Out</Button>
                </Card>
            </div>
            
            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>Girls Who Code Lesson Plans</h3>
                    <p>Lesson plans specifically designed to highlight women in tech and expose young girls to STEM topics</p>
                    <Button href='https://girlswhocode.com/women-in-tech-lessonplans/'>
                        Check it Out</Button>
                </Card>
            </div>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>IBM: Teacher Advisor with Watson</h3>
                    <p>Lessons and activity plans for math teachers</p>
                    <Button href='https://teacheradvisor.org/3/search?query=Math%20homework'>
                        Check it Out</Button>
                </Card>
            </div>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>Scratch Activity Cards</h3>
                    <p>Printable cards with innovative activities students can make using Scratch online</p>
                    <Button href='https://resources.scratch.mit.edu/www/cards/en/scratch-cards-all.pdf'>
                        Check it Out</Button>
                </Card>
            </div>
        </div>
        </div>
    </div>

    <div className='section'>
        <h2>Curriculum Modules</h2>
        <p>Our team has developed a set of activities that leverage the arts to incrase student interest
            in STEM. Download our activity modules below!
        </p>
        <div>
            <Button href='https://adcouncil-campaigns.brightspotcdn.com/4d/65/541b508b4872b195f770b448edbf/amplifier-education-toolkit-she-can-stem.pdf'>Download Now!</Button>
        </div>
    </div>

    </div>
}

export default educators