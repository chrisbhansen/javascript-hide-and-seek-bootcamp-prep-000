function getFirstSelector(mySelector) {
  return document.querySelector(mySelector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  let currentNode = document.getElementById('grand-node')
  let nextNode = currentNode.children[0]

  while (nextNode) {
    currentNode = nextNode
    nextNode = currentNode.children[0]
  }

  return currentNode
}
