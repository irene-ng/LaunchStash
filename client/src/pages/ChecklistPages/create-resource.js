import React from 'react'
import "./css/site.css"
import "./css/style3.css"
import { Link } from "react-router-dom";

const CreateResource = () => {


    return (
        <>
        <section className="section-dark section-xl my-0">
        
        </section>

        <section className="section section-lg section-dark pt-lg-0 mt--150">
        <div class="container-fluid stashContainer">
            <div class="row bodyContent">
                <div class="mx-xl-5 w-100 mt-5">
                    <div class="mx-xl-5">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-xl-3 leftNav">
                                    <nav class="navbar navbar-expand-xl p-0">
                                        <div class="collapse navbar-collapse menu">
                                            <ul class="nav flex-column" id="left-nav">
                                                <Link to={"/create-checklist"}>
                                                <li class="nav-item">
                                                    <a class="nav-link d-flex align-items-center parent" href="#">
                                                        CHECKLIST
                                                    </a>
                                                    <div id="collapseOne" class="child-nav collapse show ml-3">
                                                        <ul class="nav flex-column">
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">Pre-Launch</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">Beta Access</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">Launch</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">After Launch</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                </Link>
                                                <li class="nav-item mt-4">
                                                    <a class="nav-link d-flex align-items-center parent text-white font-weight-bolder" href="#">
                                                        RESOURCES
                                                    </a>
                                                    <div id="collapseTwo" class="child-nav collapse show ml-3">
                                                        <ul class="nav flex-column">
                                                            <li class="nav-item active">
                                                                <a class="nav-link" href="#">Promotion Platform</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">Audience Target</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">Article Writing</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">Customer Support</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">Tracking Tools</a>
                                                            </li>
                                                            <li class="nav-item">
                                                                <a class="nav-link" href="#">Beta Test Tool List</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div class="col-xl-9">
                                    <div class="resourcePage">
                                        <div class="resources">
                                            <div class="title">RESOURCES </div>
                                            <div class="row mt-3">
                                                <div class="col-xl-4">
                                                    <div class="resourcesItem active">
                                                        <div class="text">
                                                            Promotion Platform
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="resourcesItem">
                                                        <div class="text">
                                                            Audience Target
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="resourcesItem">
                                                        <div class="text">
                                                            Article Writing
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="resourcesItem">
                                                        <div class="text">
                                                            Customer Support
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="resourcesItem">
                                                        <div class="text">
                                                            Tracking Tools
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-4">
                                                    <div class="resourcesItem">
                                                        <div class="text">
                                                            Beta Test Tool List
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="detailRessource mt-5">
                                            <div class="detailList mx-5">
                                                <div class="container-fluid">
                                                    <div class="listItem row">
                                                        <div class="col-4 name py-3 px-5">AllTopStartups</div>
                                                        <div class="col-8 detail py-3 px-5">Product/startup reviews are custom
                                                            written posts, published and distributed across our social media
                                                            channels multiple times in the week of publication.</div>
                                                    </div>
                                                    <div class="listItem row mt-1">
                                                        <div class="col-4 name py-3 px-5">AppVita</div>
                                                        <div class="col-8 detail py-3 px-5">List your product for exposure to
                                                            audience and investors. </div>
                                                    </div>
                                                    <div class="listItem row mt-1">
                                                        <div class="col-4 name py-3 px-5">Betalist</div>
                                                        <div class="col-8 detail py-3 px-5">List your product for exposure to
                                                            audience and investors. </div>
                                                    </div>
                                                    <div class="listItem row mt-1">
                                                        <div class="col-4 name py-3 px-5">AngelList</div>
                                                        <div class="col-8 detail py-3 px-5">List your product for exposure to
                                                            audience and investors. Product/startup reviews are custom
                                                            written posts. </div>
                                                    </div>
                                                    <div class="listItem row mt-1">
                                                        <div class="col-4 name py-3 px-5">AppVita</div>
                                                        <div class="col-8 detail py-3 px-5">List your product for exposure to
                                                            audience and investors. </div>
                                                    </div>
                                                    <div class="listItem row mt-1">
                                                        <div class="col-4 name py-3 px-5">Betalist</div>
                                                        <div class="col-8 detail py-3 px-5">List your product for exposure to
                                                            audience and investors. </div>
                                                    </div>
                                                    <div class="listItem row mt-1">
                                                        <div class="col-4 name py-3 px-5">AngelList</div>
                                                        <div class="col-8 detail py-3 px-5">List your product for exposure to
                                                            audience and investors. Product/startup reviews are custom
                                                            written posts. </div>
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
        </section>
        </>
    )
}

export default CreateResource