const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
  ];
  
  const nombres = personas.map(persona => persona.nombre);
  
  console.log(nombres);