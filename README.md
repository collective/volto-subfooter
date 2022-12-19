# volto-subfooter

Volto addon for a customizable subfooter.
Intended to be used with [collective.volto.subfooter](https://github.com/collective/collective.volto.subfooter).

Install with mrs-developer (see [Volto docs](https://docs.voltocms.com/customizing/add-ons/)) or with:

```bash
yarn add volto-subfooter
```

Created with [voltocli](https://github.com/nzambello/voltocli).

If you are using Volto < 16, then use v1.1.0.

## Usage

To customize the `SubFooterConfigurationForm` component, you can now create your own component in your site and replace it using the Volto component registry in your site config file:

```javascript
import MySubFooterConfigurationForm from "./src/MySubFooterConfigurationForm";

config.registerComponent({
  name: "SubFooterConfigurationForm",
  component: MySubFooterConfigurationForm,
});
```
