import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div className="py-4">
        <h1>Contactos en web</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">categoria</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              aqui estan lñas mateirais
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">contraseña</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
            Me echa un vistazo
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            ver
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
