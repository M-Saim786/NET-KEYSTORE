import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import api from '../utils/api'

function Faq() {
  const [faqs, setFaqs] = useState([])
  const [success, setSuccess] = useState(false)
  useEffect(() => {
  }, [success])
  const [activeIndex, setActiveIndex] = useState(-1);

  function handleToggle(index) {
    setActiveIndex(index === activeIndex ? -1 : index);
  }
  return (
    <>
      <div style={{ "backgroundImage": "url('./assets/images/faq.png')", "backgroundColor": "#1e1e1e", "backgrounSize": "cover", "height": "1500px" }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ textAlign: "right" }}>
            <button
              type="button"
              class="close_btn_buymodal"
              style={{ marginRight: "2rem", marginTop: "2rem" }}
              data-bs-dismiss="modal"
              aria-label="Close"><span><img src="/assets/images/close.png" alt="image" style={{ width: "15px" }} /></span>
            </button>
          </div>
        </Link>
        <h1 className="text-brightyellow faq__title" style={{ "padding-top": "16px" }}>FAQ</h1>
        <div className="container">
          {success == 'success' && faqs.map((item, index) => {
            return (
              <div className="container" key={index}>
                <button className={`accordion display-3 ${index === activeIndex ? 'active' : ''}`} onClick={() => handleToggle(index)}>+ <span>{item.question}</span></button>
                <div style={{ display: index === activeIndex ? 'block' : 'none' }}>
                  <p className="text-red" style={{ marginLeft: "2.5rem" }}>{item.answer}</p>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </>
  );
}

export default Faq;
