<template>
  <field
    :label="label"
    :errors="errors"
    :required="required"
    :uuid="uuid"
    :inline="inline"
    :nopadding="nopadding"
  >
    <input
      slot="field"
      type="text"
      :value="value"
      @input="updateValue($event.target.value)"
      :id="uuid"
      :disabled="disabled"
      :class="{inline: inline}"
    >
    <div slot="desc">
      <slot name="extra"></slot>
    </div>
  </field>
</template>

<script>
import Field from './FieldContainer'

export default {
  components: {
    Field
  },
  props: ['label', 'errors', 'value', 'required', 'disabled', 'inline', 'nopadding'],
  methods: {
    updateValue: function(value) {
      this.$emit('input', value)
    }
  },
  computed: {
    uuid: function() {
      const s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1)
      return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid #ccc;
  padding: 7px 0 7px 10px;
  font-family: "Roboto";
  font-size: 14px;
  outline: none;
  width: 100%;
}

.inline {
  width: 200px;
}

input:focus {
  border: 1px solid #0e7afd;
}
</style>
