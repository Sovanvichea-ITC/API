

const Category_Filter = require("../../../models/vendor/category/filter")
const Users = require("../../../models/users")



const findById = async (id) => {
  return await Category_Filter.findById(id);
}

const findAll = async () => {
  return await Category_Filter.find();
}


const create = async (req) => {
    const { name, imageUrl, desc } = req.body;
    
    try {
         const existed = await Category_Filter.findOne({ name });
        if (existed) {
            throw "fliter is already existed~";
        }
        const createdCate = await Category_Filter.create({name,imageUrl,desc});
        return {success: true, data:createdCate};
    } catch (err) {
        return {success: false, err: err}
    }
  
}

const update = async (req) => {
  try {
    const { name , imageUrl, desc } = req.body;
    const { id } = req.params;

    
    const existed = await Category_Filter.findOne({ name });
     if (existed) {
            throw "included is already existed~";
    }
    //update data
    const include = await Category_Filter.findById(id);
    include.name = name;
    include.imageUrl = imageUrl;
    include.desc = desc;

    await include.save();
    return { success: true, data: include }

  } catch (err) {
    return { success: false, err: err}
    
  }
}

const remove = async (id) => {
    try {
        const retDelete = await Category_Filter.deleteOne({"_id": id});
        if (retDelete) {
            return {success: true, data: retDelete};
        } else {
            return {success: false, error: "User's id does not exist"};
        }
    } catch (err) {
        return {success: false, error: err};
    }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}