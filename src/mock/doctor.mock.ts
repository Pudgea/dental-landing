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
    img: 'https://iceberg-stom.ru/_next/image?url=https%3A%2F%2Ficeberg-stom.ru%2Fupload%2Fiblock%2Fe82%2Fcslekrmocjarn7brr2kv4kwayyojax6t%2Fzhebina-bg.png&w=3840&q=75',
    name: 'Др. Мария Петрова',
    desc: 'Ведущий ортадонт, помогает пациентам с прикусом.',
    speciality: 'Ортадонт',
    experience: 10,
    rating: 4.6
  },
  {
    img: 'https://luberdent.ru/upload/iblock/634/e2w19abmjluejp0imby0x3puw59iptnm.jpg',
    name: 'Др. Сергей Сидоров',
    desc: 'Хирург высшей категории, выполняет сложные операции.',
    speciality: 'Хирург',
    experience: 20,
    rating: 4.9
  }
];
