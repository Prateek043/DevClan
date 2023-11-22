const Contact = require('../model/Contact');

const handleContact = async (req, res) => {
    const { fname,lname,email, phone,message } = req.body;
    if (!fname || !lname  || !email || !phone || !message) return res.status('Something is missing');
try{
    await Contact.create({
        fname,
        lname,
        email,
        phone,
        message,
      });
  
      res.status(201).json(`Thank You For Contacting Us`);
    } catch (err) {
      console.log("error");
      res.status(500).json(err.message);
    }
};

module.exports ={handleContact};

