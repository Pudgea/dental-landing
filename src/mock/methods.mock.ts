import { imgSrc } from "../constants/devConstants";
import type { Method } from "../models/method.model";

export default [
    {
        img:imgSrc+'methods/image.png',
        name: "Лечение под микроскопом",
        data: [
            {
                desc: 'Любое лечение в клинике проводится под микроскопом, что позволяет:',
                list: [
                    'Проводить эффективную диагностику',
                    'Вылечить кариес любой сложности',
                    'Пломбировать сложные каналы',
                    'Проводить хирургические вмешательства'
                ]
            }
        ]
    },
    {
        img:imgSrc+'methods/image2.png',
        name: "3D снимок",
        data: [
            {
                desc: '3D изображение позволяет выявить скрытые проблемы, такие как скрытый кариес, трещины корней, воспаления в костной ткани, аномалии развития зубов и челюстей, которые могут быть незаметны на обычных рентгеновских снимка'
            },
            {
                desc: 'Современные 3D-томографы обеспечивают минимальную лучевую нагрузку на пациента, что делает процедуру безопасной'
            }
        ]
    },
    {
        img:imgSrc+'methods/image3.png',
        name: '3D сканер',
        data: [
            {
                desc: '3D-сканер позволяет получить точное цифровое изображение ротовой полости пациента'
            },
            {
                desc: 'Врач детально может изучить анатомию ротовой полости пациента, спланировать лечение, в том числе протезирование, имплантацию и ортодонтическое лечение'
            }
        ]
    },
    {
        img:imgSrc+'methods/image4.png',
        name: 'Использование коффердрама',
        data: [
            {
                desc: 'Мы проводим лечение при помощи изоляционной системы коффердам, с помощью которого:',
                list:[
                    'Зуб защищен от слюны',
                    'Уменьшается возможность возникновения аллергии на препараты',
                    'Минимуму дискомфортных ощущений',
                    'Сохранение безопасности'
                ]
            }
        ]
    }
] as Method[]