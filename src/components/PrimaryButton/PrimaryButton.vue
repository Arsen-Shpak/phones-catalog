<template>
  <button
    class='primary-button'
    @click="handler"
  >
    {{title}}
  </button>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required:true,
    }
  },
  
  methods: {
    handler () {
      this.$emit ("primaryButton")
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/styles/vars/vars.scss";

.primary-button {
  user-select: none;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $white;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  background-color: $accent;
  transition: background-color .3s;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: #A378FF;
  }

  &--active {
    background-color: $surface-1;

    &:hover {
      cursor: default;
      background-color: $surface-1;
    }
  }
}
</style>