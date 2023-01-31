import type { IBaseExample } from '../constants';

interface IExampleWrapper extends IBaseExample {
  children: React.ReactNode;
}

const ExampleWrapper = ({ id, title, children }: IExampleWrapper) => (
  <article id={id}>
    <h2 className='text-2xl font-bold'>{title}</h2>
    {children}
  </article>
);

export default ExampleWrapper;
