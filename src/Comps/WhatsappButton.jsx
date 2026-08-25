// const WHATSAPP_NUMBER = '9881742686';
// const WHATSAPP_MESSAGE = "Hi Tattoo Studio, I'd like to book a consultation.";

// function WhatsappButton() {
//   const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//     WHATSAPP_MESSAGE
//   )}`;

//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noreferrer"
//       className="whatsapp-fab"
//       aria-label="Message us on WhatsApp"
//     >
//       <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M16 4C9.373 4 4 9.373 4 16c0 2.29.638 4.43 1.744 6.256L4 28l5.9-1.71A11.93 11.93 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 4 16 4Z"
//           fill="currentColor"
//           fillOpacity="0.14"
//         />
//         <path
//           d="M21.6 18.35c-.31-.156-1.83-.9-2.114-1.004-.283-.104-.49-.156-.696.156-.206.311-.797 1.003-.978 1.21-.18.208-.36.234-.67.078-.31-.156-1.31-.483-2.495-1.538-.922-.822-1.545-1.838-1.726-2.149-.18-.312-.02-.48.137-.635.14-.14.31-.363.464-.545.155-.182.207-.312.31-.52.104-.208.052-.39-.026-.545-.077-.156-.696-1.679-.954-2.3-.251-.605-.507-.523-.696-.533-.18-.008-.386-.01-.593-.01-.207 0-.542.078-.826.39-.284.312-1.083 1.06-1.083 2.583 0 1.523 1.109 2.995 1.264 3.202.155.208 2.183 3.334 5.29 4.675.74.319 1.317.51 1.767.653.742.236 1.418.203 1.952.123.596-.089 1.83-.749 2.088-1.472.258-.723.258-1.343.181-1.472-.078-.13-.284-.208-.594-.363Z"
//           fill="currentColor"
//         />
//       </svg>
//     </a>
//   );
// }

// export default WhatsappButton;

const WHATSAPP_NUMBER = "9881742686";
const PHONE_NUMBER = "tel:+919881742686";

const WHATSAPP_MESSAGE =
  "Hi 1991 Tattoo Studio, I'd like to book a consultation.";

function WhatsappButton() {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`;

  return (
    <div className="floating-actions">

      {/* WhatsApp Button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-fab"
        aria-label="Message us on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4C9.373 4 4 9.373 4 16c0 2.29.638 4.43 1.744 6.256L4 28l5.9-1.71A11.93 11.93 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 4 16 4Z"
            fill="currentColor"
            fillOpacity="0.14"
          />

          <path
            d="M21.6 18.35c-.31-.156-1.83-.9-2.114-1.004-.283-.104-.49-.156-.696.156-.206.311-.797 1.003-.978 1.21-.18.208-.36.234-.67.078-.31-.156-1.31-.483-2.495-1.538-.922-.822-1.545-1.838-1.726-2.149-.18-.312-.02-.48.137-.635.14-.14.31-.363.464-.545.155-.182.207-.312.31-.52.104-.208.052-.39-.026-.545-.077-.156-.696-1.679-.954-2.3-.251-.605-.507-.523-.696-.533-.18-.008-.386-.01-.593-.01-.207 0-.542.078-.826.39-.284.312-1.083 1.06-1.083 2.583 0 1.523 1.109 2.995 1.264 3.202.155.208 2.183 3.334 5.29 4.675.74.319 1.317.51 1.767.653.742.236 1.418.203 1.952.123.596-.089 1.83-.749 2.088-1.472.258-.723.258-1.343.181-1.472-.078-.13-.284-.208-.594-.363Z"
            fill="currentColor"
          />
        </svg>
      </a>

      {/* Call Button */}
      <a
        href={PHONE_NUMBER}
        className="call-fab"
        aria-label="Call us"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1.5 1.5 0 0 1 1.54-.36c.82.27 1.7.41 2.6.41a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5C10.72 21.5 2.5 13.28 2.5 3.5A1.5 1.5 0 0 1 4 2h3.27a1.5 1.5 0 0 1 1.5 1.5c0 .9.14 1.78.41 2.6a1.5 1.5 0 0 1-.36 1.54l-2.2 2.2Z"
            fill="currentColor"
          />
        </svg>
      </a>

    </div>
  );
}

export default WhatsappButton;
