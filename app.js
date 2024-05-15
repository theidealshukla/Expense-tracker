let totalExpense = 0;
        const itemInput = document.getElementById('itemInput');
        const expenseInput = document.getElementById('expenseInput');
        const addItemBtn = document.getElementById('itembtn');
        const clearAllBtn = document.getElementById('clearbtn');
        const totalExpenseSpan = document.getElementById('totalexpense');
        const expenseList = document.getElementById('expenseList');

        addItemBtn.addEventListener('click', addItem);
        clearAllBtn.addEventListener('click', clearAll);

        
        window.addEventListener('load', loadData);

        function addItem() {
            const itemName = itemInput.value.trim();
            const expenseAmount = parseFloat(expenseInput.value);

            if (itemName && !isNaN(expenseAmount)) {
                const listItem = document.createElement('li');
                listItem.textContent = `${itemName}: ₹${expenseAmount.toFixed(2)}`;
                expenseList.appendChild(listItem);

                totalExpense += expenseAmount;
                totalExpenseSpan.textContent = totalExpense.toFixed(2);

                saveData();

                itemInput.value = '';
                expenseInput.value = '';
            } else {
                alert('Please enter a valid item name and expense amount.');
            }
        }

        function clearAll() {
            totalExpense = 0;
            totalExpenseSpan.textContent = '0';
            expenseList.innerHTML = '';
            localStorage.removeItem('expenses');
        }

        function saveData() {
            const expenseData = {
                total: totalExpense,
                items: Array.from(expenseList.children).map(item => item.textContent)
            };
            localStorage.setItem('expenses', JSON.stringify(expenseData));
        }

        function loadData() {
            const expenseData = JSON.parse(localStorage.getItem('expenses'));
            if (expenseData) {
                totalExpense = expenseData.total;
                totalExpenseSpan.textContent = totalExpense.toFixed(2);
                expenseData.items.forEach(item => {
                    const listItem = document.createElement('li');
                    listItem.textContent = item;
                    expenseList.appendChild(listItem);
                });
            }
        }


const listItem = document.createElement('li');
listItem.textContent = `${itemName}: ₹${expenseAmount.toFixed(2)}`;
expenseList.appendChild(listItem);
