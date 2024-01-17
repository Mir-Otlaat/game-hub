import { Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const Searchinput = ({ onSearch }: Props) => {
  const refSearch = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (refSearch.current) onSearch(refSearch.current.value);
      }}
    >
      <Input ref={refSearch} placeholder="Search .." />
    </form>
  );
};

export default Searchinput;
