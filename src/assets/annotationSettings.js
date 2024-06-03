// This is the file where you can see the setting you're using for the handwritten styled annotations. Play around to see the changes it makes live. Do not play with multiline as that could break the design, that's just there to make sure that if the element that's underlined is wrapped if it's longer than it's parent and has to wrap screen.

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