class PeopleContainer {
  constructor(props) {
    this.htmlElement = document.createElement('div');
    this.props = props;
    this.render();
  }

  render = () => {
    const peopleHtmlElements = this.props.peopleComponents.map(component => component.htmlElement);

    this.htmlElement.className = 'people-container';
    this.htmlElement.append(...peopleHtmlElements);
  }
}