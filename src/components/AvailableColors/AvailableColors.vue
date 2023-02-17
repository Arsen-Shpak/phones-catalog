<template>
    <div>

   
    <h4 class="available-colors__title">
        Available colors
      </h4>

      <div 

        class="available-colors__colors-options">
        <!-- {colorsAvailable.map(color => {
        const isCurrent = color === currentColor;

        return ( -->
          <div
            v-for="color in colorsAvailable"
            :class="[
                'available-colors__color-box',
                `${color}`,
                {
                    'available-colors__color-box--border-white': color === currentColor,
                    'available-colors__color-box--border-gray': color !== currentColor
                }]"
            :key="color"
            @click="handleColorChange(color)"
          >
          </div>
      </div>
       </div>
</template>
<script>
export default {
    props: {
        colorsAvailable: {type:Array},
        currentColor: {type:String}
    },
    methods: {
        handleColorChange(newColor) {
            this.$emit('changeColor',newColor)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/styles/vars/vars.scss';

.available-colors {
  &__title {
    color: $white;
  }

  &__colors-options {
    display: flex;
    gap: 8px;
  }

  &__color-box {
    position: relative;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &--border-white{
      border: 1px solid $white;
    }

    &--border-gray{
      border: 1px solid $secondary;
    }

    &:before {
      content: " ";
      position: absolute;
      z-index: 2;
      border-radius: 50%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid $bc-color;
    }
  }
}

.color {
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.black {
  background-color: black;
}

.rosegold {
  background-color: #B76E79;
}

.gold {
  background-color: gold;
}

.silver {
  background-color: silver;
}

.spacegray {
  background-color: #808080;
}

.green {
  background-color: green;
}

.yellow {
  background-color: yellow;
}

.white {
  background-color: white;
}

.purple {
  background-color: purple;
}

.red {
  background-color: red;
}

.midnightgreen {
  background-color: #004953;
}

.coral {
  background-color: coral;
}
</style>