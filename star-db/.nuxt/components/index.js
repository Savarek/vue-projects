export { default as HeaderNav } from '../..\\components\\header\\nav.vue'
export { default as HeaderRandomPlanet } from '../..\\components\\header\\random-planet.vue'
export { default as ItemInfo } from '../..\\components\\item\\info.vue'
export { default as ItemList } from '../..\\components\\item\\list.vue'
export { default as ItemPreview } from '../..\\components\\item\\preview.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
