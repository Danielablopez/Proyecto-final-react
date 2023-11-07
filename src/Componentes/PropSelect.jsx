import { useContext } from "react";
import { AppContext } from "../AppContext.jsx";

function PropiedadesSelect() {
    const { propiedades, form, setForm } = useContext(AppContext);

    const handleChange = (event) => {
       
        const selectedProp = propiedades.find((opcion) => opcion.id == event.target.value);
        
    
        setForm({ ...form, selectedProp });
      };

    return (
        <>
            <label htmlFor="propiedad">Selecciona el tipo de propiedad</label>
            <select className="input-text"  id="propiedad"  onChange={handleChange} required>
                <option value="" disabled="">...</option>
                {propiedades.map((propiedad) => (
                    <option key={propiedad.id} value={propiedad.id}>
                        {propiedad.tipo}
                    </option>
                ))}
            </select>
        </>
    )
}

export default PropiedadesSelect