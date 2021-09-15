<script>
info="<!DOCTYPE html>
<html>
  <head>
    <meta charset=&#34;UTF-8&#34; />
    <meta name=&#34;viewport&#34; content=&#34;width=1440, maximum-scale=1.0&#34; />
    <link rel=&#34;shortcut icon&#34; type=&#34;image/png&#34; href=&#34;https://animaproject.s3.amazonaws.com/home/favicon.png&#34; />
    <meta name=&#34;og:type&#34; content=&#34;website&#34; />
    <meta name=&#34;twitter:card&#34; content=&#34;photo&#34; />
    <link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;css/register.css&#34; />
    <link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;css/styleguide.css&#34; />
    <link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;css/globals.css&#34; />
    <meta name=&#34;author&#34; content=&#34;AnimaApp.com - Design to code, Automated.&#34; />
  </head>
  <body style=&#34;margin: 0; background: #ffffff&#34;>
    <input type=&#34;hidden&#34; id=&#34;anPageName&#34; name=&#34;page&#34; value=&#34;register&#34; />
    <div class=&#34;container-center-horizontal&#34;>
      <form class=&#34;register screen&#34; name=&#34;form2&#34; action=&#34;form2&#34; method=&#34;post&#34;>
        <div class=&#34;rectangle-2-Qolay1&#34;></div>
        <div class=&#34;rectangle-5-Qolay1&#34;></div>
        <div class=&#34;name-Qolay1 roboto-normal-black-16px&#34;>Name</div>
        <div class=&#34;phone-Qolay1 roboto-normal-black-16px&#34;>Phone</div>
        <div class=&#34;password-Qolay1 roboto-normal-black-16px&#34;>Password</div>
        <div class=&#34;rectangle-1-Qolay1&#34;></div>
        <div class=&#34;register-Qolay1&#34;>Register</div>
        <a href=&#34;login.html&#34;
          ><p class=&#34;if-you-do-not-h-ccount-register-Qolay1 valign-text-bottom roboto-normal-white-12px&#34;>
            <span
              ><span class=&#34;span0-EUEb6X roboto-normal-black-12px&#34;>If you do not have account, </span
              ><span class=&#34;span1-EUEb6X&#34;>Register</span>
            </span>
          </p></a
        ><a href=&#34;javascript:SubmitForm(&#39;form2&#39;)&#34;>
          <div class=&#34;loginbutton-Qolay1&#34;>
            <div class=&#34;rectangle-4-UblKKm&#34;></div>
            <div class=&#34;register-UblKKm valign-text-bottom roboto-normal-white-16px&#34;>Register</div>
          </div></a
        ><input class=&#34;input-Qolay1&#34; name=&#34;3_15251&#34; placeholder=&#34;Enter name&#34; type=&#34;text&#34; required /><input
          class=&#34;input-SVfk6o&#34;
          name=&#34;3_15252&#34;
          placeholder=&#34;Enter number&#34;
          type=&#34;number&#34;
          required
        /><input class=&#34;input-8KUxSO&#34; name=&#34;3_15253&#34; placeholder=&#34;Enter password&#34; type=&#34;password&#34; required /><img
          class=&#34;logo-Qolay1&#34;
          src=&#34;img/logo@2x.png&#34;
        />
      </form>
    </div>
    <script>
      /* Copyright (c) 2016 Tobias Buschor https://goo.gl/gl0mbf | MIT License https://goo.gl/HgajeK */

      if (!HTMLFormElement.prototype.reportValidity) {
        HTMLFormElement.prototype.reportValidity = function () {
          if (this.checkValidity()) return true;
          var btn = document.createElement(&#34;button&#34;);
          this.appendChild(btn);
          btn.click();
          this.removeChild(btn);
          return false;
        };
      }

      function SubmitForm(form_name) {
        var form = document.getElementsByName(form_name)[0];
        if (form.reportValidity()) {
          form.submit();
          if (window.submitted) window.submitted();
        }
      }
    </script>
  </body>
</html>
"

document.write(info)
</script>