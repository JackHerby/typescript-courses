// Global types
declare module '*.png' {
  const imgUrl: string
  export default imgUrl
}

declare module 'http:\/\/*' {
  const response: ReturnType<typeof fetch>
  export default response
}
