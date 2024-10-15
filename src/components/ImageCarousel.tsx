import React, { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
  };

  const CarouselComponent = ({ inLightbox = false }) => (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className={cn(
        'w-full max-w-5xl mx-auto',
        inLightbox ? 'h-full' : 'h-64 md:h-96'
      )}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
            <div
              className='p-1 h-full'
              onClick={() => !inLightbox && openLightbox(index % images.length)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout='fill'
                objectFit='cover'
                className='rounded-lg cursor-pointer'
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {!inLightbox && (
        <>
          <CarouselPrevious className='hidden md:flex' />
          <CarouselNext className='hidden md:flex' />
        </>
      )}
    </Carousel>
  );

  return (
    <>
      <CarouselComponent />
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className='max-w-7xl w-11/12 h-[90vh]'>
          <CarouselComponent inLightbox />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageCarousel;
