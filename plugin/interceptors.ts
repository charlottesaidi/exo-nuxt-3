export default (ctx: any) => {
  ctx.$axios.onError((error: any) => {
    if (error.response && error.response.status === 401) {
      ctx.$axios.redirect('/')
    }

    if(error.response && error.response.status === 403) {
      return 'Identifiant invalide'
    }
console.log(error)
    throw new Error('Une erreur est survenue')
  })
}
