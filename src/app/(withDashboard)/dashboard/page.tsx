import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome {session?.user?.name}
      </h1>
      <h1 className="text-4xl text-center mt-10">
        Email: {session?.user?.email}
      </h1>
      <Image
        src={session?.user?.image || "/default-profile.png"}
        width={200}
        height={200}
        alt="${session?.user?.name}"
        className="mx-auto"
      ></Image>
    </div>
  );
};

export default DashboardPage;
