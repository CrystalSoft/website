export function capitalizeString(text: string = ''): string {
  text = text.toLocaleLowerCase()

  return text.replace(/\b\w/g, (l) => l.toUpperCase())
}

const CapitalizedText = ({ text = '' }: { text?: string }) => {
  return <>{capitalizeString(text)}</>
}

export default CapitalizedText
