export const annotationSetting = {
  animate: false,
  color: 'currentColor',
  customElement: 'span',
  show: true,
  strokeWidth: '2px',
  multiline: 'true',
}

export const underlineAnnotate = {
  ...annotationSetting,
  type: 'underline'
}

export const highlightAnnotate = {
  ...annotationSetting,
  type: 'highlight'
}

export const boxAnnotate = {
  ...annotationSetting,
  type: 'box'
}
export const circleAnnotate = {
  ...annotationSetting,
  type: 'circle'
}