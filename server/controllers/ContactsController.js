import mongoose from "mongoose";
import User from "../models/UserModel.js";
import Message from "../models/MessagesModel.js";

export const searchContacts = async (request, response, next) => {
  try {
    const { searchTerm } = request.body;

    if (searchTerm === undefined || searchTerm === null) {
      return response.status(400).send("SearchTerm is required");
    }

    const sanitizedSearchTerm = searchTerm.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$g"
    );

    const regex = new RegExp(sanitizedSearchTerm, "i");

    const contacts = await User.find({
      $and: [
        { _id: { $ne: request.userId } },
        {
          $or: [{ firstName: regex }, { lastName: regex }, { email: regex }],
        },
      ],
    });

    return response.status(200).json({ contacts });

    return response.status(200).send("Logged Out");
  } catch (err) {
    console.error("Internal Server Error:", err);
    return response.status(500).send("Internal Server Error");
  }
};

export const getContactsForDMList = async (request, response, next) => {
  try {
    let { userId } = request;
    userId = new mongoose.Types.ObjectId(userId);
    const contacts = await Message.aggregate([
      {
        $match: {
          $or: [],
        },
      },
    ]);

    return response.status(200).json({ contacts });

    return response.status(200).send("Logged Out");
  } catch (err) {
    console.error("Internal Server Error:", err);
    return response.status(500).send("Internal Server Error");
  }
};
