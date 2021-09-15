<script>
info="<!DOCTYPE html>
<html>
  <head>
    <meta charset=&#34;UTF-8&#34; />
    <meta name=&#34;viewport&#34; content=&#34;width=1440, maximum-scale=1.0&#34; />
    <link rel=&#34;shortcut icon&#34; type=&#34;image/png&#34; href=&#34;https://animaproject.s3.amazonaws.com/home/favicon.png&#34; />
    <meta name=&#34;og:type&#34; content=&#34;website&#34; />
    <meta name=&#34;twitter:card&#34; content=&#34;photo&#34; />
    <link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;css/add.css&#34; />
    <link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;css/styleguide.css&#34; />
    <link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;css/globals.css&#34; />
    <meta name=&#34;author&#34; content=&#34;AnimaApp.com - Design to code, Automated.&#34; />
  </head>
  <body style=&#34;margin: 0; background: #ffffff&#34;>
    <input type=&#34;hidden&#34; id=&#34;anPageName&#34; name=&#34;page&#34; value=&#34;add&#34; />
    <div class=&#34;container-center-horizontal&#34;>
      <form class=&#34;add screen&#34; name=&#34;form4&#34; action=&#34;form4&#34; method=&#34;post&#34;>
        <div class=&#34;rectangle-2-XnUIER&#34;></div>
        <div class=&#34;rectangle-1-XnUIER&#34;></div>
        <div class=&#34;contact1-XnUIER&#34;>
          <div class=&#34;rectangle-6-opK1u4 border-1px-silver&#34;></div>
          <img class=&#34;nounexpand1369881-2-opK1u4&#34; src=&#34;img/noun-expand-1369881-2@2x.svg&#34; />
          <img class=&#34;nounedit857941-2-opK1u4&#34; src=&#34;img/noun-edit-857941-2@2x.svg&#34; />
          <img class=&#34;noun-delete1123162-2-opK1u4&#34; src=&#34;img/noun-delete-1123162-2@2x.svg&#34; />
          <div class=&#34;contact-name-opK1u4 valign-text-middle roboto-normal-black-16px&#34;>Contact’ Name</div>
        </div>
        <div class=&#34;contact1-DFxb5C&#34;>
          <div class=&#34;rectangle-6-cS1Ekt border-1px-silver&#34;></div>
          <img class=&#34;nounexpand1369881-2-cS1Ekt&#34; src=&#34;img/noun-expand-1369881-2@2x.svg&#34; />
          <img class=&#34;nounedit857941-2-cS1Ekt&#34; src=&#34;img/noun-edit-857941-2@2x.svg&#34; />
          <img class=&#34;noun-delete1123162-2-cS1Ekt&#34; src=&#34;img/noun-delete-1123162-2@2x.svg&#34; />
          <div class=&#34;contact-name-cS1Ekt valign-text-middle roboto-normal-black-16px&#34;>Contact’ Name</div>
        </div>
        <div class=&#34;logout-XnUIER valign-text-middle roboto-normal-black-16px&#34;>Logout</div>
        <a href=&#34;javascript:SubmitForm(&#39;form4&#39;)&#34;>
          <div class=&#34;addbutton-XnUIER&#34;>
            <div class=&#34;rectangle-4-ede341&#34;></div>
            <div class=&#34;bill-out-ede341 valign-text-bottom roboto-normal-white-16px&#34;>Bill Out</div>
          </div></a
        ><img class=&#34;line-1-XnUIER&#34; src=&#34;img/line-1@1x.svg&#34; />
        <div class=&#34;rectangle-7-XnUIER&#34;></div>
        <div class=&#34;savebutton-XnUIER&#34;>
          <div class=&#34;rectangle-4-clN9Pk&#34;></div>
          <div class=&#34;save-clN9Pk valign-text-bottom roboto-normal-white-16px&#34;>Save</div>
        </div>
        <div class=&#34;name-XnUIER valign-text-middle roboto-normal-black-16px&#34;>Name</div>
        <div class=&#34;number-XnUIER valign-text-middle roboto-normal-black-16px&#34;>Number</div>
        <img class=&#34;line-3-XnUIER&#34; src=&#34;img/line-3@2x.svg&#34; />
        <a href=&#34;dashboard.html&#34;><img class=&#34;logo-XnUIER&#34; src=&#34;img/logo@2x.png&#34; /> </a>
        <p class=&#34;user-id-000-000-0000-XnUIER valign-text-middle roboto-normal-white-16px&#34;>User ID: 000 000 0000</p>
        <div class=&#34;edit-profile-XnUIER valign-text-middle roboto-normal-white-16px&#34;>Edit Profile</div>
        <div class=&#34;add-contact-XnUIER valign-text-middle&#34;>Add Contact</div>
        <input class=&#34;nameinput-XnUIER&#34; name=&#34;3_15635&#34; placeholder=&#34;Enter Name&#34; type=&#34;text&#34; required /><input
          class=&#34;numberinput-XnUIER&#34;
          name=&#34;3_15644&#34;
          placeholder=&#34;Number_input&#34;
          type=&#34;text&#34;
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