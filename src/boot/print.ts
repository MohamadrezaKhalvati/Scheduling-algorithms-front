import { App, createApp } from "vue"

type PrintOpenInput = {
  component: App;
}

class Print {
  instance: App<Element> = null

  open<T>({ component, ...props }: PrintOpenInput & T) {
    window.onafterprint = () => this.hide()
    this.mountVMInstance(component, props)
  }

  private mountVMInstance(component, props) {
    const root = window.document.getElementById("q-app")
    const node = window.document.createElement("div")
    window.document.body.appendChild(node)
    root.style.display = "none"

    this.instance = createApp({
      el: node,
      mounted() {
        this.$nextTick(() => {
          setTimeout(() => {
            window.focus()
            window.print()
          }, 100)
        })
      },
      render(h) {
        return h(component, {
          props,
        })
      }
    })
  }

  private hide() {
    const root = window.document.getElementById("q-app")
    root.style.display = "block"
    this.instance.unmount()
    this.instance = null
  }

}

const printInstance = new Print()
export default printInstance
