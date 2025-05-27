const ContactDetailsCard = ({ contact }) => {
  return (
    <div className='flex items-center gap-3'>
      <span><contact.icon className="rounded-full border-2 border-white/15 p-2 text-4xl bg-white/5 text-white"/></span>
      {contact.link ? (
      <a href={contact.link} className='text-white/80 hover:underline'>{contact.value}</a>
      ) : (
      <span className='text-white/70'>{contact.value}</span>
      )}
    </div>
  )
}

export default ContactDetailsCard
