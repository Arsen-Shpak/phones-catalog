<template>
  <div class='contributors'>
    <div class='
      grid
      grid-mobile
      grid-tablet
      grid-desktop'
    >
      <h1 class='
        contributors__title
        grid-mobile-1-5
        grid-tablet-1-7
        grid-desktop-1-7'
      >
        Contributors
      </h1>
      
      <div class='contributors__info
        grid-mobile-1-5
        grid-tablet-1-13
        grid-desktop-1-25'
      >
      <PersonItem 
          v-for="contributor in contributorsData" 
          :person="contributor" 
          :key="contributor.linkedIn" 
      />
      </div>
    </div>
  </div>
</template>

<script>
import PersonItem from "@/components/PersonItem/PersonItem.vue";
import Arsen from "@/images/Arsen.jpg";
export default {
  components:{PersonItem},

  data () {
    return {
      contributorsData:[
        {
          name: "Arsen Shpakovich",
          photo: Arsen,
          linkedIn: "linkedin.com/in/arsen-shpakovich-295088253",
          linkedInName: "arsen-shpakovich-295088253",
          git: "github.com/Arsen-Shpak",
          gitName: "Arsen-Shpak",
          email: "a.shpakovich2000@gmail.com",
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins/mixins.scss";

.contributors {
	flex: 1;
	padding: 0 16px;
	margin: 0 auto 64px;

	@include desktop {
		margin: 0 auto 80px;
	}

	&__title {
    margin: 0 0 24px;
    padding: 0;
    font-weight: 800;
    font-size: 32px;
    line-height: 41px;
    color: #F1F2F9;
  }

	&__info {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: center;
	}
}
</style>