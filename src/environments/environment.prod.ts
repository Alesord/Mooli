const URL_MOOLI: string = `https://mooli-3d0bf-default-rtdb.firebaseio.com`

export const environment = {
  production: true,
  firebaseAPIKey: 'AIzaSyBsVR-J6hrIt4YKwoEo_ZhhIKeJc0b_nuo',
  __NOTA1: { "Mooli.All.Movies.Nav": "8100" },

    URL_FLAT: URL_MOOLI,
    URL_VER_TODAS: `/peliculas/tabs/ver-todas/`,
    URL_BD_JSON: `${URL_MOOLI}/peliculasBD.json`,
      URL_BD_JSON_EXP: `${URL_MOOLI}/peliculasBD/`,
    URL_BD_SEEN: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/seenList/`,
    URL_BD_LIST: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/listas/`,
      URL_BD_LIST_PLAIN: `${URL_MOOLI}/users/-N8PnJ6s8FDh77vUleJp/listas.json`,
    
 
  __NOTA2: { "Metodo.Provisional.Nav.User.Multiple": "8100" }, 
    
    URL_USERS: `${URL_MOOLI}/users`
};