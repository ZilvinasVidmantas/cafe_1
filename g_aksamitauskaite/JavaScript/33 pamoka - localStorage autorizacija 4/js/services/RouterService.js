class RouterService {
  // private properties
  static _instance;
  // public properties
  pageContent
  routes;
  currentRoute;

  constructor(selector, routes) {
    if (RouterService._instance)
      throw new Error("Singleton classes can't be instantiated more than once.");
    this.pageContent = document.querySelector(selector);
    this.routes = routes.map(x => ({ ...x, active: false }));
    this.setCurrentRoute();
    this.loadRoutePageComponent();
  }

  setCurrentRoute = () => {
    const initRouteName = new URLSearchParams(window.location.search).get('route') ?? 'home';
    const currentRouteIndex = this.routes.findIndex(({ name }) => name === initRouteName);
    if (currentRouteIndex !== -1) {
      this.currentRoute = this.routes[currentRouteIndex];
      this.routes[currentRouteIndex].active = true;
    } else {
      const mainRouteIndex = this.routes.findIndex(({ main }) => main);
      this.currentRoute = this.routes[mainRouteIndex];
      this.routes[mainRouteIndex].active = true;
    }
  }

  loadRoutePageComponent = () => {
    this.routes.forEach(({ active, pageComponent }) => {
      if (active) {
        pageComponent.showPage();
      } else {
        pageComponent.hidePage();
      }
      this.pageContent.style.opacity = '1';
    });
  }

}
