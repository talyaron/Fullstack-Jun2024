"use strict";
exports.__esModule = true;
exports.ServiceProviderModel = exports.ProviderSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ProviderSchema = new mongoose_1.Schema({
    name: {
        require: true,
        type: String
    },
    workDate: {
        require: true,
        type: Date
    }
});
exports.ServiceProviderModel = mongoose_1.model("ServiceProvider", exports.ProviderSchema);
//this is just to create some provider in the data base to work with:
// create();
// async function create(){
//    const newProvider1 = await ServiceProviderModel.create({name:"shlomi",workDate:new Date("2024-11-14")});
//    const newProvider2= await ServiceProviderModel.create({name:"tal",workDate:new Date("2024-11-15")});
//    const newProvider3 = await ServiceProviderModel.create({name:"dor",workDate:new Date("2024-11-16")});
//     console.log(newProvider1,newProvider2,newProvider3);
// }
// newProvider.save()
