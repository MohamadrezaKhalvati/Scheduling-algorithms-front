import postcss from 'postcss';
import postcssRTLCSS from 'postcss-rtlcss';

const processor = postcss([
  postcssRTLCSS()
])

export default function myPlugin() {
  return {
    name: 'transform-file',

    transform(src: string, id: string) {
      const isQuasarFile = id.includes("quasar/src/css/index.sass")
      if (isQuasarFile) {
        const { css } = processor.process(src)
        return { code: css }
      }
    }
  }
}