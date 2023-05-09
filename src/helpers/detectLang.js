import { useState, useEffect } from 'react';

function KeyboardDetector() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code.startsWith('Key')) {
        console.log(`Pressed key: ${event.code}`);
        if (
          event.code === 'KeyQ' ||
          event.code === 'KeyW' ||
          event.code === 'KeyE' ||
          event.code === 'KeyR' ||
          event.code === 'KeyT' ||
          event.code === 'KeyA' ||
          event.code === 'KeyS' ||
          event.code === 'KeyD' ||
          event.code === 'KeyH' ||
          event.code === 'KeyF'
        ) {
          setLang('uk');
        } else {
          setLang('en');
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  console.log(lang);

  return;
}
