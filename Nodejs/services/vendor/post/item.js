
const Items_Post = require("../../../models/vendor/post/item")
const Users = require("../../../models/users")



const findById = async (id) => {
  return await Items_Post.findById(id);
}

const findAll = async () => {
  return await Items_Post.find();
}


const create = async (req) => {
   
    const { title, category_beds, category_filters, category_includeds, location, desc} = req.body;
    
    try {
    
        const createdCate = await Items_Post.create({title, category_beds, category_filters, category_includeds, location, desc});
        return {success: true, data:createdCate};
    } catch (err) {
        return {success: false, err: err}
    }
  
}

const update = async (req) => {
  try {
    const {title, category_beds, category_filters, category_includeds, location, desc } = req.body;
    const { id } = req.params;

    //update data
    const item = await Items_Post.findById(id);
    item.title = title;
    item.category_beds = category_beds;
    item.category_filters = category_filters;
    item.category_includeds = category_includeds;
    item.location = location;
    item.desc = desc;

    await item.save();
    return { success: true, data: item }

  } catch (err) {
    return { success: false, err: err}
    
  }
}

const remove = async (id) => {
    try {
        const retDelete = await Items_Post.deleteOne({"_id": id});
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