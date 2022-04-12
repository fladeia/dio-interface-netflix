import { en, pt } from './language.js'

const language = document.querySelector('.language-options')
const faqToggle = document.querySelectorAll('.faq-toggle')
const answer = document.querySelectorAll('.answer')
const elementsLanguageOptions = document.querySelectorAll('h1, h2, h3, h4, p, li')

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

// en.forEach((item, index) => {
//   // console.log(item)
// })

// text.map((item, index) => {
//   console.log(item.innerHTML)
// })

// function translate() {
//   const encodedParams = new URLSearchParams();
//   text.map((item, index) => {
//     encodedParams.append("q", item.innerHTML);
//   })
//   encodedParams.append("target", "pt");
//   encodedParams.append("source", "en");
  
//   const options = {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       'Accept-Encoding': 'application/gzip',
//       'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
//       'X-RapidAPI-Key': '8dadb36f79mshd159ab6f71347e0p1b5b37jsndf86cb5fb88f'
//     },
//     body: encodedParams
//   };
  
//   fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// }

// translate()

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
