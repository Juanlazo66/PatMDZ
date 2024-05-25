import Dervinsa from "../../../public/Dervinsa.png";
import Flowserve from "../../../public/Flowserve.png";
import GrupoPeñaflor from "../../../public/GrupoPeñaflor.png";
import MinasArgentinas from "../../../public/MinasArgentinas.png";
import Navarro from "../../../public/Navarro.png";
import Petrocuyo from "../../../public/Petrocuyo.png";
import PierreAuger from "../../../public/PierreAuger.png";
import Unilever from "../../../public/Unilever.png";
import style from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={style.slider}>
      <div className={style.slideTrack}>
        <div className={style.slide}>
          <img src={Dervinsa} alt="Dervinsa" />
        </div>

        <div className={style.slide}>
          <img src={Flowserve} alt="Flowserve" />
        </div>

        <div className={style.slide}>
          <img src={GrupoPeñaflor} alt="GrupoPeñaflor" />
        </div>

        <div className={style.slide}>
          <img src={MinasArgentinas} alt="MinasArgentinas" />
        </div>

        <div className={style.slide}>
          <img src={Navarro} alt="Navarro" />
        </div>

        <div className={style.slide}>
          <img src={Petrocuyo} alt="Petrocuyo" />
        </div>

        <div className={style.slide}>
          <img src={PierreAuger} alt="PierreAuger" />
        </div>

        <div className={style.slide}>
          <img src={Unilever} alt="Unilever" />
        </div>

        <div className={style.slide}>
          <img src={Dervinsa} alt="Dervinsa" />
        </div>

        <div className={style.slide}>
          <img src={Flowserve} alt="Flowserve" />
        </div>

        <div className={style.slide}>
          <img src={GrupoPeñaflor} alt="GrupoPeñaflor" />
        </div>

        <div className={style.slide}>
          <img src={MinasArgentinas} alt="MinasArgentinas" />
        </div>

        <div className={style.slide}>
          <img src={Navarro} alt="Navarro" />
        </div>

        <div className={style.slide}>
          <img src={Petrocuyo} alt="Petrocuyo" />
        </div>

        <div className={style.slide}>
          <img src={PierreAuger} alt="PierreAuger" />
        </div>

        <div className={style.slide}>
          <img src={Unilever} alt="Unilever" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
