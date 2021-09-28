import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const direcciones = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  const informacionesLegales = [
    "Términos y condiciones",
    "Política de privacidad",
    "Aviso Legal"
  ];

  return (
    <footer className="App-Footer">
      <div className="row mt-5">
        <div className="column-footer col-4">
          <h4>Cónocenos Mejor</h4>
          <ul>
            {direcciones.map(direccion => (
              <li>{direccion}</li>
            ))}
          </ul>
        </div>
        <div className="column-footer col-4">
          <h4>Información Legal</h4>
          <ul>
            {informacionesLegales.map(informacionLegal => (
              <li>{informacionLegal}</li>
            ))}
          </ul>
        </div>
        <div className="column-footer col-4" id="iconos">
          <h4>Síguenos en</h4>
          <FontAwesomeIcon icon={faFacebook} />
          {"  "}
          <FontAwesomeIcon icon={faInstagram} />
          {"  "}
          <FontAwesomeIcon icon={faTelegram} />
          {"  "}
          <FontAwesomeIcon icon={faTwitter} />
          {"  "}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
