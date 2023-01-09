import { useUser } from "src/compositions/core/user.composition"
import { defineComponent } from "vue"

export default defineComponent({


  props: {
    imageUrl: String
  },


  setup(props) {
    const { imageSrcCourse, imageUrlCourse } = useUser()


    function onFileChange(e) {
      const file = e.target.files[0]
      imageSrcCourse.value = URL.createObjectURL(file)
      imageUrlCourse.value = file
    }



    function importData() {
      const input = document.createElement("input")
      input.type = "file"
      input.onchange = _ => {
        // you can use this method to get file and perform respective operations
        const files = Array.from(input.files)
        console.log(files)
      }
      input.click()

    }

    return {
      onFileChange,
      importData,
      imageSrcCourse
    }
  }
})
