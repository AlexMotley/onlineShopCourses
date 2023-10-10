import './style.css'

// src/mocks/browser.js
import { setupWorker } from 'msw'
import { handlers } from './src/mocks/handlers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser.js')
  worker.start()
}

const runApp = async () => {
  switch (process.env.NODE_ENV) {
    case "development":
      await import("/src/mocks/browser.js")
          .then(async ({ worker }) => {
              await worker.start().then(() => {
                  console.debug("App dev run")
              })
          })
  }
}

runApp()
  .catch((err) => {
      console.error(err)
  })

