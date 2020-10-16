export class UniqueConstraintError extends Error {
    constructor (value) {
      super(`${value} exists, it has to be unique. try another username`)
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, UniqueConstraintError)
      }
    }
  }
  
  export class InvalidPropertyError extends Error {
    constructor (msg) {
      super(msg)
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, InvalidPropertyError)
      }
    }
  }
  
  export class RequiredParameterError extends Error {
    constructor (param) {
      super(`${param} can not be null or undefined.`)
      this.param = param
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, RequiredParameterError)
      }
    }
  }
  
  export class InternalServerError extends Error {
    constructor () {
      super("Sorry, Internal Server Error, try later")
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, RequiredParameterError)
      }
    }
  }

  export default {
      InvalidPropertyError,
      RequiredParameterError,
      UniqueConstraintError,
      InternalServerError
    }