import React from 'react'
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { Card } from 'antd';
import { Carousel } from 'antd';

function onChange(a, b, c) {
    console.log(a, b, c);
  }

function Students(){
    return <div className="page">
        <div className='section-cover'>
            <h1>Students</h1>
            <p>We believe learning should be fun! 
                Check out our resources to find fun interdisciplinary
                resources that explore the intersection of STEM and the arts.
            </p>
        </div>

        <div className="section">
            <h2>Student Playbook</h2>
            <p>For fun DIY activities, coloring pages, and games, downloade
                our workbook below!
            </p>
            <Button>Download Now!</Button>
        </div>

       <div className='section'>
           <h2>Recommended Watching</h2>
            {/* <p>We recommend the following Youtubers to students interested in learning more about STEM.</p> */}
            <div className='carouselWrapper'>
                <Carousel afterChange={onChange}>
                    <div>
                        <h3>NOVA Science Now</h3>
                        <p>Videos about the latest updates in science and technology</p>
                        <Button>Let's Go!</Button>
                    </div>
                    <div>
                        <h3>Simone Giertz</h3>
                        <p>Maker and robotics enthusiast</p>
                        <Button href='https://www.youtube.com/channel/UC3KEoMzNz8eYnwBC34RaKCQ/'>Let's Go!</Button>
                    </div>
                    <div>
                        <h3>Sistas in STEM</h3>
                        <p>an online community and resource for women of color</p>
                        <Button href='https://www.youtube.com/watch?v=-kK2lPUWUIo'>Let's Go!</Button>
                    </div>
                    <div>
                        <h3>VSauce</h3>
                        <p>Exploring the questions that unite our curiosity</p>
                        <Button href='https://www.youtube.com/user/Vsauce'>Let's Go!</Button>
                    </div>
                </Carousel>
            </div>
       </div>

        <div className="section">
            <h2>Online Resources</h2>
            <p>Check out the following online resources for extra fun online 
                learning.
            </p>

        <div className='resourceWrapper'>
        <div className='resourceList'>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>Girls Who Code</h3>
                    <p>Events, summer camps, and internships for women in tech </p>
                    <Button href='https://girlswhocode.com/'>
                        Check it Out</Button>
                </Card>
            </div>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>The Ella Project</h3>
                    <p>Sharing the stories of remarkable women in STEM.</p>
                    <Button href='https://brilliant.org/'>
                        Check it Out</Button>
                </Card>
            </div>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>TED Talks</h3>
                    <p>Short talks from leading innovators, inventors, and thinkers</p>
                    <Button href='https://ted.com/talks'>
                        Check it Out</Button>
                </Card>
            </div>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>Million Women Mentors</h3>
                    <p>Matching young women to mentors around the world</p>
                    <Button href='https://www.millionwomenmentors.com/'>
                        Check it Out</Button>
                </Card>
            </div>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>Brilliant</h3>
                    <p>Build quantitative skills in math, science, and computer science with fun and challenging interactive explorations.</p>
                    <Button href='https://brilliant.org/'>
                        Check it Out</Button>
                </Card>
            </div>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>IBM Master the Mainframe</h3>
                    <p>A fun way to get hands-on experience across a variety of technologies – with no prior knowledge required!</p>
                    <Button href='https://www.ibm.com/it-infrastructure/z/education/master-the-mainframe'>
                        Check it Out</Button>
                </Card>
            </div>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>She Can STEM</h3>
                    <p>Stories from women in engineering and resources to learn more about STEM.</p>
                    <Button href='https://shecanstem.com/'>
                        Check it Out</Button>
                </Card>
            </div>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>Kode with Klossy</h3>
                    <p>Coding summer camps for girls age 13-18</p>
                    <Button href='https://www.kodewithklossy.com/apply'>
                        Check it Out</Button>
                </Card>
            </div>

            <div className='resourceItem'>
                <Card className='resourceCard' style={{ width: 350 }}>
                    <h3>Technolochicas</h3>
                    <p>Powerful stories of Latinas from diverse backgrounds, who are in technology fields, and recognize the power of innovation to change the world.</p>
                    <Button href='https://technolochicas.org/'>
                        Check it Out</Button>
                </Card>
            </div>

        </div>
        </div>
        </div>
    </div>
}

export default Students