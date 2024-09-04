import { db } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { BookText } from "lucide-react";

const RecentDocument = async () => {
  const { userId } = auth();

  // Redirect to home page if no user is authenticated
  if (!userId) {
    redirect("/");
  }

  // Fetch the user's documents
  const userDocuments = await db.document.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createAt: "asc", // Ensure you are using the correct field name
    },
  });

  return (
    <div className="w-11/12 mx-auto my-6">
      <h1 className="font-bold text-xl mb-6 text-gray-800">
        Recent Documents
      </h1>
      <div className="flex gap-6 flex-wrap justify-center">
        {userDocuments.length > 0 ? (
          userDocuments.map((document) => (
            <div key={document.id} className="w-[180px]">
              <Link href={`/document/${document.id}`}>
                <Card className="w-[180px] bg-white shadow-md rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <CardHeader></CardHeader>
                  <CardContent className="flex justify-center mx-auto">
                    {/* Icon is blue by default, changes to yellow on hover */}
                    <BookText size={60} className="text-blue-500 transition-colors duration-300 hover:text-yellow-400" />
                  </CardContent>
                  <CardFooter></CardFooter>
                </Card>
              </Link>
              <p className="text-sm mt-2 text-gray-800 text-center font-semibold">
                {document.title || "Untitled Document"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-600">
            Once you start writing, your recent documents will appear here...
          </p>
        )}
      </div>
    </div>
  );
};

export default RecentDocument;
