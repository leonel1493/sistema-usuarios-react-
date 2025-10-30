import React from 'react';

// Datos de usuarios
const usuariosData = [
  { id: 1, nombre: "Jose", puntaje: 50 },
  { id: 2, nombre: "Maria", puntaje: 20 },
  { id: 3, nombre: "Juan", puntaje: 40 },
  { id: 4, nombre: "Lucas", puntaje: 5 },
  { id: 5, nombre: "Carlos", puntaje: 4 },
  { id: 6, nombre: "Ana", puntaje: 4 },
  { id: 7, nombre: "Pedro", puntaje: 5 },
  { id: 8, nombre: "Laura", puntaje: 1 },
  { id: 9, nombre: "Anahit", puntaje: 1 },
  { id: 10, nombre: "Camila", puntaje: 1 },
  { id: 11, nombre: "Felipe", puntaje: 8 },
  { id: 12, nombre: "Valentina", puntaje: 2 },
  { id: 13, nombre: "Marco", puntaje: 0 },
  { id: 14, nombre: "Isabella", puntaje: 2 },
  { id: 15, nombre: "Sofia", puntaje: 2 },
  { id: 16, nombre: "Diego", puntaje: 8 },
  { id: 17, nombre: "Daniela", puntaje: 8 },
  { id: 18, nombre: "Daniel", puntaje: 3 }
];

// Componente Usuario
const Usuario = ({ nombre, puntaje, id }) => {
  // Colores aleatorios pero consistentes basados en el ID
  const colores = [
    'from-red-400 to-pink-500',
    'from-blue-400 to-cyan-500',
    'from-green-400 to-emerald-500',
    'from-yellow-400 to-orange-500',
    'from-purple-400 to-fuchsia-500',
    'from-indigo-400 to-blue-500',
    'from-pink-400 to-rose-500',
    'from-teal-400 to-cyan-500',
    'from-lime-400 to-green-500',
    'from-orange-400 to-red-500',
    'from-violet-400 to-purple-500',
    'from-sky-400 to-blue-500'
  ];
  
  const colorGradiente = colores[id % colores.length];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col items-center space-y-2">
        <div className={`w-12 h-12 bg-gradient-to-br ${colorGradiente} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
          {nombre.charAt(0).toUpperCase()}
        </div>
        <h3 className="text-base font-semibold text-gray-800">{nombre}</h3>
        <div className="flex items-center space-x-1">
          <span className="text-xs font-medium text-gray-600">Puntaje:</span>
          <span className="bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full font-bold text-sm">
            {puntaje}
          </span>
        </div>
      </div>
    </div>
  );
};

// Componente Grilla
const Grilla = ({ usuarios }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-4">
      {usuarios.map((usuario) => (
        <Usuario 
          key={usuario.id}
          id={usuario.id}
          nombre={usuario.nombre} 
          puntaje={usuario.puntaje} 
        />
      ))}
    </div>
  );
};

// Componente App
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="w-full px-6 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Sistema de Usuarios
          </h1>
          <p className="text-gray-600 text-lg">
            Trabajo Práctico N°12 - React con Vite
          </p>
          <p className="text-blue-600 font-semibold text-xl mt-2">
            Por: Leonel Acapa
          </p>
          <div className="mt-4 inline-block bg-blue-100 px-4 py-2 rounded-full">
            <span className="text-blue-800 font-semibold">
              Total de usuarios: {usuariosData.length}
            </span>
          </div>
        </header>
        
        <Grilla usuarios={usuariosData} />
      </div>
    </div>
  );
}