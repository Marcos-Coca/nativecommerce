const toCapitalize = <T = string>(word: string): T =>
  (word.charAt(0).toUpperCase() + word.slice(1)) as any

export default toCapitalize
