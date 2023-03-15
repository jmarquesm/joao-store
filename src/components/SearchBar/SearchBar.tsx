// vendors
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// icons
import { IconSearch } from "@tabler/icons";

// typings
import { Product } from "../../typings/products";

// styles
import * as S from "./styles";

const api = axios.create({
  baseURL: "/api",
});

interface SearchItem {
  id: number;
  value: string;
}

export function SearchBar() {
  const [searchItem, setSearchItem] = useState<SearchItem[]>([]);
  const [search, setSearch] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    async function fetchAndLoadSearch() {
      const response = await api.get<{ items: Product[] }>(`/search?q=${search}`);

      const formatedSearch: SearchItem[] = response.data.items.map((item) => ({
        value: item.description,
        id: item.id,
      }));

      setSearchItem(formatedSearch);
    }

    fetchAndLoadSearch();
  }, [search]);

  return (
    <S.AutoComplete
      placeholder="Search"
      icon={<IconSearch size={16} stroke={1.5} />}
      data={searchItem}
      onItemSubmit={(items) => {
        router.push(`/produtos/${items.id}`);
      }}
      onChange={() => setSearch}
    />
  );
}
