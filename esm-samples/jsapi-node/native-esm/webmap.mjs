#!/usr/bin/env node

import esriConfig from "@arcgis/core/config.js";
import WebMap from "@arcgis/core/WebMap.js";

esriConfig.request.useIdentity = false;

const webmap = new WebMap({
  portalItem: { id: "3d52817a120b477db912add2e62ef9b6" },
});

webmap
  .load()
  .then(() => {
    console.log("portalItem description: ", webmap.portalItem.description);
  })
  .catch((error) => {
    console.error(error);
  });
