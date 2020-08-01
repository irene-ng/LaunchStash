import React, { useState } from 'react'
// import {Accordion, Button, Card, FormControl, InputGroup} from "react-bootstrap";
// import FaceBookShareButton from "./FacebookShareButton";
import "../ChecklistPages/css/site.css"
import "../ChecklistPages/css/style4.css"
import { Container } from 'reactstrap'

const CheckboxItem = (props) => {
    const [clickedItem, setClickedItem] = useState('')

    const renderSteps = (step) => {
        return (
            <>
            <ol>
                {step.map((value, index) => (
                    <li className="labelParent mb-3" key={index}>{value}</li>
                ))}
            </ol>
            </>
        )
    }

   return (
       <>
       <section className="section section-lg section-dark pt-lg-0 mt--150">
        <div class="container-fluid stashContainer text-white">
            <div class="row bodyContent">
                <div class="mx-xl-5 w-100 mt-5">
                    <div class="mx-xl-5">
                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                <div class="col-xl-9">
                                    <div class="checkList">
                                        
                                        <div class="title">Name: <span>{props.clickedItem.name}</span></div>

                                        <div class="container-fluid mt-4">
                                            <div class="row">

                                                <div class="itemContainer col-xl-3 col-6">
                                                    <div class="checkListItem" onClick={() => setClickedItem('Pre-Launch')}>
                                                        <div class="top">
                                                        </div>
                                                        <div class="bottom">
                                                        </div>
                                                        {clickedItem==='Pre-Launch' ? 
                                                            <div class="text text-success" >Pre-Launch</div>
                                                            :
                                                            <div class="text">Pre-Launch</div>
                                                        }
                                                    </div>
                                                </div>

                                                <div class="itemContainer col-xl-3 col-6">
                                                    <div class="checkListItem" onClick={() => setClickedItem('Beta Access')}>
                                                        <div class="top">
                                                        </div>
                                                        <div class="bottom">
                                                        </div>
                                                        {clickedItem==='Beta Access' ? 
                                                        <div class="text text-success" >Beta Access</div>
                                                        :
                                                        <div class="text">Beta Access</div>
                                                        }
                                                    </div>
                                                </div>

                                                <div class="itemContainer col-xl-3 col-6">
                                                    <div class="checkListItem" onClick={() => setClickedItem('Launch')}>
                                                        <div class="top">
                                                        </div>
                                                        <div class="bottom">
                                                        </div>
                                                        {clickedItem==='Launch' ? 
                                                        <div class="text text-success" >Launch</div>
                                                        :
                                                        <div class="text">Launch</div>
                                                        }
                                                    </div>
                                                </div>
                                                <div class="itemContainer col-xl-3 col-6">
                                                    <div class="checkListItem" onClick={() => setClickedItem('After Launch')}>
                                                        <div class="top">
                                                        </div>
                                                        <div class="bottom">
                                                        </div>
                                                        {clickedItem==='After Launch' ? 
                                                        <div class="text text-success" >After Launch</div>
                                                        :
                                                        <div class="text">After Launch</div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <form class="mt-6 mb-6">
                                        <div class="scroll">
                                            <div class="checkForm">
                                                {(() => {
                                                    switch (clickedItem) {
                                                    case "Pre-Launch":      return renderSteps(props.clickedItem.step1);
                                                    case "Beta Access":     return renderSteps(props.clickedItem.step2);
                                                    case "Launch":          return renderSteps(props.clickedItem.step3);
                                                    case "After Launch":    return renderSteps(props.clickedItem.step4);
                                                    default:                return null;
                                                    }
                                                })()}   
                                            </div>
                                        </div>
                                        <div class="form-group mt-5 d-flex justify-content-center">
                                            <button type="button" class="btn btn-primary primaryBtn export ml-5 px-5">
                                                <i className="fa fa-file-pdf-o mr-2" />
                                                EXPORT CHECKLIST
                                            </button>
                                        </div>
                                    </form>
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

export default CheckboxItem