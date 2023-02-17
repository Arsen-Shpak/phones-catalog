<template>
    <div class='filter'>
      <p class='filter__title'>
        {{title}}
      </p>
      <button 
        :class="['filter__value',
          {
            'filter__value--closed': !isOpen,
            'filter__value--open': isOpen,
          }]"
        
        @click="isOpen = !isOpen"
      >
        {{filter}}
      </button>

        <ul v-if='isOpen' class='filter__options-list'>
            <li 
              v-for="(option,i) in optionsList"
              :key="option"
              :class="['filter__options-item', `filter__options-item--${i}`]"
              @click="
                handleFilterChange(option);
              "
            >
              {{option}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false,
        }
    },
    props: {
        title: {
            type: String,
            // required:true,
        },
        optionsList: {
            type: Array,
            // required:true,
        },
        selectedFilter:{}
    },
    methods: {
        handleFilterChange(option) {
            // console.log(option);
            this.$emit('filterChange', option);
            this.isOpen = !this.isOpen;
        }
    },
    computed: {
        filter() {
            return this.optionsList.find(option => option === this.selectedFilter);
        }
    }
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixins/mixins";
@import "@/styles/vars/vars.scss";

.filter {
  position: relative;

  font-family: 'Mont';
  font-size: 14px;
  line-height: 21px;

  &__title {
    display: block;

    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: $secondary;

    margin-bottom: 4px;
  } 

  &__value {
    box-sizing: border-box;

    cursor: pointer;

    position: relative;

    width: 100%;

    font-weight: 700;
    font-size: 10px;
    
    @include tablet {
      font-size: 14px;
    }

    background: $surface-2;
    color: $white;

    text-align: left;

    padding: 10px 12px;

    border: 1px solid $surface-2;

    transition: background-color .3s, border .3s;

    &:hover {
      border: 1px solid $icons;
    }

    &:focus {
      border: 1px solid $accent;
    }

    &::before {
      content: '';

      display: block;
      width: 16px;
      height: 16px;
      position: absolute;

      right: 12px;

      background-repeat: no-repeat;
      background-position: center;
    }

    &--closed {
      &:hover::before {
        opacity: 50%;
      }

      &::before {
        transition: opacity .3s;

        background-image: url(@/images/dropDown.png);
      }
    }

    &--open::before {
      background-image: url(@/images/dropUp.png);
    }
  }

  &__options {
    transition: border .3s;

    &-list {
      position: absolute;

      z-index: 1000;

      width: 100%;

      display: flex;
      flex-direction: column;

      list-style: none;

      margin: 0;
      padding: 8px 0;
  
      border: 1px solid $surface-2;

      background-color: $bc-color;
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);

      animation: filter_in .3s ease-out 0s 1 forwards;
    }

    &-item {
      cursor: pointer;

      padding: 5px 12px;

      font-weight: 600;
      font-size: 12px;

      @include tablet {
        font-size: 16px;
      }

      color: $secondary;

      opacity: 0;

      transition: background-color .3s;

      &:hover {
        background: $surface-2;
      }

      animation-name: filter_item_in;
      animation-timing-function: ease;
      animation-duration: .3s;
      animation-fill-mode: forwards;

      @for $delay from 1 to 10 {
        &--#{$delay} {
          animation-delay: $delay * 0.1s;
        }
      }
    }
  }
}

@keyframes filter_in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes filter_item_in {
  0% {
    display: block;
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>