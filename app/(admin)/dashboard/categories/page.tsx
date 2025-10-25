import { CategoryTable } from "@/components/admin/CategoryTable";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const CategoriesPage = () => {
  return (
    <div className="p-4">
      <div className="flex w-full items-center justify-between">
        <Link href="/dashboard">
          {" "}
          <span
            className={`${buttonVariants({ variant: "outline" })} flex cursor-pointer items-center gap-2 border-none`}
          >
            <ChevronLeft />
            Back
          </span>
        </Link>

        <Link href="/dashboard/categories/new">
          {" "}
          <span
            className={`${buttonVariants({ variant: "outline" })} flex cursor-pointer items-center gap-2`}
          >
            <Plus />
            Add Category
          </span>
        </Link>
      </div>
      <div className="py-8">
        <Card>
          <CardContent>
          <CategoryTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CategoriesPage;
