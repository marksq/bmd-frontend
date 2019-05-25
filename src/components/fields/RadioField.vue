<template>
  <field
    :label="label"
    :errors="errors"
    :required="required"
    :uuid="uuid"
    :inline="inline"
    :nopadding="nopadding"
  >
    <div slot="field">
      <span v-for="(option, index) in options" :key="option.id">
        <input
          type="radio"
          :id="uuid+index"
          :name="uuid"
          :value="option.id"
          @input="updateValue($event.target.value)"
        >
        <label :for="uuid+index">{{option.name}}</label>
      </span>
    </div>
    <div slot="desc">
      <slot name="extra"></slot>
    </div>
  </field>
</template>

<script>
import Field from "./FieldContainer";

export default {
  components: {
    Field
  },
  props: [
    "label",
    "errors",
    "value",
    "required",
    "disabled",
    "inline",
    "nopadding",
    "options"
  ],
  methods: {
    updateValue: function(value) {
      this.$emit("input", value);
    }
  },
  computed: {
    uuid: function() {
      const s4 = () =>
        Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
    }
  }
};
</script>

<style scoped>
.inline {
  width: 200px;
}

label {
  padding: 0 15px 0 5px;
}
</style>
