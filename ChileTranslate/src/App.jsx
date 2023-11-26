import React, { useState } from 'react'
import './App.css'
import OpenAi, { OpenAI } from 'openai'
import { BeatLoader } from 'react-spinners';



const App = () => {

  const [formData, setFormData] = useState({lenguaje:'ingles',mensaje:''})
  const [error, setError] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [traduccion, setTraduccion] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    /*console.log(formData);*/
    setError('');
  }
  
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_KEY, dangerouslyAllowBrowser: true});

  const traducir = async () =>{
    const {lenguaje,mensaje} = formData;
    var texto = "";
    if (lenguaje == "chileno"){
      texto = "traduce esto de español"+ lenguaje+" a español neutro:" +mensaje;
    } else texto = "traduce esto a"+ lenguaje+":" +mensaje; 
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'user', content: texto}],
      temperature: 0.3,
      max_tokens: 256,
    });
    /*console.log(response.choices[0].message.content);*/
    const textoTraducido = response.choices[0].message.content;
    setIsLoading(false);
    setTraduccion(textoTraducido);
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
    if (!formData.mensaje){
      setError('Porfavor ingrese un mensaje.');
      return;
    }
    setIsLoading(true);
    traducir();
  }

  const handleCopy = () =>{
    navigator.clipboard.writeText(traduccion)
    .then(()=> displayNotification())
    .catch((err)=> console.error('fallo al copiar: ',err));
  }

  const displayNotification =() =>{
    setShowNotification(true);
    setTimeout(()=>{
      setShowNotification(false);
    }, 3000)
  }

  return <div className='container'>
    <h1>Traductor</h1>

    <form onSubmit={handleOnSubmit}>
      <div className='choices'>
        <input 
          type="radio" id='ingles' 
          name='lenguaje'
          value='Ingles'
          defaultChecked={formData.lenguaje}
          onChange={handleInputChange}
        />
        <label htmlFor="ingles">Ingles</label>

        <input type="radio" id='español' name='lenguaje' value='español' onChange={handleInputChange}/>
        <label htmlFor="español">Español</label>

        <input type="radio" id='chileno' name='lenguaje' value='chileno' onChange={handleInputChange}/>
        <label htmlFor="chileno">Chileno</label>
        </div>
        <textarea 
          name="mensaje" 
          placeholder='Escribe tu mensaje aqui...'
          onChange={handleInputChange}
        ></textarea>

       { error && <div className="error">{error}</div>}

        <button type='submit'>Traducir</button>
    </form>

    <div className="traduccion">
      <div className="copy-btn" onClick={handleCopy}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
        </svg>
      </div>
      {isLoading ? <BeatLoader size={12} color={"red"} />: traduccion}
    </div>
    <div className={`notificacion ${showNotification ? "active" : ""}`}>
      Copiado al portapapeles
    </div>
  </div>;
};

export default App
