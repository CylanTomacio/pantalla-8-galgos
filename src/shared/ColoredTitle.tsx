type Props = {
  title: string;
  color: string;
  className?: string;
  roundShapeClassName?: string;
};

export const ColoredTitle = ({
  title,
  className,
  roundShapeClassName,
  color,
}: Props) => {
  return (
    <header
      style={{ backgroundColor: color }}
      className={`absolute drop-shadow-sm drop-shadow-gray-950/50 skew-x-[40deg] left-8 pe-4 ${className}`}
    >
      <div
        style={{ backgroundColor: color }}
        className={`absolute h-full w-12 -skew-x-[40deg] top-0 -left-6 rounded-l-full flex flex-col overflow-hidden ${roundShapeClassName}`}
      ></div>
      <h4 className="uppercase -skew-x-[40deg]">{title}</h4>
    </header>
  );
};
