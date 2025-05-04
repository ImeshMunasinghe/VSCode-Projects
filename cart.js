const cart = [
    { id: 1, name: 'T-shirt', price: 20.00, quantity: 2 },
    { id: 2, name: 'Jeans', price: 40.00, quantity: 1 },
  ];
  
  function updateCartUI() {
    const tbody = document.querySelector('#cart-items tbody');
    const totalElement = document.getElementById('total-price');
    tbody.innerHTML = '';
    let total = 0;
  
    cart.forEach((item, index) => {
      const subtotal = item.price * item.quantity;
      total += subtotal;
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>
          <input type="number" min="1" value="${item.quantity}" 
                 onchange="updateQuantity(${index}, this.value)">
        </td>
        <td>$${subtotal.toFixed(2)}</td>
        <td><button onclick="removeItem(${index})">Remove</button></td>
      `;
      tbody.appendChild(row);
    });
  
    totalElement.textContent = total.toFixed(2);
  }
  
  function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    updateCartUI();
  }
  
  function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
  }
  
  document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // You can redirect or send cart to server here
  });
  
  updateCartUI();
  