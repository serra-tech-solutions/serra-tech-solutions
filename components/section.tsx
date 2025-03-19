import clsx from 'clsx'; // Optional utility for class merging

type SectionProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={clsx(
        'px-[20px] md:px-[30px] lg:px-[60px]', // Default padding
        className // Merged with user-provided class
      )}
      {...props}
    >
      {children}
    </section>
  );
}
