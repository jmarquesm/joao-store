// vendors
import { SimpleGrid } from "@mantine/core";

// typings
import { Departament } from "../../../../typings/departament";

// styles
import * as S from "./styles";

interface DepartamentsProductProps {
  departaments: Departament[];
}

export function DepartamentsProduct({ departaments }: DepartamentsProductProps) {
  return (
    <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 3, spacing: "md" },
        { maxWidth: 755, cols: 2, spacing: "sm" },
        { maxWidth: 400, cols: 1, spacing: "xs" },
      ]}
    >
      {departaments.map((item) => (
        <S.Link key={item.name} href={`/${item.departament}/${item.slug}`}>
          <S.DepartamentGridCol>
            <div> {item.name}</div>
            <div>
              <S.Images src={item.image} alt={item.name} />
            </div>
          </S.DepartamentGridCol>
        </S.Link>
      ))}
    </SimpleGrid>
  );
}
