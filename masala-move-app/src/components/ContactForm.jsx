import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-md mx-auto p-4 border border-orange-300 rounded-lg shadow-lg bg-white text-gray-800">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-orange-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-2 rounded-lg border border-orange-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows="2"
            className="w-full p-2 rounded-lg border border-orange-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none resize-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Submit
          </button>
        </form>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold text-orange-500">Thank you!</h2>
          <p className="mt-2 text-gray-700">Your message has been received.</p>
        </div>
      )}
    </div>
  )
}
