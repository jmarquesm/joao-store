import { Autocomplete, createStyles } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function SearchBar() {
  const [searchItem, setSearchItem] = useState([]);
  const [search, setSearch] = useState();
  const router = useRouter();

  const useStyles = createStyles((theme) => ({
    search: {
      [theme.fn.smallerThan("xs")]: {
        display: "none",
      },
    },
  }));

  const { classes } = useStyles();

  useEffect(() => {
    fetch(`/api/search?q=${search}`)
      .then((response) => response.json())
      .then((produtoData) => {
        const formatedSearch = produtoData.items.map((item) => {
          return {
            value: item.description,
            id: item.id,
          };
        });
        setSearchItem(formatedSearch);
      });
  }, [search]);

  return (
    <Autocomplete
      className={classes.search}
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
