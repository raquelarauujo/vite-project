import React, { useState } from 'react';
import './App.css';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [matricula, setMatricula] = useState('');
  const [respostas, setRespostas] = useState({});
  const [enviar, setEnviar] = useState(false);

  const questoes = [
    {
      id: 1,
      questao: ' Sobre os frameworks de frontend é correto afirmar:',
      opcoes: ['O Angular foi desenvolvido pela Microsoft para a criação de aplicativos dinâmicos,de página única e interativos da web (Spas). O React é uma biblioteca JavaScript, usada principalmente para construir interfaces UI em aplicações web. Cada componente é escrito com HTML, CSS e JS, este é o Vue.js. ', 'O React utiliza componentes encapsulados em um único arquivo .rjs. O Angular foi criado pelo Meta com foco total para a experiência do usuário (UX).', 'O React foi desenvolvido pelo Google para a criação de aplicativos dinâmicos,de página única e interativos da web (Spas). O Vue.js é uma biblioteca JavaScript, usada principalmente para construir interfaces de UI em aplicações web. Cada componente é escrito com HTML, CSS e JS, este é o Angular.', ' Vue.js permite construir aplicações cuja página reage automaticamente às mudanças de propriedades.', 'O framework mais utilizado é o React, passando por várias versões onde a versão mais recente é o React 2 e era conhecido anteriormente como ReactJs.'],
      respostaCerta: 3,
      feedback: ' O Vue.js permite a construção de aplicações reativas, onde as páginas ou componentes reagem automaticamente às mudanças nas propriedades do estado, sem a necessidade de manipulações manuais do DOM.',
    },
    {
      id: 2,
      questao: ' A forma correta de declarar uma regra CSS é a seguinte:',
      opcoes: ['Seletor { valor > propriedade };', ' Seletor { propriedade: valor }; ', 'Seletor { propriedade = valor };', 'Seletor { valor: propriedade };', 'Nenhuma das alternativas.'],
      respostaCerta: 1,
      feedback: ' A sintaxe correta de uma regra CSS é composta por um seletor, seguido de um par de chaves {}, dentro do qual são declaradas uma ou mais propriedades e seus respectivos valores, separados por dois pontos.',
    },
    {
      id: 3,
      questao: 'Qual das seguintes opções descreve corretamente o que é JSX em React?',
      opcoes: ['Uma extensão do JavaScript que permite escrever código HTML diretamente dentro do JavaScript.', ' Um novo tipo de elemento HTML exclusivo do React.', 'Um framework CSS utilizado para estilizar componentes React.', 'Uma biblioteca que facilita a manipulação do DOM.', ' Uma função especial usada para criar componentes em React.'],
      respostaCerta: 0,
      feedback: 'JSX é uma extensão de sintaxe do JavaScript que permite escrever código semelhante a HTML dentro do JavaScript. Ele é transformado em chamadas JavaScript que o React usa para criar elementos e componentes.',
    },
    {
      id: 4,
      questao: 'JavaScript é uma linguagem de programação exclusivamente utilizada no lado do cliente (client-side) e não pode ser usada no lado do servidor (server-side).',
      opcoes: ['Certo', 'Errado'],
      respostaCerta: 1,
      feedback: 'JavaScript pode ser usado tanto no lado do cliente (no navegador) quanto no lado do servidor, com tecnologias como Node.js. Portanto, ele não é exclusivo para client-side.',
    },
    {
      id: 5,
      questao: ' Quando o estado de um componente React é atualizado, todos os componentes filhos também são automaticamente renderizados novamente, mesmo que seu estado não tenha mudado.',
      opcoes: ['Certo', 'Errado'],
      respostaCerta: 0,
      feedback: 'Em React, quando o estado de um componente pai é atualizado, todos os componentes filhos são renderizados novamente, por padrão, independentemente de seu estado ter mudado ou não.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviar(true);
  };

  const handleOptionChange = (questaoId, optionIndex) => {
    setRespostas({ ...respostas, [questaoId]: optionIndex });
  };

  return (
    <div className="container">
      <h1>Formulário</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Matrícula:</label>
          <input
            type="text"
            value={matricula}
            onChange={(e) => setMatricula(e.target.value)}
            required
          />
        </div>

        {questoes.map((questao) => (
          <div key={questao.id} className="questao">
            <h3>{questao.questao}</h3>
            {questao.opcoes.map((opcao, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`q${questao.id}_opcao${index}`}
                  name={`questao${questao.id}`}
                  value={index}
                  onChange={() => handleOptionChange(questao.id, index)}
                  required
                />
                <label htmlFor={`q${questao.id}_opcao${index}`}>{opcao}</label>
              </div>
            ))}
            {enviar && (
              <div className={`feedback ${respostas[questao.id] === questao.respostaCerta ? 'correto' : ''}`}>
                {respostas[questao.id] === questao.respostaCerta
                  ? `Correto! ${questao.feedback}`
                  : `Errado. ${questao.feedback}`}
              </div>
            )}
          </div>
        ))}

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Formulario />
    </div>
  );
};

export default App;
