export default (ctx: any) => {
  ctx.$axios.onError((error: any) => {
    if (error.response && error.response.status === 401) {
      ctx.$axios.redirect('/')
    }
    throw new Error('Une erreur est survenue')
  })
}
