import { cn } from "../../utils/helper";

interface Props {
  title: string;
  choosing: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Tab = (props: Props) => {
  const { title, choosing, setSelected } = props;
  const handleClick = () => {
    setSelected(title);
  };
  return (
    <div
      className={cn(
        "text-secondary-900 text-lg font-base cursor-pointer py-4 hover:font-bold",
        choosing
          ? "font-bold border-b-4 border-secondary-900 mt-1"
          : "hover:text-secondary-1000"
      )}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default Tab;
