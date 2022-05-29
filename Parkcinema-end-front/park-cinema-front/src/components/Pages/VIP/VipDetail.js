import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import vip1 from "../../../images/vip1.jpg";
import vip2 from "../../../images/vip2.jpg";
import vip3 from "../../../images/vip3.jpg";
import vip4 from "../../../images/vip4.jpg";
import vip5 from "../../../images/vip5.jpg";

const VipDetail = () => {
  return (
    <div>
      <div className="vip-detail-description">
        <h3> Park Cinema VIP Lounge - əsl kinomanlar üçün.</h3>
        <p>
          VIP Lounge – filmləri həm 2D, həm də 3D formatlarında izləmə imkanı
          verən ən müasir film proyeksiyalı və audio appartlı (üçyollu səs DOLBY
          Surround 5.1)gümüşü ekranla təchiz olunmuş standart zalın ən yeni
          premium versiyasıdır. Yüksək keyfiyyətdə tərtib olunmuş dizayn, xüsusi
          divar və tavan örtükləri kənar səsləri özünə hopduraraq filmin təmiz
          səslənməsinə şərait yaradır.
        </p>
        <p>
          VIP Lounge geniş dirsək altlıqları, elektrik nizamlama funksiyası və
          ayaq altlıqları ilə təchiz olunmuş «Figueras» ispan firmasına məxsus
          23 dəri oturacaqdan ibarətdir.
        </p>
        <p>
          Daha rahat şərait üçün hər bir kreslo idarə düyməsi ilə təchiz olunub,
          bu düymə sayəsində izləyicilər rahat əyləşə bilər və, ən əsası, filmi
          izlərkən zala içki və yemək sifariş edə bilər.
        </p>
        <p>
          VIP Lounge – kinonu və komfortu sevənlər və yalnız hər şeyin ən
          yaxşısını əldə etmək istəyənlər üçündür!
        </p>
        <p>
          Sizləri Park Bulvar TM 5-ci mərtəbə ünvanında yerləşən Park Cinema VIP
          Lounge-da gözləyirik.
        </p>
      </div>
      <div className="vip-detail-image">
        <Carousel>
          <div>
            <img src={vip1} alt="shekil" className="img-fluid" />
          </div>
          <div>
            <img src={vip2} alt="shekil" className="img-fluid" />
          </div>
          <div>
            <img src={vip3} alt="shekil" className="img-fluid" />
          </div>
          <div>
            <img src={vip5} alt="shekil" className="img-fluid" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default VipDetail;
