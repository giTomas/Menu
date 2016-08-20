(function() {
  "use strict";

  console.log('work');

  const signup          = document.getElementById('js-singup');
  const usernameUsed    = document.getElementById('js-username-used');
  const usernameFree    = document.getElementById('js-username-free');
  const passwordInvalid = document.getElementById('js-password-invalid');

  const handler = (event) => {
    console.log(event);
    event.preventDefault();
  }

  console.log(signup);
  signup.addEventListener('submit', handler, false);

  // signup.addEventListener('submit', (event) => console.log('click'))
    // event.preventDefault();
    // console.log('clicK')

    // const formData = new formData('signup');
    // const password = formData.get('password');
    // const passwordRepeat = formData.get('passwordrepeat');
    // if (password === passwordRepeat) {
      // console.log('password is ok');
      // formData.delete('passwordrepeat');
    // } else {
      // console.log("passwords don't agree")
    // }

  // });




})();
