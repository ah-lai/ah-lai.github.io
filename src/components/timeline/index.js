import React from 'react';
import styles from './styles.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends React.Component {

    render() {
        return(
            <section>
                <div className={styles.condiv}>
                    <h3 name="experience" className={styles.title}> Experience: </h3>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Sept. 2021 - Present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <div class="skillContainer">
                                <div class="skill"><span class="skillText"> Javascript </span></div>
                                <div class="skill"><span class="skillText"> C# </span></div>
                                <div class="skill"><span class="skillText"> ASP.NET </span></div>
                                <div class="skill"><span class="skillText"> jQuery </span></div>
                            </div>
                            <h2 className="vertical-timeline-element-title">Software Developer - TDO</h2>
                            <h4 className="vertical-timeline-element-subtitle">MioVision</h4>
                            <p>
                            Description
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Jan. 2020 - Apr. 2020"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        >
                            <div class="skillContainer">
                                <div class="skill"><span class="skillText"> C# </span></div>
                                <div class="skill"><span class="skillText"> AWS </span></div>
                                <div class="skill"><span class="skillText"> Terraform </span></div>
                                <div class="skill"><span class="skillText"> SQL </span></div>
                            </div>
                            <h3 className="vertical-timeline-element-title">Software Developer - Datalink</h3>
                            <h4 className="vertical-timeline-element-subtitle">MioVision</h4>
                            <p>
                            Description
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="May 2019 - Aug. 2019"
                            iconStyle={{ background: 'rgb(247, 224, 24)', color: '#fff' }}
                        >
                            <div class="skillContainer">
                                <div class="skill"><span class="skillText"> Python </span></div>
                                <div class="skill"><span class="skillText"> OpenCV </span></div>
                                <div class="skill"><span class="skillText"> VB.NET </span></div>
                                <div class="skill"><span class="skillText"> SQL </span></div>
                            </div>
                            <h3 className="vertical-timeline-element-title">Software Developer (Automation)</h3>
                            <h4 className="vertical-timeline-element-subtitle">Lumentum</h4>
                            <p>
                            Description
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Aug. 2018 - Dec. 2018"
                            iconStyle={{ background: 'rgb(255,0,255)', color: '#fff' }}
                        >
                            <div class="skillContainer">
                                <div class="skill"><span class="skillText"> C++ </span></div>
                                <div class="skill"><span class="skillText"> Python </span></div>
                                <div class="skill"><span class="skillText"> OpenCV </span></div>
                                <div class="skill"><span class="skillText"> VBA </span></div>
                            </div>
                            <h3 className="vertical-timeline-element-title">Junior Engineering</h3>
                            <h4 className="vertical-timeline-element-subtitle">KingTiger Technology Inc.</h4>
                            <p>
                            Description
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        />
                    </VerticalTimeline>
                </div>
            </section>
        )
    }
}

export default Timeline