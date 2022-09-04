import React from "react";

function Form() {
  return (
    <div className="container-form">
      <div className="navbar-form">
        <h1>Prysm</h1>
        <div className="buttons">
          <div className="button-1 publish">
            <h2 className="title-1">Publish</h2>
          </div>
          <div className="button-1 cancel">
            <h2 className="title-1">Cancel</h2>
          </div>
        </div>
      </div>
      <div className="form-container">
        <h1 className="title-header">AJUKAN PERTANYAAN MU ! </h1>
        <input
          className="input-judul"
          type="text"
          placeholder="Tulis judul pertanyaan mu"
        />
        <textarea
          className="input-isi"
          type="text"
          placeholder="Tulis isi pertanyaan mu"
        />

        <div className="image-side">
          <img
            width={480}
            src="https://i.ibb.co/tQqcxWq/juicy-man-develops-a-scheme-1.png"
            alt="juicy-man-develops-a-scheme-1"
            border="0"
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
