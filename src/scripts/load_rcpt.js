const loadRCPT = (callback) => {
  const existingScript = document.getElementById('grcpt');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js?render=6LdZCu0hAAAAANZEwD1yqWyAACzSw7iVIkVTUONv';
    script.id = 'grcpt';
    document.body.appendChild(script);
    script.onload = () => { 
      if (callback) callback();
    };
  }
  if (existingScript && callback) callback();
};
export default loadRCPT;