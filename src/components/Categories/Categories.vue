<template>
     <section class="categories">
      <h2 class="categories__title">Shop by category</h2>

      <ul class="categories__list">
        <li class="categories__item">
          <router-link class="categories__link" to="/phones">
            <div
              class="categories__link-container"
            >
              <img
                :src="PhonesPng"
                alt="phones"
                class="categories__img"
              />
            </div>

            <h4 class="categories__subtitle">Mobile phones</h4>
          </router-link>
          <span class="categories__info">
            {{phonesCount}} models
          </span>
        </li>

        <li class="categories__item">
          <router-link class="categories__link" to="/tablets">
            <div
              class="categories__link-container"
            >
              <img
                :src="TabletsPng"
                alt="tablets"
                class="categories__img"
              />
            </div>

            <h4 class="categories__subtitle">Tablets</h4>
          </router-link>
          <span class="categories__info">
            {{tabletCount}} models
          </span>
        </li>

        <li class="categories__item">
          <router-link class="categories__link" to="/accessory">
            <div
              class="categories__link-container"
            >
              <img
                :src="AccessoriesPng"
                alt="category"
                class="categories__img"
              />
            </div>

            <h4 class="categories__subtitle">Accessories</h4>
          </router-link>
          <span class="categories__info">
            {{accessoriesCount}} models
          </span>
        </li>
      </ul>
    </section>
</template>
<script>
// import Tablets from "@/images/Tablets.svg";
// import Phones from "@/images/Phones.svg";
// import Accessories from "@/images/Accessories.svg";
import PhonesPng from "@/images/PhonesPng.png";
import TabletsPng from "@/images/TabletsPng.png";
import AccessoriesPng from "@/images/AccessoriesPng.png";

export default {
    data() {
        return {
            // Tablets: Tablets,
            // Phones: Phones,
            // Accessories: Accessories,
            PhonesPng:PhonesPng,
            TabletsPng: TabletsPng,
            AccessoriesPng:AccessoriesPng,
        }
    },
    props: {
        phonesCount: { type: Number },
        tabletCount: { type: Number },
        accessoriesCount: { type: Number },
        
    }
}
</script>
<style lang="scss" scoped>
@import "@/styles/vars/vars.scss";
@import '@/styles/mixins/mixins';

.categories {
  &__title {
    font-weight: 700;
    font-size: 32px;
    line-height: 41px;
    color: $white;
    margin-bottom: 24px;
  }

  &__list {
    display: flex;
    gap: 16px;

    @include mobile {
      flex-direction: column;
    }
    @include tablet {
      flex-direction: row;
    }
  }

  &__item {
    width: 100%;
    list-style: none;

    @include tablet {
      width: 33.33%;
    }
  }

  &__subtitle {
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    color: $white;
    text-decoration: none;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    transition: transform 0.4s;
  }

  &__link:hover &__img {
    transform: scale(1.1);
  }

  &__link-container {
    position: relative;
    overflow: hidden;
    margin-bottom: 24px;
  }

  &__info {
    color: $secondary;
  }
}
</style>