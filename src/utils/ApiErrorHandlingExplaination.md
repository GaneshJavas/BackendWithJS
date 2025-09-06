This code defines a custom error class called `ApiErrorHandler` that extends JavaScript’s built-in `Error` class. It’s designed for use in APIs to provide more detailed error information.

### Key Concepts

- **Extending Error**: By inheriting from `Error`, instances of `ApiErrorHandler` behave like standard errors but can carry extra data.
- **Constructor Parameters**:
  - `statusCode`: HTTP status code (e.g., 404, 500).
  - `message`: Error message (defaults to "Something went wrong").
  - `errors`: Array of specific error details (defaults to empty).
  - `stack`: Optional stack trace (for debugging).
- **Properties Set**:
  - `statusCode`: For HTTP responses.
  - `data`: Always `null` here (could be used for extra info).
  - `message`: Error message.
  - `success`: Always `false` (indicates failure).
  - `errors`: Array of error details.
- **Stack Trace Handling**:
  - If a stack trace is provided, it uses that.
  - Otherwise, it captures the current stack trace using `Error.captureStackTrace`.

### Example Usage

Suppose you want to throw a 404 error in your API:

````javascript
throw new ApiErrorHandler(404, "Resource not found");
````

### Gotchas

- Always call `super(message)` when extending `Error`.
- The `data` property is always `null`—consider using it if you want to attach more info.
- The `errors` array lets you provide multiple error details (e.g., validation errors).

### Summary

This class helps you create consistent, informative error objects for your API, making error handling and debugging easier.