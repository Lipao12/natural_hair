interface InputInfoProps {
  label: string;
  content: any;
  disable?: boolean;
  onChange?: (value: string) => void;
}

const formatPhoneNumber = (value: string) => {
  const match = value.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2] || ""} ${match[3]}-${match[4]}`;
  }

  return value;
};

export const InputInfo = ({
  label,
  content,
  disable = true,
  onChange,
}: InputInfoProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    if (onChange) {
      onChange(formattedValue);
    }
  };

  return (
    <div className="bg-zinc-800 rounded-xl px-4 py-2 space-y-1 mx-4">
      <p className="text-zinc-500 text-[14px]">{label}</p>
      <input
        placeholder="Preencha..."
        className={`ml-2 mr-2 text-zinc-400 text-[20px] w-full bg-transparent  ${
          !disable && "border-b-2 border-zinc-600"
        }`}
        value={content}
        disabled={disable}
        onChange={handleChange}
      />
    </div>
  );
};
