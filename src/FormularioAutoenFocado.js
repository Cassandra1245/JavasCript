import React, { useRef, useEffect } from 'react';

function FormularioAutoenfocado() {
  const nombreInput = useRef(null);
  const submit = useRef(null);

  useEffect(() => {
    nombreInput.current.focus();
    submit.textComntent = "nuevo valor";
  }, []);

  return (
    <form>
      <input type="text" ref={nombreInput} placeholder="Ingrese su nombre" />
      <button type="submit" ref = {submit}>Enviar</button>
    </form>
  );

}
export default FormularioAutoenfocado