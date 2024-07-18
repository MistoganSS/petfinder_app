import React from 'react'

export default function ReportList ({ reports }) {
  console.log(reports)
  return (
    <div>
      {reports.map(item => {
        return <article key={item.id}>{item.id}</article>
      })}
    </div>
  )
}
