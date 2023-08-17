import React from 'react'
import Typical from 'react-typical'
import "./Profile.css"
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>


                        <a href='https://www.facebook.com/tamara.sferco/'>
                            <i className='fa fa-facebook-square'></i> 
                            </a>
                        <a href="#">
                            <i className='fa fa-google-plus-square'></i> 
                            </a>
                        <a href='https://www.instagram.com/tamara.sferco/'>
                            <i className='fa fa-instagram'></i> 
                            </a>
                        <a href='#'>
                            <i className='fa fa-youtube-square'></i> 
                            </a>
                        <a href='#'>
                            <i className='fa fa-twitter'></i> 
                            </a>
                        </div>
                            

                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {""}
                            Hello, I'M <span className='highlighted-text'>Tamara</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {""}
                            <h1>
                                {""}
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev ",
                                    1000,
                                    "Full Stack Developer",
                                    1000,
                                    "Mern Stack Dev",
                                    1000,
                                    "Front End Developer",
                                    1000,
                                    "Digital Marketing",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Aspiring Front-End Developer.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {""}
                            Contact Me{" "}
                        </button>
                        <a href='TAMARA SFERCO RESUME.pdf' download='TAMARA SFERCO RESUME.pdf'>
                            <button className='btn highlighted-btn'> Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}