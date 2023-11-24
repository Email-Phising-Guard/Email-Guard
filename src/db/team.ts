import { StaticImageData } from "next/image";
import alice from "../../public/team/alice.png";
import jerry from "../../public/team/jerry.png";
import michael from "../../public/team/michael.png";
import scott from "../../public/team/scott.png";

export const team: TeamMember[] = [
  {
    name: "Alice Lin",
    avatar: alice,
  },
  {
    name: "Jerry Fan",
    avatar: jerry,
  },
  {
    name: "Michael Lei",
    avatar: michael,
  },
  {
    name: "Scott Chen",
    avatar: scott,
  },
];

export type TeamMember = {
  name: string;
  avatar: StaticImageData;
};
