export default (effect: any) => {
  let result = ''
  switch (Number(effect.filling.type)) {
    case 2:
      {
        const { angle, stops } = effect.filling.gradient
        const gradients = stops.map((x: any) => `${x.color} ${Number(x.offset) * 100}%`)
        result = `linear-gradient(${angle}deg, ${gradients.toString()})`
      }
      break
    case 1:
      result = `url(${effect.filling.imageContent.image})`
      break
    default:
      result = effect.filling.color
      break
  }
  return result
}
