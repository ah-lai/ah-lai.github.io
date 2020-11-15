import React from 'react';
import styles from './styles.module.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class Timeline extends React.Component {

    render() {
        return(
            <section>
                <div name="experience" className={styles.condiv}>
                    <h3 class="header"> Experience: </h3>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Sept. 2021 - Present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="191.000000pt" height="264.000000pt" viewBox="0 0 191.000000 264.000000"
                            preserveAspectRatio="xMidYMid meet">
                           
                           <g transform="translate(0.000000,264.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                           <path d="M1413 2594 c-84 -43 -103 -161 -37 -228 59 -58 151 -57 209 4 23 24
                           30 41 33 89 4 58 3 61 -35 101 -34 37 -46 43 -89 47 -33 2 -60 -2 -81 -13z"/>
                           <path d="M770 2256 c-268 -57 -498 -220 -633 -447 -152 -258 -173 -583 -56
                           -865 85 -205 282 -410 470 -488 l35 -15 179 179 c117 117 174 181 164 184 -7
                           2 -36 7 -64 10 -79 10 -187 67 -261 138 -175 168 -210 424 -88 637 15 26 161
                           181 331 352 220 221 301 309 292 315 -24 15 -299 14 -369 0z"/>
                           <path d="M1145 2020 c-117 -117 -174 -181 -164 -184 7 -2 37 -7 64 -10 85 -10
                           203 -75 275 -153 170 -182 194 -440 58 -642 -17 -25 -163 -179 -325 -342 -210
                           -211 -291 -299 -282 -305 7 -4 75 -10 149 -12 103 -3 157 0 221 13 482 97 814
                           549 760 1033 -36 312 -208 579 -473 730 -107 62 -82 73 -283 -128z"/>
                           <path d="M375 306 c-54 -24 -78 -60 -83 -124 -4 -52 -1 -61 23 -90 51 -61 115
                           -77 181 -46 45 22 76 73 76 129 0 55 -24 97 -72 124 -43 24 -82 26 -125 7z"/>
                           </g>
                           </svg>
                           }
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
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="191.000000pt" height="264.000000pt" viewBox="0 0 191.000000 264.000000"
                            preserveAspectRatio="xMidYMid meet">
                           
                           <g transform="translate(0.000000,264.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                           <path d="M1413 2594 c-84 -43 -103 -161 -37 -228 59 -58 151 -57 209 4 23 24
                           30 41 33 89 4 58 3 61 -35 101 -34 37 -46 43 -89 47 -33 2 -60 -2 -81 -13z"/>
                           <path d="M770 2256 c-268 -57 -498 -220 -633 -447 -152 -258 -173 -583 -56
                           -865 85 -205 282 -410 470 -488 l35 -15 179 179 c117 117 174 181 164 184 -7
                           2 -36 7 -64 10 -79 10 -187 67 -261 138 -175 168 -210 424 -88 637 15 26 161
                           181 331 352 220 221 301 309 292 315 -24 15 -299 14 -369 0z"/>
                           <path d="M1145 2020 c-117 -117 -174 -181 -164 -184 7 -2 37 -7 64 -10 85 -10
                           203 -75 275 -153 170 -182 194 -440 58 -642 -17 -25 -163 -179 -325 -342 -210
                           -211 -291 -299 -282 -305 7 -4 75 -10 149 -12 103 -3 157 0 221 13 482 97 814
                           549 760 1033 -36 312 -208 579 -473 730 -107 62 -82 73 -283 -128z"/>
                           <path d="M375 306 c-54 -24 -78 -60 -83 -124 -4 -52 -1 -61 23 -90 51 -61 115
                           -77 181 -46 45 22 76 73 76 129 0 55 -24 97 -72 124 -43 24 -82 26 -125 7z"/>
                           </g>
                           </svg>
                           }
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
                            iconStyle={{ background: 'rgb(66, 103, 178)', color: '#fff' }}
                            icon={<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="56.000000pt" height="83.000000pt" viewBox="0 0 56.000000 83.000000"
                            preserveAspectRatio="xMidYMid meet">
                           
                           <g transform="translate(0.000000,83.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                           <path d="M330 631 c-153 -148 -174 -171 -164 -187 6 -11 17 -20 25 -22 8 -1
                           90 74 184 168 l170 170 -20 20 -20 20 -175 -169z"/>
                           <path d="M195 240 l-170 -169 23 -23 22 -23 171 171 c161 161 170 172 158 193
                           -8 11 -18 21 -24 21 -5 -1 -86 -77 -180 -170z"/>
                           </g>
                           </svg>}
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
                            iconStyle={{ background: 'rgb(253, 79, 49)', color: '#fff' }}
                            icon={<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="128.000000pt" height="72.000000pt" viewBox="0 0 128.000000 72.000000"
                            preserveAspectRatio="xMidYMid meet">
                           
                           <g transform="translate(0.000000,72.000000) scale(0.100000,-0.100000)"
                           fill="#000000" stroke="none">
                           <path d="M1168 713 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
                           <path d="M1063 703 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"/>
                           <path d="M998 693 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/>
                           <path d="M938 683 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/>
                           <path d="M1091 674 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
                           <path d="M1131 675 c-1 -27 17 -45 44 -45 27 0 45 18 44 44 -1 18 -2 17 -8 -4
                           -5 -19 -13 -25 -36 -25 -23 0 -31 6 -36 25 -6 21 -7 22 -8 5z"/>
                           <path d="M26 673 c-4 -4 8 -13 26 -19 l33 -11 5 -184 c3 -101 3 -231 0 -289
                           l-5 -105 -37 -9 c-67 -17 -41 -26 72 -26 105 0 143 11 85 26 -14 3 -30 14 -35
                           24 -6 11 -10 131 -10 284 0 283 2 296 51 296 10 0 19 5 19 10 0 12 -193 14
                           -204 3z"/>
                           <path d="M888 673 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/>
                           <path d="M848 663 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
                           <path d="M1068 643 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/>
                           <path d="M728 633 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
                           <path d="M973 633 c9 -2 25 -2 35 0 9 3 1 5 -18 5 -19 0 -27 -2 -17 -5z"/>
                           <path d="M898 623 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/>
                           <path d="M805 610 c-16 -4 -24 -8 -17 -9 9 -1 12 -60 12 -260 l0 -259 -45 -18
                           c-25 -9 -45 -21 -45 -25 0 -5 56 -9 125 -9 69 0 125 4 125 8 0 4 -19 14 -42
                           22 l-43 15 -3 273 c-3 301 3 280 -67 262z"/>
                           <path d="M738 593 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
                           <path d="M1138 563 c-38 -2 -68 -8 -68 -13 0 -6 10 -10 23 -10 45 0 47 -11 47
                           -245 l0 -222 -25 -11 c-14 -7 -32 -12 -40 -12 -8 0 -15 -4 -15 -10 0 -6 43
                           -10 110 -10 113 0 137 10 75 30 l-35 12 2 231 3 231 33 10 c44 12 41 26 -5 24
                           -21 -1 -68 -3 -105 -5z"/>
                           <path d="M450 535 c-14 -8 -20 -14 -15 -14 6 0 21 6 35 14 14 8 21 14 15 14
                           -5 0 -21 -6 -35 -14z"/>
                           <path d="M325 471 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z"/>
                           <path d="M243 419 c-42 -28 -60 -46 -55 -54 4 -7 67 -75 140 -150 72 -76 132
                           -142 132 -146 0 -5 -9 -9 -19 -9 -26 0 -51 -10 -51 -21 0 -5 54 -9 120 -9 66
                           0 120 4 120 8 0 4 -15 13 -33 20 -19 7 -65 45 -102 85 -245 258 -245 258 -271
                           240 -14 -9 -27 -14 -29 -11 -3 3 22 19 55 37 33 18 60 36 60 42 0 13 2 14 -67
                           -32z"/>
                           </g>
                           </svg>}
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
                                className="vertical-timeline-element--work"
                                date="May 2019 - Aug. 2019"
                                iconStyle={{ background: 'rgb(66, 103, 178)', color: '#fff' }}
                                icon={<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="56.000000pt" height="83.000000pt" viewBox="0 0 56.000000 83.000000"
                                preserveAspectRatio="xMidYMid meet">
                            
                            <g transform="translate(0.000000,83.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M330 631 c-153 -148 -174 -171 -164 -187 6 -11 17 -20 25 -22 8 -1
                            90 74 184 168 l170 170 -20 20 -20 20 -175 -169z"/>
                            <path d="M195 240 l-170 -169 23 -23 22 -23 171 171 c161 161 170 172 158 193
                            -8 11 -18 21 -24 21 -5 -1 -86 -77 -180 -170z"/>
                            </g>
                            </svg>}
                            >
                                <div class="skillContainer">
                                    <div class="skill"><span class="skillText"> Python </span></div>
                                    <div class="skill"><span class="skillText"> OpenCV </span></div>
                                    <div class="skill"><span class="skillText"> VB.NET </span></div>
                                    <div class="skill"><span class="skillText"> SQL </span></div>
                                </div>
                                <h3 className="vertical-timeline-element-title">Engineering Assistant</h3>
                                <h4 className="vertical-timeline-element-subtitle">Amphenol</h4>
                                <p>
                                Description
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="May 2019 - Aug. 2019"
                                iconStyle={{ background: 'rgb(66, 103, 178)', color: '#fff' }}
                                icon={<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="56.000000pt" height="83.000000pt" viewBox="0 0 56.000000 83.000000"
                                preserveAspectRatio="xMidYMid meet">
                            
                            <g transform="translate(0.000000,83.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M330 631 c-153 -148 -174 -171 -164 -187 6 -11 17 -20 25 -22 8 -1
                            90 74 184 168 l170 170 -20 20 -20 20 -175 -169z"/>
                            <path d="M195 240 l-170 -169 23 -23 22 -23 171 171 c161 161 170 172 158 193
                            -8 11 -18 21 -24 21 -5 -1 -86 -77 -180 -170z"/>
                            </g>
                            </svg>}
                            >
                                <div class="skillContainer">
                                    <div class="skill"><span class="skillText"> Python </span></div>
                                    <div class="skill"><span class="skillText"> OpenCV </span></div>
                                    <div class="skill"><span class="skillText"> VB.NET </span></div>
                                    <div class="skill"><span class="skillText"> SQL </span></div>
                                </div>
                                <h3 className="vertical-timeline-element-title">Quality Assurance</h3>
                                <h4 className="vertical-timeline-element-subtitle">Toshiba</h4>
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