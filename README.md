# Next Middleware

A versatile middleware package for enhancing and extending the capabilities of Next.js applications. Simplify common tasks, implement authentication, handle routing intricacies, and more with this easy-to-use middleware package.

Middleware Chain:
```js
export default nextMiddleware([
  Starter,
  Auth,
  AnotherMiddleware
]);
```

## Table of Contents

- [Next Middleware](#next-middleware)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [nextMiddleware](#nextmiddleware)
    - [Starter](#starter)
    - [Custom Middleware](#custom-middleware)
  - [Contribution](#contribution)
  - [License](#license)
  - [Contact](#contact)

## Installation

```bash
npm install next-middleware-chain
```

## Usage

### nextMiddleware

`nextMiddleware` allows you to compose an array of middleware functions, creating a versatile middleware handler.

```js
// middleware.js
import { nextMiddleware, Starter } from "next-middleware";

export default nextMiddleware([Starter, AnotherMiddleware]);
```

### Starter
`Starter`  is a demo middleware included in this package to showcase its usage. It demonstrates how to execute additional functions based on the current path.

Starter must have the following function signature with `middleware` argument and at the last return `middleware` to continue the middleware chain. The async function gets request and event for this middleware.

```js
import { NextResponse } from "next/server";

function Starter(middleware) {
  return async (request, event) => {
    
    // add all functions which is required for start app
    
    return middleware(request, event); //return require for next middleware
  };
}

module.exports = Starter;
```
I have added a condition to redirect to home if path is `/`.

Here is some example usage of `Starter` middleware:

```js
function Starter(middleware) {
  return async (request, event) => {
    
    // here i add a condition to redirect to home
    if (path === "/") {
      return NextResponse.redirect(new URL("/home", request.url));
    }

    return middleware(request, event);
  };
}

export default Starter;
```

### Custom Middleware

You can create custom middleware as per your requirement.
Manage you path:
```bash
- /app
- /profile
- ...
- Middleware
  - CustomMiddleware/index.js
- middleware.js
- ...
```

```js
// middleware.js
import { nextMiddleware } from "next-middleware";
import CustomMiddleware from "./Middleware/CustomMiddleware";

export default nextMiddleware([CustomMiddleware]);
```

```js
// CustomMiddleware/index.js
export default function CustomMiddleware(middleware) {
  return async (request, event) => {
    
    // add your logic as per your requirement

    return middleware(request, event);
  };
  
}
```

## Contribution
Feel free to contribute by opening issues or submitting pull requests. Your contributions are highly appreciated!

## License
This project use self signed License by Jishan Hoshen.

SEE LICENSE IN LICENSE

## Contact
- [Github](https://github.com/jishanhoshen)
- [Email](mailto:jishanhoshenjibon@gmail.com)
