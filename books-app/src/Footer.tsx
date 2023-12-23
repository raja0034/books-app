import React from "react";
import { Parser } from 'html-to-react';

import { Link } from "react-router-dom";

function NavLinks() {
  return ( "" );
}

const rawHTML = `            <footer class="footer-rows "
             style="">

            
            
            
                                                                                        
                                                                                                                                                <div class="uc-row-wrapper">
                <div
                    class="uc-row      last                      
                                            uc-animation staticParallax
                    
                                            " data-id="50"
                     data-effect="staticParallax"                     style="   margin-bottom:0vh;   background:rgb(245, 245, 245); "

                >
                    <div id="r50" class="row-container  container ">
                        <div class="row footerRow "
                                                          style="">
                                                                                                                                <div
    class="column col-sm-12 "
    dataColumn-id="63"
        style="  padding:3.009259259259259vh 0vh;     "
>
        <div class="column-container vertical-center"

         style="" aria-label="column" role="contentinfo">
                                                                                    
                        <div
                            class="module-container   only-mobile   align-center ModuleParagraph
                             first   last                             "
                                                            style=" padding: 0px 20px 0px 20px  "
                                                        aria-label="module container" role="contentinfo"
                            id="m102"
                        >

                            <div
                                class="   module ModuleParagraph "
                                dataModule-id="102"

                                                                 style="display:block;max-width:1160px;"
                                
                                >

                                <div class="uc-content">
    <h5 style="text-align: center;"><span style="color: #202124; font-family: Lora; font-size: 16px; letter-spacing: normal; text-align: left;">© BooksOnSoftware 2023</span></h5>
</div>
                                </div>
                        </div>
                                                                            </div>
</div>
                                                                                                                        </div>
                    </div>
                    
                    
                                    </div>
            </div>
                                                </footer>`;

export function Footer() {
  //    return (<div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>);
  // return (<div style={container}>
  return (<div>
  {Parser().parse(rawHTML)}
  </div>);
  }
  const container = {
      width: 500,
      margin: '50px auto'
    }