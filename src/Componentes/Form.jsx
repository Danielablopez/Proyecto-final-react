import InputMetros from "./Input.jsx";
import PropSelect from "./PropSelect.jsx";
import UbicSelect from "./UbicSelect.jsx";
import { useContext } from "react";
import { AppContext } from "../AppContext.jsx";

function Form() {
  const costoM2 = 35.86;

  const { form } = useContext(AppContext);

  function cotizar(event) {
    event.preventDefault();

    let metros = form.metros;
    let prop = form.selectedProp.tipo;
    let ubi = form.selectedUbi.tipo;

    let resul =
      metros * form.selectedProp.factor * form.selectedUbi.factor * costoM2;

    let hora = new Date().toLocaleString();

    imprimirPoliza(resul);

    guardarEnHistorial(hora, resul, prop, ubi, metros);
  }

  const guardarEnHistorial = (hora, resul, prop, ubi, metros) => {
    const historialCotizaciones =
      JSON.parse(localStorage.getItem("historialCotizaciones")) || [];

    const cotizacion = {
      fecha: hora,
      propiedad: prop,
      ubicacion: ubi,
      metros: metros,
      poliza: resul.toFixed(2),
      id: historialCotizaciones.length + 1,
    };

    historialCotizaciones.push(cotizacion);
    localStorage.setItem(
      "historialCotizaciones",
      JSON.stringify(historialCotizaciones)
    );
  };

  const imprimirPoliza = (resul) => {
    let valorPoliza = document.getElementById("valorPoliza");
    valorPoliza.innerText = resul.toFixed(2);
  };

  return (
    <>
    <div className="container">
      <div id="form"className="form">
        <br /><br /><h1>Completa los datos solicitados</h1><br /><br />
        <form
          className="formulario"
          onSubmit={cotizar}
        >
          <PropSelect />

          <UbicSelect />

          <InputMetros />
        <br /> <br /> <button className="btn  btn-outline-dark">Cotizar</button>
        </form>

        <br /><p>
          Valor de Póliza: $<span id="valorPoliza">0.00</span>
        </p>
      </div>
      </div>
    </>
  );
}

export default Form
