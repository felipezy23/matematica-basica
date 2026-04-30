const sections = [

  {
    title: '1. Regra de Três',
    topics: [
      'Regra de três simples',
      'Regra de três composta'
    ]
  },

  {
    title: '2. Porcentagem',
    topics: [
      'Porcentagem básica',
      'Aumento percentual',
      'Desconto percentual'
    ]
  },

  {
    title: '3. Frações',
    topics: [
      'Simplificação',
      'Soma de frações',
      'Multiplicação de frações',
      'Divisão de frações'
    ]
  },

  {
    title: '4. Funções',
    topics: [
      'Função do 1º grau',
      'Gráfico da função afim',
      'Função do 2º grau',
      'Gráfico da parábola'
    ]
  },

  {
    title: '5. Estatística e Probabilidade',
    topics: [
      'Média',
      'Moda',
      'Mediana',
      'Probabilidade básica'
    ]
  },

  {
    title: '6. Geometria Plana',
    topics: [
      'Triângulos',
      'Ângulos',
      'Perímetro',
      'Área',
      'Teorema de Pitágoras'
    ]
  }

]

const roadmap = document.getElementById('roadmap')

sections.forEach((section, sectionIndex) => {

  const div = document.createElement('div')

  div.classList.add('section')

  let topicsHTML = ''

  section.topics.forEach((topic, topicIndex) => {

    const checkboxId = `check-${sectionIndex}-${topicIndex}`

    const checked =
      localStorage.getItem(checkboxId) === 'true'

    topicsHTML += `
      <label class="topic">

        <input
          type="checkbox"
          id="${checkboxId}"
          ${checked ? 'checked' : ''}
        >

        <span>${topic}</span>

      </label>
    `
  })

  div.innerHTML = `
    <h2>${section.title}</h2>

    <div class="topics">
      ${topicsHTML}
    </div>
  `

  roadmap.appendChild(div)

})

const checkboxes = document.querySelectorAll(
  'input[type="checkbox"]'
)

checkboxes.forEach(checkbox => {

  checkbox.addEventListener('change', () => {

    localStorage.setItem(
      checkbox.id,
      checkbox.checked
    )

  })

})
