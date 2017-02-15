// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        import('containers/home-page')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/repos',
      name: 'repos list',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/repos-list-page/reducer'),
          import('containers/repos-list-page/sagas'),
          import('containers/repos-list-page'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('reposList', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/repos/:repoId',
      name: 'repo detail',
      getComponent(nextState, cb) {
        import('containers/repo-detail-page')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/not-found-page')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
