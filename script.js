document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('msg').textContent = "✅ Thank you! Your order has been placed successfully.";
    this.reset();
});