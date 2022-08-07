import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <div>
      <section class="footer_secf " style={{
        // position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,

      }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="top_socialf" style={{ justifyContent: 'center' }}>
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
              <div class="footer_contentf">
                <p>Copyright © 2022 Design and Development by <a href="">HRSOFTBD</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;