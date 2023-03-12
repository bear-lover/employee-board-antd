import { Layout, List, Menu, Collapse } from 'antd';
import Link from 'antd/es/typography/Link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faChevronDown, faChevronUp, faHeart, faPhone, faUsd, faUserMd } from "@fortawesome/free-solid-svg-icons";
const { Panel } = Collapse;
const { Header } = Layout;

const items = [
  {
    label: (
      <a href="https://www.carenewengland.org/provider-finder" target="_blank" rel="noopener noreferrer">
        Find A Provider
      </a>
    ),
    key: 'findProvider',
  },
  {
    label: (
      <a href="https://www.carenewengland.org/locations" target="_blank" rel="noopener noreferrer">
        Our Locations
      </a>
    ),
    key: 'ourLocations',
  },
  {
    label: (
      <a href="https://www.carenewengland.org/patients-visitors" target="_blank" rel="noopener noreferrer">
        Patients & Visitors
      </a>
    ),
    key: 'patientsVisitors',
  },
  {
    label: (
      <a href="https://www.carenewengland.org/for-physicians" target="_blank" rel="noopener noreferrer">
        For Healthcare Providers
      </a>
    ),
    key: 'healthcareProviders',
  },
  {
    label: 'Research',
    key: 'SubMenu',
    children: [
      {
        label: (
          <a href="https://www.carenewengland.org/research" target="_blank" rel="noopener noreferrer">
            Research at Care New England
          </a>
        ),
        key: 'researchCareNewEngland',
      },
      {
        label: (
          <a href="https://research.carenewengland.org/" target="_blank" rel="noopener noreferrer">
            Sponsored Projects and Research Administrator
          </a>
        ),
        key: 'sponsoredProjectsResearchAdministrator',
      },
    ],
  },
  {
    label: (
      <a href="https://www.carenewengland.org/contact-us" target="_blank" rel="noopener noreferrer">
        Contact
      </a>
    ),
    key: 'contact',
  },
];

const link = [
  { text: "Schedule a vaccination appointment >", link: "https://portal.ri.gov/s/login/?language=en_US&startURL=%2Fs%2F&ec=302" },
  { text: "Information for hospital visitors >", link: "https://www.carenewengland.org/coronavirus#visitation" },
  { text: "Additional COVID-19 information >", link: "https://www.carenewengland.org/coronavirus?hsLang=en" },
];

const HeaderBar = () => {
  return (
    <Header
      style={{ width: '100%', padding: 0, height: '100%', background: '#333c4e', color: '#fff', lineHeight: 'unset' }}
    >
      <Collapse
        collapsible="icon"
        ghost={true}
        bordered={false}
        expandIcon={({ isActive }) => { return isActive ? <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronUp} /> : <FontAwesomeIcon style={{ color: 'white' }} icon={faChevronDown} /> }}
        expandIconPosition='end'>
        <Panel header={<span style={{ color: 'white', fontFamily: 'Poppins,sans-serif', fontSize: '18px', fontWeight: 'bold' }}>Directory</span>} key="1">
          <strong style={{ color: '#fff', fontWeight: 'bold', fontFamily: "'Nunito', sans-serif", fontSize: '16px' }}>Now scheduling COVID-19 vaccine appointments for ages 12+</strong>
          <List
            dataSource={link}
            renderItem={(item) => (
              <List.Item style={{ padding: '4px 0', border: 'none' }}>
                <Link href={item.link} rel="noopener" style={{ padding: '4px 0' }}><span style={{ color: 'white' }}>{item.text}</span></Link>
              </List.Item>
            )}
          />
        </Panel>
      </Collapse>
      <div style={{ backgroundColor: "#4f738a", padding: '4px', textAlign: 'right', color: '#ffffff' }}>
        <ul style={{ listStyle: 'none', display: 'inline-flex', margin: '0px', }}>
          <li style={{ lineHeight: '12px', padding: '0 20px' }}>
            <FontAwesomeIcon icon={faUsd} />
            <a style={{ color: 'white' }} href="https://www.carenewengland.org/pay?hsLang=en">Pay My Bill</a>
          </li>
          <li style={{ lineHeight: '12px', borderLeft: '1px solid rgba(255, 255, 255,0.49)', padding: '0 20px' }}>
            <FontAwesomeIcon icon={faUserMd} />
            <a style={{ color: 'white' }} href="https://www.carenewengland.org/careers?hsLang=en">Careers</a>
          </li>
          <li style={{ lineHeight: '12px', borderLeft: '1px solid rgba(255, 255, 255,0.49)', padding: '0 20px' }}>
            <FontAwesomeIcon icon={faHeart} />
            <a style={{ color: 'white' }} href="https://www.carenewengland.org/ways-to-give?hsLang=en">Donate</a>
          </li>
          <li style={{ lineHeight: '12px', borderLeft: '1px solid rgba(255, 255, 255,0.49)', padding: '0 20px' }}>
            <FontAwesomeIcon icon={faAddressCard} />
            <a style={{ color: 'white' }} href="https://www.carenewengland.org/personal-health-record?hsLang=en">My Health Record</a>
          </li>
          <li style={{ lineHeight: '12px', borderLeft: '1px solid rgba(255, 255, 255,0.49)', padding: '0 20px' }}>
            <FontAwesomeIcon icon={faPhone} />
            <a style={{ color: 'white' }} href="tel:+1%20(401)%20227-3669">+1 (401) 227-3669</a>
          </li>
        </ul>
      </div>
      <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px'}}>
        <img src="https://www.carenewengland.org/hs-fs/hubfs/opt-2022/CNE-Opt-22/1280px-Care_New_England_logo-svg-opt.png?width=300&amp;name=1280px-Care_New_England_logo-svg-opt.png" 
        style={{width: '300px', borderWidth:'0px', border:'0px'}} width="300" alt="1280px-Care_New_England_logo-svg-opt" title="1280px-Care_New_England_logo-svg-opt" 
        srcSet="https://www.carenewengland.org/hs-fs/hubfs/opt-2022/CNE-Opt-22/1280px-Care_New_England_logo-svg-opt.png?width=150&amp;name=1280px-Care_New_England_logo-svg-opt.png 150w, https://www.carenewengland.org/hs-fs/hubfs/opt-2022/CNE-Opt-22/1280px-Care_New_England_logo-svg-opt.png?width=300&amp;name=1280px-Care_New_England_logo-svg-opt.png 300w, https://www.carenewengland.org/hs-fs/hubfs/opt-2022/CNE-Opt-22/1280px-Care_New_England_logo-svg-opt.png?width=450&amp;name=1280px-Care_New_England_logo-svg-opt.png 450w, https://www.carenewengland.org/hs-fs/hubfs/opt-2022/CNE-Opt-22/1280px-Care_New_England_logo-svg-opt.png?width=600&amp;name=1280px-Care_New_England_logo-svg-opt.png 600w, https://www.carenewengland.org/hs-fs/hubfs/opt-2022/CNE-Opt-22/1280px-Care_New_England_logo-svg-opt.png?width=750&amp;name=1280px-Care_New_England_logo-svg-opt.png 750w, https://www.carenewengland.org/hs-fs/hubfs/opt-2022/CNE-Opt-22/1280px-Care_New_England_logo-svg-opt.png?width=900&amp;name=1280px-Care_New_England_logo-svg-opt.png 900w" sizes="(max-width: 300px) 100vw, 300px" />
        <Menu mode="horizontal" items={items} style={{ lineHeight: '64px', textAlign: 'right', display: 'list-item', border: 0 }} />
      </div>
    </Header>
  );
};
export default HeaderBar; 