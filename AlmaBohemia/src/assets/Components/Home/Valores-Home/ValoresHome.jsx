import { GiCandleLight } from "react-icons/gi";
import { GiPlantSeed } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa6"

const ValoresHome = () => {
  return (
    <section className="section-valores">
            <h1 className="font-titulo">Nuestros Valores</h1>
            <div className="content-valores">
              <div className="valores-box">
                <GiCandleLight className="icon-valores" />
                <p className="text-valores">Cera de soja</p>
              </div>
              <div className="valores-box">
                <GiPlantSeed className="icon-valores" />
                <p className="text-valores">sustentable con el planeta</p>
              </div>
              <div className="valores-box">
                <FaUserCheck className="icon-valores" />
                <p className="text-valores">Hecho a mano con amor</p>
              </div>
            </div>
          </section>
  )
}

export default ValoresHome