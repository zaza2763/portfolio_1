 
import React, { useState } from 'react';
import './AboutMeInfo.scss'


const AboutMeInfo = () => {

    const widthHtml = 90;
    const widthJs = 75;
    const widthJquery = 60;
    const widthReact = 55;
    const widthAngular = 35;
    const widthGit = 60;

    const [progressHtml,setProgressHtml] = useState(0)
    const [progressJs,setProgressJs] = useState(0)
    const [progressJquery,setProgressJquery] = useState(0)
    const [progressReact,setProgressReact] = useState(0)
    const [progressAngular,setProgressAngular] = useState(0)
    const [progressGit,setProgressGit] = useState(0)

    const widthProgramming = 94;
    const widthCommunication = 82;
    const widthSport = 92;
    const widthTravel = 99;
    const widthNewInformation = 85;
    const widthReadingBooks = 75;
    
    const [progressProgramming,setProgressProgramming] = useState(0)
    const [progressCommunication,setProgressCommunication] = useState(0)
    const [progressSport,setProgressSport] = useState(0)
    const [progressTravel,setProgressTravel] = useState(0)
    const [progressNewInformation,setProgressNewInformation] = useState(0)
    const [progressReadingBooks,setProgressReadingBooks] = useState(0)
    

    const  progressFill = () => {
        setProgressHtml(widthHtml)
        setProgressJs(widthJs)
        setProgressJquery(widthJquery)
        setProgressReact(widthReact)
        setProgressAngular(widthAngular)
        setProgressGit(widthGit)
        setProgressProgramming(widthProgramming)
        setProgressCommunication(widthCommunication)
        setProgressSport(widthSport)
        setProgressTravel(widthTravel)
        setProgressNewInformation(widthNewInformation)
        setProgressReadingBooks(widthReadingBooks)
    }
    window.addEventListener('scroll', () => {
       const scroll= window.scrollY
    console.log(scroll);
    if(scroll >= 800){
        progressFill()
    }
    });

  return (
        <div className='AboutMeInfo'  id='AboutMe_marker'>
            <p className='AboutMeInfo-header'>About me</p>
            <div className='aboutMeBlockWrapper'>
                <div className='descriptionBlock'>
                    <p className='greeting'>Hi,my name is <span className='myName'>Alex</span></p>
                    <p>I am from Belarus, I am 34 years old and currently live in Poland.Completed front-end development courses at Step IT Academy.</p>
                </div>
    
                <div className='skillsBlock'>
                    <div className="knowledge-block skilsBlock-wrap">
                        <p className='skilsBlock-title'>Knowledge</p>
                        <div className='knowledge-items'>
                            <div className="knowledge-item">
                                <p>HTML&CSS</p>
                                <div className="progres-line">
                                    <div  className="progres progres-html" style={{width:`${progressHtml}%`}}></div>                          
                                </div>
                            </div>
                            <div className="knowledge-item">
                                <p>JavaScript</p>
                                <div className="progres-line">
                                    <div className="progres progres-javaScript" style={{width:`${progressJs}%`}}></div>
                                </div>
                            </div>
                            <div className="knowledge-item">
                                <p>jQuery</p>
                                <div className="progres-line">
                                    <div className="progres progres-jQuery" style={{width:`${progressJquery}%`}}></div>
                                </div>
                            </div>
                            <div className="knowledge-item">
                                <p>React</p>
                                <div className="progres-line">
                                    <div className="progres progres-react" style={{width:`${progressReact}%`}}></div>
                                </div>
                            </div>
                            <div className="knowledge-item">
                                <p>Angular</p>
                                <div className="progres-line">
                                    <div className="progres progres-angular" style={{width:`${progressAngular}%`}}></div>
                                </div>
                            </div>
                            <div className="knowledge-item">
                                <p>Git</p>
                                <div className="progres-line">
                                    <div className="progres progres-git" style={{width:`${progressGit}%`}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="interests-block skilsBlock-wrap">
                        <p className='skilsBlock-title'>Interests</p>
                        <div className='knowledge-items'>
                            <div className="interests-item">
                                 <p>Programming</p>
                                <div className="progres-line">
                                    <div  className="progres progres-programming" style={{width:`${progressProgramming}%`}}></div>                          
                                </div>
                            </div>
                            <div className="interests-item">
                                 <p>Communication</p>
                                <div className="progres-line">
                                    <div  className="progres progres-comunication" style={{width:`${progressCommunication}%`}}></div>                          
                                </div>
                            </div>
                            <div className="interests-item">
                                 <p>Sport</p>
                                <div className="progres-line">
                                    <div  className="progres progres-sport" style={{width:`${progressSport}%`}}></div>                          
                                </div>
                            </div>
                            <div className="interests-item">
                                 <p>Travel</p>
                                <div className="progres-line">
                                    <div  className="progres progres-travel" style={{width:`${progressTravel}%`}}></div>                          
                                </div>
                            </div>
                            <div className="interests-item">
                                 <p>Learning new information</p>
                                <div className="progres-line">
                                    <div  className="progres progres-info" style={{width:`${progressNewInformation}%`}}></div>                          
                                </div>
                            </div>
                            <div className="interests-item">
                                 <p>Reading books</p>
                                <div className="progres-line">
                                    <div  className="progres progres-readingBooks" style={{width:`${progressReadingBooks}%`}}></div>                          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AboutMeInfo