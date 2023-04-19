const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY1);

router.post("/payment", (req, res) => {
    stripe.charges.create(
        {
            source: req.body.toknId,
            amount: req.body.amount,
            currency: "sss",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
              res.status(500).json(stripeErr);
            } else {
              res.status(200).json(stripeRes);
            }
          }
        );
      });
      
      module.exports = router;