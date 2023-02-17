<template>
    <div class="phones">
      <section class='phones-page__products products grid grid-mobile grid-tablet grid-desktop'>
         <h1 class='products__title grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-10'>
          Mobile phones
        </h1>
        <!-- <div> -->
          <div class='products__length grid-mobile-1-5 grid-tablet-1-13 grid-desktop-1-3'>
                {{PHONES.length}} models
          </div>
          <!-- <BackButton></BackButton> -->
          <div v-if="PHONES.length!==0" class='products__filters grid-mobile-1-4 grid-tablet-1-6 grid-desktop-1-8'>
             <div class="products__filter products__filter--left"> 
                <Filters 
                  :optionsList="sortByOptions"
                  title="Sort by"
                  :selectedFilter="sortBy"
                  @filterChange="changeSort"
                />
            </div>
            <div class="products__filter products__filter--right"> 
                <!-- <Filter
                  :optionsList="perPageOptions"
                  title="Items per page"
                  :selectedFilter="perPages"
                  @filterChange="filterChange"
                /> -->
                <Filters 
                  :optionsList="perPageOptions"
                  title="Items per page"
                  :selectedFilter="perPages"
                  @filterChange="filterChange"  
                />
            </div>
           
          </div>    
          <div class="
                products__cards-wrapper
                grid-mobile-1-5
                grid-tablet-1-13
                grid-desktop-1-25"
           >
            <div class="products__container">
                  <div   v-for="phone in phonesForOnePage" :phone="phone" class="products__product-container"
                    :key="phone.itemId"
                  >
                    <CardItem
                      :phone="phone"
                    />
                  </div>
            </div>
            <div class='
                    products__pagination-container
                    grid-mobile-1-5
                    grid-tablet-1-13
                    grid-desktop-1-25'
              >
              <!-- PAGINATION HERE -->
              <Pagination 
                @pageChange="pageChange"
                :total="PHONES.length"
                :perPages="perPages"
                :currentPage="currentPage"
              />
            </div>
          </div>
        <!-- </div> -->
      </section>
    </div>
</template>
<script>
import CardItem from "@/components/CardItem/CardItem.vue";
import BackButton from "@/components/BackButton/BackButton.vue";
// import Filter from "@/components/Filter/Filter.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import Filters from "@/components/Filter/Filter.vue";

import { mapActions,mapGetters } from "vuex";
export default {
    data() {
      return {
            sortByOptions:['Newest','Oldest','Price Up','Price Down'],
            perPageOptions: [16, 12, 8, 4],
            perPages:16,
            sortBy:'Newest',
            currentPage: 1,
      }
    },
    components: {
        CardItem,BackButton,Pagination,Filters
    },
    computed: {
      ...mapGetters({ PHONES: 'phones/PHONES' }),
      phonesForOnePage() {
        // const start = this.perPage * (this.currentPage - 1);
        // const end = this.perPage * (this.currentPage);
        // const realEnd = end > this.PHONES.length ? this.PHONES.length : end;
        // return this.PHONES.slice(start, realEnd);

        return [...this.PHONES].sort((goodA, goodB) => {
          switch (this.sortBy) {
            case "Newest": {
              if (goodA.year && goodB.year) {
                return goodA.year - goodB.year;
              }

              return 0;
            }

            case "Oldest": {
              if (goodA.year && goodB.year) {
                return goodB.year - goodA.year;
              }

              return 0;
            }

            case "Price Up":
              return goodA.price - goodB.price;

            case 'Price Down':
              return goodB.price - goodA.price;

            default:
              return 0;
          }
        }).slice(
          (this.currentPage - 1) * this.perPages,
          this.currentPage * this.perPages

          // (this.currentPage - 1) * this.perPages + this.perPages
        );

        // return this.PHONES.slice(
        //   (this.currentPage - 1) * this.perPages,
        //   (this.currentPage - 1) * this.perPages + this.perPages
        // );
      },
  },
    // ['PHONES']
    methods: {
      ...mapActions({ GET_PHONES_FROM_API: 'phones/GET_PHONES_FROM_API' }),
      filterChange(option) {
        // console.log(option)
        this.perPages = option;
        // this.currentPage = 1;
      },
      changeSort(option) {
        this.sortBy = option;
      },
      pageChange(newPage) {
        this.currentPage = newPage;
      },
  },
    // ['GET_PHONES_FROM_API']
  mounted() {
      this.GET_PHONES_FROM_API();
      console.log(this.PHONES)
      
        // console.log(this.GET_PHONES_FROM_API());
    }
}
</script>
<style scoped lang="scss">

@import '@/styles/vars/vars.scss';
@import '@/styles/mixins/mixins';
// .main__title{
//     color:white;
//     font-size:20px;
// }

.phones {
  flex: 1;
  padding-left: 16px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @include tablet {
    padding: 0 24px;
  }

  @include desktop {
    padding: 0 32px;
    margin: 0 auto 32px;
  }
}

.products {
  max-width: 1200px;
  &__title {
    font-weight: 800;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.01em;
    color: $white;
    margin-bottom: 8px;
  }

  &__filters {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
  }

  &__filter {
    width: 50%;

    &--left {
      @include tablet {
        width: 57%;
      }
    }

    &--right {
      @include tablet {
        width: 43%;
      }
    }
  }

  &__length {
    margin-bottom: 32px;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: $secondary;
    grid-row: 2 / 3;

    @include tablet {
      margin-bottom: 40px;
    }
  }

  &__cards-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    grid-row: 4 / 5;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    width: 288px;
    row-gap: 40px;
    column-gap: 16px;
    margin-bottom: 24px;

    @include tablet {
      width: 572px;
    }

    @media (min-width: 978px) {
      width: 866px;
    }

    @include desktop {
      width: 1136px;
    }
  }

  &__pagination-container {
    margin-bottom: 64px;
  }
}
</style>
