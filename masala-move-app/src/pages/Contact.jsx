import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-6">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 shadow-lg">
            <h2 className="text-xl font-bold text-orange-500 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📧</span>
                </div>
                <div>
                  <p className="text-gray-700">Email</p>
                  <p className="text-orange-600">karan@masalamove.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">📞</span>
                </div>
                <div>
                  <p className="text-gray-700">Phone</p>
                  <p className="text-orange-600">+91 8425952505</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🏢</span>
                </div>
                <div>
                  <p className="text-gray-700">Address</p>
                  <p className="text-orange-600">123 Service St, Wellness City</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 shadow-lg">
            <h2 className="text-xl font-bold text-orange-500 mb-6">Send Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
