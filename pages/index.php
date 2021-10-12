<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../assets/css/main.css">
        <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap" rel="stylesheet">
        <link rel="shortcut icon" type="image/png" href="../assets/img/logo.png">
        <title>Typemaster</title>
    </head>
    <body>

        <div class="home-grid">

            <header class="grid__row header">
                <div class="grid__col header__left-box">
                    <a href="">
                        <img src = "../assets/img/logo.png" alt = "Logo" class = "logo">
                    </a>
                    <button class="btn--users" onclick="window.location.href = '' +
                     'users.php/';">
                        <span class="iconify" data-icon="bx:bxs-user" style="color: #5b657f;" data-width="40" data-height="40"></span>
                    </button>

                </div>
                <nav class="grid__col header__right-box">
                    <button id="popup-su__button-open" class="btn--gray rounded-sm"> Sign Up</button>
                    <button id="pre-order-button-top" class="btn--gray rounded-sm" onclick="window.location.href = '#anchor-custom';"> Pre-Order Now</button>
                    <form autocomplete="off" id="search-container">
                        <input type="text" class="search-input" onKeyUp="showResults(this.value)" />
                        <div class="autocomplete-box rounded autocomplete-box--inactive"></div>
                    </form>
                </nav>
            </header>

            <div class="grid__row section-about gap-sm-r">
                <div class="grid__col section-about__cta">
                    <h1 class="heading-primary">
                        Typemaster <br>
                        Keyboard
                    </h1>
                    <p class="paragraph">
                        Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.
                    </p>
                    <div class="section-about__cta__area ">
                        <button class="btn btn--orange rounded-sm" onclick="window.location.href = '#anchor-custom';">
                            Pre-Order Now
                        </button>
                        <div class="section-about__cta__area__info">
                            Release On 5/27
                        </div>
                    </div>
                </div>
                <div class="grid__col section-about__img-box">
                    <img src = "../assets/img/keyboard_main.png" alt = "Keyboard Main" c/></div>
                <div class="grid__col section-about__shape-box">
                    <div class="box--rounded-left"></div>
                </div>
            </div>

            <div class="grid__row section-qualities">
                <div class="grid__col section-qualities__shape-box">
                    <div class="box--rounded-right"></div>
                </div>
                <div class="grid__col section-qualities__img-box-1">
                    <img src = "../assets/img/keyboard_side-1.png" alt = "Keyboard Side 1" c/></div>
                <div class="grid__col section-qualities__img-box-2 gap-sm-r">
                    <img src = "../assets/img/keyboard_side-2.png" alt = "Keyboard Side 2" c/></div>

                <div class="grid__col section-qualities__text-box">
                    <h2 class="heading-secondary">
                        Mechanical <br />
                        Wireless <br />
                        Keyboard
                    </h2>
                    <p class="paragraph">
                        The Typemaser keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.
                    </p>
                </div>
            </div>

            <div class="grid__row section-usps">
                <div class="grid__col icon-box-1">
                    <div class="icon-box__bg rounded">
                        <span class="iconify" data-icon="bi:display-fill" data-inline="false" style="color: #fff;"></span>
                    </div>

                    <h3 class="heading-tertiary">Highly <br />Comptabible</h3>
                    <p class="paragraph"> Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed</p>
                </div>
                <div class="grid__col icon-box-2">
                    <div class="icon-box__bg rounded">
                        <span class="iconify" data-icon="bx:bx-bluetooth" data-inline="false" style="color: #fff;"></span>
                    </div>
                    <h3 class="heading-tertiary">Wireless<br /> With Bluetooth</h3>
                    <p class="paragraph">
                        Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.
                    </p>
                </div>
                <div class="grid__col icon-box-3 ">
                    <div class="icon-box__bg rounded">
                        <span class="iconify" data-icon="typcn:battery-full" data-inline="false" style="color: #fff;"></span>
                    </div>
                    <h3 class="heading-tertiary">High Capacity <br />Battery</h3>
                    <p class="paragraph">
                        Equipped with a long-lasting-built-in battery, you'll never have to spend a dime on replaceable ones. Enjoy 50 hours of usage time between charges.
                    </p>
                </div>
                <div class="grid__col icon-box-4">
                    <div class="icon-box__bg rounded">
                        <span class="iconify" data-icon="heroicons-solid:light-bulb" data-inline="false" style="color: #fff;"></span>
                    </div>
                    <h3 class="heading-tertiary"> RGB Backlit <br />Modes</h3>
                    <p class="paragraph">
                        Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps ypu type in low light conditions.
                    </p>
                </div>
            </div>
            <div class="custom-heading">
                <h2 id="anchor-custom" class="heading-custom heading-secondary">
                    Customize your package
                </h2>
            </div>

            <div class="grid__row section-custom">
                <p id="row-head-layout" class="row-head"> Keyboard Layout</p>
                <div id="custom-layout" class="grid__sub-row">
                    <figure class="img-box">
                        <img src="../assets/img/Layout_QWERTZ.png" alt="Layout 1"/>
                        <figcaption> QWERTZ</figcaption>
                    </figure>
                    <figure class="img-box">
                        <img src="../assets/img/Layout_QWERTY.png" alt="Layout 2"/>
                        <figcaption> QWERTY</figcaption>
                    </figure>
                    <figure class="img-box">
                        <img src="../assets/img/Layout_Dvorak.png" alt="Layout 3"/>
                        <figcaption> Dvorak</figcaption>
                    </figure>
                    <figure class="img-box">
                        <img src="../assets/img/Layout_Colemak.png" alt="Layout 4"/>
                        <figcaption> Colemak</figcaption>
                    </figure>
                </div>
                <p id="row-head-switch" class="row-head"> Switch Type</p>
                <div id="custom-switch" class="grid__sub-row">
                    <figure class="img-box">
                        <img src="../assets/img/Cherry_MX_Black.jpg" alt="Switch 1"/>
                        <figcaption> Cherry MX Black</figcaption>
                    </figure>
                    <figure class="img-box">
                        <img src="../assets/img/Cherry_MX_Blue.jpg" alt="Switch 2"/>
                        <figcaption> Cherry MX Blue</figcaption>
                    </figure>
                    <figure class="img-box">
                        <img src="../assets/img/Cherry_MX_Brown.jpg" alt="Switch 3"/>
                        <figcaption> Cherry MX Brown</figcaption>
                    </figure>
                    <figure class="img-box">
                        <img src="../assets/img/Cherry_MX_Red.jpg" alt="Switch 4"/>
                        <figcaption> Cherry MX Red</figcaption>
                    </figure>
                </div>
                <p id="row-head-extra" class="row-head"> Extras</p>
                <div id = "custom-extra-mouse" class="grid__sub-row">
                    <figure class="img-box" data-cust-type="mouse" data-price = "40">
                        <img src="../assets/img/Extra_Wireless_Mouse.jpg" alt="Extra Mouse 1"/>
                        <figcaption> Wireless Mouse - 40€</figcaption>
                    </figure>
                    <figure class="img-box" data-cust-type="mouse" data-price = "30">
                        <img src="../assets/img/Extra_Wired_Mouse.jpg" alt="Extra Mouse 2"/>
                        <figcaption> Wired Mouse - 30€</figcaption>
                    </figure>

                </div>
                <div id = "custom-extra-other" class="grid__sub-row">
                    <figure class="img-box" data-price = "10">
                        <img src="../assets/img/Extra_Mousepad.jpg" alt="Extra Other 1"/>
                        <figcaption> Mousepad - 10€ (optional)</figcaption>
                    </figure>
                    <figure class="img-box" data-price = "50">
                        <img src="../assets/img/Extra_Lighting.jpg" alt="Extra Other 2"/>
                        <figcaption> Lighting - 50€ (optional)</figcaption>
                    </figure>
                </div>
                <div class="summary-row">
                    <button id= "confirm-select-btn"class="btn btn--orange rounded-sm grayed-out" onclick="summarizeOrder()">
                        Confirm Selection
                    </button>
                </div>

            </div>


            <footer class="grid__row footer">
                <div class="grid__col footer_copy-right">
                    <span class="bold">Typemaster 2021&nbsp;</span> | All Rights Reserved
                </div>
            </footer>
        </div>
        <iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
        <div class="popup rounded popup" id="popup-su">

                 <form id="sign-up-form" action="../entities/signUpForm.php" target="dummyframe" method="post">
                         <h2 id="sign-up-form__header__heading" class="heading-secondary">Sign Up</h2>
                         <button id="popup-su__button-close">&times;</button>

                         <span data-type="feedback" id="username-feedback"></span>
                         <input id="username" name="username" type="text" placeholder="Username">

                         <span data-type="feedback" id="name-feedback"></span>
                         <input id="first-name" name="first_name" type="text" placeholder="First Name">
                         <input id="last-name" name="last_name" type="text" placeholder="Last Name">

                         <span data-type="feedback" id="email-feedback"></span>
                         <input id="email" name="email" type="email" placeholder="Email Address">

                        <span data-type="feedback" id="tel-number-feedback"></span>
                        <input id="tel-number" name="tel_number" type="tel" placeholder="Telephone Number">

                        <span data-type="feedback" id="password-feedback"></span>
                        <input id="password" name="password" type="password" placeholder="Password">

                         <span data-type="feedback" id="birthday-feedback"></span>
                         <div id="birthday-box__label">
                             Birth date
                         </div>

                         <select required onchange="change_year()" oninvalid="this.setCustomValidity('Please select a month')" oninput="setCustomValidity('')"  name="year" id="year">
                             <option value="" disabled selected hidden>Year</option>
                         </select>

                         <select required onchange="change_month()" oninvalid="this.setCustomValidity('Please select a month')" oninput="setCustomValidity('')"  name="month" id="month">
                             <option value="" disabled selected hidden>Month</option>
                         </select>

                         <select required oninvalid="this.setCustomValidity('Please select a day')" oninput="setCustomValidity('')" name="day" id="day">
                             <option value="" disabled selected hidden>Day</option>
                         </select>

                         <span data-type="feedback" id="gender-feedback"></span>
                         <div id="gender-box__label">
                             Gender
                         </div>
                         <div id= "female-box" class="gender-box__radio-buttons__box">
                             <input required type="radio" name="gender" value="female" id="female__radio"></input>
                             <label for="female__radio" class="label-gender">Female</label>
                         </div>
                         <div id= "male-box" class="gender-box__radio-buttons__box">
                             <input required type="radio" name="gender" id="male__radio" value="male"></input>
                             <label for="male__radio" class="label-gender">Male</label>
                         </div>
                         <div id= "diverse-box" class="gender-box__radio-buttons__box">
                             <input required type="radio" name="gender" id="diverse__radio" value="diverse"></input>
                             <label for="diverse__radio" class="label-gender">Diverse</label>
                         </div>

                         <span data-type="feedback" id="opt-in-feedback"></span>
                         <div id="opt-in-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi consequuntur cum eius eligendi nam nihil obcaecati, sapiente unde voluptatum?</div>
                         <div id="opt-in-box-check">
                             <input id="checkbox" type="checkbox" name="cb">
                             <label for="checkbox">I accept</label>
                         </div>

                         <input id="btnSubmit" class="btn--gray" type='submit' name="btnSubmit" value="Register">

                         <p class="submit-feedback">
                             Thank you for your registration!
                         </p>
                 </form>



             </div>
         </div>

        <div id="overlay" class="overlay overlay"></div>
        <script src="../assets/js/popup-form.js"></script>
        <script src="../assets/js/searchbar.js"></script>
        <script src="../assets/js/keyboard-customization.js"></script>
    </body>
</html>
