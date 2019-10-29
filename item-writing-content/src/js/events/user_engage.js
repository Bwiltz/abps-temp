import $ from 'jquery';
import { bus } from 'partybus';

const loadUserEngage = ({name, email}) => {
  window.civchat = {
    apiKey: 'OTa2Ye',
    name: name,
    email: email
  };
  loadRemoteUE();
}

const loadRemoteUE = () => {
  let scriptEl = document.createElement('script');
  scriptEl.src = 'https://innovativeecmo.user.com/widget.js';
  scriptEl.async = false;
  scriptEl['data-cfasync'] = false;
  document.head.appendChild(scriptEl);
}

bus.on("actor::found", loadUserEngage);