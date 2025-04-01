import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Voiceflow integration
function loadVoiceflowWidget() {
  const script = document.createElement('script');
  script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
  script.type = "text/javascript";
  script.onload = () => {
    window.voiceflow.chat.load({
      verify: { projectID: '67e34b4c3a103c371011953e' },
      url: 'https://general-runtime.voiceflow.com',
      versionID: 'production',
      voice: {
        url: "https://runtime-api.voiceflow.com"
      },
    });
  };
  document.body.appendChild(script);
}

// Call the function to load the widget
loadVoiceflowWidget();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
