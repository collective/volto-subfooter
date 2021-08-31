import { subFooterReducer } from './reducers';
import SubFooterConfigurationWidget from './widget/SubFooterConfigurationWidget';
import { getSubFooter } from './actions';
import { getItemsByPath } from './utils';
import SubFooter from './components/SubFooter';

export {
  SubFooterConfigurationWidget,
  getSubFooter,
  SubFooter,
  getItemsByPath,
};

export default (config) => {
  config.widgets.id = {
    ...config.widgets.id,
    subfooter_configuration: SubFooterConfigurationWidget,
  };

  config.addonReducers = {
    ...config.addonReducers,
    subFooter: subFooterReducer,
  };

  config.settings.asyncPropsExtenders = [
    ...(config.settings.asyncPropsExtenders ?? []),
    {
      path: '/',
      extend: (dispatchActions) => {
        if (
          dispatchActions.filter(
            (asyncAction) => asyncAction.key === 'subfooter',
          ).length === 0
        ) {
          dispatchActions.push({
            key: 'subfooter',
            promise: ({ location, store: { dispatch } }) =>
              __SERVER__ && dispatch(getSubFooter()),
          });
        }

        return dispatchActions;
      },
    },
  ];

  return config;
};
