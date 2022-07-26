// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// URL_VER_TODAS: `${URL_API}:80/api/cidi/ciudadano/login/oauth/v1`,

const URL_MOOLI: string = `https://mooli-3d0bf-default-rtdb.firebaseio.com`

export const environment = {
  production: false,
  firebaseAPIKey: 'AIzaSyBsVR-J6hrIt4YKwoEo_ZhhIKeJc0b_nuo',
  __NOTA1: { "Mooli.All.Movies.Nav": "8100" },

    URL_FLAT: URL_MOOLI,
    URL_VER_TODAS: `/peliculas/tabs/ver-todas/`,
    URL_BD_JSON: `${URL_MOOLI}/peliculasBD.json`,
      URL_BD_JSON_EXP: `${URL_MOOLI}/peliculasBD/`,
    URL_BD_SEEN: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/seenList/`,
    URL_BD_LIST: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/listas/`,
      URL_BD_LIST_PLAIN: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/listas.json`,

    // https://mooli-3d0bf-default-rtdb.firebaseio.com/users/-N8PnJ6s8FDh77vUleJp
    
 
  __NOTA2: { "Metodo.Provisional.Nav.User.Multiple": "8100" }, 
    
    URL_USERS: `${URL_MOOLI}/users`
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
