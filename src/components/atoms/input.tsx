import { Input } from '@/components/ui/input';

type InputProps = {
  type: string;
  placeholder: string;
  width?: string;
  height?: string;
  multiple?: boolean;
  onValueChange: (value: string) => void;
};

export function InputField({
  type,
  placeholder,
  width,
  height,
  multiple = false,
  onValueChange,
}: InputProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onValueChange(value);
  };
  return (
    <Input
      className={`outline-none focus-visible:outline-none focus:ring-0 ${width} ${height}`}
      type={type}
      placeholder={placeholder}
      multiple={multiple}
      onChange={handleInputChange}
    />
  );
}
