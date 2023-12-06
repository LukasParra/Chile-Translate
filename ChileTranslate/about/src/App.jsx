import React, { useState } from 'react';
import './App.css';

const App = () => {
  return <div className='container'>
    <h1>Diccionario</h1>
    <div className='diccionario'>
      <a href='/' class='fill-div'>Traductor</a>
    </div>
    <dl>
      <dt>Chamullo</dt>
      <dd>Hablar mucho sin decir nada concreto o intentar convencer a alguien con argumentos poco sólidos.</dd>

      <dt>Choro/a</dt>
      <dd>Persona valiente o atrevida. También puede referirse a un delincuente.</dd>

      <dt>Guagua</dt>
      <dd>Bebé o niño pequeño.</dd>

      <dt>Pega</dt>
      <dd>Trabajo o empleo.</dd>

      <dt>Cuico/a</dt>
      <dd>Persona de clase alta o con actitudes y modales más refinados.</dd>

      <dt>Palta</dt>
      <dd>Aguacate, fruta verde utilizada en ensaladas y sándwiches.</dd>

      <dt>Jote</dt>
      <dd>Persona que coquetea de manera exagerada.</dd>

      <dt>Al tiro</dt>
      <dd>De inmediato o enseguida.</dd>

      <dt>Caleta</dt>
      <dd>Muchas, demasiadas o en gran cantidad.</dd>

      <dt>Fome</dt>
      <dd>Aburrido o sin emoción.</dd>

      <dt>Weón</dt>
      <dd>Término coloquial usado para referirse a una persona. Puede ser amistoso o despectivo según el tono y el contexto.</dd>

      <dt>Cachai</dt>
      <dd>¿Entiendes? Expresión coloquial usada para confirmar si alguien comprende lo que se está explicando.</dd>

      <dt>Cuea</dt>
      <dd>Situación incómoda o vergonzosa.</dd>

      <dt>Chela</dt>
      <dd>Cerveza.</dd>

      <dt>Andar a pata pelá</dt>
      <dd>Ir descalzo/a.</dd>

      <dt>Fiesta mechona</dt>
      <dd>Fiesta de bienvenida para los estudiantes de primer año en la universidad.</dd>

      <dt>Chela</dt>
      <dd>Cerveza.</dd>

      <dt>Ñeño/a</dt>
      <dd>Persona infantil o inmadura.</dd>

      <dt>Pololear</dt>
      <dd>Mantener una relación de noviazgo.</dd>

      <dt>Mina</dt>
      <dd>Mujer.</dd>
  </dl>
    
  </div>;
};

export default App
