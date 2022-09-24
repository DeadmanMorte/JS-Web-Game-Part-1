newImage('assets/grass.png',100, 100,)

for(i=0; i<=4;){
  newImage('assets/sky.png',100 + i, 800+ i,)
  i++
}
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
   let item = newImage(x,y,z)
    item.addEventListener('dblclick', function(){
        item.remove()
    })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)

console.log(window.innerHeight) 
console.log(window.innerWidth) 


