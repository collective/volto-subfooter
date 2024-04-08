import loadable from '@loadable/component';

export const SubFooterConfigurationForm = loadable(() =>
  import(
    /* webpackChunkName: "volto-subfooter-manage" */ './SubFooterConfigurationForm'
  ),
);

export const SubFooterConfigurationWidget = loadable(() =>
  import(
    /* webpackChunkName: "volto-subfooter-manage" */ './SubFooterConfigurationWidget'
  ),
);
