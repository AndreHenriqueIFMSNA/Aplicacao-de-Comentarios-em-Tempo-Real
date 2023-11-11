import { FormEvent, useState } from 'react'
import enviar from './assets/mandar.png'
import iconeMensagens from './assets/chatting.png'
import './App.css'


function App() {
  
  const [comentarioInput, setComentarioInput] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [comentarios, setComentarios] = useState<{ texto: string; dataHora: string; usuario: string }[]>([]);
  const [counter, setCounter] = useState(0);

  const contador = () => {
    setCounter(counter + 1)
  }


  function minhaFuncao(event: FormEvent) {
    
    event.preventDefault();

    if (!comentarioInput) {
      alert("Não foram preenchido todos os campos, por favor verifique");
      return;
    }

    if (!nomeUsuario) {
      alert("Não foram preenchido todos os campos, por favor verifique");
      return;
    }

   


    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    const dataHora = `${dia}/${mes}/${ano} ~ ${hora}-${minutos}-${segundos}`;

    const novoComentario = { texto: comentarioInput, dataHora, usuario: nomeUsuario};
    setComentarios([...comentarios, novoComentario]);
    setComentarioInput('');
    setNomeUsuario('');
 
    return contador();
  }

  return (
    <>
      <div className='container'>
        <div className='container-header'>
          <h1>Deixe seu comentário</h1>
        </div>
        <div className='container-body'>
          <form>
            <h1 id='text-header-form'><img src={iconeMensagens} alt="Imagem de usuário" />{counter}</h1>
            <div className='box-comentarios'>
              <div className='box-ordem'>
                {
                comentarios.map((comentario, index) => 
                  <p key={index} id='conteudo-comentario'>
                    ({comentario.usuario})-
                     {comentario.dataHora}
                    <br />
                  {comentario.texto}
                  </p>
                )}
              </div>
            </div>
            <div className='insert-comentarios'>
              <input id='usuarioInput'
                placeholder="Escreva seu comentário"
                type="text"
                required
                value={comentarioInput}
                onChange={(e) => setComentarioInput (e.target.value)}
              />
              <input id='usuarioInput'
                placeholder="Informe seu nome"
                type="text"
                required
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario (e.target.value)}
              />
              <button onClick={minhaFuncao}>
                <img id='img-enviar' src={enviar} alt="Enviar comentário" />
              </button>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;