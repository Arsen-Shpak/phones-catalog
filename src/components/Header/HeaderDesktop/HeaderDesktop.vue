<template>
	<div class='navigation'>
		<div class='navigation__box'>
			<div class='navigation__wrapper'>
				<div class='navigation__left'>
					<router-link
						to='/'
						class='navigation__logo-link'
					>
						<img 
							:src="Logo" 
							alt='Nice gadgets' 
							class='navigation__logo-img' 
						/>
					</router-link>

					<nav class='navigation__pages'>
						<ul class='navigation__list'>
							<li
								v-for=" (route,i) in routes"
								class='navigation__item'
								:key="route"
							>
								<router-link
									:to="`/${route}`"
									:class="['navigation__link']"
								>
									{{route}}
								</router-link>
							</li>
						</ul>
					</nav>
				</div>

				<div class='navigation__right'>
					<router-link
						to='/favourites'
						class='navigation__favourites'
					>
						<div 
							v-if="ItemsInfavourites>0" 
							class='navigation__link-img-count'
						>
							{{ItemsInfavourites}}
						</div>
					</router-link>

					<router-link
						to='/cart'
						class='navigation__cart'
					>
						<div 
							v-if="ItemsInCart>0" 
							class='navigation__link-img-count'
						>
							{{ItemsInCart}}
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Logo from "@/images/Logo.png";
import { mapGetters } from "vuex";

export default {
	data (){
		return {
			Logo: Logo,
			routes:[ "phones", "tablets", "accessories"]
		}
	},

	computed: {
    ...mapGetters ({ItemsInCart:"cart/ItemsInCart",ItemsInfavourites:"favourites/ItemsInfavourites"}),
	}
}
</script>
<style lang="scss" scoped>
@import "@/styles/mixins/mixins.scss";
@import "@/styles/vars/vars.scss";

.navigation {
	margin-bottom: 32px;

	@include desktop {
		margin-bottom: 56px;
	}
	
	&__box {
		border-bottom: 1px solid $secondary;
	}

	&__wrapper {
		height: 48px;
		max-width: 1200px;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;

		@include desktop {
			height: 64px;
			border-right: 1px solid $secondary;
		}
	}

	&__logo-link {
		width: 96px;
		height: 48px;
		padding: 13px 16px;

		@include desktop {
			width: 128px;
			height: 64px;
			padding: 18px 24px;
		}
	}

	&__logo-img {
		object-fit: contain;
		object-position: center;
		height: 100%;
		width: 100%;
	}


	&__left {
		display: flex;

		@include tablet {
			gap: 16px;
		}

		@include desktop {
			gap: 24px;
		}
	}

	&__list {
		display: flex;
		flex-direction: row;

		@include tablet {
			gap: 32px;
		}
	
		@include desktop {
			gap: 64px;
		}
	}

	&__item {
		line-height: 48px;

		@include desktop {
			line-height: 64px;
		}
	}

	&__link{
		position: relative;
		display: block;
		width: fit-content;
		color: $secondary;
		margin: 0 auto;
		font-weight: 800;
		font-size: 12px;
		letter-spacing: 0.04em;
		text-transform: uppercase;

		&::after {
			position: absolute;
			content: "";
			height: 2px;
			width: 100%;
			background-color: $white;
			left: 0;
			bottom: 0;
			opacity: 0;
			transition: opacity 0.3s;
		}

		&:hover::after {
			opacity: 1;
		}

		&--active {
			color: $white;
			&::after {
				position: absolute;
				content: "";
				height: 2px;
				width: 100%;
				background-color: $white;
				left: 0;
				bottom: 0;
				opacity: 1;
			}
		}
	}

	&__right {
		display: flex;
		height: 48px;
		width: 96px;

		@include desktop {
			height: 64px;
			width: 128px;
		}
	}

	&__favourites {
		position: relative;
		width: 50%;
		display: block;
		height: 100%;
		border-left: 1px solid $secondary;

		&::after {
			position: absolute;
			content: "";
			height: 16px;
			width: 16px;
			background-image: url(@/images/Like.svg);
			background-position: center;
			background-repeat: no-repeat;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	&__cart {
		position: relative;
		width: 50%;
		display: block;
		height: 100%;
		border-left: 1px solid $secondary;

		&::after {
			position: absolute;
			content: "";
			height: 16px;
			width: 16px;
			background-image: url("@/images/Cart.svg");
			background-position: center;
			background-repeat: no-repeat;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	&__link-img-count {
		position: absolute;
		transform: translate(-50%, -50%);
		top: calc(50% - 6px);
		left: calc(50% + 10px);
		height: 16px;
		width: 16px;
		background-color: red;
		border-radius: 50%;
		border: 1px solid $bc-color;
		color: $white;
		font-weight: 600;
		font-size: 9px;
		line-height: 14px;
		text-align: center;
		z-index: 2;
	}
}
</style>