const Product = require('../models/Product');
const Cart = require('../models/Cart');

exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        let cart = await Cart.findOne({ userId: req.user._id}); // _id or id?
        if (cart) {
            const itemIndex = cart.items.findIndex(item => item.productId === productId);
            if (itemIndex > -1) {
                cart.items[itemIndex].quantity += quantity;
            } else {
                cart.items.push({ productId, quantity });
            }
            await cart.save();
            return res.status(200).json(cart);
        } else {
            const newCart = await Cart.create({
                userId: req.user._id,
                items: [{ productId, quantity }]
            });
            return res.status(201).json(newCart);
        }
    } catch (error) {   
        res.status(500).json({ message: error.message });
    }
}

exports.updateCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const cart = await Cart.findOne({ userId: req.user._id });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        const item = cart.items.find(item => item.productId === productId);
        if (item) {
            item.quantity = quantity;
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: 'Product not found in cart' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// @route   DELETE /cart/:id
exports.removeFromCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({ userId: req.user.id });
        cart.items = cart.items.filter(p => p.productId != req.params.id);
        await cart.save();
        res.json({ message: "Item removed", cart });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};