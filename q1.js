 1.
let orders = [{ id: 1, customer: "Alisha", amount: 500 }];
orders.push({ id: 2, customer: "Rahul", amount: 800 });
console.log("After Create:", orders);
console.log("All Orders:", orders);
orders = orders.map((order) => (order.id === 1 ? { ...order, amount: 700 } : order));
console.log("After Update:", orders);
orders = orders.filter((order) => order.id !== 2);
console.log("After Delete:", orders);

2.
const deliveryCharge = 50;
function calculateOrderTotal(amount) {
  return amount + deliveryCharge;
}
class Order {
  constructor(orderId, customerName) {
    this.orderId = orderId;
    this.customerName = customerName;
  }
}
console.log("deliveryCharge:", deliveryCharge);
console.log("calculateOrderTotal(500):", calculateOrderTotal(500));
console.log("new Order(1, 'Alisha'):", new Order(1, "Alisha"));

 3.
class OrderWithDetails {
  constructor(orderId, customerName, orderAmount) {
    this.orderId = orderId;
    this.customerName = customerName;
    this.orderAmount = orderAmount;
  }

  display() {
    console.log(this.orderId, this.customerName, this.orderAmount);
  }
}
const o1 = new OrderWithDetails(101, "Alisha", 500);
o1.display();

 4
class DeliveryStaff {
  getSalary() {
    throw new Error("getSalary() must be implemented");
  }

  getRole() {
    throw new Error("getRole() must be implemented");
  }
}
class DeliveryAgent extends DeliveryStaff {
  getSalary() {
    return 20000;
  }

  getRole() {
    return "Delivery Agent";
  }
}
class Manager extends DeliveryStaff {
  getSalary() {
    return 40000;
  }

  getRole() {
    return "Manager";
  }
}
const agent = new DeliveryAgent();
console.log(agent.getRole(), agent.getSalary());
const manager = new Manager();
console.log(manager.getRole(), manager.getSalary());

 5. 
class ServiceProvider {
  provideService() {
    console.log("Order delivered successfully");
  }
}
class DeliveryAgentService extends ServiceProvider {}
new DeliveryAgentService().provideService();

 6. 
function getOrderInfo(info) {
  return info;
}
console.log(getOrderInfo("Order Delivered"));
console.log(getOrderInfo(101));
console.log(getOrderInfo(true));

7.
class Restaurant {
  constructor(restaurantName, location, rating) {
    this.restaurantName = restaurantName;
    this.location = location;
    this.rating = rating;
  }

  display() {
    console.log(this.restaurantName, this.location, this.rating);
  }
}
const r1 = new Restaurant("Food Hub", "Mumbai", 4.5);
r1.display();

 8.
class SupportExecutive {
  constructor(name, employeeId, department, experience) {
    this.name = name;
    this.employeeId = employeeId;
    this.department = department;
    this.experience = experience;
  }

  displayInfo() {
    console.log("Name:", this.name);
    console.log("Employee ID:", this.employeeId);
    console.log("Department:", this.department);
    console.log("Experience:", this.experience, "years");
  }
}
const s1 = new SupportExecutive("Alisha", 101, "Support", 2);
s1.displayInfo();
 9.
if (typeof document !== "undefined") {
  const ordersList = document.getElementById("orders");
  if (ordersList) {
    const li = document.createElement("li");
    li.textContent = "Order delivered successfully";
    ordersList.appendChild(li);
  }
}

10.
if (typeof localStorage !== "undefined") {
  const order = { id: 101, customer: "Alisha", amount: 500 };
  localStorage.setItem("order", JSON.stringify(order));
  const data = JSON.parse(localStorage.getItem("order"));
  console.log(data);
}
11.
if (typeof document !== "undefined") {
  const orders = [101, 102, 103, 104];
  const btn = document.getElementById("btn");
  const result = document.getElementById("result");

  if (btn && result) {
    btn.addEventListener("click", function () {
      result.textContent = "Total Orders: " + orders.length;
    });
  }
}

12.
function validateForm() {
  if (typeof document === "undefined") {
    return false;
  }

  const name = document.getElementById("name") ? document.getElementById("name").value : "";
  const email = document.getElementById("email") ? document.getElementById("email").value : "";
  const password = document.getElementById("password") ? document.getElementById("password").value : "";

  if (!/^[A-Za-z ]+$/.test(name)) {
    alert("Name must contain only alphabets");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Enter a valid email");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return false;
  }

  alert("Registration successful");
  return false;
}

13.
if (typeof localStorage !== "undefined") {
  const customer = {
    name: "Alisha",
    email: "alisha@example.com",
    password: "Pass1234",
  };

  if (
    /^[A-Za-z ]+$/.test(customer.name) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email) &&
    customer.password.length >= 8
  ) {
    localStorage.setItem("customer", JSON.stringify(customer));
    console.log("Customer data stored successfully");
  } else {
    console.log("Invalid customer details");
  }
}

 14.
function login() {
  if (typeof localStorage === "undefined" || typeof document === "undefined") {
    return false;
  }

  const saved = JSON.parse(localStorage.getItem("customer") || "null");
  const email = document.getElementById("email") ? document.getElementById("email").value : "";
  const password = document.getElementById("password") ? document.getElementById("password").value : "";

  if (saved && saved.email === email && saved.password === password) {
    alert("Login successful");
  } else {
    alert("Invalid credentials");
  }

  return false;
}

