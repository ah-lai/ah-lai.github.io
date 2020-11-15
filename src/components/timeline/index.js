import React from 'react';
import styles from './styles.module.css';
import { VerticalTimeline, VerticalTimelineElement}  from 'react-vertical-timeline-component';
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
                                icon={<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="357.000000pt" height="308.000000pt" viewBox="0 0 357.000000 308.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,308.000000) scale(0.100000,-0.100000)"fill="#000000" stroke="none"><path d="M1570 3054 c-69 -7 -136 -15 -150 -18 -14 -3 -50 -11 -80 -16 -103 -21 -235 -53 -245 -60 -5 -4 -29 -11 -52 -15 -24 -4 -43 -11 -43 -16 0 -6 -4 -7 -10 -4 -5 3 -22 0 -37 -8 -36 -19 -76 -35 -84 -33 -4 0 -16 -7 -26 -17 -11 -9 -23 -14 -26 -10 -4 3 -7 1 -7 -6 0 -7 -4 -10 -9 -7 -10 6 -155 -79 -256 -150 -94 -66 -215 -183 -285 -274 -58 -77 -176 -290 -184 -332 -3 -12 -5 -23 -6 -23 -1 0 -4 -11 -6 -25 -2 -13 -10 -27 -16 -31 -6 -4 -8 -14 -5 -22 3 -8 3 -18 -1 -21 -3 -4 -7 -17 -7 -29 -1 -12 -2 -42 -3 -67 -2 -33 -5 -41 -12 -30                               -5 8 -10 10 -10 5 0 -6 5 -16 10 -21 8 -8 8 -37 1 -95 -19 -169 -23 -239 -12                               -239 6 0 8 -12 5 -30 -4 -20 -2 -30 5 -30 7 0 11 -10 10 -22 -3 -27 10 -89 21                               -103 5 -5 9 -14 10 -20 1 -5 6 -20 11 -33 5 -13 9 -25 9 -27 0 -6 72 -129 79                               -135 3 -3 25 -31 49 -63 123 -165 332 -326 597 -461 177 -91 237 -116 440                               -184 176 -59 491 -137 617 -151 46 -6 58 -4 58 6 0 8 -4 12 -9 9 -5 -4 -22 -1                               -38 5 -15 6 -84 28 -153 49 -134 40 -360 122 -450 163 -263 118 -418 205 -620                               348 -52 36 -260 219 -260 228 -1 3 -28 35 -61 71 -33 36 -88 110 -122 164 -57                               93 -127 247 -127 280 0 8 -5 27 -12 43 -15 35 -18 103 -5 103 5 0 7 7 3 15 -3                               8 -1 15 4 15 9 0 26 39 22 53 -1 4 2 7 7 7 5 0 12 11 15 25 4 14 11 23 15 20                               5 -3 11 0 13 6 2 7 14 -11 25 -39 74 -177 274 -383 513 -527 36 -22 75 -46 85                               -52 91 -58 376 -183 555 -243 179 -59 662 -171 678 -156 10 10 -10 22 -68 41                               -504 166 -864 353 -1146 597 -90 77 -202 200 -257 281 -44 64 -107 194 -123                               251 -7 28 -16 60 -19 72 -5 15 4 31 35 62 22 24 45 40 50 37 5 -3 13 3 19 12                               6 10 11 14 11 8 0 -5 10 1 21 15 11 14 18 18 14 10 -4 -8 1 -6 9 4 31 38 49                               29 93 -48 87 -148 282 -310 520 -430 241 -121 668 -253 932 -288 48 -6 30 18                               -26 37 -394 128 -767 339 -942 533 -69 76 -139 194 -158 265 -17 66 -17 152 0 185 8 15 24 50 38 77 22 46 89 146 89 132 0 -8 63 34 86 58 17 17 18 17 24 -1                               5 -13 -3 -31 -23 -56 -17 -21 -34 -38 -38 -38 -13 0 -119 -102 -119 -115 0 -7                               -6 -18 -14 -24 -19 -16 -26 -59 -10 -65 7 -3 14 -1 16 4 2 5 19 11 38 13 19 2                               45 9 56 15 12 6 36 14 55 17 19 3 59 12 89 20 94 24 240 53 370 72 178 26 747                               26 930 0 191 -27 418 -73 555 -112 92 -27 240 -73 284 -90 24 -9 54 -15 65                               -13 28 4 -130 83 -304 152 -214 84 -576 184 -795 219 -308 50 -340 52 -693 52                               -281 0 -344 -3 -351 -14 -6 -9 -20 -12 -39 -9 -17 2 -29 1 -26 -4 3 -4 -4 -8                               -15 -8 -65 0 36 71 204 145 57 25 106 39 185 54 19 3 175 6 345 6 266 -1 332                               -4 465 -23 314 -45 386 -61 559 -130 70 -27 116 -41 119 -34 3 10 31 5 82 -16                               108 -44 192 -74 197 -68 11 10 -7 21 -107 66 -160 72 -311 126 -485 174 -33 9                               -87 25 -120 36 -302 94 -743 132 -1105 94z m-961 -429 c-12 -19 -25 -35 -29                               -35 -5 0 -7 -8 -6 -17 2 -10 -3 -27 -10 -38 -15 -24 -30 -145 -18 -145 5 0 7                               -23 5 -51 -2 -42 -6 -49 -20 -43 -9 3 -24 7 -35 9 -10 1 -23 11 -30 22 -6 11                               -17 18 -23 16 -18 -7 -16 16 2 23 8 4 15 12 15 20 0 7 9 18 20 24 11 6 20 20                               20 31 0 23 25 75 48 102 14 16 13 17 -12 17 -15 0 -25 -4 -21 -10 3 -6 -1 -7                               -10 -4 -14 6 -13 10 7 32 27 29 97 82 109 82 5 0 -1 -16 -12 -35z"/>                               <path d="M2 1780 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z"/></g></svg>}
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
                                icon={<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Toshiba icon</title><path d="M5.174 10.172c-1.065 0-1.578.187-1.65 1.148a8.92 8.92 0 00-.022.68c0 .218.004.451.021.68.073.96.586 1.148 1.65 1.148 1.065 0 1.58-.188 1.653-1.148.018-.229.022-.462.022-.68 0-.217-.005-.451-.022-.68-.073-.96-.588-1.148-1.652-1.148zm3.79 0c-.41 0-.82.04-.985.121-.322.156-.545.38-.545 1.02 0 .375.1.654.293.796.281.21.553.23 1.31.27.305.016.47.078.47.34 0 .332-.294.332-.564.332-.28 0-.366-.025-.46-.096-.084-.063-.105-.176-.106-.348h-.95c0 .487.01.884.47 1.084.41.18 1.67.18 2.048.014.328-.145.563-.337.563-.994 0-.455-.091-.735-.44-.941-.248-.147-.945-.17-1.298-.192-.258-.016-.356-.11-.356-.338 0-.297.285-.308.53-.308.202 0 .34.018.439.105.038.039.086.099.088.307h.947c0-.408-.014-.848-.455-1.051-.175-.08-.587-.121-.998-.121zm2.206.062v3.532h.996v-1.362h1.156v1.362h.996v-3.532h-.996v1.29h-1.156v-1.29h-.996zm4.023 0v3.532h1.002v-3.532h-1.002zm1.891 0v3.532h1.887c.869 0 1.162-.376 1.162-.952 0-.401-.092-.755-.643-.894.444-.114.574-.379.574-.762 0-.776-.487-.924-1.181-.924h-1.799zm4.373 0l-1.068 3.532h1.037l.187-.655h1.16l.19.655H24l-1.07-3.532h-1.473zM0 10.236v.881h1.055v2.65H2.11v-2.65h1.055v-.88H0zm5.174.762c.418 0 .633.063.66.607.004.085.01.201.01.395 0 .195-.006.31-.01.395-.027.544-.242.607-.66.607-.418 0-.633-.063-.66-.607A7.674 7.674 0 014.506 12c0-.194.003-.31.008-.395.027-.544.242-.607.66-.607zm12.906.045h.69c.18 0 .293.085.293.291 0 .176-.112.285-.293.285h-.69v-.576zm4.111.064h.006l.354 1.22h-.713l.353-1.22zm-4.11 1.207h.689c.279 0 .337.124.337.323s-.11.32-.337.32h-.69v-.643z"/></svg>}
                                iconClassName="SVGInline"    
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