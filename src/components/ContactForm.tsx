import { useState } from 'react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you shortly!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-slate-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            className="w-full px-4 py-3 border border-slate-300 rounded-md bg-white focus:ring-primary focus:border-primary"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Email"
            className="w-full px-4 py-3 border border-slate-300 rounded-md bg-white focus:ring-primary focus:border-primary"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Message"
            className="w-full px-4 py-3 border border-slate-300 rounded-md bg-white resize-y focus:ring-primary focus:border-primary"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary/90 transition-colors shadow-sm uppercase tracking-wide"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
