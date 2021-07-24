<template>
    <div>
        <slot></slot>
    </div>
</template>

<script type="text/babel">
const COMPONENT_NAME = 'lity-checkbox-group'
export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    color: {
      type: String,
      default: '#4CD864'
    },
    size: {
      type: Number,
      default: 20
    },
    callback: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    updateValue () {
      const value = this.value
      this.childrens = this.$children.filter(item => item.$options.name === 'lity-checkbox')
      if (this.childrens) {
        this.childrens.forEach(child => {
          child.model = value
        })
      }
    },
    change (val) {
      this.callback(val)
      this.$emit('input', val)
    }
  },
  watch: {
    value () {
      this.updateValue()
    }
  },
  mounted () {
    this.$nextTick(this.updateValue)
  }
}
</script>
