const perguntas = [
    {
      pergunta: 'Qual é a função do operador "typeof" em JavaScript?',
      respostas: [
        'Retorna o tipo de uma variável',
        'Converte uma variável para string',
        'Retorna o valor de uma variável',
      ],
      correta: 0
    },
    {
      pergunta: 'Qual desses métodos é usado para adicionar um elemento ao final de um array em JavaScript?',
      respostas: [
        'push()',
        'concat()',
        'pop()',
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?',
      respostas: [
        '<!-- Comentário -->',
        '/* Comentário */',
        '// Comentário',
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é a função do método "parseInt" em JavaScript?',
      respostas: [
        'Retorna a parte fracionária de um número',
        'Retorna o valor inteiro de uma string',
        'Retorna o número de caracteres em uma string',
      ],
      correta: 1
    },
    {
      pergunta: 'O que o operador "===" faz em JavaScript?',
      respostas: [
        'Compara o valor e o tipo de duas variáveis',
        'Atribui um valor a uma variável',
        'Verifica se uma variável é definida',
      ],
      correta: 0
    },
    {
      pergunta: 'Como você declara uma variável em JavaScript?',
      respostas: [
        'var',
        'let',
        'const',
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é a função do método "slice" em JavaScript?',
      respostas: [
        'Remove um elemento de um array',
        'Divide uma string em um array de substrings',
        'Retorna uma cópia de parte de um array',
      ],
      correta: 2
    },
    {
      pergunta: 'Qual é a função do operador "&&" em JavaScript?',
      respostas: [
        'Realiza uma operação de adição',
        'Realiza uma operação de multiplicação',
        'Realiza uma operação de conjunção lógica',
      ],
      correta: 2
    },
    {
      pergunta: 'Como você faz um loop "for" em JavaScript?',
      respostas: [
        'for (var i = 0; i < 5; i++)',
        'for (i = 0; i < 5; i++)',
        'for (let i = 0; i < 5; i++)',
      ],
      correta: 0
    },
    {
      pergunta: 'Qual é a função do método "toUpperCase" em JavaScript?',
      respostas: [
        'Converte uma string para minúsculas',
        'Converte uma string para maiúsculas',
        'Retorna o comprimento de uma string',
      ],
      correta: 1
    },
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector("#acertos span")
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    quiz.appendChild(quizItem)
  }