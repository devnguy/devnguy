// not in use
import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'

fairyGateTheme.headerFontFamily = ['Operator Mono', 'sans-serif']
fairyGateTheme.bodyFontFamily = ['Operator Mono', 'sans-serif']

const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
