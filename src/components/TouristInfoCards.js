import React from "react";

export default function TouristInfoCards() {
  return (
    <div className="App-Body">
      <div className="card-group mt-5" id="container-cards">
        <div className="column-card col-4">
          <div className="card">
            <img
              src="https://media.istockphoto.com/photos/glasgow-city-skyline-from-kelvingrove-park-picture-id1211433221?b=1&k=6&m=1211433221&s=170667a&w=0&h=181kdJC3aX28KXNL2hAMIYWyrTv08DdmPS-YVoO937I="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Glasgow</h3>
              <p className="card-text">
                Glasgow es una ciudad portuaria en el río Clyde, en el oeste de
                las Tierras Bajas de Escocia. Es famosa por su arquitectura
                modernista y victoriana, un rico legado de la prosperidad de la
                ciudad entre los siglos XVIII y XX debido al comercio y la
                construcción de embarcaciones.
              </p>
              <br />
              <br />
              <a
                href="https://peoplemakeglasgow.com/"
                target="_blank"
                className="btn btn-primary"
              >
                More Information
              </a>
            </div>
          </div>
        </div>
        <div className="column-card col-4">
          <div className="card">
            <img
              src="https://media.istockphoto.com/photos/view-of-a-footbridge-in-salford-quays-in-manchester-england-picture-id1061647528?b=1&k=6&m=1061647528&s=170667a&w=0&h=oekaBHoA65Uwy2sZ3_0Zbx-pQD1syvqE6JCdMmifO2Y="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Mánchester</h3>
              <p className="card-text">
                Manchester es una importante ciudad del noroeste de Inglaterra
                con una rica herencia industrial. El sistema de canales del
                siglo XVIII del área de conservación Castlefield recuerda el
                tiempo en el que la ciudad era un núcleo textil, y los
                visitantes pueden recorrer esta historia en el interactivo Museo
                de la Ciencia y la Industria.
              </p>
              <a
                href="https://www.visitmanchester.com/"
                target="_blank"
                className="btn btn-primary"
              >
                More Information
              </a>
            </div>
          </div>
        </div>
        <div className=" column-card col-4">
          <div className="card">
            <img
              src="https://cdn.pixabay.com/photo/2014/09/11/18/23/tower-bridge-441853__340.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Londres</h3>
              <p className="card-text">
                Londres, la capital de Inglaterra y del Reino Unido, es una
                ciudad del siglo XXI con una historia que se remonta a la época
                romana. En su centro se alzan el imponente Palacio del
                Parlamento, la torre del icónico reloj "Big Ben" y la Abadía de
                Westminster, lugar de las coronaciones monárquicas británicas.
              </p>
              <a
                href="https://visitlondon.com/"
                target="_blank"
                className="btn btn-primary"
              >
                More Information
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
