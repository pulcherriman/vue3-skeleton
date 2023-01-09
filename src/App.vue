<script setup lang="ts">
import { RouterView } from "vue-router";
const links = {
	'Menu1': '/content1',
	'Menu2': '/content2',
	'Menu3': '/content3',
	'Menu4': '/content4',
};
</script>

<template>
	<v-app id="inspire">
		<v-app-bar
			class="px-3"
			color="white"
			flat
			density="compact"
		>
		<v-avatar
			color="grey-darken-1"
			size="32"
		>左</v-avatar>
	
		<v-spacer></v-spacer>
	
		<v-tabs
			centered
			color="grey-darken-2"
		>
			<v-tab
				v-for="href, link in links"
				:key="link" :to="href"
			>{{ link }}</v-tab>
		</v-tabs>
		<v-spacer></v-spacer>
	
		<v-avatar
			class="hidden-sm-and-down"
			color="grey-darken-1"
			size="32"
		>右</v-avatar>
		</v-app-bar>
	
		<v-main class="bg-grey-lighten-3">
		<v-container>
			<v-row>
			<v-col
				cols="12"
				sm="2"
			>
				<v-sheet
					rounded="lg"
					min-height="90%"
				>
				左コンテンツ
				</v-sheet>
			</v-col>
	
			<v-col
				cols="12"
				sm="8"
			>
				<v-sheet
					min-height="70vh"
					rounded="lg"
				>
				<RouterView />
				</v-sheet>
			</v-col>
	
			<v-col
				cols="12"
				sm="2"
			>
				<v-sheet
					rounded="lg"
					min-height="268"
				>
				右コンテンツ
				</v-sheet>
			</v-col>
			</v-row>
		</v-container>
		</v-main>
	</v-app>
</template>

<style scoped>
header {
	line-height: 1.5;
	max-height: 100vh;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

nav {
	width: 100%;
	font-size: 12px;
	text-align: center;
	margin-top: 2rem;
}

nav a.router-link-exact-active {
	color: var(--color-text);
}

nav a.router-link-exact-active:hover {
	background-color: transparent;
}

nav a {
	display: inline-block;
	padding: 0 1rem;
	border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
	border: 0;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}

	nav {
		text-align: left;
		margin-left: -1rem;
		font-size: 1rem;

		padding: 1rem 0;
		margin-top: 1rem;
	}
}
</style>
