<script lang="ts" setup>
import { animations } from '@/constants'
</script>

<template>
	<main class="container">
		<div class="flex flex-col">
			<h1 class="text-3xl font-bold text-zinc-50">GSAP Animations</h1>
			<ol class="flex flex-col mt-10">
				<li
					class="flex flex-row gap-2 p-5 hover:bg-zinc-800/50 rounded-lg"
					v-for="(animation, index) in animations"
					:key="index"
				>
					<p>
						<span class="text-sm font-bold text-zinc-50"> {{ index + 1 }}. </span>
					</p>
					<div class="flex flex-col gap-2 flex-1">
						<nuxt-link :to="animation.path" class="text-md font-semibold text-blue-600">
							{{ animation.title }}
						</nuxt-link>
						<p class="text-gray-400 text-xs">{{ animation.description }}</p>
					</div>

					<svg class="size-6 text-gray-600 -rotate-90" fill="currentColor" viewBox="0 0 20 20">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M10 13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 13.586z"
						/>
					</svg>
				</li>
			</ol>
		</div>
	</main>
</template>
