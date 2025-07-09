require('dotenv').config(); // includes the env file in the system process
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {HoldingsModel} = require("../backend/model/HoldingsModel");
const {PositionsModel} = require("../backend/model/PositionsModel");
const {OrdersModel} = require('./model/OrdersModel');
const { UserModel } = require('./model/UserModel');
const bcrypt = require('bcrypt');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL; //database url 
const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.get('/addPositions', async(req,res)=>{
//   let tempPositions = [
//       {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       },
//     ];
//     tempPositions.forEach((item)=>{
//       let newPosition = new PositionsModel({
//           product: item.product,
//           name: item.name,
//           qty: item.qty,
//           avg: item.avg,
//           price: item.price,
//           net: item.net,
//           day: item.day,
//           isLoss: item.isLoss,
//       });
//       newPosition.save();
//     });
//     res.send("done");
// });
// app.get('/addHoldings',async(req,res)=>{
//   let tempHoldings = [
//       {
//         name: "BHARTIARTL",
//         qty: 2,
//         avg: 538.05,
//         price: 541.15,
//         net: "+0.58%",
//         day: "+2.99%",
//       },
//       {
//         name: "HDFCBANK",
//         qty: 2,
//         avg: 1383.4,
//         price: 1522.35,
//         net: "+10.04%",
//         day: "+0.11%",
//       },
//       {
//         name: "HINDUNILVR",
//         qty: 1,
//         avg: 2335.85,
//         price: 2417.4,
//         net: "+3.49%",
//         day: "+0.21%",
//       },
//       {
//         name: "INFY",
//         qty: 1,
//         avg: 1350.5,
//         price: 1555.45,
//         net: "+15.18%",
//         day: "-1.60%",
//         isLoss: true,
//       },
//       {
//         name: "ITC",
//         qty: 5,
//         avg: 202.0,
//         price: 207.9,
//         net: "+2.92%",
//         day: "+0.80%",
//       },
//       {
//         name: "KPITTECH",
//         qty: 5,
//         avg: 250.3,
//         price: 266.45,
//         net: "+6.45%",
//         day: "+3.54%",
//       },
//       {
//         name: "M&M",
//         qty: 2,
//         avg: 809.9,
//         price: 779.8,
//         net: "-3.72%",
//         day: "-0.01%",
//         isLoss: true,
//       },
//       {
//         name: "RELIANCE",
//         qty: 1,
//         avg: 2193.7,
//         price: 2112.4,
//         net: "-3.71%",
//         day: "+1.44%",
//       },
//       {
//         name: "SBIN",
//         qty: 4,
//         avg: 324.35,
//         price: 430.2,
//         net: "+32.63%",
//         day: "-0.34%",
//         isLoss: true,
//       },
//       {
//         name: "SGBMAY29",
//         qty: 2,
//         avg: 4727.0,
//         price: 4719.0,
//         net: "-0.17%",
//         day: "+0.15%",
//       },
//       {
//         name: "TATAPOWER",
//         qty: 5,
//         avg: 104.2,
//         price: 124.15,
//         net: "+19.15%",
//         day: "-0.24%",
//         isLoss: true,
//       },
//       {
//         name: "TCS",
//         qty: 1,
//         avg: 3041.7,
//         price: 3194.8,
//         net: "+5.03%",
//         day: "-0.25%",
//         isLoss: true,
//       },
//       {
//         name: "WIPRO",
//         qty: 4,
//         avg: 489.3,
//         price: 577.75,
//         net: "+18.08%",
//         day: "+0.32%",
//       },
//     ];

//     tempHoldings.forEach((item)=>{
//       let newHolding = new HoldingsModel({
//           name:item.name,
//           qty:item.qty,
//           avg:item.avg,
//           price:item.price,
//           net:item.net,
//           day:item.day,
//       });
//       newHolding.save();
//     });
//     res.send("done");
// });

app.get('/allHoldings', async(req,res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get('/allPositions', async(req,res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get('/allOrders', async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();

  // Update holdings if it's a BUY order
  if (req.body.mode === 'BUY') {
    const holding = await HoldingsModel.findOne({ name: req.body.name });
    const qty = Number(req.body.qty);
    const price = Number(req.body.price);
    if (holding) {
      // Update avg price: weighted average
      const totalQty = holding.qty + qty;
      const newAvg = ((holding.avg * holding.qty) + (price * qty)) / totalQty;
      holding.qty = totalQty;
      holding.avg = newAvg;
      holding.price = price;
      await holding.save();
    } else {
      // Create new holding
      const newHolding = new HoldingsModel({
        name: req.body.name,
        qty: qty,
        avg: price,
        price: price,
        net: '+0%',
        day: '+0%'
      });
      await newHolding.save();
    }
  }

  res.send("Order saved!");
});

// Signup route
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    try {
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User already exists.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
        res.status(200).json({ message: 'Login successful.' });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

app.listen(PORT,()=>{
    console.log("App started");
    mongoose.connect(uri);
    console.log("db connected");
});

