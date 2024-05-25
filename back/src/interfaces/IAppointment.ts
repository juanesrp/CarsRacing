interface IAppointment {
  id: number;
  date: string;
  time: string;
  status: "active" | "cancelled";
  userId: number;
}

export default IAppointment;
