import React from "react";

const ParkBulvarContact = () => {
  return (
    <div className="contact-parkbulvar">
      <div className="working-hours">
        <h5>İş rejimi</h5>
        <p>10:00-dan son seansa qədər fasiləsiz və istirahətsiz</p>
      </div>
      <div className="our-address">
        <h5>Bizim ünvan</h5>
        <p>
          Azərbaycan, Bakı ş.,
          <br />
          92 Neftçilər Prospekti, Bakı
        </p>
      </div>
      <div className="ticket-order">
        <h5>Biletlərin sifarişi</h5>
        <p>(+994 12) 598 74 14</p>
        <p>119</p>
        <p>Reklam yerləşdirmək üçün</p>
        <p>(+99455) 3301331 </p>
        <form>
          <div className="user-name">
            <label for="name">Adınız</label>
            <input type="text" name="name" />
          </div>
          <div className="user-email">
            <label for="email">E-mail</label>
            <input type="text" name="email" />
          </div>
          <div className="user-textarea">
            <label for="text">Mesaj</label>
            <textarea></textarea>
          </div>
          <div className="submit-button">
            <button className="form-button">Göndər</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParkBulvarContact;
