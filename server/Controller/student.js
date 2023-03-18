import users from "../models/schema.js";

export const createstudent = async (req, res) => {
    const data = new users({
        Name: req.body.Name,
        Course: req.body.Course,
        Email: req.body.Email,
        Contact: req.body.Contact,
    });

    console.log(data.Name);
    await data.save();
    res.status(200).json(data);
};

export const getstudent = async (req, res) => {
    const getall = await users.find();
    res.status(200).json(getall);
};

export const updatestudent = async (req, res) => {
    const update = await users.findByIdAndUpdate(
      { _id: req.body._id },
      {
        $set: {
          Name: req.body.Name,
          Course: req.body.Course,
          Email: req.body.Email,
          Contact: req.body.Contact,
        },
      },
      { new: true }
    );
    res.status(200).json(update);
  };
  
  export const deletestudent = async (req, res) => {
    await users.findByIdAndDelete(req.params.id);
    res.status(200).json("Student deleted Successfully");
  };
  
