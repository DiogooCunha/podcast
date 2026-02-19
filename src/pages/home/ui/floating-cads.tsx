type FloatingCardProps = {
  className?: string;
  title?: string;
  desc?: string;
  children?: React.ReactNode;
};

const FloatingCard = ({
  className,
  title,
  desc,
  children,
}: FloatingCardProps) => {
  return (
    <div
      className={`
        absolute rounded-xl p-4 w-64
        bg-white/10 backdrop-blur-xl
        border border-white/20
        text-white
        shadow-[0_0_40px_rgba(240,177,0,0.12)]
        transition-shadow duration-700
        transform-gpu
        animate-[float_6s_ease-in-out_infinite]
        ${className}
      `}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{desc}</p>
      {children}
    </div>
  );
};

export default FloatingCard;
