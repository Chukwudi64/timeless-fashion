const FooterCTA = () => {
  return (
    <section className="py-12 lg:py-20 text-white" style={{ backgroundColor: "#111724" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Ready to Create Your Perfect Look?</h2>
        <p className="text-lg text-gray-300 mb-8 font-light">Let's bring your fashion vision to life with our expert craftsmanship</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-black font-medium hover:bg-gray-100 transition-colors rounded-full"
            style={{ padding: "20px 30px" }}
          >
            Place Order
          </button>
          <button
            className="border border-white text-white font-medium hover:bg-white hover:text-black transition-colors rounded-full"
            style={{ padding: "20px 30px" }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default FooterCTA
