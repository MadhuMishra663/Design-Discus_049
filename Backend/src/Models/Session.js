const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Session schema
const SessionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
});

SessionSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('startTime') || this.isModified('endTime')) {
        this.startTime = new Date(this.startTime).toISOString();
        this.endTime = new Date(this.endTime).toISOString();
    }
    next();
});

SessionSchema.methods.toIST = function() {
    const istOffset = 5.5 * 60 * 60 * 1000;
    return {
        title: this.title,
        startTime: new Date(this.startTime.getTime() + istOffset).toISOString(),
        endTime: new Date(this.endTime.getTime() + istOffset).toISOString()
    };
};

const SessionModel = mongoose.model('Session', SessionSchema);

module.exports = { SessionModel };
