const personas = [
  { nombre: 'Juan', edad: 30 },
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Pedro', edad: 35 },
];

const personaBuscada = personas.find(persona => persona.edad === 35);

console.log(personaBuscada);