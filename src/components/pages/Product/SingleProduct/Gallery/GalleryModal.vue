<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
			<img
        :src="imgSrc"
				class="IMG"
      />
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar'

export default {
  props: {
    text: String
  },

  setup (props) {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide } = useDialogPluginComponent()

		const imgSrc = props.text

    return {
      dialogRef,
      onDialogHide,
			imgSrc
    }
  }
}
</script>

<style scoped>
.IMG {
	object-position: 50% 50%;
	max-width: 60%;
	max-height: 100%;
}
</style>
