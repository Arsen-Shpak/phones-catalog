<template>
	<div class='person'>
		<div class='person__photo-box'>
			<img 
				:src="person.photo" 
				alt='creator' 
				class='person__photo' 
			/>
		</div>

		<div class='person__data'>
			<h2 class='person__name'>
				{{person.name.split (" ")[0]}} <br />
				{{person.name.split (" ")[1]}}
			</h2>

			<div class='person__work-links'>
				<a
					:href="`https://${person.linkedIn}`"
					class='person__tag'
					rel='noreferrer'
				>
					<img :src="Linkedin" class='person__icon' />
				</a>

				<a
					:href="`https://${person.git}`"
					class='person__tag'
					target='_blank'
					rel='noreferrer'
				>
					<img 
						:src="Github" 
						class='person__icon' 
					/>
				</a>
			</div>

			<div
				class='person__email-box'
			>
				<span class='person__text'>
					{{person.email}}
				</span>
			</div>
		</div>
	</div>
</template>
<script>
import Linkedin from "@/images/Linkedin.png";
import Github from "@/images/github.png";

export default {
	props: {
		person:{type:Object}
	},

	data () {
		return {
			Linkedin: Linkedin,
			Github:Github
		}
	},
}
</script>
<style lang="scss" scoped>
@import "@/styles/vars/vars.scss";
@import "@/styles/mixins/mixins.scss";

.person {
	min-width: 320px;
	display: flex;
	align-items: center;
	color: $white;
	padding: 10px;
	gap: 16px;

	@include tablet {
		min-width: 510px;
		gap: 32px;
	}
	
	&__tag {
		font-size: 32px;
		color: $white;

		@include tablet {
			font-size: 44px;
		}
	}

	&__photo-box {
		width: 90px;
		height: 90px;

		@include tablet {
			width: 180px;
			height: 180px;
		}
	}

	&__photo {
		border-radius: 50%;
		width: 100%;
		height: 100%;
		object-fit: contain;
		object-position: center;
	}

	&__work-links {
		display: flex;
		gap: 16px;
	}

	&__data {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	&__email-box {
		display: flex;
		align-items: center;
	}

	&__icon {
		display: inline;
		width: 40px;
		height: 40px;
		&--margin-right{
			margin-right: 12px;
		}
	}

	&__text {
		font-size: 9px;

		@include tablet {
			font-size: 16px;
		}
	}

	&__login {
		font-size: 14px;

		@include tablet {
			font-size: 22px;
		}
	}

	&__name {
    padding: 0;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

		@include tablet {
			font-weight: 700;
			font-size: 28px;
			line-height: 34px;
		}
  }
}
</style>