import React from 'react';
import { NavLink } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='container' style={{ minHeight: '100vh' }}>
      {/* <h1>SignUp</h1> */}
      <div>
        <div class="row justify-content-center">
          <div class="col-lg-6 col-12">
            <div class="form_part" style={{ borderColor: '#ccc', boxShadow: '2px 3px 10px 2px gray', padding: '15px', margin: '15px 0px 55px 0px' }}>
              <h4 class="animated fadeIn" style={{ margin: '0', fontSize: '1.5rem' }}>লগইন</h4>


              <form action="http://focusbd.info/site/login-check" method="post" enctype="multipart/form-data" class="form-horizontal" autocomplete="off">
                <br />
                <div class="form-group animated bounceIn">
                  <input type="number" class="form-control" name="phone" placeholder="ফোন" required="" value="01709372481" readonly="" />
                  <input type="hidden" class="form-control" name="userot" required="" value="e2fc714c4727ee9395f324cd2e7f331f" readonly="" />
                </div>
                <div class="form-group animated bounceIn">
                  <input type="text" class="form-control" name="optcode" maxlength="6" placeholder="মোবাইলে প্রাপ্ত কোড" required="" />
                </div>
                <div class="form_button animated fadeIn">
                  <button type="submit" class="btn" style={{ backgroundColor: '#483D8B', color: 'white' }}>লগইন</button>
                </div>
                <NavLink className="nav-link" style={{ textDecoration: 'underline', color: '#888', fontSize: '18px' }} to="/Signup">
                  {" "}
                  নিবন্ধন করা নাই? নিবন্ধন করুন.
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;