import React from 'react';
import './TopHeader.css'

const topHeader = () => {
  return (
    <div>
      <section class="top_header_bg">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="top_header_contact">
                <div class="top_header_contact-inner">
                  <div class="top_social">
                    <div class="top_social_inner">
                      <a href=""><i class="fab fa-facebook-f"></i></a>
                    </div>
                    <div class="top_social_inner">
                      <a href=""><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="top_social_inner">
                      <a href=""><i class="fab fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
                <div class="top_header_contact_inner">
                  <p><span><i class="fa fa-reply"></i></span> focusdu@gmail.com </p>
                </div>
                <div class="top_header_contact_inner">
                  <p><span><i class="fas fa-phone-alt"></i></span> ০১৭৫০১৩৮৯৫০, ০১৭২০৯৫৮৫১০ </p>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="top_header_link">
                <div class="top_header_link_inner">
                  <a href=""> শাখা</a>
                </div>
                <div class="top_header_link_inner">
                  <a href=""> বিশ্ববিদ্যালয় লিংক</a>
                </div>
                <div class="top_header_link_inner">
                  <a href="">গ্যালারি</a>
                </div>
                <div class="top_header_link_inner">
                  <a href="">নিউজ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default topHeader;