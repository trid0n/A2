import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
          <div className="footer-sections">
          <div className="contact-us">
            <div>
            <b>Contact us</b> {<br />}
            Phone: 0123456789 {<br />}
            Address: 12 Melbourne street, 2930 Melbourne {<br />}
            Email: mba@gmail.com
          </div>
          </div>
          <section>
            <div className="footer-heading">
          <h1>youtube</h1>
            </div>
          </section>
          <section>
            <div className="footer-heading">
          <h1>facebook</h1>
            </div>
          </section>
          <section>
            <div className="footer-heading">
          <h1>instagram</h1>
            </div>
          </section>
        </div>
        </div>
        
  );
}

export default Footer;
