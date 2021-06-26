import { html } from 'haunted'

export function icon(svg, style) {
  const defaultSize = style === 'solid' ? '20px' : '24px'
  const defaultColor =
    style === 'solid'
      ? 'fill: var(--i-icon-color, currentColor);'
      : 'stroke: var(--i-icon-color, currentColor);'

  return () => {
    return html`
      <style>
        :host {
          display: inline-flex;
        }
        svg {
          width: var(--i-icon-width, ${defaultSize});
          height: var(--i-icon-height, ${defaultSize});
          ${defaultColor}
        }
      </style>
      ${svg}
    `
  }
}
