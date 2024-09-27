let paisesPIB = [
    { nombre: "Alemania", pib: 3860 },
    { nombre: "Japón", pib: 4870 },
    { nombre: "Brasil", pib: 2050 },
    { nombre: "Canadá", pib: 1800 },
    { nombre: "México", pib: 1220 },
    { nombre: "China", pib: 14140 },
    { nombre: "India", pib: 2870 },
    { nombre: "Francia", pib: 2770 },
    { nombre: "Reino Unido", pib: 2820 },
    { nombre: "Estados Unidos", pib: 21440 },
  ];
  
  let paisesAñadidos = [];
  
  let contenedor = document.getElementById("contenedor");
  let displayPaises = document.getElementById("DisplayPaises");
  
  function añadirPais() {
      if (paisesPIB.length === 0) {
          alert("No quedan países para añadir.");
          return;
      }
  
      const indiceAleatorio = Math.floor(Math.random() * paisesPIB.length);
      const paisSeleccionado = paisesPIB[indiceAleatorio];
  
      displayPaises.innerHTML = ""; 
      const divPais = document.createElement("div");
      divPais.textContent = `${paisSeleccionado.nombre}: ${paisSeleccionado.pib} mil millones`;
      displayPaises.appendChild(divPais);
  
      paisesAñadidos.push(paisSeleccionado);
      paisesPIB.splice(indiceAleatorio, 1);
  }
  
  document.getElementById("add-country").addEventListener("click", añadirPais);