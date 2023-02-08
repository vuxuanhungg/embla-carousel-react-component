import Carousel from 'embla-carousel-react-component';
import Code from '../components/Code';

const MyPrevButton = () => (
  <Carousel.PrevButton
    className='absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 px-4 py-2 shadow'
    disabledClassName='cursor-default opacity-50'
  >
    <svg className='h-1/2 w-1/2' viewBox='137.718 -1.001 366.563 644'>
      <path d='M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z' />
    </svg>
  </Carousel.PrevButton>
);

const MyNextButton = () => (
  <Carousel.NextButton
    className='absolute top-1/2 right-0 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 px-4 py-2 shadow'
    disabledClassName='cursor-default opacity-50'
  >
    <svg className='embla__button__svg' viewBox='0 0 238.003 238.003'>
      <path d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z' />
    </svg>
  </Carousel.NextButton>
);

const MyIndicators = () => (
  <div className='absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-2'>
    <Carousel.Indicators
      className='h-2 w-5 rounded'
      selectedClassName='bg-slate-900'
      nonSelectedClassName='bg-slate-400'
    />
  </div>
);

const ArrowsAndDots = () => {
  const codeBlock = `
    const MyPrevButton = () => (
      <Carousel.PrevButton
        className='absolute top-1/2 left-0 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 px-4 py-2 shadow'
        disabledClassName='cursor-default opacity-50'
      >
        <svg className='h-1/2 w-1/2' viewBox='137.718 -1.001 366.563 644'>
          <path d='M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z' />
        </svg>
      </Carousel.PrevButton>
    );
    
    const MyNextButton = () => (
      <Carousel.NextButton
        className='absolute top-1/2 right-0 z-10 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-slate-200 px-4 py-2 shadow'
        disabledClassName='cursor-default opacity-50'
      >
        <svg className='embla__button__svg' viewBox='0 0 238.003 238.003'>
          <path d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z' />
        </svg>
      </Carousel.NextButton>
    );
    
    const MyIndicators = () => (
      <div className='absolute bottom-4 left-0 right-0 z-10 flex items-center justify-center gap-2'>
        <Carousel.Indicators
          className='h-2 w-5 rounded'
          selectedClassName='bg-slate-900'
          nonSelectedClassName='bg-slate-400'
        />
      </div>
    );
    
    const MyCarousel = () => (
      <div>
        <Carousel
          PrevButton={MyPrevButton}
          NextButton={MyNextButton}
          Indicators={MyIndicators}
          className='relative mt-4'
        >
          {[...Array(5).keys()].map((n) => (
            <Carousel.Slide key={n}>
              <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
                Slide {n + 1}
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    )
  `;

  return (
    <>
      <Carousel
        PrevButton={MyPrevButton}
        NextButton={MyNextButton}
        Indicators={MyIndicators}
        className='relative mt-4'
      >
        {[...Array(5).keys()].map((n) => (
          <Carousel.Slide key={n}>
            <div className='h-40 w-full rounded-md bg-slate-300 p-4'>
              Slide {n + 1}
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Code block={codeBlock} lang='tsx' />
    </>
  );
};

export default ArrowsAndDots;
