const { changeSubMainTitle, changeMains } = require('../utils/util.js')

const menuSideComplete = document.querySelector('.nav-bar')
const mainSide = document.querySelector('.main-side')
const mainSideMobile = document.querySelector('.main-side-mobile')
const buttonMenu = document.querySelector('.button-menu-mobile')
const fontMenuMobile = document.querySelectorAll('.main-side ul li a')
const logo = document.querySelector('.container img')
const imageButton = document.querySelector('.button-menu-mobile button img')
const mediaQuery = window.matchMedia('(max-width:920px)')
const showMenu = document.querySelector('.show-menu-side')
const closeMenu = document.querySelector('.close-menu-side')
let menuGrande, menuPequeno

const main = () => {
  // showMenu.addEventListener('click', function () {
  //   // if (mainSide.style.display === 'none') {

  //   // if (mainSide.style.display === 'block') {
  //   // mainSide.style.display = 'none'
  //   // mainSideMobile.style.display = 'block'
  //   // menuSideComplete.style.width = '4rem'
  //   // buttonMenu.style.marginLeft = '4.5rem'
  //   // logo.style.width = '3.5rem'
  //   // menuSideComplete.style.gap = '3rem'
  //   // imageButton.src = 'images/menu.png'
  //   // }
  //   // else {
  //   console.log('Sucesso!')
  //   mainSide.style.display = 'block'
  //   mainSideMobile.style.display = 'none'
  //   menuSideComplete.style.width = '12rem'
  //   buttonMenu.style.marginLeft = '13rem'
  //   menuSideComplete.style.gap = '0rem'
  //   closeMenu.style.display = 'block'
  //   showMenu.style.display = 'none'
  //   imageButton.src = 'images/close.png'
  //   // }
  // })
  // }

  // document.addEventListener('click', function (event) {
  //   const element = event.target

  //   if (element.classList.contains('show-menu-side')) {
  //     if (mainSide.style.display === 'none') {
  //       // mainSide.style.display = 'none'
  //       // mainSideMobile.style.display = 'block'
  //       // menuSideComplete.style.width = '4rem'
  //       // buttonMenu.style.marginLeft = '4.5rem'
  //       // logo.style.width = '3.5rem'
  //       // menuSideComplete.style.gap = '3rem'
  //       // imageButton.src = 'images/menu.png'
  //       // menuGrande = false
  //       // }
  //       // if (!menuGrande)
  //       // else {
  //       //   mainSide.style.display = 'block'
  //       //   mainSideMobile.style.display = 'none'
  //       //   menuSideComplete.style.width = '12rem'
  //       //   buttonMenu.style.marginLeft = '13rem'
  //       //   menuSideComplete.style.gap = '0rem'
  //       //   imageButton.src = 'images/close.png'
  //       // menuPequeno = false

  //       const changeMediaQuery = mediaQuery => {
  //         if (mediaQuery.matches) {
  //           for (let i = 0; i < fontMenuMobile.length; i++) {
  //             fontMenuMobile[i].style.fontSize = '0.7rem'
  //           }

  //           logo.style.width = '11rem'
  //           mainSide.style.marginTop = '1.5rem'
  //         } else {
  //           for (let i = 0; i < fontMenuMobile.length; i++) {
  //             fontMenuMobile[i].style.fontSize = '1.2rem'
  //           }

  //           mainSide.style.display = 'block'
  //           buttonMenu.style.marginLeft = '13rem'
  //           menuSideComplete.style.width = '12rem'
  //           mainSideMobile.style.display = 'none'
  //           logo.style.width = '10rem'
  //         }
  //       }

  //       changeMediaQuery(mediaQuery)
  //       mediaQuery.addEventListener('change', changeMediaQuery)
  //     }
  //   } else {
  //     const changeMediaQueryOut = () => {
  //       if (mediaQuery.matches) {
  //         if (element.classList.contains('main')) {
  //           return
  //         } else {
  //           if (mainSide.style.display === 'block') {
  //             mainSide.style.display = 'none'
  //             mainSideMobile.style.display = 'block'
  //             menuSideComplete.style.width = '4rem'
  //             buttonMenu.style.marginLeft = '4.5rem'
  //             logo.style.width = '3.5rem'
  //             menuSideComplete.style.gap = '3rem'
  //             imageButton.src = 'images/menu.png'
  //           }
  //         }
  //       }

  //     }
  //     changeMediaQueryOut(mediaQuery)
  //   }
  // })



  function mainPage() {
    document.addEventListener('click', function (event) {
      const element = event.target
      if (element.classList.contains('terms-conditions')) {
        changeMains('.screen-terms-conditions')
        changeSubMainTitle('Termos e condições')
      }
      // if (element.classList.contains('school-data')) {
      //   changeMains('.screen-school-data')
      //   changeSubMainTitle('Formulário de Dados Acadêmicos')
      // }
      if (element.classList.contains('button-back-address')) {
        changeMains('.screen-basic-data1')
        changeSubMainTitle('Formulário de Dados Básicos')
      }
      if (element.classList.contains('button-back-school')) {
        changeMains('.screen-address')
        changeSubMainTitle('Formulário de Endereço')
      }
    })
  }

  mainPage()
}

module.exports = main
