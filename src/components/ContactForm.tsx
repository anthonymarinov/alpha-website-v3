'use client'

import { useState, useRef, useEffect, FormEvent } from "react";
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactForm() {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha | null>(null);

  const onHCaptchaChange = (token: string) => {
    setCaptchaToken(token);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.__SKIP_CAPTCHA__ === true) {
      setCaptchaToken("dummy-test-token");
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!captchaToken) {
      setError("Please complete the captcha.");
      return;
    }

    // Cast the form to include expected input types.
    const form = e.currentTarget as HTMLFormElement & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      message: HTMLTextAreaElement;
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "542dd482-789d-4e01-89e3-b2a7c43eebf8",
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
          "h-captcha-response": captchaToken,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        form.reset();
        if (captchaRef.current) {
          captchaRef.current.resetCaptcha();
        }
        setCaptchaToken(null);
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Submission failed. Please try again.");
    }
  }

  return (
    <div className="mt-8 lg:w-1/2 lg:mx-6">
      <div className="w-full px-8 py-5 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl lg:max-w-xl">
        <h1 className="text-xl font-medium text-gray-700">Contact Form</h1>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex-1">
            <label htmlFor="name" className="block mb-2 text-sm text-gray-600">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              required
              className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-sky-600 focus:ring-sky-500 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div className="flex-1 mt-2">
            <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              required
              className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-sky-600 focus:ring-sky-500 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>

          <div className="w-full mt-2">
            <label htmlFor="message" className="block mb-2 text-sm text-gray-600">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              required
              className="block w-full h-32 max-h-40 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-sky-600 focus:ring-sky-500 focus:ring-opacity-40 focus:outline-none focus:ring"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <HCaptcha
            ref={captchaRef}
            sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
            reCaptchaCompat={false}
            onVerify={onHCaptchaChange}
          />

          <button
            type="submit"
            className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-sky-600 rounded-md hover:bg-sky-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          >
            Get In Touch
          </button>
        </form>

        {success && (
          <p className="mt-4 text-green-600">
            Thank you for your submission! We will get back to you soon.
          </p>
        )}

        {error && (
          <p className="mt-4 text-red-600">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
