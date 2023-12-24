import Script from "next/script"


export default function Shop() {
  return (
    <>
      <h1>Black Baby Onesie Short Sleeve with Pink Logo (New born)</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </p>

      <img
        src="https://img.commercelayer.io/skus/TSHIRTMS000000FFFFFFLXXX.png?fm=jpg&q=90"
      />

      <div
        id="clayer-config"
        data-base-url="https://npv.commercelayer.io"
        data-cache="true"
        data-client-id="p6ORapwkPqpCcP0LKOPrAziwZzNTJWz7Sdiy_mj1vkk"
        data-market-id="market:16567"
        data-country-code="US"
        data-language-code="en"
        data-cart-url="https://execlog.com/cart"
        data-return-url="https://execlog.com/return"
        data-privacy-url="https://execlog.com/privacy"
        data-terms-url="https://execlog.com/terms"
        data-dev-settings-debug="true"
        data-dev-settings-console="true"
        data-dev-settings-trace="true"
      ></div>

      <Script id="drop-in"
              type="text/javascript"
              src="https://cdn.jsdelivr.net/npm/@commercelayer/js-dropin@1.5.14/lib/index.js"
      ></Script>
    </>
  )
}