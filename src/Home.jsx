import React, { useState } from "react";
import web from "../src/images/homepage.svg";
import web1 from "../src/images/card.svg";
import { NavLink } from "react-router-dom";
import Accordian from './Accordian'
import { Slider } from "@mui/material";
import { indigo } from '@mui/material/colors';
import web2 from "../src/images/aboutus.svg"
import AccordionUsage from "./AccordionUsage";
import Footer from "./Footer";
import emi1 from "../src/images/Group 19 (1).svg";


const Home = () => {
    const color1 = indigo[900];
    const [pAmount, setpAmount] = useState(2755000);
    const [interest, setinterest] = useState(7);
    const [duration, setduration] = useState(14);
    const intMax = 24;
    const maxValue = 50000000;
    const maxduration = 30;
    const intr = interest / 1200;
    const emi = duration ? Math.round(pAmount * intr / (1 - (Math.pow(1 / (1 + intr), duration)))) : 0;
    const totalAmt = duration * emi;
    const TotalAmountOfCredit = Math.round((emi / intr) * (1 - Math.pow((1 + intr), (-duration))));
    const TotalAmountOfInterest = Math.round(totalAmt - TotalAmountOfCredit);
    const mark = [
        {
            value: 0,
            label: "0"

        },
        {
            value: 5000000,
            label: "50L"
        },
        {
            value: 10000000,
            label: "1cr"
        },
        {
            value: 15000000,
            label: "1.5cr"
        },
        {
            value: 20000000,
            label: "2cr"
        },
        {
            value: 25000000,
            label: "2.5cr"
        },
        {
            value: 30000000,
            label: "3cr"
        },
        {
            value: 35000000,
            label: "3.5cr"
        },
        {
            value: 40000000,
            label: "4cr"
        },
        {
            value: 45000000,
            label: "4.5cr"
        },
        {
            value: 50000000,
            label: "5cr"
        },

    ]
    const mark1 = [
        {
            value: 0,
            label: "0"

        },
        {
            value: 4,
            label: "4"
        },
        {
            value: 8,
            label: "8"
        },
        {
            value: 12,
            label: "12"
        },
        {
            value: 16,
            label: "16"
        },
        {
            value: 20,
            label: "20"
        },
        {
            value: 24,
            label: "24"
        },
    ]
    const mark2 = [
        {
            value: 0,
            label: "0"

        },
        {
            value: 10,
            label: "10"
        },
        {
            value: 20,
            label: "20"
        },
        {
            value: 30,
            label: "30"
        },
    ]
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1 className="fade-in">
                                        Unveiling Your Financial Potential...
                                    </h1>
                                    <h2 className="my-3 fade-in">
                                        Empowering Your Financial Journey through Customized Asset Management Services
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="/" className="btn-get-started">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gapper">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="my-4">
                            <h1 className="text-left fade-in">Credit Cards And Loans</h1>
                        </div>
                        <div className="container-fluid mb-5">
                            <div className="row">
                                <div className="col-12 mx-auto">
                                    <div className="row gy-4">
                                        <div className="col-md-4 col-10 mx-auto">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"> <img src={web1} className="img-fluid animated" alt="home img" /></h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary">Personal Loan</h6>
                                                    <p class="card-text fade-in">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                                    <NavLink to="/loan" class="card-link">Check Eligibility</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-10 mx-auto">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><img src={web1} className="img-fluid animated" alt="home img" /></h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary fade-in">Education Loan</h6>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                                    <NavLink to='/loan1' class="card-link">Check Eligibility</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-10 mx-auto">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><img src={web1} className="img-fluid animated" alt="home img" /></h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary">Car Loan</h6>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                                    <NavLink to='/loan2' class="card-link">Check Eligibility</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-10 mx-auto">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><img src={web1} className="img-fluid animated" alt="home img" /></h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary">Home Loan</h6>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                                    <NavLink to='/loan3' class="card-link">Check Eligibility</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-10 mx-auto">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><img src={web1} className="img-fluid animated" alt="home img" /></h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary">Property Loan</h6>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                                    <NavLink to='/loan4' class="card-link">Check Eligibility</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-10 mx-auto">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h5 class="card-title"><img src={web1} className="img-fluid animated" alt="home img" /></h5>
                                                    <h6 class="card-subtitle mb-2 text-body-secondary">Gold Laon</h6>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                                                    <NavLink to='/loan5' class="card-link">Check Eligibility</NavLink>
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
            <section id="header1" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Get started with Rupee Solution today
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of good developers
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to="/" className="btn-get-started">Get Started</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={web2} className="img-fluid animated" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="emi">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <h3 className="ps-5">Emi Calculator</h3>
                            <h6 className="ps-5">You can check your EMI based on the loan amount, tenure, and the interest rate the lender is offering.</h6>
                            <div className="col align-items-start">
                                <div className="slider">
                                    <h6><b>Loan Amount(₹)</b></h6>
                                    <input className="sizer" value={pAmount} onChange={e => setpAmount(e.target.value)} />

                                    <Slider
                                        style={{color:"#5C50F8"}}
                                        value={pAmount}
                                        onChange={(Event, vAmt) => { setpAmount(vAmt) }}
                                        max={maxValue}
                                        defaultValue={pAmount}
                                        aria-label="Small"
                                        size="medium"
                                        marks={mark}
                                        step={50000}
                                    />
                                    <h6><b>Interest (%)</b></h6>
                                    <h5>{interest}</h5>
                                    <Slider
                                        style={{color:"#5C50F8"}}
                                        value={interest}
                                        onChange={(Event, vInt) => { setinterest(vInt) }}
                                        max={intMax}
                                        defaultValue={interest}
                                        step={0.1}
                                        marks={mark1}
                                    />
                                    <h6><b>Loan Tenure(in years)</b></h6>
                                    <h5>{duration}</h5>
                                    <Slider
                                        style={{color:"#5C50F8"}}
                                        value={duration}
                                        onChange={(Event, vDur) => { setduration(vDur) }}
                                        max={maxduration}
                                        defaultValue={duration}

                                        marks={mark2}
                                    />
                                </div>
                            </div>
                            <div className="col">
                                <div className="imager pt-5 ps-5">

                                    <img src={emi1} className="img-fluid" alt="home img" />

                                    {/* <TableDetails pAmount={pAmount} interest={interest} duration={duration} emi={emi} TotalAmountOfInterest={TotalAmountOfInterest} totalAmt={totalAmt} /> */}


                                    <div className="texte">
                                        <div className="row  pro">
                                            <div className="col fonter pe-2 text-primary">Principal Amount</div>
                                            <div className="col fonter  text-primary ">₹{pAmount}</div>
                                        </div>
                                        <div className="row pt-2 pro">
                                            <div className="col fonter pe-2 text-primary">Interest Payable</div>
                                            <div className="col fonter text-primary">₹{TotalAmountOfInterest}</div>
                                        </div>
                                        <div className="row  padder1 pro ">
                                            <div className="col fonter pe-2">Total Payable Amount</div>
                                            <div className="col fonter">₹{totalAmt}</div>
                                        </div>
                                        <div className="row  padder2 pro ">
                                            <div className="col text-light fonter">Monthly Loan Emi</div>
                                            <div className="col text-light fonter">₹{emi}</div>
                                        </div>
                                        {/* <p className="fonte text-primary">Principal Amount<span className="gap"></span>₹{pAmount}</p>
                                <p className="fonte text-primary">Interest Payable<span className="gap2"></span>₹{TotalAmountOfInterest}</p>
                                <p className="fonte pt-2">Total Payable Amount<span className="gap1"></span>₹{totalAmt}</p>
                                <p className="fonte pt-4 text-light">Monthly Loan Emi <span className="gap"></span>₹{emi}</p> */}
                                    </div>
                                    <div className="mt-3 spadder">
                                        <NavLink to="/" className="btn-get-started1">Get Started</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="boom">
                <div className="row justify-content-center">
                    <div className="col-10 mx-auto">
                        <AccordionUsage></AccordionUsage>
                    </div>
                </div>
            </section>

            <section id="boomer">
                <Footer></Footer>
            </section>
        </>
    );
};
export default Home;