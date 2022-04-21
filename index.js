import { en, pt } from './language.js'

const language = document.querySelector('.language-options')
const faqToggle = document.querySelectorAll('.faq-toggle')
const answer = document.querySelectorAll('.answer')
const elementsLanguageOptions = document.querySelectorAll('h1, h2, h3, h4, p, li, button, a')

language.addEventListener('change', languageSelect)

function languageSelect() {
  if(language.selectedOptions[0].value === 'pt' || language.selectedOptions[0].value === 'pt') {
    elementsLanguageOptions.forEach((item1, index) => {
      item1.innerHTML = pt[index]
    })
  }
  
  if(language.selectedOptions[0].value === 'en' || language.selectedOptions[0].value === 'en') {
    elementsLanguageOptions.forEach((item1, index) => {
      item1.innerHTML = en[index]
    })
  }
}

function showAnswer(opcao) {
  if (!answer[opcao].classList.contains('open')) {
    closeAnswer()
    answer[opcao].classList.add('open')
  } else {
    answer[opcao].classList.remove('open')
  }
}

function closeAnswer() {
  answer.forEach(item => {
    item.classList.remove('open')
  })
}

faqToggle.forEach((item, index) => {
  item.addEventListener('click', () => showAnswer(index))
})

closeAnswer()
