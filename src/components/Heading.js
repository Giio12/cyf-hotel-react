import React from "react";

export default function Heading() {
  return (
    <header className="App-header">
      <div className="row">
        <div className="col-4 align-self-center">
          <img
            src="https://image.flaticon.com/icons/svg/139/139899.svg"
            id="logo"
            alt=""
          />
        </div>
        <div className="col-8 align-self-center" id="name-hotel">
          CYF Hotel ⋆⋆⋆
        </div>
      </div>
    </header>
  );
}
