import React, { Fragment, useState } from 'react'
import './about.css'

const About = () => {

    const [toggleTab, setToggleTab] = useState (1);
    const toggleState = (index) => {
        setToggleTab(index)
    }

  return (
    <Fragment>
        <section className='about'>
            <div className='row'>
                <div className='column'>
                    <div className='about-img'></div>
                </div>
                <div className='column'>
                    <div className='tabs'>
                        <div className={toggleTab === 1 ? 'single-tab active-tab': 'single-tab'}
                        onClick={() => toggleState(1)}
                        >
                            <h2>About</h2>
                        </div>
                        <div className={toggleTab === 2 ? 'single-tab active-tab': 'single-tab'}
                        onClick={() => toggleState(2)}>
                            <h2>Future Tournaments</h2>
                        </div>
                        <div className={toggleTab === 3 ? 'single-tab active-tab': 'single-tab'}
                        onClick={() => toggleState(3)}>
                            <h2>Old Tournaments</h2>
                        </div>
                    </div>

                    <div className='tab-content'>

                    {/* About Content */}

                    <div className={toggleTab === 1 ? 'content active-content': 'content'}>
                        <h2>Our Story</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus lacus, tincidunt egestas sapien et, suscipit placerat tellus. Nam porttitor dignissim augue, quis fringilla elit. Ut ac enim aliquam, dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus lacus, tincidunt egestas sapien et, suscipit placerat tellus. Nam porttitor dignissim augue, quis fringilla elit. Ut ac enim aliquam, dictum.</p>
                        <h3 className='margin-top'>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus lacus, tincidunt egestas sapien et, suscipit placerat tellus. Nam porttitor dignissim augue, quis fringilla elit. Ut ac enim aliquam, dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus lacus, tincidunt egestas sapien et, suscipit placerat tellus. Nam porttitor dignissim augue, quis fringilla elit. Ut ac enim aliquam, dictum.</p>
                    </div>

                    
                             {/* Future Tournaments */}
                    <div className={toggleTab === 2 ? 'content active-content': 'content'}>
                        <h2 className='center'>Chicago</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus lacus, tincidunt egestas sapien et, suscipit placerat tellus. Nam porttitor dignissim augue, quis fringilla elit. Ut ac enim aliquam, dictum.</p>
                    
                    <div className='tickets-row'>

                        <div className='tickets-column'>
                            <div className='progress-wrap'>
                                <h3>tickets sold</h3>
                                <div className='progress'>
                                    <div className='progress-bar progress-bar1'>
                                        <span>90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     <div>
                     </div>                  
                    </div>
                    <h2 className='center'>New York</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus lacus, tincidunt egestas sapien et, suscipit placerat tellus. Nam porttitor dignissim augue, quis fringilla elit. Ut ac enim aliquam, dictum.</p>
                    
                    <div className='tickets-row'>

                        <div className='tickets-column'>
                            <div className='progress-wrap'>
                                <h3>tickets sold</h3>
                                <div className='progress'>
                                    <div className='progress-bar progress-bar2'>
                                        <span>100%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     <div>
                     </div>                  
                    </div>
                    <h2 className='center'>Tokyo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus lacus, tincidunt egestas sapien et, suscipit placerat tellus. Nam porttitor dignissim augue, quis fringilla elit. Ut ac enim aliquam, dictum.</p>
                    
                    <div className='tickets-row'>

                        <div className='tickets-column'>
                            <div className='progress-wrap'>
                                <h3>tickets sold</h3>
                                <div className='progress'>
                                    <div className='progress-bar progress-bar3'>
                                        <span>83%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                     <div>
                     </div>                  
                    </div>

                    </div>
                    
                    {/* OLD Tournaments */}
                    
                    <div className={toggleTab === 3 ? 'content active-content': 'content'}>

                    <h2>Old tournaments</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus lacus, tincidunt egestas sapien et, suscipit placerat tellus. Nam porttitor dignissim augue, quis fringilla elit. Ut ac enim aliquam, dictum.</p>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <p>Lorem ipsum dolor sit amet 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec purus lacus, tincidunt egestas sapien et, suscipit placerat tellus. Nam porttitor dignissim augue, quis fringilla elit. Ut ac enim aliquam, dictum.
                        </p>
                    </div>

                    </div>


                </div>

            </div>

        </section>


    </Fragment>
  )
}

export default About;