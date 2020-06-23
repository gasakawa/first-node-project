import { Router, Request, Response } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentRepository from '../repository/appointment.repository';

const appointmentsRouter = Router();
const appointmenRepository = new AppointmentRepository();

appointmentsRouter.post('/', (req: Request, res: Response) => {
  const { provider, date } = req.body;

  const parsedDate = startOfHour(parseISO(date));

  if (appointmenRepository.findByDate(parsedDate)) {
    return res.status(400).json({ message: 'This appointment is already booked' });
  }

  const appointment = appointmenRepository.create(provider, parsedDate);

  return res.json(appointment);
});

export default appointmentsRouter;
