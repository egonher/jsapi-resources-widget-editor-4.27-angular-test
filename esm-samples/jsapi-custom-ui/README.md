# Custom UI component with React and Vite

This repo demonstrates creating a custom UI component using [@arcgis/core](https://www.npmjs.com/package/@arcgis/core) ES modules with [React](https://react.dev/learn) and [Vite](https://vitejs.dev/guide/#community-templates). You can also use any other major JavaScript framework. For more information about building custom UI with the ArcGIS JS SDK, see the [Custom UI basics](https://developers.arcgis.com/javascript/latest/custom-ui/) guide topic.

The component in this sample is created in [JSX](https://react.dev/learn/writing-markup-with-jsx) and then added to the Map as a DOM element using the ArcGIS JS SDK's [View UI](https://developers.arcgis.com/javascript/latest/view-ui/) interface. This approach loosely couples the component with the functionality in the ArcGIS Maps SDK for JavaScript. It provides seamless integration with your preferred component library, and gives you full control over the user experience and component-life cycle so that it fits your unique requirements.

## Get Started

**Step 1** - Run `npm install`

**Step 2** Configure CSS. 

*index.css*

```css
@import 'https://js.arcgis.com/4.27/@arcgis/core/assets/esri/themes/light/main.css';
```

For additional information, see the [Build with ES modules](https://developers.arcgis.com/javascript/latest/es-modules/) Guide topic in the SDK.

## Commands

For a list of all available npm script commands, see the scripts in `package.json` or use `npm run`.