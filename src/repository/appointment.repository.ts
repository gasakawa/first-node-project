import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/appointment.model';

class AppointmentRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public create(provider: string, date: Date): Appointment {
    const appointment = new Appointment(provider, date);
    this.appointments.push(appointment);
    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const appointmentFound = this.appointments.find(appointment => isEqual(date, appointment.date));
    return appointmentFound || null;
  }
}

export default AppointmentRepository;
