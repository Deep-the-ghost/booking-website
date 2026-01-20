// pages/index.tsx
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bookr - One Link for All Bookings</title>
      </Head>

      <main className="min-h-screen px-6 py-12 bg-white text-gray-900">
        {/* HERO SECTION */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            One Link to Manage Your Bookings
          </h1>
          <p className="text-lg mb-6">
            For gyms, salons, cafés, doctors — automate bookings, reminders,
            and QR check-ins.
          </p>
          <Link
            href="/signup"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800"
          >
            Start Free Trial
          </Link>
        </section>

        {/* FEATURES */}
        <section className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img src="/booking.png" alt="Booking" className="w-20 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Easy Scheduling</h3>
            <p>Let customers book their slots anytime.</p>
          </div>
          <div>
            <img src="/email.png" alt="Reminders" className="w-20 mx-auto mb-2" />
            <h3 className="font-bold text-lg">Email Reminders</h3>
            <p>Send automatic notifications before appointments.</p>
          </div>
          <div>
            <img src="/qr.png" alt="QR" className="w-20 mx-auto mb-2" />
            <h3 className="font-bold text-lg">QR Code Check-in</h3>
            <p>Let visitors scan & check in at your place.</p>
          </div>
        </section>

        {/* PRICING */}
        <section className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Pricing (India)</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-bold">Free Trial</h3>
              <p className="text-3xl font-bold">₹0</p>
              <p className="mt-2">1 location · Basic booking</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold">Starter</h3>
              <p className="text-3xl font-bold">₹299/mo</p>
              <p className="mt-2">Up to 5 locations · Email reminders · QR</p>
            </div>
            <div className="border rounded-lg p-6">
              <h3 className="font-bold">Pro</h3>
              <p className="text-3xl font-bold">₹999/mo</p>
              <p className="mt-2">Unlimited locations · WhatsApp coming soon</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">FAQ</h2>
          <ul className="space-y-4">
            <li>
              <strong>Can I use this for gyms and salons?</strong>
              <p>Yes! It's made for all local businesses.</p>
            </li>
            <li>
              <strong>How do reminders work?</strong>
              <p>We send email 1 hour before slot time automatically.</p>
            </li>
            <li>
              <strong>Can I check bookings from my phone?</strong>
              <p>Yes, the dashboard is mobile friendly.</p>
            </li>
          </ul>
        </section>

        {/* FINAL CTA */}
        <section className="mt-20 text-center">
          <h2 className="text-xl font-bold mb-2">Start your free trial today.</h2>
          <p className="mb-4">No credit card needed.</p>
          <Link
            href="/signup"
            className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800"
          >
            Start Free Trial
          </Link>
        </section>
      </main>
    </>
  );
}
