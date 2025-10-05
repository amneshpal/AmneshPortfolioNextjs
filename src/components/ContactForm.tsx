// 'use client'
// import { useState } from "react";

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Simple frontend handling
//     if (!form.name || !form.email || !form.message) {
//       setStatus("Please fill all fields.");
//       return;
//     }

//     // Here you can do something like opening mailto link
//     const mailtoLink = `mailto:your-email@example.com?subject=Contact from ${encodeURIComponent(
//       form.name
//     )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
//     window.location.href = mailtoLink;

//     setStatus("Opening email client...");
//     setForm({ name: "", email: "", message: "" });
//   }

//   return (
//     <section id="contact" className="min-h-screen px-8 py-16 flex flex-col items-center">
//       <h2 className="text-3xl font-bold text-primary mb-8">Contact Me</h2>
//       <form className="w-full max-w-md flex flex-col space-y-4" onSubmit={handleSubmit}>
//         <input
//           name="name"
//           type="text"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           className="p-3 rounded bg-gray-800 text-white border border-gray-700"
//         />
//         <input
//           name="email"
//           type="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           className="p-3 rounded bg-gray-800 text-white border border-gray-700"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//           className="p-3 rounded bg-gray-800 text-white border border-gray-700"
//           rows={5}
//         ></textarea>
//         <button
//           type="submit"
//           className="px-6 py-3 bg-primary text-white rounded hover:scale-105 transition"
//         >
//           Send Message
//         </button>
//         {status && <p className="text-gray-300 mt-2">{status}</p>}
//       </form>
//     </section>
//   )
// }






'use client'
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields.");
      return;
    }

    const mailtoLink = `mailto:your-email@example.com?subject=Contact from ${encodeURIComponent(
      form.name
    )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.email)}`;
    window.location.href = mailtoLink;

    setStatus("Opening email client...");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="min-h-screen px-4 sm:px-8 py-12 sm:py-16 flex flex-col items-center bg-gray-900 text-white">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-500 mb-8">
        Contact Me
      </h2>

      <form
        className="w-full max-w-md flex flex-col space-y-4"
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-3 sm:p-4 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={5}
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 sm:px-8 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition text-sm sm:text-base"
        >
          Send Message
        </button>

        {status && <p className="text-gray-300 mt-2 text-sm sm:text-base">{status}</p>}
      </form>
    </section>
  );
}





// 'use client'
// import { useState } from "react";
// import emailjs from "emailjs-com";

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.message) {
//       setStatus("⚠️ Please fill all fields");
//       return;
//     }

//     // 🟢 EmailJS integration
//     emailjs.send(
//       "service_swqb8cf",    // 🔹 replace with your EmailJS Service ID
//       "template_ngxpqtk",   // 🔹 replace with your EmailJS Template ID
//       {
//         from_name: form.name,
//         from_email: form.email,
//         message: form.message,
//       },
//       "ZqIo_Eqk-Kn2dnlBp"     // 🔹 replace with your EmailJS Public Key
//     ).then(
//       () => {
//         setStatus("✅ Message sent successfully!");
//         setForm({ name: "", email: "", message: "" });
//       },
//       () => {
//         setStatus("❌ Failed to send message. Try again.");
//       }
//     );
//   };

//   return (
//     <section id="contact" className="min-h-screen px-8 py-16 flex flex-col items-center">
//       <h2 className="text-3xl font-bold text-primary mb-8">Contact Me</h2>
//       <form className="w-full max-w-md flex flex-col space-y-4" onSubmit={handleSubmit}>
//         <input
//           name="name"
//           type="text"
//           placeholder="Your Name"
//           value={form.name}
//           onChange={handleChange}
//           className="p-3 rounded bg-gray-800 text-white border border-gray-700"
//         />
//         <input
//           name="email"
//           type="email"
//           placeholder="Your Email"
//           value={form.email}
//           onChange={handleChange}
//           className="p-3 rounded bg-gray-800 text-white border border-gray-700"
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={form.message}
//           onChange={handleChange}
//           className="p-3 rounded bg-gray-800 text-white border border-gray-700"
//           rows={5}
//         ></textarea>
//         <button
//           type="submit"
//           className="px-6 py-3 bg-primary text-white rounded hover:scale-105 transition"
//         >
//           Send Message
//         </button>
//       </form>
//       {status && <p className="mt-4 text-gray-300">{status}</p>}
//     </section>
//   )
// }
