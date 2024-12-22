"use client";
import { useState } from "react";
import BugButton from "@/components/Elements/BugButton";
import BugPagination from "@/components/Elements/BugPagination";
import BugTable from "@/components/Elements/BugTable";
interface IuserProps {
  id: number;
  name: string;
  role: string;
  team: string;
  status: string;
  age: string;
  avatar: string;
  email: string;
}
const users: IuserProps[] = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    id: 6,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 7,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 8,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 9,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 10,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
  {
    id: 11,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 12,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 13,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 14,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 15,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];
const columns = [
  {
    name: "NAME",
    uid: "name",
    render: (user: IuserProps) => (
      <div>
        <p>{user.email}</p>
        <p>{user.name}</p>
      </div>
    ),
  },
  {
    name: "ROLE",
    uid: "role",
    render: (user: IuserProps) => (
      <div className="flex flex-col">
        <p className="text-bold text-sm capitalize">{user.role}</p>
        <p className="text-bold text-sm capitalize text-default-400">
          {user.team}
        </p>
      </div>
    ),
  },
  {
    name: "STATUS",
    uid: "status",
    render: (user: IuserProps) => (
      <BugButton className="capitalize" size="sm" variant="flat">
        {user.status}
      </BugButton>
    ),
  },
  {
    name: "ACTIONS",
    uid: "actions",
    render: () => (
      <div className="relative flex items-center gap-2">
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          view
        </span>

        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          edit
        </span>

        <span className="text-lg text-danger cursor-pointer active:opacity-50">
          delete
        </span>
      </div>
    ),
  },
];

function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className=" p-10 gap-5 flex flex-col justify-center place-items-center">
      <BugButton size="md" color="danger" className=" bg-[#000]">
        10 rupa ta kurtura!!!!
      </BugButton>
      <BugPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        total={10}
        pageSize={2}
      />
      <BugTable isPagination columns={columns} data={users} />
    </div>
  );
}

export default Page;
