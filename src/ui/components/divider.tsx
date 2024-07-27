interface DividerProps {
  color: string;
  w: string;
  margin: string;
}

export const Divider = ({
  color = "bg-zinc-800",
  w = "w-6",
  margin,
}: DividerProps) => {
  return <div className={`h-px ${w} ${color} ${margin}`} />;
};
