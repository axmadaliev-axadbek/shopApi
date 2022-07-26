export class AuthorizationError extends Error {
    constructor (status, message) {
        super()
        this.name = 'AuthorizationError'
        this.status = status
        this.message = message
    }
}
export class InternalServerError extends Error {
    constructor (status, message) {
        super()
        this.name = 'AuthorizationError'
        this.status = status
        this.message = message
    }
}

export class ForbiddenError extends Error {
    constructor (status, message) {
        super()
        this.name = 'AuthorizationError'
        this.status = status
        this.message = message
    }
}

export class ValidationError extends Error {
    constructor (status, message) {
        super()
        this.name = 'AuthorizationError'
        this.status = status
        this.message = message
    }
}

