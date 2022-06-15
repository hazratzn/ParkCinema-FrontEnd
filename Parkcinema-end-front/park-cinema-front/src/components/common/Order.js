import React from "react";

const Order = () => {
  return (
    <>
      {" "}
      <ul className="social-logos margin-none">
        <li className="facebook-logo">
          <a
            href="https://www.facebook.com/ParkCinema"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </li>
        <li className="twitter-logo">
          <a
            href="https://twitter.com/park_cinema"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </li>
        <li className="youtube-logo">
          <a
            href="https://www.youtube.com/channel/UC0NJN0gCCx_DbJlkPfD30Ag/feed"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </li>
      </ul>
      <div className="order-ticket main-order-ticket">
        <h3>Biletlərin sifarişi</h3>
        <h4>
          <span>+994 12</span> 598 74 14
        </h4>
        <h4>
          119 <span>( ödənişli )</span>
        </h4>
      </div>
    </>
  );
};

export default Order;
