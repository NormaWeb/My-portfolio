"use client";
import React, { useState } from "react";

const EmailSection = () => {
    const [emailStatus, setEmailStatus] = useState(null); // Tracks success or error

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        try {
            const response = await fetch(endpoint, options);

            if (response.status === 200) {
                setEmailStatus("success");
            } else {
                setEmailStatus("error");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            setEmailStatus("error");
        }

        // Clear the status after 5 seconds
        setTimeout(() => setEmailStatus(null), 5000);
    };

    return (
        <section id="contact" className="grid md:grid-cols-2 my-12 py-24 gap-4 relative">
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    I am currently looking for new opportunities and a community to grow with. If
                    you have a question or just want to say hello, my inbox is always open. I
                    promise to get back to you!
                </p>
            </div>

            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                            Your Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            required
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="blessing@gmail.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
                            Subject
                        </label>
                        <input
                            name="subject"
                            type="text"
                            id="subject"
                            required
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Just saying Hello"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            placeholder="Let's talk about..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-700 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                    >
                        Send Message
                    </button>

                    {/* Feedback message */}
                    {emailStatus === "success" && (
                        <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
                    )}
                    {emailStatus === "error" && (
                        <p className="text-red-500 text-sm mt-2">Failed to send the email. Please try again...</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default EmailSection;
