import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: { type: String, required: true },
    password: { type: String, required: true }
});


export default mongoose.model('User', UserSchema);
