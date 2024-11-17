import { model, Schema } from "mongoose";


export const ProviderSchema = new Schema(
    {
        name:
        {
            require:true,
            type:String,
        },
        workDate:
        {
            require:true,
            type:Date,
        }
    }
);

export const ServiceProviderModel = model("ServiceProvider",ProviderSchema);

//this is just to create some provider in the data base to work with:
// create();
// async function create(){
//    const newProvider1 = await ServiceProviderModel.create({name:"shlomi",workDate:new Date("2024-11-14")});
//    const newProvider2= await ServiceProviderModel.create({name:"tal",workDate:new Date("2024-11-15")});
//    const newProvider3 = await ServiceProviderModel.create({name:"dor",workDate:new Date("2024-11-16")});

//     console.log(newProvider1,newProvider2,newProvider3);

// }
// newProvider.save()
