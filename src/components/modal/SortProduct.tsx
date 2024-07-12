import assets from "@/assets";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type TProps = {
  setQuery: React.Dispatch<
    React.SetStateAction<{
      searchTerm: string;
      sort: string;
    }>
  >;
  query: {
    searchTerm: string;
    sort: string;
  };
};

const SortProduct = ({ setQuery, query }: TProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-base gap-3" variant="outline">
          <span>Sort Products</span>
          <img className="size-6" src={assets.downChevron} alt="" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Price</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={query.sort}
          onValueChange={(e) => setQuery({ ...query, sort: e })}
        >
          <DropdownMenuRadioItem value="+price">
            Low to High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="-price">
            High to Low
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortProduct;
