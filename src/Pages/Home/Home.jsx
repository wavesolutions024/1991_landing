import React from "react";
import { useState } from "react";
import "./Home.scss";
import aboutImg from "../../assets/about.png";
import { FaCheckCircle } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa";
import { FaSpa } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaRing } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import piercingImg from "../../assets/piercing4.png";
import inside1 from "../../assets/tattoo1.jpeg";
import inside2 from "../../assets/tattoo2.jpeg";
import inside3 from "../../assets/tattoo3.jpeg";
import inside4 from "../../assets/tattoo4.jpeg";
import inside5 from "../../assets/tattoo5.jpeg";
import inside6 from "../../assets/tattoo6.jpeg";
import inside7 from "../../assets/tattoo7.jpeg";
import inside8 from "../../assets/tattoo8.jpeg";

import img1 from "../../assets/gallery1.png";
import img2 from "../../assets/gallery2.jpg";
import img3 from "../../assets/gallery3.jpg";
import img4 from "../../assets/gallery4.jpg";
import img5 from "../../assets/gallery5.jpg";
import img6 from "../../assets/gallery6.jpg";
import img7 from "../../assets/gallery7.jpg";
import { FaAward } from "react-icons/fa6";
import { FaTint } from "react-icons/fa";
import { FaShieldVirus } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";
import { FaCommentSms } from "react-icons/fa6";
import { FaVial } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import reviewImg from "../../assets/tattooart.png";
import { FaChevronRight } from "react-icons/fa";
import before1 from "../../assets/before1.png";
import after1 from "../../assets/after1.png";
import before2 from "../../assets/before2.png";
import after2 from "../../assets/after2.png";
import before3 from "../../assets/before3.png";
import after3 from "../../assets/after3.png";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import qrCode from "../../assets/qrcode.png";
import logo from "../../assets/logo.jpeg";
import Faq from "../../Comps/faq/Faq";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import footerImg from "../../assets/footer.jpeg";
import axios from "axios";
import WhatsappButton from "../../Comps/WhatsappButton"

