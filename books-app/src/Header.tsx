import React from "react";
import { Parser } from 'html-to-react';

import { Link } from "react-router-dom";

function NavLinks() {
  return ( "" );
}

const rawHTML = `<div>    
<div class="main-container">
<div class="main-body">
<div class="main-layout">
            <div class="layers-container">
                            <div class="layer">
                    <div class="off-canvas right-alignment off-canvas-container"
     style="display:none; background:#f7f7f7; width:20vw;">
     <div class="off-canvas-close uci-close">
        <svg fill="#999" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
           <defs>
               <clipPath>
                   <rect width="1em" height="1em" transform="translate(971 2389)">
                   </rect>
               </clipPath>
           </defs>
           <g transform="translate(-971 -2389)">
               <path
                   d="M20.5,23.124l-8.834,8.834a1.852,1.852,0,1,1-2.618-2.619L17.887,20.5,9.053,11.671a1.851,1.851,0,1,1,2.618-2.618L20.5,17.887l8.834-8.834a1.852,1.852,0,1,1,2.619,2.618L23.124,20.5l8.834,8.834a1.852,1.852,0,1,1-2.619,2.619Z"
                   transform="translate(962.495 2380.495)">
               </path>
           </g>
       </svg>
   </div>
            <div class="off-canvas-inner-container native-scroll-box y-scroll">
                                        <div class="uc-row-wrapper">
                <div
                    class="uc-row   last                       
                    
                                            " data-id="35"
                                        style="  "

                >
                    <div id="r35" class="row-container ">
                        <div class="row mainRow "
                                                          style="">
                                                                                                                                <div
    class="column col-sm-12 "
    dataColumn-id="48"
        style="     "
>
        <div class="column-container "

         style="" aria-label="column" role="contentinfo">
                                                                                    
                        <div
                            class="module-container   only-mobile   align-center ModuleNavigation
                             first   last                             "
                                                        aria-label="module container" role="contentinfo"
                            id="m69"
                        >

                            <div
                                class="   module ModuleNavigation "
                                dataModule-id="69"

                                                                
                                >

                                <input type="hidden" class="standard-navigation">
<style>
                #navigation-69 > .standard-view > .navigation > .page > .page-children {
        background: #f1f1f1;
    }
    #navigation-69 > .standard-view > .navigation > .page > .page-children > .page > ul {
        background: #f1f1f1;
    }
            
        #navigation-69 .navigation > li.has-childes.page > ul a {
        padding: 0 15px;
    }

        
                        #navigation-69 .navigation > li.has-childes.page > ul.page-children:after {
                height: 10px;
            }
            #navigation-69 ul.open-to-top::after {
                position: absolute;
                bottom: -10px;
            }
                #navigation-69 .page a {
        color: #353535;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        text-transform: none;
    }

    #navigation-69 .page a .uci-dropdown-arrow-down svg {
        fill: #353535;
    }

            #navigation-69 > nav > ul > li.page:not(:last-child) {
                        margin-bottom: 30px;
            }
    #navigation-69 > nav > ul > li:first-child:nth-last-child(1) {
                          margin-bottom: 40px;
            }
    #navigation-69 li.page > a:hover {
        color: #f1f1f1 !important;
    }
    #navigation-69 li.page.active > a {
        color: #353535;
    }
    #navigation-69 li.page.active > a:hover {
        color: #f1f1f1 !important;
    }
    #navigation-69 li.page.active > a {
        color: #353535;
    }

    #navigation-69 li.page.active > a:hover {
        color: #f1f1f1 !important;
    }
    #navigation-69 li.page > ul.page-children li.page a {
        color: #353535;
    }
    #navigation-69 li.page > ul.page-children li.page a .uci-dropdown-arrow-down svg {
        fill: #353535;
    }
    #navigation-69 li.page > ul.page-children > li.page a:hover,
    #navigation-69 li.page > ul.page-children > li.page > ul.page-children > li.page a:hover {
        color: #959595     !important;
    }
    #navigation-69 li.page > ul.page-children > li.page.active > a,
    #navigation-69 li.page > ul.page-children > li.page > ul.page-children > li.page.active > a {
        color: #353535;
    }

    #navigation-69 li.page > ul.page-children > li.page.active > a:hover,
    #navigation-69 li.page > ul.page-children > li.page > ul.page-children > li.page.active > a:hover {
        color: #959595     !important;
    }
    #navigation-69 .subMenu__show:before,
    #navigation-69 .subMenu__horizontal-arrow-left:before,
    #navigation-69 .subMenu__horizontal-arrow-right:before,
    #navigation-69 li.page > ul.page-children > li.has-childes > .page-children.pagesArrows > li:first-child:before {
        color: #f1f1f1;
    }

            #navigation-69 li.page > ul.page-children > li.page > a {
                          color: #353535;
                                 font-size: 12px;
        }

    
            #navigation-69 li.page ul.page-children .page {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    #navigation-69 li.page ul.page-children .page:last-child {
        padding-bottom: 10px;
    }

    #navigation-69 li.has-childes.page > a > .uci-dropdown-arrow-down svg {
        width: 8px;
        height: 8px;
        line-height: 10px;
    }

    #navigation-69 li.has-childes.page > .page-children.pagesArrows > .has-childes > a > .uci-dropdown-arrow-down svg {
        width: 7px;
        height: 7px;
        line-height: 12px;
    }

    #navigation-69 li.has-childes.page > .page-children li > a,
    #navigation-69 li.has-childes.page > .page-children li {
        text-align: center;
    }

                 #navigation-69 li.page {
        text-align: center ;;
    }
    </style>

<div id="navigation-69"
     class="navigation-inner
         clickable-dropdown          in-canvas         vertical standard
             "
     data-stretch-labels=""
 >
    
                    <nav class="standard-view ">
            <ul class="navigation" style="font-family: &#039;Lato&#039;;" itemscope itemtype="https://www.schema.org/SiteNavigationElement">
                                                                                                                    <li class="page subMenu__item show center
                 active                                                 "
        data-anchor=""
        itemprop="name">
        <a class="nav-item center "
           href="https://booksonsoftware.com"
           itemprop="url"
           data-page-type="pageBlank"
           data-link = ""
                                            tabindex="0"
                   >

            Home
                    </a>
                            <script type="application/ld+json">
                {"@context":"https:\/\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]}            </script>
            </li>
                                                                                                                            <li class="page subMenu__item show center
                                                                "
        data-anchor=""
        itemprop="name">
        <a class="nav-item center "
           href="https://booksonsoftware.com/author"
           itemprop="url"
           data-page-type="pageBlank"
           data-link = ""
                                            tabindex="0"
                   >

            Author
                    </a>
                    </li>
                                                                                                                            <li class="page subMenu__item show center
                                                                "
        data-anchor=""
        itemprop="name">
        <a class="nav-item center "
           href="https://booksonsoftware.com/new"
           itemprop="url"
           data-page-type="pageBlank"
           data-link = ""
                                            tabindex="0"
                   >

            Books
                    </a>
                    </li>
                                                                                                                            <li class="page subMenu__item show center
                                                                "
        data-anchor=""
        itemprop="name">
        <a class="nav-item center "
           href="https://booksonsoftware.com/buy"
           itemprop="url"
           data-page-type="pageBlank"
           data-link = ""
                                            tabindex="0"
                   >

            Buy
                    </a>
                    </li>
                                                                        </ul>
        </nav>
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
                </div>
                    </div>
    
                <div class="header-and-main-rows  ">
                    <header class="header-rows "
                 style="  margin-bottom:0vh;  ">

                
                
                
                                                            <div class="header-row-wrapper">
                        <div class="uc-row-wrapper">
                <div
                    class="uc-row                          header-row  
                    
                                            " data-id="2"
                                        style="   background:rgb(245, 245, 245); "

                >
                    <div id="r2" class="row-container  container ">
                        <div class="row headerRow "
                                                          style="">
                                                                                                                                <div
    class="column col-xs-12 "
    dataColumn-id="2"
        style="  padding:0px 0px;      background: rgb(245, 245, 245); "
>
        <div class="column-container "

         style="" aria-label="column" role="contentinfo">
                                                                                    
                        <div
                            class="module-container   only-mobile   align-center ModuleLogo
                             first                              "
                                                            style=" padding: 0px 40px 0px 40px  ; padding-bottom:20px ; "
                                                        aria-label="module container" role="contentinfo"
                            id="m3"
                        >

                            <div
                                class="   module ModuleLogo "
                                dataModule-id="3"

                                                                 style="display:block;max-width:460px;"
                                
                                >

                                <a href='https://booksonsoftware.com'>
                    <div class="fixed-ratio" style="padding-bottom: 0%">
                <img
                    width="460px"
                    height="141px"
                    data-logo-element
                    class="fixed-ratio-content"
                    src="https://b67.s3.amazonaws.com/Book-1Gen.jpg"
                    alt="Ravi Rajamani"
                />
            </div>
            </a>
                                </div>
                        </div>
                                                                                                                    
                        <div
                            class="module-container   only-mobile   align-center ModuleNavigation
                              last                             "
                                                        aria-label="module container" role="contentinfo"
                            id="m4"
                        >

                            <div
                                class="   module ModuleNavigation "
                                dataModule-id="4"

                                                                
                                >

                                <input type="hidden" class="standard-navigation">
<style>
                #navigation-4 > .standard-view > .navigation > .page > .page-children {
        background: #f1f1f1;
    }
    #navigation-4 > .standard-view > .navigation > .page > .page-children > .page > ul {
        background: #f1f1f1;
    }
            
        #navigation-4 .navigation > li.has-childes.page > ul a {
        padding: 0 15px;
    }

        
                        #navigation-4 .navigation > li.has-childes.page > ul.page-children:after {
                height: 10px;
            }
            #navigation-4 ul.open-to-top::after {
                position: absolute;
                bottom: -10px;
            }
                #navigation-4 .page a {
        color: #353535;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 2px;
        text-transform: uppercase;
    }

    #navigation-4 .page a .uci-dropdown-arrow-down svg {
        fill: #353535;
    }

            #navigation-4 > nav > ul > li.page:not(:last-child) {
                        margin-right: 20px;
            }
    #navigation-4 > nav > ul > li:first-child:nth-last-child(1) {
            }
    #navigation-4 li.page > a:hover {
        color: rgb(153, 153, 153) !important;
    }
    #navigation-4 li.page.active > a {
        color: #353535;
    }
    #navigation-4 li.page.active > a:hover {
        color: rgb(128, 128, 128) !important;
    }
    #navigation-4 li.page.active > a {
        color: #353535;
    }

    #navigation-4 li.page.active > a:hover {
        color: rgb(128, 128, 128) !important;
    }
    #navigation-4 li.page > ul.page-children li.page a {
        color: #353535;
    }
    #navigation-4 li.page > ul.page-children li.page a .uci-dropdown-arrow-down svg {
        fill: #353535;
    }
    #navigation-4 li.page > ul.page-children > li.page a:hover,
    #navigation-4 li.page > ul.page-children > li.page > ul.page-children > li.page a:hover {
        color: #959595     !important;
    }
    #navigation-4 li.page > ul.page-children > li.page.active > a,
    #navigation-4 li.page > ul.page-children > li.page > ul.page-children > li.page.active > a {
        color: #353535;
    }

    #navigation-4 li.page > ul.page-children > li.page.active > a:hover,
    #navigation-4 li.page > ul.page-children > li.page > ul.page-children > li.page.active > a:hover {
        color: #959595     !important;
    }
    #navigation-4 .subMenu__show:before,
    #navigation-4 .subMenu__horizontal-arrow-left:before,
    #navigation-4 .subMenu__horizontal-arrow-right:before,
    #navigation-4 li.page > ul.page-children > li.has-childes > .page-children.pagesArrows > li:first-child:before {
        color: #f1f1f1;
    }

            #navigation-4 li.page > ul.page-children > li.page > a {
                          color: #353535;
                                 font-size: 12px;
        }

    
            #navigation-4 li.page ul.page-children .page {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    #navigation-4 li.page ul.page-children .page:last-child {
        padding-bottom: 10px;
    }

    #navigation-4 li.has-childes.page > a > .uci-dropdown-arrow-down svg {
        width: 7px;
        height: 7px;
        line-height: 8px;
    }

    #navigation-4 li.has-childes.page > .page-children.pagesArrows > .has-childes > a > .uci-dropdown-arrow-down svg {
        width: 7px;
        height: 7px;
        line-height: 12px;
    }

    #navigation-4 li.has-childes.page > .page-children li > a,
    #navigation-4 li.has-childes.page > .page-children li {
        text-align: center;
    }

             </style>

<div id="navigation-4"
     class="navigation-inner
         clickable-dropdown                 horizontal standard
             "
     data-stretch-labels=""
 >
            <div class="off-canvas-button icon" aria-label="off canvas button" role="button" data-selector="off-canvas-4" data-attribute="right" style="width:25px;height:25px;color:#000;fill:#000;" tabindex="0">
            <svg viewbox="0 0 100.00000762939453 75.000244140625" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="scale(1.2716659928598795)"><g><g><path clip-rule="evenodd" d="M81.602,44.102h-66.84c-3.256,0-5.898,2.64-5.898,5.898    s2.642,5.898,5.898,5.898h66.84c3.256,0,5.898-2.64,5.898-5.898S84.858,44.102,81.602,44.102z M81.602,67.693h-66.84    c-3.256,0-5.898,2.64-5.898,5.898c0,3.258,2.642,5.898,5.898,5.898h66.84c3.256,0,5.898-2.64,5.898-5.898    C87.5,70.333,84.858,67.693,81.602,67.693z M14.763,32.307h66.84c3.256,0,5.898-2.64,5.898-5.898c0-3.258-2.642-5.898-5.898-5.898    h-66.84c-3.256,0-5.898,2.64-5.898,5.898C8.865,29.667,11.507,32.307,14.763,32.307z" transform="translate(-8.864001274108887,-20.511001586914062)"></path></g></g></g></svg>
        </div>
    
                    <nav class="standard-view ">
            <ul class="navigation" style="font-family: Lato;" itemscope itemtype="https://www.schema.org/SiteNavigationElement">
                                                                                                                    <li class="page subMenu__item show center
                 active                                                 "
        data-anchor=""
        itemprop="name">
        <a class="nav-item center "
           href="https://booksonsoftware.com"
           itemprop="url"
           data-page-type="pageBlank"
           data-link = ""
                                            tabindex="0"
                   >

            Home
                    </a>
                            <script type="application/ld+json">
                {"@context":"https:\/\/schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home"}]}            </script>
            </li>
                                                                                                                            <li class="page subMenu__item show center
                                                                "
        data-anchor=""
        itemprop="name">
        <a class="nav-item center "
           href="https://booksonsoftware.com/author"
           itemprop="url"
           data-page-type="pageBlank"
           data-link = ""
                                            tabindex="0"
                   >

            Author
                    </a>
                    </li>
                                                                                                                            <li class="page subMenu__item show center
                                                                "
        data-anchor=""
        itemprop="name">
        <a class="nav-item center "
           href="https://booksonsoftware.com/books"
           itemprop="url"
           data-page-type="pageBlank"
           data-link = ""
                                            tabindex="0"
                   >

            Books
                    </a>
                    </li>
                                                                                                                            <li class="page subMenu__item show center
                                                                "
        data-anchor=""
        itemprop="name">
        <a class="nav-item center "
           href="https://booksonsoftware.com/buy"
           itemprop="url"
           data-page-type="pageBlank"
           data-link = ""
                                            tabindex="0"
                   >

            Buy
                    </a>
                    </li>
                                                                        </ul>
        </nav>
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
                                                    </header>`;


export function Header() {
  //    return (<div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>);
  return (<div>
  {Parser().parse(rawHTML)}
  </div>);
  }
  const container = {
      width: 500,
      margin: '50px auto'
    }