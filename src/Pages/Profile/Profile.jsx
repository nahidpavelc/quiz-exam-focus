import React from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  return (
    <div className='' style={{ minHeight: '625px' }}>
      {/* <h1>Profile</h1> */}
      <section style={{ marginBottom: '55px' }}>
        <div class="container">
          <div class="row" style={{ marginTop: '10px' }}>
            <div class="col-lg-12">
              <center>
                <h5 class="student_info_header prohead"> শিক্ষার্থীর তথ্য </h5>
                <img class="student_profile_pic" src="http://focusbd.info/assets/studentsphoto/202012051624421.jpg" />
              </center>
            </div>
          </div>
          <div class="row justify-content-center" style={{ marginTop: '10px' }}>
            <div class="col-lg-6 col-12">
              <table class="table table-striped">
                <thead>
                  <tr className='text-start'>
                    <th>নাম</th>
                    <th>:</th>
                    <th>Md. Rayhanuzzaman Roky</th>
                  </tr>
                </thead>
                <tbody className='text-start'>
                  <tr style={{ backgroundColor: 'rgba(72, 61, 139, 0.16)' }}>
                    <td>অবিভাবক</td>
                    <th>:</th>
                    <th>Md. Haque</th>
                  </tr>
                  <tr>
                    <td>অবিভাবকের সম্পর্ক</td>
                    <th>:</th>
                    <th></th>
                  </tr>
                  <tr style={{ backgroundColor: 'rgba(72, 61, 139, 0.16)' }}>
                    <td>ফোন (শিক্ষার্থী)</td>
                    <th>:</th>
                    <th>01709372481</th>
                  </tr>
                  <tr>
                    <td>ফোন (অভিভাবক)</td>
                    <th>:</th>
                    <th>01722158130</th>
                  </tr>
                  <tr style={{ backgroundColor: 'rgba(72, 61, 139, 0.16)' }}>
                    <td>ইউনিট</td>
                    <th>:</th>
                    <th>Unit A</th>
                  </tr>
                  <tr>
                    <td>ব্যাচ/শাখা</td>
                    <th>:</th>
                    <th>বিজ্ঞান বিভাগ </th>
                  </tr>

                  <tr>
                    <td>ব্রাঞ্চ</td>
                    <th>:</th>
                    <th>ফার্মগেট শাখা</th>
                  </tr>
                  <tr style={{ backgroundColor: 'rgba(72, 61, 139, 0.16)' }}>
                    <td>ঠিকানা</td>
                    <th>:</th>
                    <th>12/6 Solimullah Road, Mohammadpur, Dhaka</th>
                  </tr>

                </tbody>
              </table>
              <center>
                <NavLink className="nav-link btn btn-danger probtn" to="/updateprofile">
                  {" "}<i class="fas fa-edit"></i>
                  হালনাগাদ করুন
                </NavLink>
              </center>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;