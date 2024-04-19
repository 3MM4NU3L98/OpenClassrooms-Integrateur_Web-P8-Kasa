import { useState } from 'react'
import Arrow from '../../assets/arrow_up.svg'
import './collapse.scss'

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => { setIsOpen(!isOpen) }

  return (
    <div className='collapse'>
        <div className='collapse_title'>
            <div className='collapse_title_txt'>{title}</div>
            <img src={Arrow} className ={`collapse_title_arrow ${isOpen ? 'collapse_title_arrow-open' : ''}`} onClick={toggleCollapse} alt='Flèche déroulante' />
        </div>
            <div className={`collapse_content ${isOpen ? 'collapse_content-close' : ''}`}>
                <div className='collapse_content_txt'>{children}</div> 
            </div>
    </div>
  );
};

export default Collapse;




