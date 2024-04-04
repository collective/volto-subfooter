import loadable from '@loadable/component';

export const SubFooterConfigurationForm = loadable(() =>
  import(
    /* webpackChunkName: "volto-subfooter-manage" */ './widget/SubFooterConfigurationForm'
  ),
);

export const SubFooterConfigurationWidget = loadable(() =>
  import(
    /* webpackChunkName: "volto-subfooter-manage" */ './widget/SubFooterConfigurationWidget'
  ),
);
