"use client";
import { useState } from "react"

export default function Home() {
  const[novaTarefa, setNovaTarefa] = useState('');
  const [tarefas, setTarefas] = useState<{ texto: string, concluida: boolean }[]>([]);

  
  function adicionarTarefa() {
    if(novaTarefa.trim() === '') return;

    setTarefas([...tarefas, { texto: novaTarefa, concluida: false }]);
    setNovaTarefa('');
  }

  function marcarComoConcluida(index: number) {
    const novasTarefas = tarefas.map((tarefa, i) => {
      if (i === index) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  }

  return (
    <div className="conteiner">
      <h1 className="titulo">Bem vindo a minha Lista de Tarefas</h1>

      <input 
      
      type="text" 
      placeholder="Digite uma Tarefa: "
      className="input-tarefa"
      value={novaTarefa}
      onChange={(e) => setNovaTarefa(e.target.value)}
      />

      <button onClick={adicionarTarefa}
      className="botao-adicionar"
      >Adicionar Tarefa
      </button>
      
      <ul className="lista-tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={index}
          className={`item-tarefa ${tarefa.concluida ? 'concluida' : ''}`}
          onClick={() => marcarComoConcluida(index)}
          >{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  )
}