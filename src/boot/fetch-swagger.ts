import { Notify } from "quasar"
import config from "src/utils/config.json"
// import { notifyConfig } from "src/utils/default"
import { Api } from "src/utils/swagger/Api"

class Fetch {
  private api = new Api({
    customFetch: this.createCustomFetch(),
    baseUrl: config.serverAdress,
  })

  abortRequest = this.api.abortRequest
  setSecurityData = this.api.setSecurityData

  baseUrl = this.api.baseUrl
  profile = this.api.profile
  auth = this.api.auth
  category = this.api.category
  project = this.api.project
  task = this.api.task
  report = this.api.report
  event = this.api.event
  degree = this.api.degree
  milestone = this.api.milestone
  issue = this.api.issue
  comment = this.api.comment
  taskTag = this.api.tasktag
  projectTag = this.api.projectTag

  private errorFilter(errInstance: Error | any) {
    let shouldPass = true

    if (errInstance?.path?.includes("me"))
      shouldPass = false

    return shouldPass
  }

  private createCustomFetch() {
    const customFetch = async (input: RequestInfo, init?: RequestInit) => {
      const token = localStorage.getItem("token")
      init.headers = {
        ...init.headers,
        Authorization: `jwt ${token}`
      }
      try {
        const response = await fetch(input, init)
        if (!response.ok) {
          response.clone().json().then((err) => {
            const errorMessage = err.translation
            if (errorMessage)
              this.onError(errorMessage, err)
            else
              this.onServerError()
          })
        }
        return response
      }
      catch (err) {
        //@ts-ignore
        this.onConnectionError()
        throw err
      }
    }

    return customFetch
  }


  private onError(errMessage: string = null, errInstance: Error = null) {
    if (this.errorFilter(errInstance)) {
      Notify.create({
        // ...notifyConfig.err,
        message: errMessage,
      })
    }
  }

  private onConnectionError() {
    const errorMessage = "خطا در ارتباط با سرور"
    this.createMessage(errorMessage)
  }

  private onServerError() {
    const errorMessage = "خطا در پردازش سرور"
    this.createMessage(errorMessage)
  }

  private createMessage(message: string) {
    Notify.create({
      // ...notifyConfig.err,
      message,
    })
  }

}

export const fetchService = new Fetch()