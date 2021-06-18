const mongoose = require("../services/mongodb.service").mongoose;
const isAlphanumeric = require("validator").isAlphanumeric,
    isEmail = require("validator").isEmail;

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
            validate: [isAlphanumeric, "Only letters and numbers are permitted"]
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: "Email address is required",
            validate: [isEmail, "Email address must be a valid email"]
        },
        password: {
            type: String,
            required: "Password is required"
        },
        lolUsername: {
            type: String,
            trim: true,
            required: true
        },
        pronouns: {
            type: String,
            trim: true,
            required: true
        }
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

userSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
userSchema.set("toJSON", {
    virtuals: true
});

userSchema.findById = function (cb) {
    return this.model("Users").find({ id: this.id }, cb);
};

const User = mongoose.model("Users", userSchema);

exports.findByEmail = (email) => {
    return User.find({ email: email });
};

exports.findByLoLUserName = (lolUsername) => {
    return User.findOne({
        lolUsername: { $regex: new RegExp(lolUsername, "i") }
    }).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
};

exports.findByLoLUserNameSafe = (lolUsername) => {
    return User.findOne({
        lolUsername: { $regex: new RegExp(lolUsername, "i") }
    }).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        delete result.email;
        delete result.password;
        delete result.username;

        return result;
    });
};

exports.findById = (id) => {
    return User.findById(id).then((result) => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result;
    });
};

exports.createUser = (userData) => {
    const user = new User(userData);

    return user.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        User.find()
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, users) {
                if (err) {
                    reject(err);
                } else {
                    resolve(users);
                }
            });
    });
};

exports.patchUser = (id, userData) => {
    return User.findOneAndUpdate(
        {
            _id: id
        },
        userData
    );
};

exports.removeById = (userId) => {
    return new Promise((resolve, reject) => {
        User.deleteMany({ _id: userId }, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(err);
            }
        });
    });
};
