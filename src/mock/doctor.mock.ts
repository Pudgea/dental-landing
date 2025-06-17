import type { Doctor } from "../models/doctor.model";

export const mockCommandItems: Doctor[] = [
  {
    img: 'https://www.future-doctor.de/wp-content/uploads/2024/08/shutterstock_2480850611.jpg',
    name: 'Др. Иван Иванов',
    desc: 'Опытный кардиолог, специализирующийся на лечении заболеваний сердца.',
    speciality: 'Кардиолог',
    experience: 15,
    rating: 4.8
  },
  {
    img: 'https://www.future-doctor.de/wp-content/uploads/2024/08/shutterstock_2480850611.jpg',
    name: 'Др. Мария Петрова',
    desc: 'Ведущий дерматолог, помогает пациентам с кожными заболеваниями.',
    speciality: 'Дерматолог',
    experience: 10,
    rating: 4.6
  },
  {
    img: 'https://www.future-doctor.de/wp-content/uploads/2024/08/shutterstock_2480850611.jpg',
    name: 'Др. Сергей Сидоров',
    desc: 'Хирург высшей категории, выполняет сложные операции.',
    speciality: 'Хирург',
    experience: 20,
    rating: 4.9
  }
];
