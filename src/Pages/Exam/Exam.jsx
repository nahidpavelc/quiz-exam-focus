import React from 'react';
import './Exam.css'

const Exam = () => {
  return (
    <div className='container d-flex justify-content-center' style={{minHeight:'625px'}}>
      <div class="accordion col-lg-6 col-12" id="accordionExample">
        <div class="accordion-item accordc ">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Physics 1st Part
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <span className='d-flex justify-content-center'><p className='m-0' >Total Question :</p>10</span>
              <span className='d-flex justify-content-center'><p className='m-0' >Total Marks :</p>10</span>
              <span className='d-flex justify-content-center'><p className='m-0' >Pass Marks :</p>10</span>
              <span className='d-flex justify-content-center'><p className='m-0' >Total Time :</p>26:46:40 min</span>
              <span className='d-flex justify-content-center'><p className='m-0' >Exam Start :</p>12:09pm, 28 Aug 2022</span>
              <span className='mt-3'>12:09pm, 28 Aug 2022</span>
            </div>
            <button type="button" class="btn btn-success m-3">Success</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exam;