import React from 'react';
import { NavLink } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  return (
    <div style={{ minheight: '625vh' }}>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="form_part"
              style={{ borderColor: '#ccc', boxShadow: '2px 3px 10px 2px gray', padding: '15px', margin: '15px 0px 55px 0px' }}>
              <h4 class="animated fadeIn" style={{ margin: '0px', fontSize: '18px', fontWeight: 'bold' }}>রেজিস্ট্রেশন</h4>
              <span style={{ color: 'red', fontSize: '20px' }}>
              </span>
              <form action="http://focusbd.info/site/registration/" method="post" enctype="multipart/form-data" class="form-horizontal" autocomplete="off">
                <div class="form-group animated slideInUp">
                  <input type="text" class="form-control" name="student_name" placeholder="নাম *" required="" />
                </div>
                <div class="form-group animated slideInUp">
                  <input type="number" class="form-control" name="student_phone" placeholder="ফোন *" required="" attern="[0]{1}[1]{1}[3|4|5|6|7|8|9]{1}[0-9]{8}" />
                </div>
                <div class="form-group animated slideInUp">
                  <input type="text" class="form-control" name="student_roll" placeholder="রোল নাম্বার *" required="" />
                </div>
                <div class="form-group animated slideInUp">
                  <input type="text" class="form-control" name="guardian_name" placeholder="অবিভাবক *" required="" />
                </div>
                <div class="form-group animated slideInUp">
                  <select class="form-control" name="guardian_relation" required="">
                    <option value="">অভিবভাবকের সাথে সম্পর্ক * </option>
                    <option value="1">বাবা</option>
                    <option value="2">মা</option>
                    <option value="3">অন্যান্য</option>
                  </select>
                </div>
                <div class="form-group animated slideInUp">
                  <input type="number" class="form-control" name="guardian_phone" placeholder="অভিবাবকের ফোন" required="" attern="[0]{1}[1]{1}[3|4|5|6|7|8|9]{1}[0-9]{8}" />
                </div>
                <div class="form-group animated slideInUp">
                  <select class="form-control" name="class_id" id="column_select" required="">
                    <option value=""> একটি ইউনিট নির্বাচন করুন * </option>
                    <option value="1"> Unit A </option>
                    <option value="2"> Unit B </option>
                    <option value="3"> Unit C </option>
                    <option value="4"> Model Test 1 </option>
                    <option value="5"> Model Test 2 </option>
                  </select>
                </div>
                <div class="form-group animated slideInUp">
                  <select class="form-control" name="section_id" id="layout_select" required="">
                    <option value=""> একটি ব্যাচ/সেকশন নির্বাচন করুন * </option>
                    <option value="1" data-classid="1" style={{ display: 'none' }}> বিজ্ঞান বিভাগ  </option>
                    <option value="6" data-classid="2" style={{ display: 'none' }}> মানবিক বিভাগ  </option>
                    <option value="7" data-classid="3" style={{ display: 'none' }}> বাণিজ্য বিভাগ  </option>
                    <option value="8" data-classid="4" style={{ display: 'none' }}> বিভাগ পরিবর্তন  </option>
                    <option value="9" data-classid="5" style={{ display: 'none' }}> No Section </option>
                  </select>
                </div>
                <div class="form-group animated slideInUp">
                  <input type="hidden" class="form-control" name="home_address" placeholder="ঠিকানা" value=" " />
                </div>
                <div class="form-group animated slideInUp">
                  <select class="form-control" name="branch_id" required="">
                    <option value="">আপনার ব্রাঞ্চ নির্বাচন করুন *</option>

                    <option value="5"> ফার্মগেট শাখা </option>
                    <option value="6"> মৌচাক শাখা </option>
                    <option value="7"> যাত্রাবাড়ী শাখা </option>
                    <option value="8"> মিরপুর শাখা </option>
                    <option value="9"> উত্তরা শাখা </option>
                    <option value="10"> ময়মনসিংহ শাখা </option>
                    <option value="11"> কুমিল্লা শাখা </option>
                    <option value="12"> বগুড়া শাখা </option>
                    <option value="13"> রংপুর শাখা </option>
                    <option value="14"> চট্রগ্রাম শাখা </option>
                    <option value="15"> খুলনা শাখা </option>
                    <option value="16"> দিনাজপুর শাখা </option>
                    <option value="17"> বরিশাল শাখা </option>
                    <option value="18"> নোয়াখালী শাখা </option>
                    <option value="19"> পাবনা শাখা </option>
                    <option value="20"> ফরিদপুর শাখা </option>
                    <option value="21"> নারায়নগঞ্জ শাখা </option>
                    <option value="22"> গাজীপুর শাখা </option>
                    <option value="23"> ফেনী শাখা </option>
                    <option value="24"> সিরাজগঞ্জ শাখা </option>
                    <option value="25"> নরসিংদী শাখা </option>
                    <option value="26"> সিলেট শাখা </option>
                    <option value="27"> রাজশাহী শাখা </option>
                    <option value="28"> সাভার শাখা </option>

                  </select>
                </div>
                <div class="form-group animated slideInUp" style={{textAlign:'left'}}>
                  <input type="file" class="form-control-file" name="photo" />
                </div>
                
                <div class="form_buttonanimated slideInUp ">
                <NavLink className="nav-link btn btn button" type="submit" style={{ backgroundColor: '#483D8B', color: 'white' }} to="/Signin" >
                  {" "}
                  নিবন্ধন করুন
                </NavLink>
                </div>

                <NavLink className="nav-link" style={{ textDecoration: 'underline', color: '#888', fontSize: '18px' }} to="/Signin" >
                  {" "}
                  নিবন্ধন করা থাকলে লগইন করুন
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;