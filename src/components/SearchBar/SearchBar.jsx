// vendors
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

// icons
import { IconSearch } from "@tabler/icons";

// styles
import * as S from "./styles";

const api = axios.create({
  baseURL: "/api",
});

export function SearchBar() {
  const [searchItem, setSearchItem] = useState([]);
  const [search, setSearch] = useState();
  const router = useRouter();

  useEffect(() => {
    async function fetchAndLoadSearch() {
      const response = await api.get(`/search?q=${search}`);
      const formatedSearch = response.data.items.map((item) => {
        return {
          value: item.description,
          id: item.id,
        };
      });
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
      onChange={setSearch}
    />
  );
}
