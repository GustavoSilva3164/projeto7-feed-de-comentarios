import { useState } from 'react';
import FormularioComentario from '../FormularioDoComentario';
import ListaComentarios from '../ListaComentarios';

export default function FeedDeComentarios() {
  const [comentarios, setComentarios] = useState([
    { usuario: 'Ana', texto: 'React é incrível!' },
    { usuario: 'João', texto: 'Muito bom esse projeto!' }
  ]);

  const adicionarComentario = (usuario, texto) => {
    if (usuario.trim() && texto.trim()) {
      setComentarios([...comentarios, { usuario, texto }]);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '2rem auto',
        border: '2px solid #ccc' // ✅ Borda aqui
      }}
    >
      <h2>Feed de Comentários</h2>
      <FormularioComentario aoEnviar={adicionarComentario} />
      <ListaComentarios comentarios={comentarios} />
    </div>
  );
}
