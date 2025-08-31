function Contact() {
  return (
    <div
      class="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="contact"
    >
      <h1 class="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span class="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p class="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move ? Let's Build Your Future Together
      </p>

      <form action="">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              class="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              required
            />
          </div>
          <div class="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              class="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              required
            />
          </div>
        </div>
        <div class="my-6 text-left">
          Message
          <textarea
            name="Message"
            placeholder="Message"
            class="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            required
          ></textarea>
        </div>
        <button class="bg-blue-600 text-white py-2 px-12 mb-10" disabled={true}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
