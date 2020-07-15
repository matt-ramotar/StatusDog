export default class ResponseStatusCode {
  constructor(responseStatusCode, statusDogURL, picURL) {
    this.responseStatusCode = responseStatusCode;
    this.responseClass = null;
    this.summary = null;
    this.picURL = picURL;
    this.picLocalPath = null;
    this.statusDogURL = statusDogURL;
    this.mdnPageURL = null;
  }
  setResponseClass() {} // TODO: write code FIXME: scraper function can integrate -- set RC and add RSC obj to RC.responseStatusCodes

  setPicLocalPath() {} // TODO: write code

  setSummary() {} // TODO: write code

  setMDNPageURL() {} // TODO: write code
}
