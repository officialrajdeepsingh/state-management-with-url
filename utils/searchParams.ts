import { createSearchParamsCache, parseAsInteger, parseAsString } from 'nuqs/server'
// Note: import from 'nuqs/server' to avoid the "use client" directive
 
export const searchParamsCache = createSearchParamsCache({
  // List your search param keys and associated parsers here:
  name: parseAsString.withDefault(''),
  age: parseAsInteger.withDefault(0)
})
