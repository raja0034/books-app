import React from "react";
import ReactDOM from "react-dom";
// import "./style-home.css";
// import { Link } from "react-router-dom";
import { Parser } from 'html-to-react';

const rawHTML = `<main class="main-rows">
                                                                                                            
                                                     <div class="uc-row-wrapper">
                <div
                    class="uc-row     last                       
                    
                                            " data-id="75"
                                        style="  "

                >
                    <div id="r75" class="row-container ">
                        <div class="row mainRow "
                                                          style="">
                                                                                                                                <div
    class="column col-sm-6 "
    dataColumn-id="100"
        style="  padding:2.5462962962962963vh 0vh;      background: rgb(245, 245, 245); "
>
        <div class="column-container "

         style="" aria-label="column" role="contentinfo">
                                                                                    
                        <div
                            class="module-container   only-mobile   align-center ModuleTitle
                             first                              "
                                                            style=" padding: 0px 40px 0px 40px  ; padding-bottom:3.4562211981567vh ; "
                                                        aria-label="module container" role="contentinfo"
                            id="m165"
                        >

                            <div
                                class="   module ModuleTitle "
                                dataModule-id="165"

                                                                 style="display:block;max-width:470px;"
                                
                                >

                                <div class="uc-content">
    <h2><span style="font-family: lora;"><span style="text-transform: uppercase;">Author</span></span></h2>
</div>                                </div>
                        </div>
                                                                                                                    
                        <div
                            class="module-container   only-mobile   align-center ModuleParagraph
                              last                             "
                                                            style=" padding: 0px 40px 0px 40px  "
                                                        aria-label="module container" role="contentinfo"
                            id="m166"
                        >

                            <div
                                class="   module ModuleParagraph "
                                dataModule-id="166"

                                                                 style="display:block;max-width:500px;"
                                
                                >

                                <div class="uc-content">
    <p style="font-size: 16px;"><span style="font-size: 16px;">Ravi Rajamani is an experienced software developer who has gone back and forth between Azure and AWS public clouds. He graduated from the University of Minnesota with a Master's in Computer Science in 2001 and has been living in Seattle since then. He has worked on various projects throughout this time span and continues to revel in the best solutions to the problems encountered. He hopes that the learnings and writings shared here, will bring you as much joy as it has been for him to curate them. Cheers.</span></p>
</div>
                                </div>
                        </div>
                                                                            </div>
</div>
                                                                                                        <div
    class="column col-sm-6 "
    dataColumn-id="101"
        style="  padding:2.5462962962962963vh 0vh;      background: rgb(245, 245, 245); "
>
        <div class="column-container "

         style="" aria-label="column" role="contentinfo">
                                                                                    
                        <div
                            class="module-container   only-mobile   align-center ModuleImage
                             first   last                             "
                                                            style=" padding: 0px 40px 0px 40px  "
                                                        aria-label="module container" role="contentinfo"
                            id="m167"
                        >

                            <div
                                class="   module ModuleImage "
                                dataModule-id="167"

                                                                 style="display:block;max-width:465px;"
                                
                                >

                                <div class="animated animated-167 "
             data-loading-animation=""
             data-animated-id="167">
            <div class=" "
                 style="height: 573px">
                
                <div class="uc-content"
                     
                     data-loading-animation=""
                >
                    <img
                        class="cover-image image"
                        loading="lazy"
                        width="100%"
                        height="100%"
                        align="right"
                        style=" 
                                align="right";width="50%";height="50%";object-fit="cover";"
                            "
                        src="https://b67.s3.amazonaws.com/RaviSitara.jpg"

                        alt="RaviSitara.jpg"

                                            />
                </div>

                
                                </div>
            </div>
        


                                </div>
                        </div>
                                                                            </div>
</div>
                                                                                                                        </div>
                    </div>
                    
                    
                                    </div>
            </div>
            <div>
                <ul>
                  <li>My Blog:        <a href="https://ravinote.blogspot.com">https://ravinote.blogspot.com</a></li>
                  <li>My GitHub:      <a href="http://github.com/ravibeta">http://github.com/ravibeta</a></li>
                  <li>My Resume:      <a href="https://1drv.ms/w/s!Ashlm-Nw-wnWryOTCquuj_8z56pO">https://1drv.ms/w/s!Ashlm-Nw-wnWryOTCquuj_8z56pO</a></li>
                  <li>My LinkedIn:    <a href="https://www.linkedin.com/in/ravi-rajamani-2447a27">https://www.linkedin.com/in/ravi-rajamani-2447a27</a></li>
                  <li>My Calendar:    <a href="https://rravishankar.youcanbook.me/">https://rravishankar.youcanbook.me/</a></li>
                  <li>My Books:       <a href="https://booksonsoftware.com/new">https://booksonsoftware.com/new</a></li>
                  <li>My Profile:     <a href="https://triplebyte.com/tb/ravi-rajamani-c0fheyo">https://triplebyte.com/tb/ravi-rajamani-c0fheyo</a></li>
                  <li>My Publication: <a href="https://store.servicenow.com/sn_appstore_store.do#!/store/application/7cd521173d102010fa9bea4da64bc97f/3.0.4">https://store.servicenow.com/sn_appstore_store.do#!/store/application/7cd521173d102010fa9bea4da64bc97f/3.0.4</a></li>
                </ul>
              </div>
                                                                                    </main>
                            <div class="push"></div>
            </div>

    </div>
</div>
<div class="accounts-popup">
<div class="loading-container">
    <div class="loading-spinner"></div>
</div>
<iframe id="accounts-iframe" style="border: none;"></iframe>
</div>
</div>
<div class="module-datepicker-container"></div>
</div>`;

export function Author() {
    return (<div>
        {Parser().parse(rawHTML)}
        </div>);

}

const container = {
    width: 500,
    margin: '50px auto'
  }