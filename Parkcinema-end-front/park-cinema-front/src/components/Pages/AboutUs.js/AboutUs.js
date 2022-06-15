import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Order from "../../common/Order";
import CinemaSlider from "../Branches/CinemaSlider";
import Advertisment from "../../layout/Advertisement/Advertisment";
import "./index.scss";
import Offer from "../../common/Offer";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import { makeStyles } from "@mui/styles";
import parkbulvarImage from "../../../images/Park-bulvar-tab1.jpg";
import metroPark1 from "../../../images/Metro-park1.jpg";
import imaxImage from "../../../images/imax-tab-1.jpg";
import zaqulbaImage from "../../../images/zaqulba-tab-1.jpg";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  active: {
    backgroundColor: "red!important",
  },
  style: {
    marginTop: "180px",
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const [active, setActive] = React.useState(1);
  const [aboutUs, setAboutUs] = React.useState();
  console.log(aboutUs);
  React.useEffect(() => {
    axios
      .get("https://localhost:44300/api/AboutUs/GetAboutUsInfo")
      .then((res) => setAboutUs(res.data));
  }, []);
  return (
    <>
      <CinemaSlider />
      <Container>
        <Row>
          <Col md={9} className="about-us">
            <h1 className="about-us-title">Haqqımızda</h1>
            <div className="main-cinema-info">{aboutUs?.mainDescription}</div>
            <div className="main-cinema-description">
              Əfsanəvi komfort və zalların keyfiyyətindən savayı, Park Cinema
              Azərbaycanda əzəmətli IMAX formatının yeganə nümayəndəsidir.
              Şəbəkə repertuarına festival filmləri və arthausdan başqa, ən
              məşhur premyeralar daxildir. Hər il Park Cinema şəbəkəsində
              kinofestivallar keçirilir, müntəzəm olaraq qala-premyeralar və
              press-nümayişlər, sadiq tamaşaçılar üçün geniş aksiyalar və
              filmlərin xeyriyyə nümayişi təşkil olunur. Şəbəkə Facebook və
              İnstagram sosial şəbəkələrində öz fəallığı, kontentə və
              istifadəçilərlə ünsiyyətə yaradıcı yanaşma ilə məşhurlaşıb və
              Azərbaycanın ən müzakirə olunan və populyar kinoman qrupu
              statusunu alıb (Socialbakers*-in məlumatına əsasən). Onu da qeyd
              edək ki, brend Bakının kübar həyatının çoxsaylı mühüm
              hadisələrinin tərəfdaşıdır, bu da Park Cinema-nın yüksək
              statusunun rəmzidir.
            </div>
            <div className="socialbaker-statistic">
              *Socialbakers- sosial şəbəkələrdə ən məşhur hesabat və statistika
              xidmətidir. Park Cinema səhifəsi istifadəçilərin sorğularının
              98%-ni cavablandırdığına görə sertifikat alıb.
            </div>
            <div className="cinema-address">
              <p>FLAME CINEMA MMC</p>
              <p>AZ1060, Bakı ş-ri, Nizami r-nu AZƏR MANAFOV ev.14, m.54</p>
              <p>AZ1006, Bakı ş-ri, Səbail r-nu, M.Hüseyn küçəsi, 1A</p>
            </div>
            <TabsUnstyled defaultValue={0}>
              <TabsListUnstyled>
                <TabUnstyled
                  className={active === 1 && classes.active}
                  onClick={() => {
                    setActive(1);
                  }}
                >
                  Park Bulvar
                </TabUnstyled>
                <TabUnstyled
                  className={active === 2 && classes.active}
                  onClick={() => {
                    setActive(2);
                  }}
                >
                  Metro Park
                </TabUnstyled>
                <TabUnstyled
                  className={active === 3 && classes.active}
                  onClick={() => {
                    setActive(3);
                  }}
                >
                  Alov qüllələri kompleksi
                </TabUnstyled>
                <TabUnstyled
                  className={active === 4 && classes.active}
                  onClick={() => {
                    setActive(4);
                  }}
                >
                  Zaqulba
                </TabUnstyled>
              </TabsListUnstyled>

              <TabPanelUnstyled value={0}>
                <div className="tab-image">
                  <img
                    src={parkbulvarImage}
                    alt="parkbulvar"
                    className="img-fluid"
                  />
                  <p>
                    Şəbəkənin birinci ən məşhur kinoteatrı dünya kinostudiyaları
                    və «Universal Pictures», “20 century Fox”, “Warner Bros.”,
                    “Sony”, “Disney”, “Bazeleves”, “Inter Film” və s. kimi
                    distribusiya şirkətlərin rəsmi məlumatlarına görə
                    Azərbaycanın ən ziyarət edilən kinoteatrı kimi tanınır. Park
                    Bulvar TM-nin 4-cü mərtəbəsində yerləşir, VİP ilə birlikdə 6
                    kinozalı, 789 oturacaq yeri, VİP bar ilə birlikdə 3 barı
                    var. Kinoteatr Dolby Digital səs sistemi, dünya ekspertləri
                    tərəfindən ən yaxşı 3D texnologiyası kimi qəbul edilmiş
                    RealD 3D (Azərbaycanda yeganə) və yüksək keyfiyyətli gümüş
                    örtüklü, filmləri daha yaxşı əks etdirən, 3D effektinin
                    dərinliyinə təsir edən çökük ekran ilə təchiz olunub.{" "}
                  </p>
                </div>
              </TabPanelUnstyled>
              <TabPanelUnstyled value={1}>
                <div className="tab-image">
                  <img
                    src={metroPark1}
                    alt="parkbulvar"
                    className="img-fluid"
                  />
                  <p>
                    Şəbəkənin ən tutumlu, rahat mühitli kinoteatrı Nərimanov
                    metro stansiyasının yaxınlığında yerləşir. Ziyarət edilən
                    kinoteatrlardan ikincisi məşhur Metro Park TM-nin 6-cı
                    mərtəbəsində yerləşir, 6 zalı, 1034 oturacağı var.
                    Kinoteatrın üstünlüyü ondan ibarətdir ki, TM-dən ayrıca
                    yerləşir, və bunun sayəsində TM-nin səs-küyü qonaqlara mane
                    olmur. Kinoteatrda müxtəlif endirim sistemləri tətbiq
                    olunur: Ailə tarifi, Uşaq tarifi və hər həftənin çərşənbə
                    axşamı günü 50% endirimlə filmlərə baxmağa imkan yaradan
                    Super Gün.
                  </p>
                </div>
              </TabPanelUnstyled>
              <TabPanelUnstyled value={2}>
                <div className="tab-image">
                  <img src={imaxImage} alt="parkbulvar" className="img-fluid" />
                  <p>
                    Ənənəvi komfort və lüks atmosferi birləşdirən yüksək
                    səviyyəli kinoteatr Bakı şəhərinin yeni müasir simvolu olan
                    Flame Towers-də yerləşir. 282 tamaşaçını yerləşdirən
                    Azərbaycanda ilk IMAX formatlı zal daxil olmaqla, kinoteatr
                    6 zal, 800 oturacaqdan ibarətdir. Standart zallar RealD 3D
                    texnologiyası, gümüş örtüklü ekranlar, və çox rahat Couple
                    Seats oturacaqları ilə təchiz olunub. IMAX formatı təxəyyülü
                    o dərəcədə heyrətləndirir ki, aydın görüntü, böyük ekran, ən
                    yaxşı 3D və güclü səsli IMAX Experience-i sınayan
                    tamaşaçılar ən məşhur blokbasterlərə məhz bu formatda
                    baxmağa üstünlük verirlər.
                  </p>
                </div>
              </TabPanelUnstyled>
              <TabPanelUnstyled value={3}>
                <div className="tab-image">
                  <img
                    src={zaqulbaImage}
                    alt="parkbulvar"
                    className="img-fluid"
                  />
                  <p>
                    Unikal yüksək səviyyəli kinoteatr ən populyar bağ
                    zonalarının birində - Zagulba Park TM-də yerləşir. 2D və 3D
                    formatlı 4 rahat zal, 576 oturacaq yer və zəngin barlı geniş
                    foye Sizə ailəniz və dostlarınızla birgə unudulmaz vaxt
                    kəçitməyə imkan verəc. Yay istirahətinin ideal əlavəsi.
                  </p>
                </div>
              </TabPanelUnstyled>
            </TabsUnstyled>
            <Offer />
          </Col>
          <Col md={3}>
            <Order />
            <Advertisment />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
