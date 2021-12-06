import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  MenuGroup
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import defaultImage from '../../assets/profile_default.png'

export default function Dropdown() {
  const userState = useSelector((state) => state.index.user);

  return (
    <Menu>
      <MenuButton class="m-3 h-9 w-9" as={Button}>
        <img
          class="h-9 w-9 border-solid border-black rounded-full"
          src={userState.image? userState.image : defaultImage}
          alt="user_image"
        />
      </MenuButton>
      <MenuList class="bg-light m-2">
        <MenuGroup>Hola {userState.name}</MenuGroup>
        <MenuDivider/>
        <Link to={"/profile/" + userState.id}>
          <MenuItem>Mi perfil</MenuItem>
        </Link>
        <Link to="/createTalent">
          <MenuItem>Publicar</MenuItem>
        </Link>
        <Link to="/faq">
          <MenuItem>Preguntas frecuentes</MenuItem>
        </Link>
        <MenuDivider />
        <MenuItem>Cerrar sesion</MenuItem>
      </MenuList>
    </Menu>
  );
}
