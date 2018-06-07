let functions = require('firebase-functions');
exports.pom = functions.https.onRequest((request, response) => {
    let result;
    const leaveType = request.body.queryResult.parameters['leave_type'];
    const type = request.body.queryResult.intent.displayName;
    console.log(request.body);
    console.log(request.body.queryResult.intent.displayName);
    if (type === "Test") {
        switch (leaveType) {
            case "ลากิจ":
                result = "แน่ะ ๆ จะแอบไปเที่ยวไหนหรอ";
                break;
            case "ลาป่วย":
                result = "ป่วยหรอออ แย่จังเลยยย";
                break;
            case "ลาพักร้อน":
                result = "โอ้ทะเลแสนงานนนนน";
                break;
            default:
                result = "ลาไรของแกเนี่ย";
                break;
        }
    }
    else {
        result = "พูดอะไรของแกอะ";
    }
    response.json({ fulfillmentText: result });
});
//# sourceMappingURL=index.js.map