// Sends the contact form to FormTango without leaving the page.
// Until you replace YOUR_FORM_ID in index.html, it runs in demo mode.
(function () {
  var form = document.querySelector('form[data-contact]');
  if (!form) return;
  var status = form.querySelector('[data-status]');
  var button = form.querySelector('button[type="submit"]');
  var label = button.textContent;

  function say(text, kind) {
    status.textContent = text;
    status.dataset.kind = kind;
    status.hidden = false;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
      say('Demo mode: add your FormTango form id in index.html and this form will send for real.', 'info');
      return;
    }
    button.disabled = true;
    button.textContent = 'Sending…';
    fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) })
      .then(function (response) { return response.json().then(function (body) { if (!response.ok || !body.ok) throw body; }); })
      .then(function () { form.reset(); say(form.dataset.success || 'Thanks! Your message has been sent.', 'ok'); })
      .catch(function (body) { say((body && body.error) || 'Something went wrong. Please try again.', 'error'); })
      .then(function () { button.disabled = false; button.textContent = label; });
  });
})();

// Light / dark switch. Remembers the choice on this device.
(function () {
  var toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    var next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
