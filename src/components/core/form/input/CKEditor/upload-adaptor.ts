import config from "src/config.json";

class UploadAdapter {
  xhr: XMLHttpRequest = new XMLHttpRequest();

  constructor(private loaderInstance) { }

  async upload() {
    const file = await this.loaderInstance.file
    this.openRequest();
    this.sendRequest(file);
    const result = await this.initListeners(file);
    return result
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Initializes the XMLHttpRequest object using the URL passed to the constructor.
  openRequest() {
    this.xhr.open("POST", `${config.serverAddress}/uploadImage`, true);
    this.xhr.responseType = "json";
  }

  // Initializes XMLHttpRequest listeners.
  initListeners(file) {
    const genericErrorText = `Couldn't upload file: ${file.name as string}.`;
    return new Promise((resolve, reject) => {
      this.xhr.addEventListener("error", () => reject(genericErrorText));
      this.xhr.addEventListener("abort", () => reject());
      this.xhr.addEventListener("load", () => {
        const response = this.xhr.response;
        if (!response || response.error)
          return reject(response && response.error ? response.error.message : genericErrorText);
        else {
          const imageName: string = response.imageUrl.split("/uploads/").pop()
          return resolve({
            default: `${config.serverAddress}/${imageName}`
          })
        }
      })
    });
  }

  // Prepares the data and sends the request.
  sendRequest(file) {
    const data = new FormData();
    data.append("file", file);

    const token = localStorage.getItem("token")
    this.xhr.setRequestHeader("Authorization", `jwt ${token}`)
    this.xhr.send(data);
  }
}

// ...

export function uploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => new UploadAdapter(loader)
}
