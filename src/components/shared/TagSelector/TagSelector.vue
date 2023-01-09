<template>
<div class="mt-2">
	  <q-select
      v-model="tagVal"
      filled
      use-input
      use-chips
      multiple
      label=" تگ"
      input-debounce="0"
      :options="filterOptions"
      dense
      :class="'col-12'"
			@new-value="createValue"
			@filter="filterFn">
			  <template>
					<q-icon name="event" />
				</template>
			</q-select>
</div>
</template>

<script src="./TagSelector.ts">
</script>

<style>

</style>
