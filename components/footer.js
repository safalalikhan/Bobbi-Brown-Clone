let footer = () => {
  return `
    <ul id="footer-list">
        <li>
          <ul>
            <li><h4 class="fsh">NEED HELP ?</h4></li>
            <li><a href="#">Chat with an Artist</a></li>
            <li><a href="#">Text An Artist</a></li>
            <li><a href="#">Call Us (877)-310-9222</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">FAQS</a></li>
            <li><a href="#">Careers</a></li>
            <li>
              <div>
                <select id="countries" name="countries">
                  <option>Choose a Location</option>
                </select>
              </div>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li><h4 class="fsh">MY BOBBI BROWN</h4></li>
            <li><a href="#">BB Access</a></li>
            <li><a href="#">My Account</a></li>
            <li><a href="#">My Orders</a></li>
            <li><a href="#">Store Locator</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li>
              <input type="text" placeholder="ENTER YOUR EMAIL" id="fl-i-1" />
              <p>
                By entering my email and clicking "Sign Up", I agree to hear
                from Bobbi Brown, and If I am a California resident, I agree to
                the <a href="#">Notice of Financial Incentive</a>. To learn
                more, view our <a href="#">Privacy Policy</a>
              </p>
            </li>
            <li>
              <input
                type="number"
                placeholder="ENTER YOUR MOBILE PHONE"
                id="fl-i-2"
              />
              <p>
                <input type="checkbox" id="fl-i-2-cb" /> I’d like to receive
                recurring advertising text messages (SMS and MMS) from Bobbi
                Brown. I understand these text messages may be sent via an
                autodialer, that consent is not required to purchase goods from
                Bobbi Brown, and that I can opt-out any time by replying STOP to
                the text message I receive from Bobbi Brown. I can text HELP for
                more information. Msg and data rates may apply. If I am a
                California resident, I agree to the
                <a href="#">Notice of Financial Incentive</a>. To learn more,
                view our <a href="#">Privacy Policy.</a>
              </p>
            </li>
            <li>
              <button>SUBMIT</button>
            </li>
            <li>
              <h4 class="fsh">FOLLOW US</h4>
              <div class="fl-icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-pinterest"></i>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div id="footer-creds">
        <div id="fc-cr">
          <p>
            © Bobbi Brown Professional Cosmetics, Inc. All worldwide rights
            reserved.
          </p>
        </div>
        <div id="fc-tc">
          <div>
            <p>
              <a href="#">Terms & Conditions</a>
            </p>
            <p>
              <a href="#">California Do Not Sell My Personal Information</a>
            </p>
            <p>
              <a href="#">Accessibility</a>
            </p>
          </div>
          <div>
            <p>
              <a href="#">Interest Based Ads</a>
            </p>
            <p>
              <a href="#">Privacy Policy</a>
            </p>
          </div>
          <div id="fc-tc-imgdiv">
            <img
              id="fc-tc-img"
              src="https://www.bobbibrowncosmetics.com/media/images/global/bobbi_access_icon.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
  `;
};

export { footer };