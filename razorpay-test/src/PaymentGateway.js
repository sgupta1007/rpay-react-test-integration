export default async function displayRazorpay() {
  const data = await fetch("http://localhost:1338/razorpay", {
    method: "POST",
  }).then((t) => t.json());

  console.log(data);

  const options = {
    key: 'rzp_test_6c4mD5LOMmd8P3',
    currency: data.currency,
    amount: data.amount,
    name: "Learn Code Online",
    description: "Wallet Transaction",
    image: "http://localhost:1337/logo.png",
    order_id: data.id,
    handler: function (response) {
      alert("PAYMENT ID ::" + response.razorpay_payment_id);
      alert("ORDER ID :: " + response.razorpay_order_id);
    },
    prefill: {
      name: "DEMO",
      email: "demo@gmail.com",
      contact: "9876542310",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
