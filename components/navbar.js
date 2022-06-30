let navbar = () => {
  return `      <div id="nb-p1">
        <ul id="navbar-main1">
          <li class="nb-em-hover">
            <div>
              <a id="nb-em-hover" href="#">EMAIL SIGN UP</a>
              <div class="e-content" id="nb-e-content">
                <div id="nb-pop-close-div">
                  <button id="nb-pop-close">X</button>
                </div>
                <h3>SIGN UP NOW</h3>
                <p id="nb-su-text">
                  Sign up for emails and be the first to know about exclusive
                  offers, pre-sales, new collections and more.
                </p>
                <label for="email" id="nb-em-warn"
                  >Please enter your email address.</label
                >
                <br />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  id="nb-email"
                />
                <div class="nb-em-hover-p">
                  <p>We love birthdays</p>
                  <p>
                    Tell us your birthday and we'll send you a special surprise
                    on your big day.
                  </p>
                </div>
                <select name="month">
                  <option value="">MONTH</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select name="day">
                  <option value="">DAY</option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>
                <div class="nb-em-hover-p">
                  <p>
                    By clicking "Submit", I agree to the Bobbi Brown
                    <a href="#">Terms and Conditions</a> and
                    <a href="#">Privacy Policy.</a>
                  </p>
                </div>
                <button id="ec-submit">SUBMIT</button>
              </div>
            </div>
          </li>
        </ul>
        <div id="navbar-main2">
          <a href="./index.html">
            <img
              id="nb-logo"
              src="https://www.bobbibrowncosmetics.com/media/export/cms/logo.png"
              alt=""
            />
          </a>
        </div>
        <div id="navbar-main3">
          <div id="nb-join">
            <a id="nb-join-hover" href="#">JOIN BBACCESS</a>
            <div id="e-content1">
              <div id="e-content1-1">
                <div id="nb-m3-p1">
                  <img
                    src="https://www.bobbibrowncosmetics.com/media/export/cms/Intrusive%20Popup/BB-Loyalty-Popup-img.jpg"
                  />
                </div>
                <div id="nb-m3-p2">
                  <div id="nb-m3-close-div">
                    <button id="nb-m3-close">X</button>
                  </div>
                  <h3>Want 15% Off ?</h3>
                  <p>
                    Join BB Access to save on your first order and start earning
                    points and perks.
                  </p>
                  <p id="nb-join-em-warn">
                    Please enter email address in the following format:
                    jane@gmail.com
                  </p>
                  <input type="email" id="nb-join-email" placeholder="EMAIL" />
                  <div id="nb-join-sp1">
                    <button id="nb-join-email-check">JOIN</button>
                    <a href="#">LEARN MORE</a>
                  </div>
                  <div id="nb-join-tc">
                    <a href="#">TERMS AND CONDITIONS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="nb-m3-icons" class="nb-sticky">
            <div>
              <i class="fa-solid fa-location-pin"></i>
            </div>
            <div id="nb-register-main">
              <i id="nb-register-hover" class="fa-solid fa-user"></i>
              <div id="nb-register">
                <div id="nb-register-sub">
                  <div id="nb-register-close-div">
                    <button id="nb-register-close">X</button>
                  </div>
                  <div id="nb-reg-log-div">
                    <div>
                      <div id="nb-reg">
                        <h4>Login</h4>
                        <div id="nb-reg-login">
                          <div>
                            <input
                              id="nb-reg-login-email"
                              type="email"
                              placeholder="EMAIL"
                            />
                            <br />
                            <input
                              id="nb-reg-login-pass"
                              type="password"
                              placeholder="PASSWORD"
                            />
                          </div>
                        </div>
                        <a href="#">Forgot Password</a>
                        <br />
                        <button id="nb-reg-login-check">LOG IN</button>
                      </div>

                      <div id="nb-reg1">
                        <h4>Register</h4>
                        <div id="nb-reg-login1">
                          <div>
                            <input
                              id="nb-reg-login-email1"
                              type="email"
                              placeholder="EMAIL"
                            />
                            <br />
                            <input
                              id="nb-reg-login-pass1"
                              type="password"
                              placeholder="PASSWORD"
                            />
                          </div>
                        </div>
                        <input type="checkbox" id="nb-reg-login1-cb" /> Show
                        password
                        <br />
                        <div>
                          <p>We love birthdays</p>
                          <p>When is your birthday?</p>
                        </div>
                        <select name="month">
                          <option value="">MONTH</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                        <select name="day">
                          <option value="">DAY</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                        <p>
                          Tell us your birthday and we'll send you a special
                          surprise when it comes around!
                        </p>
                        <p><input type="checkbox" id="nb-reg-cb-check">
                          By clicking "Register", I agree to the Bobbi Brown
                          <a href="#">Terms and Conditions</a> and
                          <a href="#">Privacy Policy.</a>
                        </p>
                        <p>
                          Yes, sign me up to hear from Bobbi Brown! To learn
                          more, view our <a href="#">Privacy Policy</a>. If I am
                          a California resident, I agree to the
                          <a href="#">Notice of Financial Incentive</a>.
                        </p>
                        <button id="nb-reg-login-check1">REGISTER</button>
                      </div>
                    </div>
                    <div id="nb-reg-tc">
                      <p>
                        By clicking "CONTINUE WITH FACEBOOK", I agree to the
                        Bobbi Brown <a href="#">Terms and Conditions</a> and
                        <a href="#">Privacy Policy.</a>
                      </p>
                      <br />
                      <p>
                        <input type="checkbox" id="ng-reg-tc-check" /> Yes, sign
                        me up to hear from Bobbi Brown! To learn more, view our
                        Privacy Policy. If I am a California resident, I agree
                        to the <a href="#">Notice of Financial Incentive.</a>
                      </p>
                      <div id="nb-reg-fb-div">
                        <button id="nb-reg-fb">
                          <i class="fa-brands fa-facebook"></i> Continue with
                          Facebook
                        </button>
                      </div>
                    </div>
                  </div>
                  <div id="nb-new-reg">
                    <h5>Don't have an account?</h5>
                    <button id="nb-new-acc-reg">Register now</button>
                  </div>
                  <div id="nb-new-reg1">
                    <h5>Already have an account?</h5>
                    <button id="nb-new-acc-reg1">LOG IN</button>
                  </div>
                  <div id="nb-reg-login-user">
                    <div>
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                        alt=""
                      />
                      <h4>Welcome Back,</h4>
                      <h3 id="nb-user-data"></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <a href="./cart.html">
                <i class="fa-solid fa-basket-shopping"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="nb-p2">
        <div class="nb-sticky" id="nb-query">
          <span id="nb-sticky-icon"
            ><i class="fa-solid fa-magnifying-glass"></i
          ></span>
          <span id="nb-sticky-ip"
            ><input type="text" id="nb-search" placeholder="SEARCH"
          /></span>
        </div>
        <div id="nb-menu">
          <div class="navcontainer nb-sticky">
            <ul class="main-menu">
              <li>
                <a href="./new.html">NEW</a>
                <div class="menu-sub">
                  <div class="menu-sub-inner">
                    <ul class="sub-category">
                      <li>
                        <a href="./new.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/20210811_BB_FY21_LuxeDefiningLipstick_Engage_Product_ShadeRange_NA_GNAV_600x300.jpg"
                              alt=""
                            />
                            <h5>SHOP ALL NEW</h5>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="./new.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/BB_Gnav_PC_Mitigation_BeautyEvent_Glow.jpg"
                              alt=""
                            />
                            <h5>OFFERS & SERVICES</h5>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="./new.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/BB-FY22-MothersDay_Gnav_Giftguide_@2x.jpg"
                              alt=""
                            />
                            <h5>MOTHER'S DAY GIFT GUIDE</h5>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="./new.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/20220215_BB_FY22_LWCSS_ShadeExt_GNAV_Global_Tile.jpg"
                              alt=""
                            />
                            <h5>SHOP LONG-WEAR CREAM SHADOW STICK</h5>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="./fav.html">BESTSELLERS</a>
                <div class="menu-sub">
                  <div class="menu-sub-inner">
                    <ul class="sub-category">
                      <li>
                        <a href="./fav.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/bestsellers/BB-PC-Gnav-Tile-01-B_@2x.jpg"
                              alt=""
                            />
                            <h5>SHOP ALL BESTSELLERS</h5>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="./fav.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/bestsellers/BB-PC-GNAV-LWCSS_450x300_@2x.jpg"
                              alt=""
                            />
                            <h5>LONG-WEAR CREAM SHADOW STICK</h5>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="./fav.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/bestsellers/BB-PC-GNAV-Highlighters_450x300_@2x.jpg"
                              alt=""
                            />
                            <h5>HIGHLIGHTING POWDER</h5>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="./fav.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/bestsellers/BB-PC-Gnav-Tile-04-B_@2x.jpg"
                              alt=""
                            />
                            <h5>GIFTS & SETS</h5>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">FACE</a>
                <div class="menu-sub">
                  <div class="menu-sub-inner">
                    <ul class="sub-category">
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/face/Nagivation-Tiles-Face-PC-SLWW_2_@2x.jpg"
                              alt=""
                            />
                            <h5>
                              DISCOVER SKIN LONG-WEAR WEIGHTLESS FOUNDATION SPF
                              15
                            </h5>
                            <p>Our #1 Foundation Formula now in 42 shades.</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/face/Nagivation-Tiles-Face-Foundation-Finder_2_@2x.jpg"
                              alt=""
                            />
                            <h5>FOUNDATION SHADE FINDER</h5>
                            <p>Discover your perfect shade match.</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/BB_2021_PC_GNAV_NPUF.jpg"
                              alt=""
                            />
                            <h5>SHOP NOW. PAY LATER.</h5>
                            <p>
                              Pay for your purchase in four equal installments,
                              every two weeks with Afterpay.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="sub-menu-main">
                          <a href="#">
                            <h5>FACE</h5>
                          </a>
                          <ul class="sub-menu">
                            <li><a href="#">Foundation</a></li>
                            <li><a href="#">Corrector & Concealer</a></li>
                            <li><a href="#">Primer</a></li>
                            <li><a href="#">Powder</a></li>
                            <li><a href="#">Face Brushes & Tools</a></li>
                            <li><a href="#">Foundation Guide</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="./makeup.html">MAKEUP</a>
                <div class="menu-sub">
                  <div class="menu-sub-inner">
                    <ul class="sub-category">
                      <li>
                        <a href="./makeup.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/BB_PC_Ecomm_Mini_Bar_Gnav.jpg"
                              alt=""
                            />
                            <h5>MINI BAR</h5>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="sub-menu-main">
                          <a href="./makeup.html">
                            <h5>FACE</h5>
                          </a>
                          <ul class="sub-menu">
                            <li><a href="./makeup.html">Foundation</a></li>
                            <li>
                              <a href="./makeup.html">Corrector & Concealer</a>
                            </li>
                            <li><a href="./makeup.html">Primer</a></li>
                            <li><a href="./makeup.html">Powder</a></li>
                            <li>
                              <a href="./makeup.html">Foundation Guide</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div class="sub-menu-main">
                          <a href="#">
                            <h5>LIPS</h5>
                          </a>
                          <ul class="sub-menu">
                            <li><a href="#">Lipstick</a></li>
                            <li><a href="#">Lip Gloss</a></li>
                            <li><a href="#">Lip Liner</a></li>
                            <li><a href="#">Lip Balms & Tints</a></li>
                            <li><a href="#">Lip Guide</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div class="sub-menu-main">
                          <a href="#">
                            <h5>EYES</h5>
                          </a>
                          <ul class="sub-menu">
                            <li><a href="#">Eye Shadow</a></li>
                            <li><a href="#">Brows</a></li>
                            <li><a href="#">Eyeliner</a></li>
                            <li><a href="#">Mascara</a></li>
                            <li><a href="#">Eye Shadow Guide</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div class="sub-menu-main">
                          <a href="#">
                            <h5>CHEEKS</h5>
                          </a>
                          <ul class="sub-menu">
                            <li><a href="#">Highlight & Glow</a></li>
                            <li><a href="#">Blush</a></li>
                            <li><a href="#">Bronzer</a></li>
                            <li><a href="#">Glow Guide</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div class="sub-menu-main">
                          <a href="#">
                            <h5>MORE</h5>
                          </a>
                          <ul class="sub-menu">
                            <li><a href="#">Gifts & Sets</a></li>
                            <li><a href="#">Brushes & Tools</a></li>
                            <li><a href="#">Beach Fragrance</a></li>
                            <li><a href="#">Last Chance</a></li>
                            <li><a href="#">Virtual Try-on</a></li>
                            <li><a href="#">e-Gift Card</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="./skincare.html">SKINCARE</a>
                <div class="menu-sub">
                  <div class="menu-sub-inner">
                    <ul class="sub-category">
                      <li>
                        <a href="./skincare.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/skincare/Nagivation-Tiles-Skincare-Best-Sellers_@2x.jpg"
                              alt=""
                            />
                            <h5>VITAMIN ENRICHED FACE BASE</h5>
                            <p>
                              This cult favorite is the perfect prep for
                              foundation.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="./skincare.html">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/skincare/BB-PC-GNAV-Skincare_Bestsellers_600x300_@2x.jpg"
                              alt=""
                            />
                            <h5>OUR BEST SELLERS</h5>
                            <p>Shop moisturizers, serums & more</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="sub-menu-main">
                          <a href="./skincare.html">
                            <h5>SKINCARE</h5>
                          </a>
                          <ul class="sub-menu">
                            <li><a href="./skincare.html">Moisturizers</a></li>
                            <li><a href="./skincare.html">Serums & Treatment</a></li>
                            <li><a href="./skincare.html">Cleansers & Toner</a></li>
                            <li><a href="./skincare.html">Lip & Eye Care</a></li>
                            <li><a href="./skincare.html">SPF</a></li>
                            <li><a href="./skincare.html">Skincare Guide</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div class="sub-menu-main">
                          <a href="#">
                            <h5>CONCERN</h5>
                          </a>
                          <ul class="sub-menu">
                            <li><a href="#">Extra Moisture & Repair</a></li>
                            <li><a href="#">Wrinkle Treatment</a></li>
                            <li><a href="#">Pore & Blemishes</a></li>
                            <li><a href="#">Redness & Irritation</a></li>
                            <li><a href="#">Dullness & Discoloration</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">VIRTUAL SERVICE</a>
                <div class="menu-sub">
                  <div class="menu-sub-inner">
                    <ul class="sub-category">
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/BB_PC_GNAV_Virtual_Artistry_Consultations_Holiday_@2x.jpg"
                              alt=""
                            />
                            <h5>VIRTUAL CONSULTATIONS</h5>
                            <p>
                              Book complimentary video sessions with a top
                              artist for makeup tips and tutorials tailored just
                              to you.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/BB-PC-GNAV-VTO_600x300_@2x.jpg"
                              alt=""
                            />
                            <h5>VIRTUAL TRY-ON</h5>
                            <p>
                              Find your perfect foundation, lip, and eye shades
                              with our easy-to-use tool.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/learn/Navigation-Tiles-Discover-Howtos_@2x.gif"
                              alt=""
                            />
                            <h5>HOW TO</h5>
                            <p>
                              Explore our artists' tools and tips to get your
                              best look.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="sub-menu-main">
                          <a href="#">
                            <h5>MORE</h5>
                          </a>
                          <ul class="sub-menu">
                            <li><a href="#">View All Services</a></li>
                            <li><a href="#">Our Artistry Experts</a></li>
                            <li><a href="#">Camera-Ready Filters</a></li>
                            <li><a href="#">Live Stream Videos</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">DISCOVER</a>
                <div class="menu-sub">
                  <div class="menu-sub-inner">
                    <ul class="sub-category">
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/BB_GNAV_Tout_04_LastChance.jpg"
                              alt=""
                            />
                            <h5>PRODUCT GUIDES</h5>
                            <p>
                              Take the guesswork out of your beauty routine with
                              our curated guides for makeup and skincare.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/face/Nagivation-Tiles-Face-Foundation-Finder_2_@2x.jpg"
                              alt=""
                            />
                            <h5>FOUNDATION SHADE FINDER</h5>
                            <p>Discover your perfect shade match.</p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div>
                            <img
                              src="https://www.bobbibrowncosmetics.com/media/export/cms/39-Navigation-Dropdown-Tile-PC_Loyalty_2x.jpg"
                              alt=""
                            />
                            <h5>BBACCESS</h5>
                            <p>
                              Join today and get 15% OFF your first order plus
                              free shipping every day.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <div>
                            <video width="100%" autoplay muted loop>
                              <source
                                src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/20210420_BB_FY21_Citizenship&Sustainability_GNAV_Hub.mp4"
                                type="video/mp4"
                              />
                            </video>
                            <h5>DO GOOD</h5>
                            <p>
                              See how we're showing up to make things more
                              beautiful.
                            </p>
                          </div>
                        </a>
                      </li>
                      <li>
                        <div class="sub-menu-main">
                          <a href="#">
                            <h5>DISCOVER MORE</h5>
                          </a>
                          <ul class="sub-menu">
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Our Artistry Experts</a></li>
                            <li><a href="#">Pretty Powerful Fund</a></li>
                            <li><a href="#">Ingredients Glossary</a></li>
                            <li><a href="#">Bobbi Brown Community</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>`;
};

export { navbar };