15
let count = 0;
function increment() {
  count += 1;
  if (typeof document !== "undefined") {
    const element = document.getElementById("count");
    if (element) {
      element.textContent = String(count);
    }
  }
}
function decrement() {
  if (count > 0) count -= 1;
  if (typeof document !== "undefined") {
    const element = document.getElementById("count");
    if (element) {
      element.textContent = String(count);
    }
  }
}
function resetCounter() {
  count = 0;
  if (typeof document !== "undefined") {
    const element = document.getElementById("count");
    if (element) {
      element.textContent = String(count);
    }
  }
}

 16
function placeOrder(address) {
  try {
    if (!address) throw new Error("Delivery address is missing");
    console.log("Order placed successfully");
  } catch (error) {
    console.log("Error:", error.message);
  }
}
placeOrder("");
placeOrder("Mumbai");

17.
function checkRestaurant() {
  throw new Error("Restaurant is unavailable");
}
function placeOrderWithCheck() {
  checkRestaurant();
}
try {
  placeOrderWithCheck();
} catch (error) {
  console.log("Order failed:", error.message);
}

18.
function completeOrder() {
  try {
    console.log("Completing order...");
    throw new Error("Delivery failed");
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Order record updated");
  }
}
completeOrder();

19.
class InvalidOrderException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidOrderException";
  }
}
function placeOrderWithAmount(amount) {
  if (amount <= 0) throw new InvalidOrderException("Invalid order amount");
  console.log("Order placed successfully");
}
try {
  placeOrderWithAmount(0);
} catch (error) {
  console.log(error.name + ": " + error.message);
}

20.
function makePayment(amount) {
  if (amount > 50000) throw new Error("Payment limit exceeded");
  console.log("Payment successful:", amount);
}
try {
  makePayment(60000);
} catch (error) {
  console.log(error.message);
}

 21
const calculateBill = (items, deliveryCharge) => items + deliveryCharge;
console.log(calculateBill(500, 50));

22.
const ordersListForUpdate = [500, 600, 700];
const increaseAmounts = function (amounts) {
  return amounts.map((amount) => amount + 100);
};
console.log(increaseAmounts(ordersListForUpdate));

23.
function filterHighValueOrders(orders, limit) {
  return orders.filter((order) => order.amount > limit);
}
const ordersForFilter = [
  { id: 1, amount: 500 },
  { id: 2, amount: 1500 },
  { id: 3, amount: 2000 },
];
console.log(filterHighValueOrders(ordersForFilter, 1000));

24.
const orderRecords = [{ amount: 500 }, { amount: 1000 }, { amount: 1500 }];
const totals = orderRecords.map((order) => order.amount + 50);
console.log("Totals:", totals);
const highValue = orderRecords.filter((order) => order.amount > 1000);
console.log("High Value:", highValue);
const revenue = orderRecords.reduce((sum, order) => sum + order.amount, 0);
console.log("Revenue:", revenue);

25.
function findMostFrequentCustomer(customers) {
  const count = {};

  customers.forEach((customer) => {
    count[customer] = (count[customer] || 0) + 1;
  });

  const names = Object.keys(count);
  if (names.length === 0) return null;

  return names.reduce((mostFrequent, current) => {
    return count[current] > count[mostFrequent] ? current : mostFrequent;
  }, names[0]);
}
const customerOrders = [
  { customer: "Alisha" },
  { customer: "Rahul" },
  { customer: "Alisha" },
  { customer: "Alisha" },
  { customer: "Rahul" },
];
console.log(findMostFrequentCustomer(customerOrders.map((order) => order.customer)));

 26
const customers = ["Alisha", "Rahul", "Priya"];
const [c1, c2, c3] = customers;
console.log(c1, c2, c3);
const restaurant = { name: "Food Hub", location: "Mumbai", rating: 4.5 };
const { name, location, rating } = restaurant;
console.log(name, location, rating);

27.
function checkDeliveryStatus() {
  return new Promise((resolve, reject) => {
    const delivered = true;
    if (delivered) {
      resolve("Order delivered successfully");
    } else {
      reject(new Error("Order delivery failed"));
    }
  });
}
checkDeliveryStatus().then((status) => console.log(status)).catch((error) => console.log(error.message));


28.
async function fetchInvoice() {
  try {
    if (typeof fetch === "undefined") {
      console.log("Fetch is not available in this environment");
      return;
    }

    const response = await fetch();
if (!response.ok) {
      throw new Error("Failed to fetch invoice");
    }

    const invoice = await response.json();
    console.log("Invoice:", invoice);
  } catch (error) {
    console.log(error.message);
  }
}
fetchInvoice();

 29.
function calculateDeliveryCharge(amount, charge = 50) {
  return amount + charge;
}
console.log(calculateDeliveryCharge(500));
console.log(calculateDeliveryCharge(500, 100));

30.
function calculateTotal(...items) {
  return items.reduce((total, price) => total + price, 0);
}
console.log(calculateTotal(100, 200, 300));
console.log(calculateTotal(50, 150, 250, 350));