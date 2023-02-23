// vendors
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// icons
import { IconSearch } from "@tabler/icons";

// styles
import * as S from "./styles";

export function SearchBar() {
  const [searchItem, setSearchItem] = useState([]);
  const [search, setSearch] = useState();
  const router = useRouter();
  const axios = require("axios").default;

  useEffect(() => {
    axios(`/api/search?q=${search}`)
      .then((response) => response.data)
      .then((produtoData) => {
        const formatedSearch = produtoData.items.map((item) => {
          return {
            value: item.description,
            id: item.id,
          };
        });
        setSearchItem(formatedSearch);
      });
  }, [axios, search]);

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
