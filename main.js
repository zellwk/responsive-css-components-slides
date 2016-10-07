function shuffle (array) {
  var currentIndex = array.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const TM = TweenMax
const modularGrids = Array.from(document.querySelectorAll('.jsModularDemo'))
const componentDiv = document.createElement('div')
componentDiv.innerHTML = 'Component'
componentDiv.classList.add('component')
componentDiv.style.display = 'flex'
componentDiv.style.alignItems = 'center'
componentDiv.style.justifyContent = 'center'
componentDiv.style.position = 'absolute'
componentDiv.style.borderRadius = '6px'
componentDiv.style.background = '#ef7f39'
componentDiv.style.color = 'white'
componentDiv.style.lineHeight = '6rem'
componentDiv.style.fontWeight = '700'
componentDiv.style.zIndex = '10'

modularGrids.forEach(grid => {
  let children = Array.from(grid.querySelectorAll('.c-demo'))
  let shuffledChildren = shuffle(children)
  let initialPos = shuffledChildren[0].getBoundingClientRect()
  let component = grid.appendChild(componentDiv)

  let tween = new TimelineMax()
  tween.to(component, 0, {
    top: initialPos.top,
    left: initialPos.left,
    width: initialPos.width,
    height: initialPos.height,
    ease: Power2.easeInOut,
  })

  grid.addEventListener('click', e => {
    let slideId = grid.parentNode.id
    let hash = location.hash
    if ('#' + slideId === hash) {
      shuffledChildren.forEach((node, index) => {
        if (index == 0) { return false }
        let position = node.getBoundingClientRect()
        tween.to(component, 1, {
          top: position.top,
          left: position.left,
          width: position.width,
          height: position.height,
          ease: Power2.easeInOut,
          delay: 2
        })
      })
    }
  })
})

// Component Scaling 2
// ==========
const scale2 = document.querySelectorAll('.component--scale2')
scale2.forEach(el => el.addEventListener('click', e => {
  let p = el.querySelector('.component__body').querySelector('p')
  let tween = new TimelineMax({ease: Power0.easeNone})
  tween.to(p, 3, {maxWidth: 600})
  setTimeout(function () {
    el.classList.add('is-scaled')
  }, 1000)
}))

// Controlled Scaling
// ==========
const controlledScalingContainer = document.querySelector('.jsControlledScaling')
controlledScalingContainer.addEventListener('click', e => {
  let container = controlledScalingContainer
  let classList = container.classList

  if (classList.contains('has-highlighted-area-3')) {
    return false
  }

  if (classList.contains('has-highlighted-area-2')) {
    return classList.add('has-highlighted-area-3')
  }

  if (classList.contains('has-highlighted-area-1')) {
    return classList.add('has-highlighted-area-2')
  }

  return classList.add('has-highlighted-area-1')
})

const jsAreaResize = document.querySelector('.jsAreaResize')
jsAreaResize.addEventListener('click', e => {
  if (!jsAreaResize.classList.contains('is-mobile')) { return false }

  let tween = TweenMax.to(jsAreaResize, 3, {
    maxWidth: 800,
  })

  setTimeout(function () {
    jsAreaResize.classList.remove('is-mobile')
  }, 1000)
})