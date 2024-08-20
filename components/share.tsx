'use client'

import { parseAsInteger, useQueryState } from 'nuqs'
import Link from "next/link"


export function Share() {

  const [name, setName] = useQueryState('name', { defaultValue: '' })
  const [age, setAge] = useQueryState('age', parseAsInteger.withDefault(0))


  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md mx-auto" data-v0-t="card">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">State Management</h3>
        <p className="text-sm text-muted-foreground">Share complex React state between any components and sync to the URL query parameters in Next.js/React.js.</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="name"
            >
              Name
            </label>
            <input
              value={name}
              onChange={e => setName(e.target.value || null)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="age"
            >
              Age
            </label>
            <input
              value={age}
              onChange={e => setAge(Number(e.target.value))}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="age"
              placeholder="Enter your age"
              type="number"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-4 flex-wrap items-center p-6 ">
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  bg-black text-white hover:bg-black/90 h-10 px-3 py-2 w-full"
          href={{
            pathname: '/serve',
            query: { name, age },
          }}
        >
          Share State with serve Side
        </Link>
        <Link
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  bg-black text-white hover:bg-black/90 h-10 px-3 py-2 w-full"
          href={{
            pathname: '/searchparams',
            query: { name, age },
          }}

        >
          Share State with SearchParmas
        </Link>

        <Link
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  bg-black text-white hover:bg-black/90 h-10 px-3 py-2 w-full"
          href={{
            pathname: '/hook',
            query: { name, age },
          }}
        >
         Access State with nextjs hook/client 
        </Link>

        <button
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  bg-red-500 text-white hover:bg-red/90 h-10 px-3 py-2 w-full"
          type="submit"
          onClick={
            () => {
              setName(null)
              setAge(null)
            }
          }
        >
          Rest State
        </button>

      </div>
    </div>
  )
}
