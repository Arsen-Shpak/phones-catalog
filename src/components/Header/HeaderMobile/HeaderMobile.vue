<template>
    <div
		:class="['burger__wrapper',
			{
			'burger__wrapper--opened': isOpen,
			'burger__wrapper--closed': !isOpen
			}
		]" 
	>
			<div class="burger__top">
				<router-link
					to="/"
					class="burger__top-link"
					@click="handleBurgerButton"
				>
					<img :src="Logo" alt="Nice gadgets" class="burger__top-img" />
				</router-link>

				<div 
					:class="['burger__opener',
						{
						'burger__opener-closed': !isOpen,
						'burger__opener-opened': isOpen
						}
					]"
					@click="handleBurgerClose"
				></div>
			</div>

			<!-- {isOpen &&  -->
			<nav
				v-if="isOpen"
				class="burger__nav"
			>
				<ul class="burger__nav-list">
					<!-- {routes.map((route, i) => {
						return ( -->
						<li
							v-for="(route, i) in routes"
							class="burger__nav-item"
							:key="route"
							@click="handleBurgerButton"

						>
							<router-link
								:to="`/${route}`"
								:class="['burger__nav-link']"
							>
								{{route}}
							</router-link>
						</li>
				</ul>
			</nav>

			<div v-if="isOpen" class="burger__bottom" 
							@click="handleBurgerButton"

			>
				<router-link
					to="/favourites"
					class="burger__favourites"
				>
						<div 
							v-if="ItemsInfavourites>0" 
							class="burger__link-img-count"
						>
							{{ItemsInfavourites}}
						</div>
					<!-- )} -->
				</router-link>

				<router-link
					to="/cart"
					class="burger__cart"
					@click="handleBurgerButton"
				>
						<div 
							v-if="ItemsInCart>0" 
							class="burger__link-img-count"
						>
							{{ItemsInCart}}
						</div>
				</router-link>
			</div>}
		</div>
</template>
<script>
import Logo from "@/images/Logo.png";
import { mapGetters } from 'vuex';

export default {
	data(){
		return {
			Logo:Logo,
			routes:['phones', 'tablets', 'accessories'],
			isOpen:false
		}
	},
	computed: {
      ...mapGetters({ItemsInCart:'cart/ItemsInCart',ItemsInfavourites:'favourites/ItemsInfavourites'}),
		
	},
	methods:{
		handleBurgerButton(){
			this.isOpen = false
		},
		handleBurgerClose(){
			this.isOpen = !this.isOpen
		}
	}
}
</script>
<style lang="scss" scoped>
// @import '@/style/mixins/mixins.scss';
@import "@/styles/mixins/mixins.scss";
@import '@/styles/vars/vars.scss';

.burger {
	&__wrapper {
		position: sticky;
		bottom: 10px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&--opened {
			height: 100vh;
		}

		&--closed {
			height: auto;
		}
	}

	&__top {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid $secondary;
		margin-bottom: 24px;
	}

	&__top-link {
		width: 96px;
		height: 48px;
		padding: 13px 16px;
	}

	&__top-img {
		object-fit: contain;
		object-position: center;
		height: 100%;
		width: 100%;
	}

	&__opener {
		position: relative;
		width: 48px;
		height: 48px;
		border-left: 1px solid $secondary;
		cursor: pointer;

		&-closed {
			&::after {
				position: absolute;
				content: "";
				height: 16px;
				width: 16px;
				background-image: url('@/images/Burger.svg');
				background-position: center;
				background-repeat: no-repeat;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
			
			&-opened {
				&::after {
					position: absolute;
					content: "";
					height: 16px;
					width: 16px;
					background-image: url('@/images/Cross.svg');
					background-position: center;
					background-repeat: no-repeat;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
				}
			}
	}

	&__nav {
		flex: 1;

		&-list {
			font-weight: 800;
			font-size: 12px;
			line-height: 11px;
	
			letter-spacing: 0.04em;
			text-transform: uppercase;
		}

		&-item {
			text-align: center;
			margin-bottom: 16px;
		}

		&-link{
			position: relative;
			display: block;
			width: fit-content;
			color: $secondary;
			padding: 8px 0;
			margin: 0 auto;

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
	}

	&__bottom {
		display: flex;
		height: 128px;
		border-top: 1px solid $secondary;
	}

	&__favourites {
		position: relative;
		width: 50%;
		display: block;
		height: 100%;
		border-right: 1px solid $secondary;

		&::after {
      position: absolute;
      content: "";
      height: 16px;	
      width: 16px;
      background-image: url('@/images/Like.svg');
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

		&::after {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      background-image: url('@/images/Cart.svg');
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