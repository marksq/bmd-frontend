<template>
  <div class="property">
    <div class="label">{{label}}</div>
    <slot>
      <div :class="{'compact': compact}">
        <div class="content" v-if="!content">—</div>
        <div class="content" :class="{'pre': pre}" v-if="content" ng-bind>{{content}}</div>
        <div class="additional" v-if="content && additional && (content  != '—')">{{additional}}</div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Property',
  props: {
    msg: String,
    content: String,
    label: String,
    pre: Boolean,
    additional: String,
    compact: Boolean
  }
}
</script>

<style scoped>
.label {
  font-size: small;
  font-weight: 500;
  color: #555;
}

.pre {
  white-space: pre;
  font-family: "Courier New", Courier, monospace;
}

.additional {
  font-size: small;
  color: #666666;
}

.compact {
  max-width: 300px;
}
</style>
