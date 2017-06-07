import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export default function (res, Component, data = {}) {
  const a = <Component {...data} />
  const html = `<!DOCTYPE html>\n${renderToStaticMarkup(a)}`
  res.end(html)
}