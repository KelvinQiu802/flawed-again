import { useSharedData } from '../context';
import MainLayout from '../components/mainLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SwiperCore, { Navigation, Pagination } from 'swiper';
SwiperCore.use([Pagination, Navigation]);
import Image from 'next/image';
import React from 'react';
import urlMonitor from '../utils/urlMonitor';
import { Chip, Stack } from '@mui/material';

export default function Home() {
  // const state = useSharedData();
  React.useEffect(() => {
    urlMonitor();
  }, []);

  return (
    <MainLayout>
      <>
        <h1 className='index-title'>
          The <span className='title-green'>Modern</span>
        </h1>
        <h1 className='index-title'>Porject Management Tool</h1>
        <Stack sx={{ gap: 2, mt: 2 }} direction='row' justifyContent='center'>
          <Chip label='Easy to Use' variant='outlined' />
          <Chip label='Fast to Use' variant='contained' />
          <Chip label='Free to Use' variant='outlined' />
        </Stack>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          style={{ scale: '70%', marginTop: '-80px' }}
          className='mySwiper'
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide key={`slide${item}`}>
              <Image
                alt={`slide${item}`}
                src={`/slide${item}.jpg`}
                layout='fill'
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </MainLayout>
  );
}
