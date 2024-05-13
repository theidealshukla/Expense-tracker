const listItem = document.createElement('li');
listItem.textContent = `${itemName}: ₹${expenseAmount.toFixed(2)}`;
expenseList.appendChild(listItem);