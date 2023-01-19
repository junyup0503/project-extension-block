export class ApplicationError extends Error {
  constructor(message = 'an error occurred', code = 5000, statusCode = 500) {
    super(message);

    this.statusCode = statusCode;
    this.code = code;
    this.message = message;
  }
}
export class ValidationError extends ApplicationError {
  constructor(message = '', code = 4000) {
    super(message || 'ValidationError error', code, 400);
  }
}
export class AuthenticationError extends ApplicationError {
  constructor(message = '', code = 4010) {
    super(message || 'Authentication error', code, 401);
  }
}
export class AuthorizationError extends ApplicationError {
  constructor(message = '', code = 4030) {
    super(message || 'Authorization error', code, 403);
  }
}
export class NotFoundError extends ApplicationError {
  constructor(message = '', code = 4040) {
    super(message || 'Resource not found', code, 404);
  }
}
export class ServerError extends ApplicationError {
  constructor(message = '', code = 5000) {
    super(message || 'Server Error', code, 500);
  }
}
