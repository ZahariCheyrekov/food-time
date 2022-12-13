import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Meal'
        }
    ]
});

const CartSchema = mongoose.model('Cart', cartSchema);
export default CartSchema;