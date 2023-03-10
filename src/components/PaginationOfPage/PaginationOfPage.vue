<template>
  <ul class='pagination'>
    <li 
      :class="[
        'pagination__arrow',
        'pagination__arrow--left',
        {'pagination__arrow--disable': currentPage === 1}
      ]"
      @click="goToPrevious"
    >
    </li>
    <li
      v-for="page in visiblePages"
      :class="[
        'pagination__page-link',
        { 'pagination__page-link--active': currentPage === page}
      ]"
      @click="handlePageChange (page)" 
      :key="page"
    >
      {{page}}
    </li>
    <li
      :class="[
        'pagination__arrow',
        'pagination__arrow--right', 
        { 'pagination__arrow--disable': currentPage === lastPage, }
      ]"
      
      @click="goToNext"
    >
    </li>
  </ul>

</template>
<script>
export default {
   props: {
    total: { type: Number },
    perPages: { type: Number },
    currentPage:{type:Number},
  },

  computed: {
    lastPage () {
      return Math.ceil (this.total / this.perPages);
    },
    pages () {
      return this.getNumbers (1, this.lastPage)
    },
    visiblePages () {
      return this.pages.slice (this.start - 1, this.end);
    },
    start () {
      return this.getDefaultPoints ()[0]
    },
    end () {
      return this.getDefaultPoints ()[1]
    }
  },
  
  methods: {
    getNumbers (from,to) {
      const numbers = [];
      for  (let n = from; n <= to; n += 1) {
        numbers.push (n);
      }
      return numbers;
    },
    handlePageChange (newPage) {
      this.$emit ("pageChange",newPage)
    },
    goToPrevious () {
      if  (this.currentPage === 1) {
        return;
      }
      this.handlePageChange (this.currentPage - 1);
      if  (this.currentPage === this.start) {
        this.end = this.end - 1;
        this.start = this.start - 1;
      }
    },
    goToNext () {
      if  (this.currentPage === this.lastPage) {
        return;
      }

      this.handlePageChange (this.currentPage + 1);

      if  (this.currentPage === this.end) {
        this.end = this.end + 1;
        this.start = this.start + 1;
      }
    },
    getDefaultPoints  () {
      if  (this.currentPage < 1) {
        this.handlePageChange (1);
      } else if  (this.currentPage > this.lastPage) {
        this.handlePageChange (this.lastPage);
      }

      if  (this.currentPage + 4 > this.lastPage && this.lastPage > 4) {
        return [this.lastPage - 3, this.lastPage];
      }

      if  (this.lastPage < 4) {
        return [1, this.lastPage];
      }

      return [this.currentPage, this.currentPage + 3];
    },  
  },
}
</script>
<style lang="scss" scoped>

@import "@/styles/vars/vars.scss";

.pagination {
  user-select: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 8px;

  &__arrow {
    cursor: pointer;
    position: relative;
    background: $surface-2;
    width: 32px;
    height: 32px;
    transition: background-color .3s;

    &:hover {
      background-color: $icons;
    }

    &--disable {
      border: 1px solid $elements;
      background-color: rgba($color: #000, $alpha: 0);

      &:hover {
        background-color: rgba($color: #000, $alpha: 0);
      }

      &::before {
        opacity: 50%;
      }
    }

    &--left {
      margin-right: 8px;

      &:before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        position: absolute;
        background-image: url(@/images/LeftArrow.svg);
        background-repeat: no-repeat;
        background-position: center;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &--right {
      margin-left: 8px;

      &:before {
        content: "";
        display: block;
        width: 16px;
        height: 16px;
        position: absolute;
        background-image: url(@/images/RightArrowPag.svg);
        background-repeat: no-repeat;
        background-position: center;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  &__page-link {
    cursor: pointer;
    background: $surface-1;
    width: 32px;
    height: 32px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 32px;
    color: $white;
    text-align: center;

    &:hover {
      background-color: $elements;
      transition: background-color .3s;
    }

    &--active {
      background-color: $accent;

      &:hover {
        background-color: $accent;
      }
    }
  }
}
</style>