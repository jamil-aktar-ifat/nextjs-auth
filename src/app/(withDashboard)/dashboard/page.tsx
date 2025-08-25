import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">No user is logged in</h1>
        <p className="text-lg mt-2">Please sign in to access dashboard.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl text-center mt-10">
        Welcome {session.user?.name}
      </h1>
      <h1 className="text-4xl text-center mt-10">
        Email: {session.user?.email}
      </h1>
      <Image
        src={session.user?.image || "/default-profile.png"}
        width={200}
        height={200}
        alt={session.user?.name || "Default profile"}
        className="mx-auto"
      />
    </div>
  );
};

export default DashboardPage;
