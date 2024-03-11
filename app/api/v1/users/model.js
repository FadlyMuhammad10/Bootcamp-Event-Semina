const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { model, Schema } = mongoose;

let usersSchema = Schema(
  {
    name: {
      type: String,
      minlength: 3,
      maxLength: 50,
      required: [true, "Nama harus diisi"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email harus diisi"],
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password harus diisi"],
    },
    role: {
      type: String,
      enum: ["admin", "owner", "organizer"],
      default: "admin",
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: "Organizer",
      required: true,
    },
  },
  { timestamps: true }
);

usersSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    // jika user isinya password
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

usersSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = model("User", usersSchema);
