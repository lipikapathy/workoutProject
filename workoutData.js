const { WorkoutModel } = require('./schemas/workoutlist');

async function getWorkOutList() {
    try {
        let getWorkList = await WorkoutModel.findAll();
        return getWorkList;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}
// Noticeable change in function parameters, there is no callback
exports.handler = async (event) => {
    let workList = await getWorkOutList();
    let responseData = JSON.stringify(workList);
    return responseData;
}