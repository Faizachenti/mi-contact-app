<script>
info="<!DOCTYPE html>
<html>
  <head>
    <meta charset=&#34;UTF-8&#34; />
    <meta name=&#34;viewport&#34; content=&#34;width=1440, maximum-scale=1.0&#34; />
    <link rel=&#34;shortcut icon&#34; type=&#34;image/png&#34; href=&#34;https://animaproject.s3.amazonaws.com/home/favicon.png&#34; />
    <meta name=&#34;og:type&#34; content=&#34;website&#34; />
    <meta name=&#34;twitter:card&#34; content=&#34;photo&#34; />
    <link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;css/login.css&#34; />
    <link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;css/styleguide.css&#34; />
    <link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;css/globals.css&#34; />
    <meta name=&#34;author&#34; content=&#34;AnimaApp.com - Design to code, Automated.&#34; />
  </head>
  <body style=&#34;margin: 0; background: #ffffff&#34;>
    <input type=&#34;hidden&#34; id=&#34;anPageName&#34; name=&#34;page&#34; value=&#34;login&#34; />
    <div class=&#34;container-center-horizontal&#34;>
      <form class=&#34;login screen&#34; name=&#34;form1&#34; action=&#34;form1&#34; method=&#34;post&#34;>
        <div class=&#34;rectangle-5-b8DrbD&#34;></div>
        <div class=&#34;forgot-password-b8DrbD valign-text-bottom roboto-normal-white-12px&#34;>
          <span
            ><span class=&#34;span0-MtHxgG roboto-normal-black-12px&#34;>Forgot </span
            ><span class=&#34;span1-MtHxgG&#34;>password</span>
          </span>
        </div>
        <div class=&#34;user-id-b8DrbD roboto-normal-black-16px&#34;>User ID</div>
        <div class=&#34;password-b8DrbD roboto-normal-black-16px&#34;>Password</div>
        <div class=&#34;rectangle-1-b8DrbD&#34;></div>
        <h1 class=&#34;title-b8DrbD&#34;>Login</h1>
        <a href=&#34;register.html&#34;
          ><p class=&#34;if-you-do-not-h-ccount-register-b8DrbD valign-text-bottom roboto-normal-white-12px&#34;>
            <span
              ><span class=&#34;span0-phZmqs roboto-normal-black-12px&#34;>If you do not have account, </span
              ><span class=&#34;span1-phZmqs&#34;>Register</span>
            </span>
          </p></a
        ><a href=&#34;javascript:SubmitForm(&#39;form1&#39;)&#34;>
          <div class=&#34;loginbutton-b8DrbD&#34;>
            <div class=&#34;rectangle-4-DUR9dy&#34;></div>
            <a href=&#34;http://Dashboard&#34; onclick=&#34;window.event.stopPropagation()&#34; target=&#34;_blank&#34;
              ><div class=&#34;login-DUR9dy valign-text-bottom roboto-normal-white-16px&#34;>Login</div></a
            >
          </div></a
        ><input class=&#34;input-b8DrbD&#34; name=&#34;3_15159&#34; placeholder=&#34;Enter user ID&#34; type=&#34;text&#34; required /><input
          class=&#34;input-6IRkXs&#34;
          name=&#34;3_15167&#34;
          placeholder=&#34;Input&#34;
          type=&#34;password&#34;
          required
        />
        <div class=&#34;rectangle-2-b8DrbD&#34;></div>
        <img class=&#34;logo-b8DrbD&#34; src=&#34;img/logo@2x.png&#34; />
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