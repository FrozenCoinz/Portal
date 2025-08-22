// Modal setup
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");

  // Text content for your legal pages
const texts = {
  terms: `
    <h2>Terms of Service</h2>
    <p>FrozenCoinz is an independent marketplace for Hypixel Skyblock items and coins. 
    We are not affiliated with Mojang, Microsoft, or Hypixel.</p>
    <ul>
      <li>You must be 18+, or 13+ with parental permission, to use our service.</li>
      <li>Products are digital and carry risks (e.g., account bans). We are not responsible for third-party actions.</li>
      <li>Prices and availability may change; suspicious or undeliverable orders may be canceled.</li>
      <li>Delivery is usually fast but times are estimates only.</li>
      <li>Refunds follow our Refund Policy.</li>
      <li>Service is provided “as is” with limited liability up to the order amount.</li>
      <li>Misuse (fraud, harassment, rule-breaking) may lead to termination.</li>
    </ul>
    <p>German law governs these terms. Disputes are handled in Berlin courts without limiting consumer rights.</p>
    <p>Contact: <a href="https://discord.gg/Y6N8Z5dfFT" target="_blank">Discord</a></p>
  `,
  privacy: `
    <h2>Privacy Policy</h2>
    <p>We collect only what’s needed: Discord ID, Minecraft IGN, and order/payment details. 
    Payments are handled by third-party processors; we do not store card data.</p>
    <ul>
      <li>Data is used for orders, delivery, support, fraud prevention, and legal obligations.</li>
      <li>We keep data only as long as necessary.</li>
      <li>Some providers may process data outside the EU under safeguards.</li>
      <li>EU/EEA users have rights: access, correction, deletion, restriction, portability, and complaint.</li>
    </ul>
    <p>For privacy requests, contact us via 
    <a href="https://discord.gg/Y6N8Z5dfFT" target="_blank">Discord</a>.</p>
  `,
  refund: `
    <h2>Refund Policy</h2>
    <ul>
      <li>Cancel before delivery for a full refund.</li>
      <li>If delivery cannot be completed, you will be refunded in full.</li>
      <li>After confirmed delivery, refunds are not given except when required by law or in rare cases (e.g., misdescription).</li>
      <li>Always contact us first via Discord before opening a payment dispute.</li>
    </ul>
    <p>Refunds are issued to the original payment method. Processing times depend on your Payment Method used.</p>
    <p>Contact: <a href="https://discord.gg/Y6N8Z5dfFT" target="_blank">Discord</a></p>
  `
};


  // Open modal
  window.openModal = (type, e) => {
      if (e) e.preventDefault(); // stop the "#" scroll
        content.innerHTML = texts[type] || "<p>No content available.</p>";
        modal.style.display = "flex";
    
    content.innerHTML = texts[type] || "<p>No content available.</p>";
    modal.style.display = "flex";
  };

  // Close modal
  window.closeModal = (e) => {
    modal.style.display = "none";
  };
});
