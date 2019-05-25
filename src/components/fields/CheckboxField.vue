<docs>
# CheckboxField
## Назначение
Выводит на экран ординарный флажок, или флажок в группе `CheckboxGroupField`.
## Особенности
В отличие от других полей ввода, у флажка нет вывода ошибок, так как такой проверки нет и на сервере: поле с флажком всегда должно быть заполнено true или false.
Свойство content используется в CheckboxGroupField, в таком случае возвращается не только булево значение, но и содержимое этого свойства.
</docs>

<template lang="pug">
  div.checkboxContainer
    input.checkbox(type='checkbox', :id='uuid', v-model='innerValue', :disabled='disabled')
    label.label(:for='uuid') {{label}}
    div(slot='desc')
      slot(name='extra')
</template>

<script>
import uuid from '../../mixins/uuid'

export default {
  mixins: [uuid],
  props: {
    label: {
      type: String,
      required: true
    },
    content: {
      type: Number,
      required: false
    },
    value: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(newValue) {
        if (this.content) {
          this.$emit('input', {
            content: this.content,
            checked: newValue
          })
        } else {
          this.$emit('input', newValue)
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.checkboxContainer
  display: inline-block

.label
  display: inline
  position: relative
  top: -2px
  user-select: none
  font-weight: 500
</style>
