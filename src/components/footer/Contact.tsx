import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Title from '../base/Title'

const Contact: React.FC = () => {
  return (
    <>
      <div className="contact-section__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1240.87157229666!2d-0.27894794172167464!3d51.53627079490999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876118b49d61edf%3A0xba34285f9206f2e9!2sTudor%20Estate%2C%20Abbey%20Rd%2C%20London%20NW10%207UN!5e0!3m2!1sen!2suk!4v1613683119712!5m2!1sen!2suk"
          height="300"
          frameBorder="0"
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
      <div className="contact-section__content">
        <Title content="Contact Us" />
        <div className="social-icons">
          <a href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
        <address className="address">
          <a href="tel:02089652237">0208 965 2237</a>
          <p>708D Tudor Estate,</p>
          <p>Abbey Road,</p>
          <p>Park Royal,</p>
          <p>NW10 7UN</p>
        </address>
      </div>
    </>
  )
}

export default Contact
