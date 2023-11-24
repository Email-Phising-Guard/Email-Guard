import { TeamMember } from "@/db/team";
import Image from "next/image";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="mx-auto flex max-w-sm items-center justify-between p-5">
      <Image src={member.avatar} alt={member.name} />
      <div className="flex flex-col gap-2 text-right">
        <h3>{member.name}</h3>
        <p className="w-[182px]">Full-Stack Web Developer at BCIT</p>
      </div>
    </div>
  );
}
