const colors = ['red', 'green', 'brown', 'white', 'aquamarine', 'gray', 'gold','indigo']
const container = document.querySelector('.container')
for (let i = 1; i <= 414; i++) {
    const div = document.createElement('div')
    div.classList.add('cube')
    div.style.backgroundColor = 'rgba(34, 37, 37, 0.865)'





    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    })

    div.addEventListener('mouseout', () => {
        div.classList.add('transition')
        setTimeout(() => {
            div.style.backgroundColor = 'rgba(34, 37, 37, 0.865)'
            
        }, 500)
        setTimeout(() => {
            div.classList.remove('transition')
            
        }, 1500)

    })
    container.append(div)
}