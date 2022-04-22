// by using querySelectorAll it puts all the panels into a node list which is similar to an array
const panels = document.querySelectorAll('.panel')

// check that the panels have been added to the node list
// console.log(panels)

// you can loop through a node list like you would an array

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // console.log('it worked')
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}