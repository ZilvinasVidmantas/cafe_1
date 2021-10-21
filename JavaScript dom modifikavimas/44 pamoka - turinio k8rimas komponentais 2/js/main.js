//  Sukurti komponentus ItemCard ir ItemCardContainer. Sukurti tokį atvaizdavimą: 'task-2.png' 
const root = document.querySelector('#root');

const itemContainerComponent = new ItemContainerComponent({
  items: itemData
});

root.append(itemContainerComponent.htmlElement);

