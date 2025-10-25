import { Card, CardContent } from "@/components/ui/card";
import { Newspaper, MessageCircle, Group, Heart } from "lucide-react";

const AdminPage = () => {
  return (
    <div className="mx-2 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      <Card className="w-[256px]">
        <CardContent>
          <div className="flex justify-between gap-2 font-bold">
            <span>5</span>
            <p className="flex gap-2">
              <Newspaper />
              Articles
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="w-[256px]">
        <CardContent>
          <div className="flex justify-between gap-2 font-bold">
            <span>5</span>
            <p className="flex gap-2">
              <Group />
              Categories
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="w-[256px]">
        <CardContent>
          <div className="flex justify-between gap-2 font-bold">
            <span>5</span>
            <p className="flex gap-2">
              <MessageCircle />
              Comments
            </p>
          </div>
        </CardContent>
      </Card>
      <Card className="w-[256px]">
        <CardContent>
          <div className="flex justify-between gap-2 font-bold">
            <span>5</span>
            <p className="flex gap-2">
              <Heart />
              Likes
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPage;
