import React from 'react';
import { NavLink } from 'react-router-dom';
import './UpdateProfile.css'

const UpdateProfile = () => {
  return (
    <div style={{ minHeight: '625px' }}>
      <section style={{ marginBottom: '55px' }}>
        <div class="container">
          <div class="row" style={{ marginTop: '10px' }}>
            <div class="col-12 justify-content-center">
              <div class="studentedit_info_header animated fadeInRight">
                <h5 className='prohead'> শিক্ষার্থীর তথ্য </h5>
              </div>
              <div class="studentedit_portfolio animated slideInUp">
                <div class="studentedit_portfolio_overlay">
                  <a href="" class="edit_icon"><i class="fas fa-edit"></i></a><a href="" class="remove_icon"><i class="fas fa-minus"></i></a>
                </div>
                <img class="studentedit_portfolio_img" src="http://focusbd.info/front_end_assets_app/images/defaultuser.jpg" alt="" />
              </div>

            </div>
          </div>
          <div class="row" style={{ marginTop: '10px' }}>
            <div class="col-12">
              <form action="">
                <table class="table table-striped animated slideInUp text-start">
                  <thead>
                    <tr>
                      <td><span>নাম</span></td>
                      <td>:</td>
                      <td>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value="abdur rahman" />
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: 'rgba(72, 61, 139, 0.16)' }}>
                      <td><span style={{ paddingtop: '20px' }}>অবিভাবক</span></td>
                      <th>:</th>
                      <th>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value="Soban Rahman" />
                      </th>
                    </tr>
                    <tr>
                      <td>অবিভাবকের সম্পর্ক</td>
                      <th>:</th>
                      <th>
                        <select class="form-control" id="exampleFormControlSelect1">
                          <option>সম্পর্ক</option>
                          <option>বাবা</option>
                          <option>মা</option>
                          <option>ভাই</option>
                          <option>বোন</option>
                        </select>
                      </th>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(72, 61, 139, 0.16)' }}>
                      <td>ফোন (শিক্ষার্থী)</td>
                      <th>:</th>
                      <th>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value="01732090000" />
                      </th>
                    </tr>
                    <tr>
                      <td>ফোন (অভিভাবক)</td>
                      <th>:</th>
                      <th>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value="017320000000" />
                      </th>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(72, 61, 139, 0.16)' }}>
                      <td>শ্রেণী</td>
                      <th>:</th>
                      <th>
                        <select class="form-control" id="exampleFormControlSelect1" >
                          <option>একটি শ্রেণী নির্বাচন করুন</option>
                          <option>Class Eleven</option>
                          <option>Class Twelve</option>
                        </select>
                      </th>
                    </tr>
                    <tr>
                      <td>বিভাগ</td>
                      <th>:</th>
                      <th>
                        <select class="form-control" id="exampleFormControlSelect1" >
                          <option>একটি বিভাগ নির্বাচন করুন </option>
                          <option>Science</option>
                          <option>Humanities</option>
                          <option>Commerce</option>
                        </select>
                      </th>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(72, 61, 139, 0.16)' }}>
                      <td>ঠিকানা</td>
                      <th>:</th>
                      <th>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value="newmarket,dhaka" />
                      </th>
                    </tr>
                  </tbody>
                </table>
                <center>
                  <NavLink className="nav-link btn btn-danger probtn" to="/updateprofile">
                    {" "}<i class="fas fa-edit"></i>
                    হালনাগাদ করুন
                  </NavLink>
                </center>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProfile;