import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CinemaSlider from "../Branches/CinemaSlider";
import miniOffer from "../../../images/teklif-mini.jpg";
import offerImage from "../../../images/teklif.jpg";
import "./index.scss";
import Order from "../../common/Order";
import Advertisement from "../../layout/Advertisement/Advertisment";
import Offer from "../../common/Offer";

const AdvertisingOffer = () => {
  return (
    <>
      <CinemaSlider />
      <Container>
        <Row>
          <Col md={9}>
            <h2 className="offer-title">
              Kinoteatrlarda reklam - ən effektiv reklam növü kimi.
            </h2>
            <div className="offer-about">
              <div className="offer-about-image">
                <img src={offerImage} alt="offer about" />
              </div>
              <p>
                Park Cinema kinoteatrlar şəbəkəsi – müasir çox zallı
                kinoteatrların Azərbaycanda ən iri şəbəkəsidir. Hazırda
                kinoteatrlarımız Park Bulvar, Metro Park, Zagulba Mall, Flame
                Towers kimi tanınmış ticarət və əyləncə mərkəzlərində yerləşir.
                Bundan əlavə, Park Cinema Azərbaycanda açıq səmada hələki yeganə
                kinoteatr olan Amburan Beach Club idarə edir. 2018-ci ildə isə
                Masallı, Quba və Mingəçevir kimi regionlarımızda 3
                kinoteatrlarımız fəaliyyətə başlamışdır. Bütün bu sadalanan
                kinoteatrlarda reklamınızın effektiv şəkildə yerləşdirilməsi
                üçün çoxlu imkanlar mövcuddur.
              </p>
            </div>
            <div className="benefits-info">
              <Row>
                <Col md={6}>
                  <h3>
                    Park Cinema kinoteatrlarında reklam yerləşdirməyin bir neçə
                    danılmaz üstünlükləri var:
                  </h3>
                  <ul>
                    <li>Dəqiq hədəfləmə və yüksək səviyyədə əlaqə.</li>
                    <li>
                      Əyləncəvi mühitdə reklam emosional səviyyədə qavranılır,
                      beləcə brendin yaddaşlarda qalma imknı artır.
                    </li>
                    <li>
                      Lazımı kriteriylara görə kinoteatrın seçimi, üstəgəl video
                      çarxların yerləşdirilməsi üçün düzgün film seçimi reklam
                      olunan məhsulun auditoriyası ilə kinozal publikası
                      arasında mükəmməl vəhdət təşkil edə bilər.
                    </li>
                    <li>
                      Təsir gücü və görüntü televeiziya ilə müqayisə ediləcək
                      qədər deyil. Böyük ekranlarda izlənilən parlaq və dinamik
                      reklam çarxı televizya ilə müqayisədə on qat daha çox
                      təsirə malikdir. Reklam çarxının izlənildikdən sonra
                      yaddaşlarda qalma göstəricisi 50-60% və daha artıqdır.
                    </li>
                    <li>
                      Kinoteatrlar gənc auditoriya arasında, xüsusilə
                      auditoriyanın maddi cəhətdən daha təminatlı olan hissəsi,
                      marketinq üçün ən yaxşı məkanlardan biridir.
                    </li>
                    <li>
                      Komleks reklam imkanı: film öncəsi video çarx, foyedə
                      monitor, posterlər, laytbokslar, flayerlər, biletin arxa
                      üzü, 3D eynəklər, zalın brendləşdirilməsi və s.
                    </li>
                  </ul>
                </Col>
                <Col md={6}>
                  <div className="mini-offer-image">
                    <img src={miniOffer} alt="mini offer" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={3}>
            <Order />
            <Advertisement />
          </Col>
          <Offer />
        </Row>
      </Container>
    </>
  );
};

export default AdvertisingOffer;
