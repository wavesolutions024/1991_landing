import React, { useState } from "react";
import "./Faq.scss";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const Faq = () => {
  const [active, setActive] = useState();
  const faqContent = [
    {
      faq_heading:
        "Does getting a tattoo hurt?",
      faq_content:
        "Discomfort varies by placement and individual pain tolerance, but most clients describe it as manageable. Our artists work at a steady pace and check in throughout the session.",
    },
    {
      faq_heading:
        "How long does it take to heal?",
      faq_content:
        "Most tattoos heal on the surface within 2-3 weeks, with full healing taking up to 6-8 weeks if proper aftercare instructions are followed.",
    },
    {
      faq_heading:
        "Do you offer custom designs?",
      faq_content:
        "Yes. Every custom piece starts with a consultation so the design reflects your story before it's finalized.",
    },
    {
      faq_heading:
        "Can you cover an old tattoo?",
      faq_content:
        "Yes. Cover-ups and reworks are one of our specialties. Bring your existing tattoo for a consultation.",
    },
    {
      faq_heading:
        "Do you also offer piercing services?",
      faq_content:
        "Yes. We offer professional body piercing using sterile equipment and high-quality jewellery.",
    },

  ];

  return (
    <div>
      <div class="faq_parent parent">
        <div class="faq_cont cont">
          <h1>FAQs</h1>
          {faqContent.map((item, index) => (
            <div
              class={active === index ? "faq active" : "faq"}
              onClick={() => setActive(index)}
            >
              <div class="faq_heading">
                <h4>{item.faq_heading}</h4>
                <span>
                  {active === index ? <FaMinus />: 
                  <FaPlus /> }
                </span>
              </div>
              <p class="faq_content">{item.faq_content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
