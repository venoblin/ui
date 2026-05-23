export const classConcat = (
  ...classes: (string | undefined | false | null)[]
) => {
  return classes.filter(Boolean).join(' ')
}
