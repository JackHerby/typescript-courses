//* keyof

const contact = {
  name: 'Ashley',
  email: 'ashley@example.com',
}

type WhatIWanted = 'name' | 'email'
type Try1 = keyof typeof contact
// keyof == Object.keys() for types
// typeof == gets type of the value

type DatePropertyNames = keyof Date

type DateStringPropertyNames = DatePropertyNames & string
type DateSymbolPropertyNames = DatePropertyNames & symbol

// type aliases can be defined within a function scope
//* typeof
async function main() {
  const apiResponse = await Promise.all([
    fetch('https://example.com'),
    Promise.resolve('Titanium White'),
  ])
  type ApiResponseType = typeof apiResponse
}

//?^ note: type alias within a function scope!
const MyAjaxConstructor = CSSRule
CSSRule.STYLE_RULE
const myAjax = new CSSRule()
type MyAjaxConstructorType = typeof CSSRule

//* Indexed Access Types

interface Car {
  make: string
  model: string
  year: number
  color: {
    red: string
    green: string
    blue: string
  }
}

let carColor: Car['color'] //✔️ Reaching for something that exists
let carSomething: Car['not-something-on-car'] //! Reaching for something invalid
let carColorRedComponent: Car['color']['red'] //✔️ Reaching for something nested
let carProperty: Car['color' | 'year'] // ✔️ Passing a union type through the index

//* Use case: the type registry pattern
// See: 
import("./09-type-registry/")

export default {}
