const mongoose = require('mongoose');
const express = require('express')
const app = express()
//const mongoURI = 'mongodb://127.0.0.1:27017/FoodHub'
const cors = require('cors');
const mongoURI = 'mongodb+srv://sonuamandeep99:Akaur1399@foodhub.obwelvo.mongodb.net/FoodHub?retryWrites=true&w=majority'


mongoose.set('strictQuery', true);

app.use(cors(
    {
        origin : ["http://foodie-api.vercel.app"],
        methods: ['POST','GET'],
        credentials: true
    }
));
            

const mongoDB = async () => {

    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, result) => {
        if (err) console.log("---", err);
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {

                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function (err, catData) {

                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;

                    }

                })
                // if(err) console.log("---",err);
                // else {
                //     global.food_items = data;

                // }
            })
        }
    });

    /*return mongoose.connect(mongoURI,{useNewUrlParser: true})
    .then(() => console.log("connection is successful...."))
    .catch((err)=> console.log(err));*/
}


module.exports = mongoDB;
