import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { setAssetPath } from '@esri/calcite-components/dist/components';
setAssetPath(location.href);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
