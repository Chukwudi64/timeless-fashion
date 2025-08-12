const OrderProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Submit Request",
      description: "Fill out the form with your requirements",
    },
    {
      number: "2",
      title: "Consultation",
      description: "We'll discuss your vision and preferences",
    },
    {
      number: "3",
      title: "Design & Create",
      description: "Our skilled team crafts your perfect piece",
    },
    {
      number: "4",
      title: "Delivery",
      description: "Receive your beautiful, custom creation",
    },
  ]

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-black mb-4">Place Your Order</h2>
          <p className="text-lg text-gray-600 font-light">Let's create something beautiful together</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="font-bold text-black mb-2 text-lg">{step.title}</h3>
              <p className="text-gray-600 text-sm font-regular">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OrderProcess
