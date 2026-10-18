import React, { useState } from 'react';

const App: React.FC = () => {
  const [view, setView] = useState('RATING');
  const [rating, setRating] = useState(0);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const submissionUrl = import.meta.env.VITE_FEEDBACK_ENDPOINT as string | undefined;
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [feedback, setFeedback] = useState(''); 
  const handleRating = (val: number) => {
    setRating(val);
    setSubmitError('');
    // Keep the parent on the form until they submit their details.
  };

  const submitMediation = async () => {
    if (sending) return;
    if (!rating) { setSubmitError('Please select a star rating.'); return; }
    if (!name.trim() || !email.trim() || !feedback.trim()) {
      setSubmitError('Please complete all fields so our coach can follow up.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setSubmitError('Please enter a valid email address.');
      return;
    }
    // No endpoint configured: demo only. No data is transmitted.
    if (!submissionUrl) {
      setView('DEMO_THANKS');
      return;
    }
    setSending(true);
    setSubmitError('');
    try {
      const response = await fetch(submissionUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), rating, feedback: feedback.trim(), source: 'Johnson Basketball Parent Portal' }),
      });
      if (!response.ok) throw new Error('Submission failed');
      setView(rating >= 4 ? 'SUCCESS' : 'THANKS');
    } catch {
      setSubmitError('We could not submit your concern. Please try again or contact Johnson Basketball Training directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white', borderRadius: '40px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
        
        {/* HEADER SECTION */}
        <div style={{ backgroundColor: '#1b4ba3', height: '180px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <img src="/logo.png" style={{ height: '80px', width: 'auto', marginBottom: '10px' }} alt="Logo" />
          <p style={{ color: '#bfdbfe', fontSize: '10px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>Sugar Land, TX // Parent Portal</p>
        </div>

        <div style={{ padding: '40px', textAlign: 'center' }}>
          {view === 'RATING' && (
            <>
              <h2 style={{ color: '#1e293b', fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>How was your experience today with Johnson Basketball Training?</h2>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => handleRating(star)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '36px', color: rating >= star ? '#f8961e' : '#e2e8f0' }}>★</button>
                ))}
              </div>
<input 
  type="text" 
  placeholder="Parent Name" 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
  style={{ width: '100%', marginTop: '20px', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} 
/>
<input 
  type="email" 
  placeholder="Parent Email" 
  value={email} 
  onChange={(e) => setEmail(e.target.value)} 
  style={{ width: '100%', marginTop: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} 
/>
<textarea 
  placeholder="Share your feedback..." 
  value={feedback} 
  onChange={(e) => setFeedback(e.target.value)} 
  style={{ width: '100%', marginTop: '10px', height: '80px', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} 
/>
{submitError && <p role="alert" style={{ color: '#b91c1c', fontSize: '13px' }}>{submitError}</p>}
<button type="button" onClick={submitMediation} disabled={sending} style={{width:'100%', marginTop:'14px', backgroundColor:'#1b4ba3', color:'white', padding:'14px', border:0, borderRadius:'10px', cursor:'pointer', fontWeight:'bold'}}>{sending ? 'Submitting…' : 'Submit Feedback'}</button>
</>
          )}

          {view === 'SUCCESS' && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ backgroundColor: '#f0fdf4', color: '#15803d', padding: '20px', borderRadius: '16px', fontSize: '14px', marginBottom: '24px', lineHeight: '1.6', textAlign: 'center', margin: '0 10px' }}>
                Thank you for sharing your feedback. We're glad to hear your athlete had a positive experience with Johnson Basketball Training in Sugar Land. As a local program, community support is vital to our success. Would you consider sharing your feedback by leaving a review on Google?
              </div>
              <div style={{ padding: '0 10px' }}>
                <a href="https://g.page/r/CVumqZ4s3ItIEBM/review" target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', backgroundColor: '#1b4ba3', color: 'white', textAlign: 'center', padding: '18px 0', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase', fontSize: '14px' }}>
                  Post on Google
                </a>
              </div>
            </div>
          )}

         
{view === 'PRIVATE' && (
  <div style={{ textAlign: 'center' }}>
    <p style={{
      fontSize: '14px',
      color: '#64748b',
      marginBottom: '15px',
      padding: '0 10px'
    }}>
      We are sorry to hear your experience wasn't a 5-star one.
      We value your feedback and would like to understand how
      we can improve. Please share your thoughts with us privately
      below so our coaching staff can address them directly.
    </p>

    <input
      type="text"
      placeholder="Parent Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: '12px',
        marginBottom: '12px',
        border: '1px solid #e2e8f0',
        borderRadius: '12px'
      }}
    />

    <input
      type="email"
      placeholder="Parent Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: '12px',
        marginBottom: '12px',
        border: '1px solid #e2e8f0',
        borderRadius: '12px'
      }}
    />

    <textarea
      placeholder="How can we improve?"
      value={feedback}
      onChange={(e) => setFeedback(e.target.value)}
      required
      style={{
        width: '100%',
        boxSizing: 'border-box',
        height: '100px',
        padding: '12px',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        marginBottom: '20px',
        fontSize: '14px'
      }}
    />

    {submitError && <p role="alert" style={{ color: '#b91c1c', fontSize: '13px' }}>{submitError}</p>}
    <button
      type="button"
      onClick={submitMediation}
      disabled={sending}
      style={{
        width: '100%',
        backgroundColor: '#0f172a',
        color: 'white',
        padding: '16px 0',
        borderRadius: '12px',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {sending ? 'Submitting…' : 'Submit Privately'}
    </button>
    <p style={{ fontSize: '12px', color: '#64748b', marginTop: '18px' }}>
      You can also <a href="https://g.page/r/CVumqZ4s3ItIEBM/review" target="_blank" rel="noopener noreferrer">share an honest Google review</a> at any time. This is optional and separate from your private concern.
    </p>
  </div>
)}


          {view === 'DEMO_THANKS' && (
            <div style={{textAlign:'center'}}>
              <h3>Demo Complete</h3>
              <p>Your rating and details passed the form validation. This is a preview only: no feedback was sent to Johnson Basketball.</p>
              <button onClick={() => {setView('RATING'); setRating(0); setName(''); setEmail(''); setFeedback('');}} style={{padding:'12px', cursor:'pointer'}}>Test Again</button>
            </div>
          )}

          {view === 'THANKS' && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>✅</div>
              <h3 style={{ color: '#0f172a', margin: '0 0 10px 0' }}>Feedback Received</h3>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>Thank you for helping us improve Johnson Basketball Training. Your concern has been submitted for follow-up by our coaching staff.</p>
              <button onClick={() => { setView('RATING'); setRating(0); }} style={{ background: 'none', border: 'none', color: '#1b4ba3', textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold' }}>Back to Home</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
