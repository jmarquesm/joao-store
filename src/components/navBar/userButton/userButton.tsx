// vendors
import { ComponentType } from "react"
import { Group, Avatar, Text } from "@mantine/core";

// icons
import { IconChevronRight } from "@tabler/icons";

// styles
import * as S from "./styles";

interface Props{
  image: string,
  name: string,
  email: string,
  icon: string | ComponentType,
  others?: any
}

export function UserButton({ image, name, email, icon, ...others }:Props) {

  return (
    <S.ButtonUser {...others}>
      <Group>
        <>        
          <Avatar src={image} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {name}
            </Text>

            <Text color="dimmed" size="xs">
              {email}
            </Text>
          </div>

          {icon || <IconChevronRight size={14} stroke={1.5} />}
        </>
        
      </Group>
    </S.ButtonUser>
  );
}
