import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        unique: true,
        required: [true, 'E-Mail is required']
    },
    password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('User', UserSchema);
