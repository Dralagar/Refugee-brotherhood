'use client';

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import type { Stripe as StripeType, StripeElements } from '@stripe/stripe-js';
import styles from '../styles/Donate.module.css';
import Image from 'next/image';
import { FaCreditCard, FaPaypal, FaApplePay, FaGooglePay } from 'react-icons/fa';

// Initialize Stripe (replace with your publishable key)
const stripePromise = loadStripe('your_publishable_key_here');

const DonatePage: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [clientSecret, setClientSecret] = useState<string>('');
  const [cardElement, setCardElement] = useState<any>(null);
  const [stripe, setStripe] = useState<StripeType | null>(null);
  const [elements, setElements] = useState<StripeElements | null>(null);

  const donationAmounts = [10, 25, 50, 100];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFrequencyChange = (newFrequency: 'one-time' | 'monthly') => {
    setFrequency(newFrequency);
  };

  const getFinalAmount = () => {
    if (selectedAmount) return selectedAmount;
    if (customAmount) return parseFloat(customAmount);
    return 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const amount = getFinalAmount();

    if (!amount || amount <= 0) {
      setError('Please select or enter a valid donation amount');
      setLoading(false);
      return;
    }

    try {
      // Create payment intent on your server
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          frequency,
          ...formData
        }),
      });

      if (!response.ok) {
        throw new Error('Payment initialization failed');
      }

      const { clientSecret } = await response.json();

      // Initialize Stripe
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      // Confirm the payment
      const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
          },
        },
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      // Handle successful payment
      window.location.href = '/donation-success';

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initializeStripe = async () => {
      const stripeInstance = await stripePromise;
      if (stripeInstance) {
        setStripe(stripeInstance);
        setElements(stripeInstance.elements());
      }
    };
    initializeStripe();
  }, []);

  useEffect(() => {
    if (elements) {
      const card = elements.create('card');
      card.mount('#card-element');
      setCardElement(card);
    }
  }, [elements]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.heroSection}>
          <h1>Make a Difference Today</h1>
          <p>Your donation helps refugee families rebuild their lives</p>
        </div>

        <div className={styles.contentWrapper}>
          <section className={styles.donationSection}>
            <div className={styles.impactInfo}>
              <h2>Your Impact</h2>
              <div className={styles.impactGrid}>
                <div className={styles.impactCard}>
                  <span className={styles.impactAmount}>$25</span>
                  <p>Provides emergency supplies for one family</p>
                </div>
                <div className={styles.impactCard}>
                  <span className={styles.impactAmount}>$50</span>
                  <p>Supports education for one child for a month</p>
                </div>
                <div className={styles.impactCard}>
                  <span className={styles.impactAmount}>$100</span>
                  <p>Helps secure temporary housing</p>
                </div>
              </div>
            </div>

            <div className={styles.donationOptions}>
              <h2>Select Donation Amount</h2>
              <div className={styles.donationGrid}>
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    className={`${styles.donationButton} ${
                      selectedAmount === amount ? styles.selected : ''
                    }`}
                    onClick={() => setSelectedAmount(amount)}
                  >
                    ${amount}
                  </button>
                ))}
                <div className={styles.customAmount}>
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className={styles.customInput}
                  />
                </div>
              </div>

              <div className={styles.paymentMethods}>
                <h3>Payment Methods</h3>
                <div className={styles.paymentIcons}>
                  <FaCreditCard className={styles.paymentIcon} />
                  <FaPaypal className={styles.paymentIcon} />
                  <FaApplePay className={styles.paymentIcon} />
                  <FaGooglePay className={styles.paymentIcon} />
                </div>
              </div>

              <form className={styles.donationForm} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className={styles.donationFrequency}>
                  <button
                    type="button"
                    className={`${styles.frequencyButton} ${
                      frequency === 'one-time' ? styles.selected : ''
                    }`}
                    onClick={() => handleFrequencyChange('one-time')}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    className={`${styles.frequencyButton} ${
                      frequency === 'monthly' ? styles.selected : ''
                    }`}
                    onClick={() => handleFrequencyChange('monthly')}
                  >
                    Monthly
                  </button>
                </div>

                <div id="card-element" className={styles.cardElement}></div>

                {error && <div className={styles.error}>{error}</div>}

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : 'Complete Donation'}
                </button>
              </form>
            </div>
          </section>

          <aside className={styles.sidebar}>
            <div className={styles.impactStory}>
              <h3>Your Impact in Action</h3>
              <Image
                src="/images/impact.jpg"
                alt="Impact Story"
                width={400}
                height={300}
                className={styles.impactImage}
              />
              <p>"Thanks to generous donors like you, we've helped over 1,000 families find safety and rebuild their lives."</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default DonatePage;
