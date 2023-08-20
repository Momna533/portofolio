import React, { useState, useEffect } from 'react';
import { Link} from 'react-scroll';

const SinglePageNavigation = () => {
  const [isOpen,setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const handleToggle = ()=>{
    setIsOpen(!isOpen)
  }
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll('[data-scroll-to]');
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setActiveLink(section.id);
        break;
      }
    }
  };

  return (
    <>
    <div className="header">
      <div className="header_content">
      <div className="header_content_center">
      <Link className="header_content_logo" onClick={() => setIsOpen(false)}
            activeClass="none"
            to="home"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500} 
            onSetActive={handleSetActive}
          >
            <img src={require('../images/logo.png')} alt="logo" />
          </Link>
            <button className="header_content_menu" onClick={handleToggle}>
              {isOpen ? <svg className="close" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg> : <svg className="open" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32zm0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288z"></path></svg>}
              </button>
        </div>
        <div className={`header_content_links ${isOpen ? "open" : ""}`}>
      <li>
          <Link
          onClick={() => setIsOpen(false)}
            activeClass="active" 
            to="about"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500} 
            onSetActive={handleSetActive}
          >
            about
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(false)}
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500} 
            onSetActive={handleSetActive}
          >
            services
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsOpen(false)}
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500} 
            onSetActive={handleSetActive}
          >
            projects
          </Link>
        </li>
        </div>
          <div className="header_content_contact">
          <li>
          <Link 
            activeClass=""
            to="contact"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500} 
            onSetActive={handleSetActive}
          >
            contact
          </Link>
        </li>
          </div>
      </div>
    </div>
    </>
  );
};

function Header(){
   return(
        <>
      <SinglePageNavigation />
        </>
    )
}
export default Header;