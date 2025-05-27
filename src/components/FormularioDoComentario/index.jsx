import { useState } from 'react';

export default function FormularioDoComentario({ aoEnviar }) {
  const [usuario, setUsuario] = useState('');
  const [comentario, setComentario] = useState('');

  const lidarEnvio = (e) => {
    e.preventDefault();
    aoEnviar(usuario, comentario);
    setUsuario('');
    setComentario('');
  };

  return (
    <form onSubmit={lidarEnvio}>
      <input
        type="text"
        placeholder="Nome do usuário"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
      />
      <input
        type="text"
        placeholder="Escreva um comentário..."
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '0.5rem' }}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
