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
    var response = {
        "statusCode": 200,
        "headers": {
            "my_header": "my_value"
        },
        "body": JSON.stringify(workList),
        "isBase64Encoded": false
    };

    return response;
}