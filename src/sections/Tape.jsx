import React, { Fragment } from 'react'
import { BiLogoMeta } from 'react-icons/bi'

const Tape = () => {
    const words = ['React', 'typescript', 'tailwind', 'css', 'mongodb', 'express', 'api', 'graphql', 'json', 'git', 'nodejs', 'github', 'html', 'nodejs', 'tailwind' ];

  return (
    <section className='overflow-x-clip py-20 lg:py-2'>
            <div className='-mx-1 -rotate-3 bg-gradient-to-r from-teal-300 to-blue-400'>
                <div className='flex mask-gradient-right'>
                    <div className='flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]'>
                        {
                            [...new Array(2)].fill(0).map((_, index) => (
                                <Fragment key={index}>
                                    {
                                        words.map((word) => (
                                            <div className='inline-flex items-center gap-4'>
                                                <span className='text-sm font-extrabold uppercase text-gray-800'>
                                                    {word}
                                                </span>
                                                    <BiLogoMeta className='size-8 -rotate-12 text-gray-800'/>
                                            </div>
                                        ))
                                    }
                                </Fragment>
                            ))
                        }
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Tape
