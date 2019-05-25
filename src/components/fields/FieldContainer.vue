<docs>
# FieldContainer
## Назначение
Обёртка для полей ввода. Отображает название поля, отметку об обязательности, текст ошибок, дополнительный текст.
## Особенности
По умолчанию растянут на всю ширину, один в строке, с помощью параметра inline можно сделать шириной по содержимому, несколько на одной строке.
С помощью параметра nopadding можно убрать все отступы, что удобно для отображения в таблице.
</docs>

<template lang="pug">
  div.field(:class='{inline: inline, nopadding: nopadding}')
    label.label(:for='uuid', :class='{required: required}', v-if='label')
      span#requiredMark(v-if="required", title="Обязательно к заполнению") *&nbsp;
      span#label {{label}}&nbsp;
      span.error {{errors | toString}}
    slot(name="field")
    div.desc
      slot(name="desc")
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false
    },
    errors: {
      required: true
    },
    required: {
      type: Boolean,
      required: false
    },
    inline: {
      type: Boolean,
      required: false
    },
    uuid: {
      type: String,
      required: false
    },
    nopadding: {
      type: Boolean,
      required: false
    }
  },
  filters: {
    toString: arr => {
      if (typeof arr !== 'undefined') return arr.join(' ')
      return ' '
    }
  }
}
</script>

<style scoped lang="sass">
$warning-color: #e53935

#requiredMark
  color: $warning-color

.field
  padding: 0 30px 12px 20px

.nopadding
  padding: 0

.inline
  display: inline-block
  vertical-align: top

.error
  color: $warning-color
  font-size: smaller
  display: inline-block

.label
  padding-bottom: 2px
  display: block
  color: #333

.required
  position: relative
  left: -10px

.desc
  font-size: 14px
</style>
