import routeStructure from './route-structure';

const dynamicSymbols = ['*', ':'];

const buildRoute = (allPaths, { path, children, Page }) => {
  if (children) {
    const childrenRoutesArr = Object.entries(children.reduce(buildRoute, {}));
    const fullChildrenRoutes = childrenRoutesArr.reduce((childrenRoutes, [pageName, childPath]) => {
      const newChildrenRoutes = { ...childrenRoutes };
      newChildrenRoutes[pageName] = path[path.length - 1] !== '/'
        ? `${path}/${childPath}`
        : path + childPath;

      return newChildrenRoutes;
    }, {});
    return {
      ...allPaths,
      ...fullChildrenRoutes,
    };
  }
  if (path !== null) {
    for (let i = 0; i < dynamicSymbols.length; i += 1) {
      const dynamicSymbol = dynamicSymbols[i];
      const includesDynamicSymbol = Array.from(path).includes(dynamicSymbol);
      if (includesDynamicSymbol) {
        return allPaths;
      }
    }
  }
  const newAllPaths = { ...allPaths };

  newAllPaths[Page.name] = path ?? '';
  return newAllPaths;
};

const routes = routeStructure.reduce(buildRoute, {});

export default routes;
