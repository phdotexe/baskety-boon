import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//Backend sending requests to the paystack API
const PORT = 3000;
const app = express();
dotenv.config();

app.use(cors({ origin: `${process.env.FRONTEND_URL}` }));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  try {
    const { email, amount } = req.body;
    const paystackResponse = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          amount: amount,
          callback_url: `${process.env.FRONTEND_URL}/payment-callback`,
        }),
      },
    );

    const data = await paystackResponse.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
app.post("/verify/payment", async (req, res) => {
  try {
    const { reference } = req.body;
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      },
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
app.listen(PORT, () => {
  console.log(`Server Listening on Port ${PORT}`);
});
