<script setup lang="ts"></script>

<template>
	<div class="main">
		<p class="link" v-for="route in 10" @click="$router.push(`/page${route}`)">
			<span>Page: {{ route }}</span>
		</p>
	</div>
	<router-view />
</template>

<style>
.main {
	display: flex;
	gap: 15px;
}

.link {
	border: 1px solid green;
	padding: 5px;
	cursor: pointer;
  color: red;
  font-size: 18px;
  font-weight: bold;
}
</style>
