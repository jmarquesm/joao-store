// vendors
import { Loader, SimpleGrid } from "@mantine/core";
import Link from "next/link";

// typings
import { Departaments } from "../../../../typings/departaments";

// styles
import * as S from "./styles";

interface DepartamentsProps {
  loading: boolean;
  departaments: {
    items: Departaments[];
  };
}

export function DepartamentsProduct({ loading, departaments }: DepartamentsProps) {
  return (
    <>
      {loading ? (
        <S.DepartamentLoaderBox>
          <Loader color="blue.8" />
        </S.DepartamentLoaderBox>
      ) : (
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 980, cols: 3, spacing: "md" },
            { maxWidth: 755, cols: 2, spacing: "sm" },
            { maxWidth: 400, cols: 1, spacing: "xs" },
          ]}
        >
          {departaments.items.map((item) => (
            <Link key={item.name} href={`/${item.departament}/${item.slug}`}>
              <S.DepartamentGridCol>
                <div> {item.name}</div>
                <div>
                  <S.Images src={item.image} alt={item.name} />
                </div>
              </S.DepartamentGridCol>
            </Link>
          ))}
        </SimpleGrid>
      )}
    </>
  );
}
