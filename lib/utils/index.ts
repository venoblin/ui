export const classConcat = (
  ...classes: (string | undefined | false | null)[]
) => {
  return classes.filter(Boolean).join(' ')
}

export const generateUniqueId = (id: string, salt: string) => {
  return `${salt}_${id}`
}
