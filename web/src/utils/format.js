export const mergeClassName = (first, last) => {
  return `${first} + ' ' + ${last}`
}

export const optionsLocaleDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
export const formatDate = date =>
  new Date(date).toLocaleDateString("pt-BR", optionsLocaleDate)