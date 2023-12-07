import React, { useRef, useState } from 'react'
import Card from './Card'

function Forground() {
  const ref = useRef(null)
  const data = [
    {
      desc: "ChatGPT can generate a variety of content, including articles, creative writing, code snippets, and more.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagtitle: "Download Now", tagcolor:"green"}
    },
    {
      desc: "Multilingual support for translation, summarization, and language tasks.",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: false, tagtitle: "", tagcolor:"black"}
    },
    {
      desc: "Multilingual support for translation, summarization, and language tasks.",
      filesize: ".9mb",
      close: false,
      tag: {isOpen: true, tagtitle: "Download Now", tagcolor:"green"}
    },
    {
      desc: "Valuable resource for learning, providing information and explanations.",
      filesize: "1.5mb",
      close: false,
      tag: {isOpen: true, tagtitle: "Upload", tagcolor:"blue"}
    },
  ]
  useState()
  return (
    <div ref={ref} className="w-full p-5 h-full z-[3] top-0 left-0 fixed flex flex-wrap gap-10">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  )
}

export default Forground