const Home = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobileNo: "",
    gender: "",
    service: "",
    tattooStyle: "",
    tattooDescription: "",
    enquiryType: "landing page",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      setIsSubmitting(true);
      e.preventDefault();

      const response = await axios.post(
        `https://backend.1991tattoos.com/api/enquiry/addOutEnquiry?franchiesCode=1`,
        form,
      );

      if (response.status === 200) {
        setForm({
          name: "",
          email: "",
          mobileNo: "",
          gender: "",
          service: "",
          tattooStyle: "",
          tattooDescription: "",
          budget: "",
        });
      }

      alert("form submitted successfully");
      setModalOpen(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const [showConsultation, setShowConsultation] = useState(false);
  return (
    <>
      <div id="consultation" className="hero_parent parent">
        <div className="hero_cont cont">
          <div className="hero_left">
            <div className="hero_tag">
              <span className="line"></span>
              <span>ESTABLISHED 2014</span>
            </div>

            <p className="sub_title">Art That Stays With You</p>

            <h1>
              Turn Your Story
              <br />
              <span>Into</span> Timeless Ink
            </h1>

            <p className="hero_desc">
              Premium Custom Tattoos • Cover-Ups • Fine Line • Realism • Black &
              Grey
            </p>

            <div className="hero_btns">
              <button
                className="btn1"
                onClick={() =>
                  window.open("https://wa.me/919881742686", "_blank")
                }
              >
                CONTACT NOW
              </button>

              <button
                className="btn2"
                onClick={() => {
                  document.getElementById("gallery").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                VIEW OUR WORK
              </button>
            </div>
          </div>

          <div className="hero_right">
            <span className="hero_form_tag">FREE CONSULTATION</span>

            <h2>
              Book Your Tattoo
              <br />
              Consultation
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form_group full">
                <label>FULL NAME </label>
                <input
                  required
                  name="name"
                  onChange={handleChange}
                  value={form.name}
                  type="text"
                  placeholder="Full name"
                />
              </div>

              <div className="form_row">
                <div className="form_group">
                  <label>PHONE </label>
                  <input
                    type="text"
                    required
                    name="mobileNo"
                    onChange={handleChange}
                    value={form.mobileNo}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form_group">
                  <label>SELECT SERVICES</label>
                  <select
                    name="service"
                    onChange={handleChange}
                    value={form.service}
                    id=""
                  >
                    <option value="">Select Service</option>
                    <option value="Permanent Tattoo">Permanent Tattoo</option>
                    <option value="Temporary Tattoo">Temporary Tattoo</option>
                    <option value="Peircing">Peircing</option>
                  </select>
                </div>
              </div>

              <div className="form_row">
                <div className="form_group">
                  <label>EMAIL</label>
                  <input
                    name="email"
                    onChange={handleChange}
                    value={form.email}
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form_group">
                  <label>GENDER</label>
                  <select
                    name="gender"
                    onChange={handleChange}
                    value={form.gender}
                    id=""
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form_row">
                <div className="form_group">
                  <label>TATTOO STYLE </label>
                  <input
                    name="tattooStyle"
                    onChange={handleChange}
                    value={form.tattooStyle}
                    type="text"
                    placeholder="Enter Tattoo Style"
                  />
                </div>

                <div className="form_group">
                  <label>TATTOO BUDGET </label>
                  <input
                    name="budget"
                    onChange={handleChange}
                    value={form.budget}
                    type="text"
                    placeholder="Enter Tattoo Budget"
                  />
                </div>
              </div>

              <div className="form_group full">
                <label>TATTOO DESCRIPTION</label>
                <textarea
                  rows="4"
                  name="tattooDescription"
                  onChange={handleChange}
                  value={form.tattooDescription}
                  placeholder="Enter Your Tattoo Description"
                ></textarea>
              </div>

              <button
                className="submit_btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "sending......" : "Send Request"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div id="about" className="about_parent parent">
        <div className="about_cont cont">
          <div className="about_left">
            <img src={aboutImg} alt="" />
          </div>

          <div className="about_right">
            <span className="about_tag">
              <span className="line"></span>
              ABOUT 1991 TATTOO
            </span>

            <h2>Crafting Art That Lasts Forever</h2>

            <p>
              Since 2014, 1991 Tattoo has been turning stories into timeless ink
              from our studio in Baner, Pune. Our professional artists
              specialise in custom tattoos, cover-ups, fine line, realism, black
              & grey and mandala work—every session carried out in a hygienic,
              safe studio using premium imported inks.
            </p>

            <div className="about_points">
              <div className="point">
                <FaCheckCircle />
                <span>Professional Tattoo Artists</span>
              </div>

              <div className="point">
                <FaCheckCircle />
                <span>Hygienic & Safe Studio</span>
              </div>

              <div className="point">
                <FaCheckCircle />
                <span>Premium Imported Inks</span>
              </div>

              <div className="point">
                <FaCheckCircle />
                <span>1000+ Happy Clients Served</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="services" className="services_parent parent">
        <div className="services_cont cont">
          <h1>OUR SERVICES</h1>
          <h2>What We Offer</h2>

          <div className="services_cards">
            <div className="card">
              <FaPenNib className="icon" />
              <h3>Custom Tattoos</h3>
              <p>Personalized artwork created just for you.</p>
              <span></span>
            </div>

            <div className="card">
              <FaSpa className="icon" />
              <h3>Cover-Up Tattoos</h3>
              <p>Transform old tattoos into stunning new designs.</p>
              <span></span>
            </div>

            <div className="card">
              <FaPaintBrush className="icon" />
              <h3>Tattoo Touch-Up</h3>
              <p>Restore faded tattoos with fresh detail.</p>
              <span></span>
            </div>

            <div className="card">
              <FaRing className="icon" />
              <h3>Piercing</h3>
              <p>Professional ear, nose, and body piercing.</p>
              <span></span>
            </div>

            <div className="card">
              <FaComments className="icon" />
              <h3>Tattoo Consultation</h3>
              <p>Discuss your ideas before getting inked.</p>
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <div id="piercing" className="piercing_parent parent">
        <div className="piercing_cont cont">
          <div className="piercing_left">
            <img src={piercingImg} alt="Body Piercing" />

            <div className="piercing_card">
              <h4>Sterile & Safe,</h4>
              <p>Every Single Time</p>
            </div>
          </div>

          <div className="piercing_right">
            <span className="piercing_tag">
              <span className="line"></span>
              BODY PIERCING
            </span>

            <h2>Precision Piercing, Done Right</h2>

            <p>
              Alongside our tattoo work, 1991 Tattoo offers professional body
              piercing in the same hygienic, sterile environment using
              single-use needles, quality jewellery and experienced artists for
              a safe and comfortable experience.
            </p>

            <div className="piercing_types">
              <span>Ear & Cartilage</span>
              <span>Nose</span>
              <span>Eyebrow</span>
              <span>Lip</span>
              <span>Navel</span>
              <span>Custom Placements</span>
            </div>

            <div className="piercing_features">
              <div className="feature">
                <FaCheckCircle />
                <div>
                  <h4>Sterile, Single-Use Needles</h4>
                  <p>A fresh, sealed needle for every client.</p>
                </div>
              </div>

              <div className="feature">
                <FaCheckCircle />
                <div>
                  <h4>Certified Piercing Artists</h4>
                  <p>Trained hands, careful placement.</p>
                </div>
              </div>

              <div className="feature">
                <FaCheckCircle />
                <div>
                  <h4>Quality Imported Jewellery</h4>
                  <p>Skin-safe materials built to last.</p>
                </div>
              </div>
            </div>

            {/* <button>BOOK A PIERCING CONSULTATION</button> */}
          </div>
        </div>
      </div>

      <div id="gallery" className="inside_parent parent">
        <div className="inside_cont cont">
          <span className="inside_tag">
            <span className="line"></span>
            INSIDE THE STUDIO
          </span>

          <h2>Step Inside 1991 Tattoo</h2>
          <p>
            A clean, comfortable space in Baner, Pune, built for focused,
            hygienic sessions from consultation to final ink.
          </p>

          <div className="inside_gallery">
            <div className="gallery_box">
              <img src={inside1} alt="" />
            </div>

            <div className="gallery_box">
              <img src={inside2} alt="" />
            </div>

            <div className="gallery_box">
              <img src={inside3} alt="" />
            </div>

            <div className="gallery_box">
              <img src={inside4} alt="" />
            </div>
          </div>

          <div className="inside_gallery">
            <div className="gallery_box">
              <img src={inside5} alt="" />
            </div>

            <div className="gallery_box">
              <img src={inside6} alt="" />
            </div>

            <div className="gallery_box">
              <img src={inside7} alt="" />
            </div>

            <div className="gallery_box">
              <img src={inside8} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div id="studio" className="choose_parent parent">
        <div className="choose_cont cont">
          <span className="choose_tag">
            <span className="line"></span>
            WHY CHOOSE US
          </span>

          <h2>Ten Years Of Trusted Ink</h2>

          <div className="choose_boxes">
            <div className="box">
              <FaAward className="icon" />
              <h2>Certified</h2>
              <p>Professional Artists</p>
            </div>

            <div className="box">
              <FaTint className="icon" />
              <h2>Premium</h2>
              <p>Imported Inks</p>
            </div>

            <div className="box">
              <FaShieldVirus className="icon" />
              <h2>Strict Hygiene</h2>
              <p>Standards</p>
            </div>

            <div className="box">
              <FaWallet className="icon" />
              <h2>Affordable</h2>
              <p>Pricing</p>
            </div>

            <div className="box">
              <FaCommentSms className="icon" />
              <h2>Free</h2>
              <p>Consultation</p>
            </div>

            <div className="box">
              <FaVial className="icon" />
              <h2>Aftercare</h2>
              <p>Guidance</p>
            </div>
          </div>
        </div>
      </div>

      <div id="reviews" className="reviews_parent">
        <div className="reviews_cont">
          <span className="reviews_tag">
            <span className="line"></span>
            CLIENT LOVE
          </span>

          <h2>Loved By Our Clients</h2>

          <div className="reviews_cards">
            <div className="review_box">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>
                "The artist understood exactly what I wanted and made the whole
                process comfortable from start to finish."
              </p>

              <h4>Ashish Yadav</h4>
            </div>

            <div className="review_box">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>
                "Spotlessly clean studio and a genuinely professional team. It
                shows in the finished work."
              </p>

              <h4>Rahul Dhamdhere</h4>
            </div>

            <div className="review_box">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p>
                "Best tattoo studio in Baner. The detail on my black & grey
                piece is beyond what I imagined."
              </p>

              <h4>Arvind Mishra</h4>
            </div>
          </div>

          {/* <small>
            Placeholder reviews shown for layout — replace with your real client
            testimonials before publishing.
          </small> */}
        </div>
      </div>
      {/*<Faq />*/}
      <div>
        <Faq />
      </div>

      {/* after Section
      <div className="after_parent parent">
        <div className="after_cont cont">

          <div className="compare_box">

            <div className="img_box">
              <img src={before1} alt="" />
              <span>BEFORE</span>
            </div>

            <button>
              <FaChevronRight />
            </button>

            <div className="img_box">
              <img src={after1} alt="" />
              <span>AFTER</span>
            </div>
          </div>

          <div className="compare_box">

            <div className="img_box">
              <img src={before2} alt="" />
              <span>BEFORE</span>
            </div>

            <button>
              <FaChevronRight />
            </button>

            <div className="img_box">
              <img src={after2} alt="" />
              <span>AFTER</span>
            </div>
          </div>

          <div className="compare_box">

            <div className="img_box">
              <img src={before3} alt="" />
              <span>BEFORE</span>
            </div>

            <button>
              <FaChevronRight />
            </button>

            <div className="img_box">
              <img src={after3} alt="" />
              <span>AFTER</span>
            </div>
          </div>


        </div>
      </div>
      */}

      <div className="home_parent parent">
        <div className="home_cont cont">
          <div className="availability">
            <span></span>
            <p>LIMITED AVAILABILITY</p>
          </div>

          <h1>
            Ready for your next
            <br />
            tattoo?
          </h1>

          <p className="home_desc">
            Consultations are held every Tuesday through Saturday. Tell us what
            you have in
            <br className="desktop_br" />
            mind and we'll find the right time to start.
          </p>

          <div className="home_btns">
            <button
              className="book_btn"
              onClick={() => {
                document.getElementById("consultation").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Book Consultation
            </button>

            <a
              href="https://wa.me/919881742686"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp_btn"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {showConsultation && (
        <div
          className="consultation_overlay"
          onClick={() => setShowConsultation(false)}
        >
          <div
            className="consultation_popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="consultation_close"
              onClick={() => setShowConsultation(false)}
            >
              ×
            </button>

            <h2>Book Your Tattoo Consultation</h2>

            <form>
              <div className="form_full">
                <label>FULL NAME *</label>
                <input type="text" placeholder="Full name" required />
              </div>

              <div className="form_row">
                <div className="form_group">
                  <label>PHONE *</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                <div className="form_group">
                  <label>SELECT GENDER</label>

                  <select>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form_group">
                  <label>SELECT SERVICES</label>

                  <select>
                    <option value="">Select</option>
                    <option>Black & Grey</option>
                    <option>Realism</option>
                    <option>Fine Line</option>
                    <option>Cover Up</option>
                  </select>
                </div>
              </div>

              <div className="form_full">
                <label>EMAIL *</label>
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div className="form_full">
                <label>ADDITIONAL NOTES</label>

                <textarea placeholder="Reference, ideas, dimensions..."></textarea>
              </div>

              <button type="submit" className="consultation_submit">
                GET FREE CONSULTATION →
              </button>
            </form>
          </div>
        </div>
      )}

      {/* <div id="contact" className="footer_parent parent">
        <div className="footer_cont cont">

          <div className="footer_left">

            <span className="footer_tag">
              <span className="line"></span>
              VISIT US
            </span>

            <h2>Ready For Your Next Tattoo?</h2>

            <p>
              Book your appointment today and let your story live forever.
            </p>

            <div className="contact_info">

              <div className="info_box">
                <FaPhoneAlt />
                <div>
                  <span>BOOK YOUR APPOINTMENT</span>
                  <h4>+91 8983019911</h4>
                </div>
              </div>

              <div className="info_box">
                <FaMapMarkerAlt />
                <div>
                  <span>VISIT OUR STUDIO</span>
                  <h4>Baner, Pune, Maharashtra, India</h4>
                </div>
              </div>

              <div className="info_box">
                <FaInstagram />
                <div>
                  <span>FOLLOW US</span>
                  <h4>@1991tattoo</h4>
                </div>
              </div>

            </div>

            <div className="social_icons">
              <a href="https://www.instagram.com/1991tattoos?igsh=cDFyM3BucDI5cjM="><FaInstagram /></a>
              <a href="#"><FaFacebook /></a>
              <a href="https://wa.me/919881742686"><FaWhatsapp /></a>
            </div>
          </div>

          <div className="footer_right">

            <div className="qr_box">
              <img src={qrCode} alt="" />
              <p>SCAN TO CONNECT WITH US</p>
            </div>
          </div>

        </div>

        <div className="footer_bottom">
          <div className="footer_logo">
            <img src={logo} alt="" />
          </div>

          <div className="footer_links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

        </div>
      </div > */}

      <div id="contact" className="footer_parent parent">
        <div className="footer_cont cont">
          <div className="footer_top">
            {/* LEFT CONTENT */}
            <div className="footer_left">
              <div className="footer_heading">
                <span className="footer_line"></span>
                <span>VISIT US</span>
              </div>

              <h2>Ready For Your Next Tattoo?</h2>

              <p className="footer_desc">
                Book your appointment today and let your story live forever.
              </p>

              <span className="footer_small_line"></span>

              {/* PHONE */}
              <div className="footer_info">
                <div className="footer_icon">
                  <FaPhoneAlt />
                </div>

                <div className="footer_info_text">
                  <span>BOOK YOUR APPOINTMENT</span>
                  <a href="tel:+91983019911">+91 8983019911</a>
                </div>
              </div>

              {/* LOCATION */}
              <div className="footer_info">
                <div className="footer_icon">
                  <FaLocationDot />
                </div>

                <div className="footer_info_text">
                  <span>VISIT OUR STUDIO</span>
                  <p>Baner, Pune, Maharashtra, India</p>
                </div>
              </div>

              {/* INSTAGRAM */}
              <div className="footer_info">
                <div className="footer_icon">
                  <FaInstagram />
                </div>

                <div className="footer_info_text">
                  <span>FOLLOW US</span>
                  <a
                    href="https://www.instagram.com/1991tattoos?igsh=cDFyM3BucDI5cjM="
                    target="_blank"
                    rel="noreferrer"
                  >
                    @1991tattoo
                  </a>
                </div>
              </div>

              {/* SOCIAL BUTTONS */}
              <div className="footer_socials">
                <a
                  href="https://www.instagram.com/1991tattoos?igsh=cDFyM3BucDI5cjM="
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=100063912552714"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://wa.me/919881742686"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="footer_right">
              <img src={footerImg} alt="1991 Tattoo Artist" />

              {/* <div className="footer_artist">
                <h3>1991</h3>
                <h4>TATTOO</h4>
                <p>ASHOK KOTHAWALE</p>
              </div> */}
            </div>
          </div>

          {/* BOTTOM FOOTER */}
          <div className="footer_bottom">
            <p>© 1991 Tattoo Studio. All Rights Reserved.</p>

            <div className="footer_bottom_center">
              <span></span>
              <b>✦</b>
              <span></span>
            </div>

            <p className="footer_tagline">
              <strong>INK YOUR STORY.</strong> WE'LL MAKE IT TIMELESS.
            </p>
          </div>
        </div>
      </div>

      <WhatsappButton/>
    </>
  );
};

export default Home;
