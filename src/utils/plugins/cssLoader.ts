export default (url: string) => {
  const link_element = document.createElement('link')
  link_element.setAttribute('rel', 'stylesheet')
  link_element.setAttribute('href', url)
  document.head.appendChild(link_element)
}
