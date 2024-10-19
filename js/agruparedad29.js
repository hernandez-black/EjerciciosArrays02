let personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 32 },
    { nombre: 'Pedro', edad: 45 },
  ];
  
  function agruparPorDecada(personas) {
    return personas.reduce((grupos, persona) => {
      const decada = Math.floor(persona.edad / 10) * 10;
      grupos[decada] = grupos[decada] || [];
      grupos[decada].push(persona); 
      return grupos;
    }, {});
  }
  
  const personasPorDecada = agruparPorDecada(personas);
  console.log(personasPorDecada);