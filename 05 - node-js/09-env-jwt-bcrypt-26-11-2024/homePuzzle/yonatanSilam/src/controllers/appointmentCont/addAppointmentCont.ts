import appointmentModel, { IAppointment } from "../../models/appointmentModel";

export async function addAppointment(req: any, res: any) {
  try {
    const { userID, serviceProviderID, date, startTime, endTime } = req.body;
    const overLapAM = await checkAM(
      serviceProviderID,
      date,
      startTime,
      endTime
    );
    if (!overLapAM)
      return res.status(400).send({ error: "the aM is occupied" });
    
    const result = await appointmentModel.create({
      userID,
      serviceProviderID,
      date,
      startTime,
      endTime,
      status: "pending",
    });

    if (!result) {
      return res.status(400).send({ error: "Couldn't create new AM!" });
    }

    return res.status(201).send({ message: "AM was created successfully!" });
  } catch (error) {
    console.error("error");
    return res.status(500).send({ error });
  }
}
async function checkAM(
  serviceProviderID: any,
  date: any,
  startTime: any,
  endTime: any
): Promise<boolean> {

  console.log("start");
  const allAM: IAppointment[] = await appointmentModel.find({
    serviceProviderID,
    date,
  });
  if (!allAM) {
    console.log("true");
    return true;
  }

  console.log(`allAm:${allAM}`);

  if (allAM.find((am) => (am.startTime == startTime))) {
    console.log("false1");
    return false;
  }

  const soonerAM: IAppointment[] = allAM.filter(
    (aM) => aM.startTime < startTime
  );
  console.log(`soonerAm:${soonerAM}`);

  if (soonerAM.find((aM) => aM.endTime > startTime)) {
    console.log("false2");
    return false;
  }

  const afterAM: IAppointment[] = allAM.filter(
    (aM) => aM.startTime > startTime
  );
  console.log(`afterAM:${afterAM}`);
  if (afterAM.find((aM) => aM.startTime < endTime)) {
    console.log("false3");
    return false;
  } else return true;
}
