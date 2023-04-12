import { IconType } from "react-icons";
export interface IServices {
  title: string;
  about: string;
  Icon: IconType;
}

export interface Iskill {
  name: string;
  level: string;
  Icon: IconType;
}

export interface Iproject {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  categury: string;
  key_techs: string;
}
