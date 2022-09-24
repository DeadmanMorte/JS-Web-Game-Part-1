function newImage(root, left, bottom){
    let thing = document.createElement('img')
    thing.src = root
    thing.style.position = 'fixed'
    thing.style.left = left + 'px'
    thing.style.bottom = bottom + 'px'
    document.body.append(thing)
    return thing
}

newImage('assets/green-character.gif', 100, 100)

newImage('assets/pine-tree.png', 450, 200)

newImage('assets/tree.png', 200, 300)

newImage('assets/pillar.png', 350, 100)

newImage('assets/crate.png', 150, 200)

newImage('assets/well.png', 500, 425)

function newItem(x,y,z){
   let thing = newImage(x,y,z)
    thing.addEventListener('click', function(){
        thing.remove()
    })
}

newItem('assets/sword.png', 500, 405)

// let sword = document.createElement('img')
// sword.src = 'assets/sword.png'
// sword.position = 'fixed'
// sword.left = 500px
// sword.bottom = 405px
// document.body.append(sword)

// sword.addEventListener('click', function(){
//     sword.remove()
// })




