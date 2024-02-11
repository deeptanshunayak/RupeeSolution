import React from 'react'
import Accordian from './Accordian'
import AccordionUsage from './AccordionUsage'
import  loan from "../src/images/homeloan.svg"
import fb from "../src/images/footerb.svg"
export default function Loanpage3() {
  return (
    <>
   <div className="row">
    <div className="col-10 mx-auto">
    <hr></hr>
        <div className='row'>
            <div className='col'>
            <img src={loan} className="set animated1" alt="home img" />
            </div>
            <div className='col'>
            <h2 className='text-center setcolor'>HOME LOAN</h2>
             <div className='col'>
                <div className='adjust'>
                <p>To qualify for a personal loan, you have to meet certain criteria. Below are the important factors that lenders take into consideration to decide your eligibility for a personal loan.

Age should fall under the range of 21 years to 60 years
Net monthly income should be 15,000/- for salaried and self-employed, yearly transactions should be a minimum of 20 lakhs  
</p></div>
             </div>
            </div>
        </div>
        <div className='pt-5'>
            <h3 className='texter pb-3'>Eligibility</h3>
            <p>To qualify for a personal loan, you have to meet certain criteria. Below are the important factors that lenders take into consideration to decide your eligibility for a personal loan.</p>
            <p>Age should fall under the range of 21 years to 60 years</p>
            <p>Net monthly income should be 15,000/- for salaried and self-employed, yearly transactions should be a minimum of 20 lakhs</p>
            <p>Credit score must be above 650</p>
            <p>Debt-to-income ratio</p>
            <p>Employment stability</p>
            <p>Maintained a good credit score</p>
            <p>Clear repayment history</p>
            <p>Must be a Resident Citizen of India</p>

        </div>
        <div className='pt-5'>
            <h3 className='texter pb-3'>Features and Benefits of our Personal Loan</h3>
            <p>A personal loan is an unsecured loan that is not backed by collateral or security. This makes it a flexible financing option, as there are no limitations on its use.</p>
            <p>The followings are the ways a personal loan can be useful:</p>
            <p><span>&#8226;</span>Debt consolidation:  Combining multiple debts into a single loan with a lower interest rate to save money on interest payments and make it easier to manage debts.</p>
            <p><span>&#8226;</span>Home renovation:  Using a personal loan to fund home renovation projects can increase the value of your home and improve your living conditions.</p>
            <p><span>&#8226;</span>Medical expenses: If you have unexpected medical expenses, such as emergency surgery or hospitalization, a personal loan can help cover the costs.</p>
            <p><span>&#8226;</span>Emergency expenses:  A personal loan can help cover unexpected expenses like medical emergencies or car repairs to avoid financial hardship.</p>
        </div>
        <div className='pt-5'>
            <h3 className='texter pb-3'>Documents required to apply for Personal Loan</h3>
            <p><span>&#8226;</span>Identity Proof  - Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card</p>
            <p><span>&#8226;</span>Proof of Residence or Address Proof - Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card, Electricity Bill, Telephone Bill, Ration Card </p>
            <p><span>&#8226;</span>Age Proof -  Passport, Voter’s ID, Driving License, PAN Card, Aadhaar Card</p>
            <p><span>&#8226;</span>Income Proof - 1 year Bank statement, 3 months Salary Slips</p>
            <p><span>&#8226;</span>Employment Proof - Employment Certificate, Office address proof</p>
            <p><span>&#8226;</span>GST or VAT Registration for Self-employed</p>
            <p><span>&#8226;</span>Photograph - Passport-size photographs</p>
            <p><span>&#8226;</span>Business proof - Business registration documents such as a partnership deed, Memorandum of Association (MOA), Articles of Association (AOA), etc.</p>
            <p><span>&#8226;</span>Income tax returns – Documents of the past 2-3 years to verify income and tax payment history</p>
        </div>
        <div className='pt-5'>
            
        </div>
       
    </div>
  </div>  
  <section id='ruloans'>
            <div className="col-10 mx-auto pt-5">
                <div className='row'>
                    <div className='col'>
                        <div className='row pt-5'>
                            <h3 className='setcolorb'>Fees and Charges for Personal Loan</h3>
                            <p className='text-white pt-3'>The fees and charges of personal loans usually vary from lender to lender and from case to case.
                                The aforementioned table will give you a fair idea of the fees and charges related to personal loans:</p>
                        </div>
                        <div className='row pt-5'>
                            <div className='col'>
                                <p className='setcolorb'>Loan Processing Fees</p>
                                <p className='text-white'>0.5% to 4% loan amount</p>
                                <p className='setcolorb pt-3'>Legal Fees</p>
                                <p className='text-white'>As per Actual</p>
                                <p className='setcolorb pt-3'>Loan Cancellation</p>
                                <p className='text-white'>Usually 3000 to 5% of loan amount</p>

                            </div>
                            <div className='col'>
                                <p className='setcolorb'>Penal Charges</p>
                                <p className='text-white'>Approx 499/- to 599/-</p>
                                <p className='setcolorb pt-3'>Stamp Duty Charges</p>
                                <p className='text-white'>Value of the Property and State Tax</p>
                                <p className='setcolorb pt-3'>EMI / Cheque Bonus</p>
                                <p className='text-white'>Usually 2% per month</p>

                            </div>
                        </div>
                    </div>
                    <div className='col text-end ps-3'>
                        <img src={fb} className="set animated1" alt="home img" />
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
   </>
  )
}
