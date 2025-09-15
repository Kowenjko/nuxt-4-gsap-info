<script lang="ts" setup>
import { animations } from '@/constants'

const route = useRoute()
</script>

<template>
	<nav class="border-b container">
		<ul class="flex gap-4 text-white">
			<li>
				<NuxtLink class="text-white" :class="{ 'text-blue-700!': '/' === route.path }" to="/"> Home </NuxtLink>
			</li>
			<li v-for="(animate, index) in animations" :key="index">
				<NuxtLink class="text-white" :class="{ 'text-blue-700!': animate.path === route.path }" :to="animate.path">
					{{ animate.title }}
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
