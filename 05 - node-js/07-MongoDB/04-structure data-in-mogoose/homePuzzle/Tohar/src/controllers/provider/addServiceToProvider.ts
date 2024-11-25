import { providerModel } from "../../models/ProviderModel";
import { serviceModel } from "../../models/ServiceModel";

export function addServiceToProvider(req: any, res: any) {
    const {id, serviceId} = req.body;

    providerModel.findOne({id: id}).then(provider => {
        if (provider) {
            serviceModel.findOne({id: serviceId}).then(service => {
                if (service) {
                    const serviceToAdd = provider.ServiceId.push(serviceId);
                    res.json(serviceToAdd);
                }
            })
        }
    }).catch(err => {

    });
};