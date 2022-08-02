// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// URL_VER_TODAS: `${URL_API}:80/api/cidi/ciudadano/login/oauth/v1`,

export const environment = {
  production: false,
  __NOTA1: { "Mooli.All.Movies.Nav": "8100" },
  URL_VER_TODAS: `/peliculas/tabs/ver-todas/`,
  URL_BD_JSON: 'http://localhost:3001/items',
  URL_BD_SEEN: 'https://mooli-3d0bf-default-rtdb.firebaseio.com/seenList/-N85rm2-iiM4AsN7ObzU/',
  URL_BD_LIST: 'https://mooli-3d0bf-default-rtdb.firebaseio.com/users/-N8PnJ6s8FDh77vUleJp/',
    URL_BD_LIST_PLAIN: 'https://mooli-3d0bf-default-rtdb.firebaseio.com/users/-N8PnJ6s8FDh77vUleJp.json'
  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
