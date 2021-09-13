const parent = document.querySelector('.parent');

for (let i = 0; i < parent.children.length; i++) {
  const child = parent.children[i];
  child.className += ' child--blue';
  console.log(child.className);
}
