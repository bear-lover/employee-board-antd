import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout, Row, Col } from 'antd';
import FbIcon from '../icons/facebook-f.svg'
import TwtIcon from "../icons/twitter.svg";
import LkdIcon from '../icons/linkedin-in.svg'
const { Footer } = Layout;


const FooterBar = () => {

  return (
    <Footer
      style={{
        textAlign: 'center',
        backgroundColor: '#333c4e'
      }}
    >
      <Row style={{ color: 'white', justifyContent: 'space-around' }}>
        <Col span={'4'} style={{ textAlign: 'left' }}>
          <h2>Contact Us</h2>
          <p>4 Richmond Square<br />Providence, RI<br />02906</p>
          <p><a style={{ color: 'white' }} href="https://www.carenewengland.org/contact-us?hsLang=en" rel=" noopener">Send Us A Message</a></p>
          <p><a style={{ color: 'white' }} href="tel:+14012273669" rel=" noopener"><span>+1 (401) 227-3669</span></a></p>

          <ul style={{ listStyle: 'none', display: 'inline-flex', padding: '0', color: 'white' }} >
            <li>
              <a target="_blank" href="https://www.facebook.com/carenewengland">
                <img src={FbIcon} style={{ width: '10px', paddingRight: '8px' }} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/carenewengland">
                <img src={TwtIcon} style={{ width: '10px', paddingRight: '8px' }} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/company/care-new-england/">
                <img src={LkdIcon} style={{ width: '10px' }} />
              </a>
            </li>
          </ul>
        </Col>
        <Col span={'4'} style={{ textAlign: 'left' }}>
          <h2>Our Locations</h2>
          <p><a style={{ color: 'white' }} href="https://www.butler.org/?hsLang=en&__hstc=73991757.593614353fb86ae26e9055a8b39fbb0d.1677782010270.1677827899796.1677829710353.6&__hssc=73991757.1.1677829710353&__hsfp=901111203">Butler Hospital</a></p>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/?hsLang=en'>Care New England </a></p>
          <p><a style={{ color: 'white' }} href='https://www.kentri.org/?hsLang=en&__hstc=73991757.593614353fb86ae26e9055a8b39fbb0d.1677782010270.1677827899796.1677829710353.6&__hssc=73991757.1.1677829710353&__hsfp=901111203'>Kent Hospital</a></p>
          <p><a style={{ color: 'white' }} href='https://providencecenter.org/?__hstc=73991757.593614353fb86ae26e9055a8b39fbb0d.1677782010270.1677827899796.1677829710353.6&__hssc=73991757.1.1677829710353&__hsfp=901111203'>The Providence Center</a></p>
          <p><a style={{ color: 'white' }} href='https://www.vnacarenewengland.org/?hsLang=en&__hstc=73991757.593614353fb86ae26e9055a8b39fbb0d.1677782010270.1677827899796.1677829710353.6&__hssc=73991757.1.1677829710353&__hsfp=901111203'>VNA of Care New England</a></p>
          <p><a style={{ color: 'white' }} href='https://www.womenandinfants.org/?hsLang=en&__hstc=73991757.593614353fb86ae26e9055a8b39fbb0d.1677782010270.1677827899796.1677829710353.6&__hssc=73991757.1.1677829710353&__hsfp=901111203'>Women & Infants</a></p>

          <h2>Patients and Visitors</h2>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/provider-finder?hsLang=en'>Find A Provider</a></p>
          <p><a style={{ color: 'white' }} href='https://www.integracare.org/?hsLang=en&__hstc=73991757.593614353fb86ae26e9055a8b39fbb0d.1677782010270.1677827899796.1677829710353.6&__hssc=73991757.1.1677829710353&__hsfp=901111203'>Integra Community Care</a></p>
        </Col>
        <Col span={'4'} style={{ textAlign: 'left' }}>
          <h2>About Us</h2>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/about?hsLang=en'>Who We Are</a></p>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/dei?hsLang=en'>Diversity, Equity, & Inclusion (DEI)</a></p>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/legal-notices?hsLang=en'>Legal Notices</a></p>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/auxiliary-aids-and-services?hsLang=en'>Auxiliary Aids & Services</a></p>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/accessibility-statement?hsLang=en'>Accessibility Statement</a></p>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/price-transparency?hsLang=en'>Price Transparency</a></p>

          <h2>News</h2>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/news?hsLang=en'>In The News</a></p>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/blog?hsLang=en'>Health & Wellness Blog</a></p>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/media-relations?hsLang=en'>Media Relations</a></p>
        </Col>
        <Col span={'4'} style={{ textAlign: 'left' }}>
          <h2>Research</h2>
          <p><a style={{ color: 'white' }} href='https://6898349-hs-sites-com.sandbox.hs-sites.com/research?hsLang=en&__hstc=73991757.593614353fb86ae26e9055a8b39fbb0d.1677782010270.1677827899796.1677829710353.6&__hssc=73991757.1.1677829710353&__hsfp=901111203'>Care New England</a></p>
          <p><a style={{ color: 'white' }} href='https://www.butler.org/research/index.cfm?hsLang=en&__hstc=73991757.593614353fb86ae26e9055a8b39fbb0d.1677782010270.1677827899796.1677829710353.6&__hssc=73991757.1.1677829710353&__hsfp=901111203'>Butler Hospital</a></p>
          <p><a style={{ color: 'white' }} href='https://www.womenandinfants.org/research/?hsLang=en&__hstc=73991757.593614353fb86ae26e9055a8b39fbb0d.1677782010270.1677827899796.1677829710353.6&__hssc=73991757.1.1677829710353&__hsfp=901111203'>Women & Infants</a></p>
          <h2>Get Involved</h2>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/careers/results?hsLang=en'>Jobs</a></p>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/ways-to-give?hsLang=en'>Ways to Give</a></p>
          <p><a style={{ color: 'white' }} href='https://www.carenewengland.org/volunteer?hsLang=en'>Volunteer</a></p>
        </Col>
      </Row>
      <hr />
      <Row style={{ textAlign: 'center', justifyContent: 'center', color: 'white' }}>
        <p>Copyright © 2023 Care New England Health System</p>
      </Row>
    </Footer>
  );
};
export default FooterBar;