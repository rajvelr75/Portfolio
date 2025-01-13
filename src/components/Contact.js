import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { RiMailSendFill } from "react-icons/ri";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const isLightTheme = theme === 'light';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required!');
      return;
    }

    setError('');

    emailjs
      .send(
        'service_irhuevq',
        'template_jkllczs',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'jfXhdByD2SKa3x4_z'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSuccess('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (err) => {
          console.error('FAILED...', err);
          setError('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white'
      }`}
      id="contact"
    >
      <h2
        className={`text-4xl font-bold text-center mb-6 ${
          isLightTheme ? 'text-gray-900' : 'text-white'
        }`}
      >
        Contact Me
      </h2>
      <div
        className={`w-11/12 lg:w-5/12 px-6 py-6 rounded-lg shadow-lg ${
          isLightTheme ? 'bg-white' : 'bg-gray-800'
        }`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg shadow-md focus:outline-none ${
                isLightTheme
                  ? 'bg-gray-100 border border-gray-300'
                  : 'bg-gray-700 text-white border border-gray-600'
              }`}
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg shadow-md focus:outline-none ${
                isLightTheme
                  ? 'bg-gray-100 border border-gray-300'
                  : 'bg-gray-700 text-white border border-gray-600'
              }`}
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 rounded-lg shadow-md focus:outline-none ${
                isLightTheme
                  ? 'bg-gray-100 border border-gray-300'
                  : 'bg-gray-700 text-white border border-gray-600'
              }`}
            ></textarea>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-2 py-3 font-semibold rounded-lg shadow-md transition-transform transform ${
              isLightTheme
                ? "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
                : "bg-blue-400 text-white hover:bg-blue-500 hover:scale-105"
            }`}
          >
            <RiMailSendFill className="text-xl" />
            <span>Send</span>
          </button>
        </form>
      </div>

      <div
        className={`text-center mt-10 ${
          isLightTheme ? 'text-gray-900' : 'text-gray-300'
        }`}
      >
        <p className="text-md">
          Let's Collaborate: Connect for Professional Growth
        </p>
      </div>

      <div
        className={`py-4 px-4 ${
          isLightTheme ? 'bg-gray-200 text-gray-900' : 'bg-gray-900 text-white'
        }`}
      >
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/rajvels75/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl transition-transform transform hover:scale-110 ${
              isLightTheme
                ? 'text-gray-600 hover:text-pink-500'
                : 'text-gray-400 hover:text-pink-400'
            }`}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/rajvels75/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl transition-transform transform hover:scale-110 ${
              isLightTheme
                ? 'text-gray-600 hover:text-blue-500'
                : 'text-gray-400 hover:text-blue-400'
            }`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rajvelr75"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl transition-transform transform hover:scale-110 ${
              isLightTheme
                ? 'text-gray-600 hover:text-gray-800'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/rajvels75/"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl transition-transform transform hover:scale-110 ${
              isLightTheme
                ? 'text-gray-600 hover:text-yellow-500'
                : 'text-gray-400 hover:text-yellow-400'
            }`}
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
