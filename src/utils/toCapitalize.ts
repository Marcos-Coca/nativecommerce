const toCapitalize = (word: string): string =>
  (word.charAt(0).toUpperCase() + word.slice(1)) as any

export default toCapitalize
