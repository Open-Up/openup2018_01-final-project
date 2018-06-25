const util = require('util'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

function BaseSchema() {
    Schema.apply(this, arguments);
    this.add({
        date: {
            type: Date,
            default: new Date(),
            required: true
        },
        access: {   // List of token that is able to see information
            type: [
                {
                    id: String   // Token of people, who can see information.
                }
            ]
        },
        createAt: {
            type: Date,
            required: true,
            default: new Date()
        },
        update: {
            type: [
                {
                    time: Date,
                    updateBy: String
                }
            ]
        }
    });
}
util.inherits(BaseSchema, Schema);
module.exports = BaseSchema;