import React from 'react'

const ServiceCard = ({ service }) => {
  return (
    <div className='flex flex-col border-1 border-white/10 bg-white/5 rounded-lg gap-4 p-5'>
        <service.icon className="rounded-full border-2 border-white/15 p-2 text-6xl bg-white/5 text-blue-500"/>
      <div className='space-y-2'>
        <h3 className='text-2xl font-semibold text-white/80 font-serif'>
            {service.title}
        </h3>
        <p className='text-white/40'>
            {service.description}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard
