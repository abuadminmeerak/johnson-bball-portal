import React from 'react';

const GHL_FORM_URL = 'https://api.leadconnectorhq.com/widget/form/tKHjTmv0RVdmBm3fecNI';

const App: React.FC = () => (
  <main style={{ minHeight: '100vh', backgroundColor: '#f1f5f9', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '24px 12px', fontFamily: 'Arial, sans-serif' }}>
    <section style={{ width: '100%', maxWidth: '520px', backgroundColor: '#fff', borderRadius: '28px', boxShadow: '0 20px 25px -5px rgba(0,0,0,.1)', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
      <header style={{ backgroundColor: '#1b4ba3', padding: '30px 18px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
        <img src="/logo.png" alt="Johnson Basketball Training" style={{ width: 'auto', maxWidth: '85%', height: '80px', objectFit: 'contain' }} />
        <p style={{ color: '#bfdbfe', fontSize: '11px', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>Sugar Land, TX // Parent Portal</p>
      </header>
      <div style={{ padding: '24px 14px 14px' }}>
        <h1 style={{ color: '#1e293b', fontSize: '20px', textAlign: 'center', margin: '0 10px 8px' }}>Share Your Experience</h1>
        <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.5, textAlign: 'center', margin: '0 10px 18px' }}>Your feedback helps Johnson Basketball Training improve. Please complete the form below.</p>
        <iframe
          src={GHL_FORM_URL}
          title="Johnson Basketball Training Parent Feedback Form"
          id="inline-tKHjTmv0RVdmBm3fecNI"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-activation-type="alwaysActivated"
          data-deactivation-type="neverDeactivate"
          data-form-name="Form 1"
          data-height="913"
          data-layout-iframe-id="inline-tKHjTmv0RVdmBm3fecNI"
          data-form-id="tKHjTmv0RVdmBm3fecNI"
          style={{ width: '100%', height: '1040px', border: 'none', borderRadius: '8px', display: 'block' }}
          loading="eager"
        />
      
      </div>
    </section>
  </main>
);

export default App;
