export { default as TodoDate } from '../..\\components\\todo\\date.vue'
export { default as TodoFilter } from '../..\\components\\todo\\filter.vue'
export { default as TodoHeading } from '../..\\components\\todo\\heading.vue'
export { default as TodoItem } from '../..\\components\\todo\\item.vue'
export { default as TodoList } from '../..\\components\\todo\\list.vue'
export { default as TodoSearch } from '../..\\components\\todo\\search.vue'

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
