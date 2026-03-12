# Patreon Clone – Next.js + Razorpay

A Patreon-style creator support platform built with **Next.js** and **Razorpay** payment integration.
Users can support creators by making payments similar to Patreon.

---

## Features

* Creator support platform
* Razorpay payment gateway integration
* Secure payment verification
* Responsive UI
* Next.js API routes for backend logic
* Fast performance using Next.js

---

## Tech Stack

### Frontend

* Next.js
* React
* TailwindCSS

### Backend

* Next.js API Routes

### Payments

* Razorpay Payment Gateway

---

## Project Structure

patreon-clone/

├── pages/
│   ├── api/
│   │   └── payment.js
│   └── index.js
│
├── components/
│   └── PaymentButton.js
│
├── styles/
│   └── globals.css
│
├── public/
│
├── .env.local
├── package.json
└── README.md

---

## Installation

Clone the repository

git clone https://github.com/YOUR_USERNAME/patreon-clone.git

Move into project folder

cd patreon-clone

Install dependencies

npm install

Run development server

npm run dev

Open in browser

http://localhost:3000

---

## Razorpay Setup

1. Create an account at
   https://razorpay.com

2. Get your API keys from the Razorpay dashboard.

3. Create a `.env.local` file in the root directory.

Add the following variables:

RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

Restart the development server after adding environment variables.

---

## Payment Flow

1. User clicks the support button
2. Backend creates Razorpay order
3. Razorpay checkout popup opens
4. User completes payment
5. Backend verifies the payment signature
6. Payment success message is shown

---

## Future Improvements

* Creator dashboard
* Monthly subscriptions
* Authentication system
* Database integration (MongoDB / PostgreSQL)
* Comments and community posts

---

## License

This project is open source and free to use.
